import { Injectable } from '@angular/core';

import { AircraftService } from "./aircraft.service";
import { DatabaseService } from "./database.service";

import { Aircraft, MaintenanceItem } from "./aircraft";

@Injectable()
export class FleetService {
    private aircraft: Aircraft[];
    private reverse: boolean = false;
    private dateList: any[];
    private hourList: any[];
    private typeList: any[];
    private estimatedDateList: any[];
    private acStatus: any = {};

  constructor(private aircraftService: AircraftService,
        private databaseService: DatabaseService) { 

        this.databaseService.setDb("aircraft-database");
        this.databaseService.createView("aircraft", "aircraft");

        this.aircraft =  this.databaseService.query("aircraft");
        this.hourList = this.sortByHours(this.aircraft);
    }

    public makeNewAircraft(aircraft: Aircraft) {
            let documentId = this.databaseService.createDocument({
                            "mcType": "aircraft",
                            "rego": aircraft.rego,
                            "ttis": aircraft.ttis,
                            "type": aircraft.type,
                            "hrsAtMaint": aircraft.hrsAtMaint,
                            "engineHrsAtMaint": aircraft.engineHrsAtMaint,
                            "propHrsAtMaint": aircraft.propHrsAtMaint,
                            "clockTime": aircraft.clockTime,
                            "clockOffset": aircraft.clockOffset,
                            "maintenance": aircraft.maintenance
                            }, "aircraft");
    }

    public getAircraftStatusItems(ac: Aircraft) {
        ac.ttis = this.aircraftService.getTtis(ac);
        let summary = '';
        if (this.getDaysLeft(ac) < 30) {
                summary += "annual\n";
        }
        if (this.aircraftService.getHrsLeft(ac) < 10) {
                summary += "100hrly\n";
        }
        for (let i = 0; i < ac.maintenance.length; i++) {
                let item: MaintenanceItem = ac.maintenance[i];
                if (item.maintenance !== "") {
                        let hleft = undefined;
                        let dleft = undefined;
                        if (item.type == 'hours') {
                                hleft = item.dueHrs - ac.ttis;
                                if (hleft < 10) {
                                        summary += item.maintenance + "\n";
                                }
                        } else {
                                dleft = this.aircraftService.getMaintDaysLeft(item.dueDateTuple)
                                if (dleft < 10) {
                                        summary += item.maintenance + "\n";
                                }
                        }
                }
        }
        for (let i = 0; i < ac.propHrsAtMaint.length; i++) {
                let hleft = Math.round((ac.engineHrsAtMaint[i] - ac.ttis) * 10) / 10;
                if (hleft < 100) {
                        summary += "Eng O/H\n";
                }
                let h2left = Math.round((ac.propHrsAtMaint[i] - ac.ttis) * 10) / 10;
                if (h2left < 50) {
                        summary += "Prop O/H\n";
                }
        }
        this.acStatus[ac.rego] = false;
        if (summary !== '') {
                this.acStatus[ac.rego] = true;
        }
        return summary;
    }

    public getStatus(rego: string) : boolean {
            return this.acStatus[rego];
    };

    getFleet(): Aircraft[] {
            this.aircraft =  this.databaseService.query("aircraft");
            this.hourList = this.sortByHours(this.aircraft);
            return this.aircraft;
    }

    getAircraft(id: string): Aircraft {
        return this.aircraft.filter( aircraft => aircraft._id === id)[0];
    }

    public deleteAircraft(id: string) {
            this.databaseService.deleteDocument(id);
            this.getFleet();
    }

    public getDaysLeft(ac: Aircraft): number {
        return this.aircraftService.getDaysLeft(ac);
    }

    public regoExists(rego: string): boolean {
        let r = this.aircraft.filter(aircraft => aircraft.rego === rego)[0];
        return (r !== undefined);
    }

    private compareByDate(a: any, b: any) {
            let aLeft:number = a.daysLeft;
            let bLeft:number = b.daysLeft

            if (aLeft === undefined) {
                aLeft = 10000;
            }
            if (bLeft === undefined) {
                bLeft = 10000;
            }

            if (aLeft < bLeft) {
                    return -1;
            }
            if (aLeft > bLeft) {
                    return 1;
            }
            if (a.type === 'hours') {
                return this.compareByHours(a, b);
            }
            return 0;
    }

