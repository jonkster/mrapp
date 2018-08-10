import { Injectable } from '@angular/core';
import {Couchbase} from 'nativescript-couchbase';
import { AircraftService } from "../aircraft-details/aircraft.service";

import { Aircraft, MaintenanceItem } from "./aircraft";

@Injectable()
export class FleetService {
    public database: any;
    private aircraft: Aircraft[];
    private reverse: boolean = false;
    private dateList: any[];
    private hourList: any[];
    private typeList: any[];
    private estimatedDateList: any[];

  constructor(private aircraftService: AircraftService) { 
        this.database = new Couchbase("aircraft-database");
        let push = this.database.createPushReplication("http://mcap.australiaeast.cloudapp.azure.com:4984/mcdata");

        let pull = this.database.createPullReplication("http://mcap.australiaeast.cloudapp.azure.com:4984/mcdata");

        push.setContinuous(true);
        pull.setContinuous(true);
        push.start();
        pull.start();

        this.database.createView("aircraft", "1", function(document, emitter) {
            if(document.rego) {
                emitter.emit(document._id, document);
            }
        });
    }

    public makeNewAircraft(aircraft: Aircraft) {
            let documentId = this.database.createDocument({
                            "rego": aircraft.rego,
                            "ttis": aircraft.ttis,
                            "type": aircraft.type,
                            "hrsAtMaint": aircraft.hrsAtMaint,
                            "engineHrsAtMaint": aircraft.engineHrsAtMaint,
                            "propHrsAtMaint": aircraft.propHrsAtMaint,
                            "clockTime": aircraft.clockTime,
                            "clockOffset": aircraft.clockOffset,
                            "maintenance": aircraft.maintenance
                            });
    }

    getFleet(): Aircraft[] {
        this.query();
        return this.aircraft;
    }

    getAircraft(id: string): Aircraft {
        return this.aircraft.filter( aircraft => aircraft._id === id)[0];
    }

    public deleteAircraft(id: string) {
            this.database.deleteDocument(id);
            this.aircraft =  this.database.executeQuery("aircraft");
    }

    public getDaysLeft(ac: Aircraft): number {
        return this.aircraftService.getDaysLeft(ac);
    }

    public query() {
            this.aircraft =  this.database.executeQuery("aircraft");
            this.hourList = this.sortByHours(this.aircraft);
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
            let bLeft:number = b.daysLeft

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
            this.database.updateDocument(ac._id, ac);
            this.aircraft =  this.database.executeQuery("aircraft");
    }

}