    private compareByEstimatedDate(a: any, b: any) {
            let aLeft:number = a.daysLeft;
            let bLeft:number = b.daysLeft;

            if ((a.hoursLeft !== undefined) && (a.daysLeft !== undefined)) {
                    if ((a.hoursLeft / 2) < aLeft)  {
                            aLeft = a.hoursLeft / 2;
                    }
            }
            if ((b.hoursLeft !== undefined) && (b.daysLeft !== undefined)) {
                    if ((b.hoursLeft / 2) < bLeft)  {
                            bLeft = b.hoursLeft / 2;
                    }
            }
                

            if (aLeft === undefined) {
                aLeft = 10000;
            }
            if (bLeft === undefined) {
                bLeft = 10000;
            }

            if (a.type === 'hours') {
                    aLeft = a.hoursLeft / 2;
            }
            if (b.type === 'hours') {
                    bLeft = b.hoursLeft / 2;
            }

            if (aLeft < bLeft) {
                    return -1;
            }
            if (aLeft > bLeft) {
                    return 1;
            }
            return 0;
    }

    private compareByHours(a: any, b: any) {
            let aLeft:number = a.hoursLeft;
            let bLeft:number = b.hoursLeft

            if (aLeft === undefined) {
                aLeft = 10000;
            }
            if (bLeft === undefined) {
                bLeft = 10000;
            }

            if (aLeft < bLeft) {
                    return -1;
            }
            if (aLeft > bLeft) {
                    return 1;
            }
            if (a.type === 'date') {
                return this.compareByDate(a, b);
            }
            return 0;
    }

    private compareByType(a: any, b: any) {
            let aLeft:string = a.type;
            let bLeft:string = b.type

            if (aLeft < bLeft) {
                    return -1;
            }
            if (aLeft > bLeft) {
                    return 1;
            }
            if (a.rego < b.rego) {
                    return -1;
            }
            if (a.rego > b.rego) {
                    return 1;
            }
            return 0;
    }

    public getDate() {
        return this.dateList;
    }

    public getEstimatedDate() {
        return this.estimatedDateList;
    }

    public getHours() {
        return this.hourList;
    }

    public getType() {
        return this.typeList;
    }


    public reverseSort() {
        this.reverse = ! this.reverse;
    }

    public sortByHours(aircraft: Aircraft[]) {
        this.hourList = []; 
        this.dateList = []; 
        for (let i = 0; i < aircraft.length; i++) {
                let ac = aircraft[i];
                this.hourList.push(
                        {
                                '_id': ac._id,
                                'rego': ac.rego,
                                'item': '100 hourly',
                                'hoursLeft': this.aircraftService.getHrsLeft(ac),
                                'daysLeft': this.aircraftService.getDaysLeft(ac)
                        }
                );
                for (let j = 0; j < ac.maintenance.length; j++) {
                        let item: MaintenanceItem = ac.maintenance[j];
                        if (item.maintenance !== "") {
                                let hleft = undefined;
                                let dleft = undefined;
                                if (item.type == 'hours') {
                                        hleft = item.dueHrs - ac.ttis;
                                } else {
                                        dleft = this.aircraftService.getMaintDaysLeft(item.dueDateTuple)
                                }
                                this.hourList.push(
                                        {
                                        '_id': ac._id,
                                        'rego': ac.rego,
                                        'type': item.type,
                                        'item': item.maintenance,
                                        'hoursLeft': hleft,
                                        'daysLeft': dleft
                                        }
                                );
                        }
                }
                for (let j = 0; j < ac.propHrsAtMaint.length; j++) {
                        let hleft = Math.round((ac.engineHrsAtMaint[j] - ac.ttis) * 10) / 10;
                        this.hourList.push(
                                        {
                                        '_id': ac._id,
                                        'rego': ac.rego,
                                        'type': 'hours',
                                        'item': 'engine o/h',
                                        'hoursLeft': hleft,
                                        'daysLeft': undefined
                                        }
                                );
                        hleft = Math.round((ac.propHrsAtMaint[j] - ac.ttis) * 10) / 10;
                        this.hourList.push(
                                        {
                                        '_id': ac._id,
                                        'rego': ac.rego,
                                        'type': 'hours',
                                        'item': 'prop o/h',
                                        'hoursLeft': hleft,
                                        'daysLeft': undefined
                                        }
                                );
                }
        }
        this.hourList = this.hourList.sort((a, b) => this.compareByHours(a, b));

        this.dateList = Object.assign([], this.hourList);
        this.dateList = this.dateList.sort((a, b) => this.compareByDate(a, b));

        this.estimatedDateList = Object.assign([], this.hourList);
        this.estimatedDateList = this.estimatedDateList.sort((a, b) => this.compareByEstimatedDate(a, b));

        this.typeList = Object.assign([], this.hourList);
        this.typeList = this.typeList.sort((a, b) => this.compareByType(a, b));

        if (this.reverse) {
                this.hourList = this.hourList.reverse();
        }
        return this.hourList;
    }    

    public updateAircraft(ac: Aircraft) {
            this.databaseService.updateDocument(ac);
            this.getFleet();
    }

}
