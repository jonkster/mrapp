import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DatePicker } from "ui/date-picker";
import { TextField } from "ui/text-field";
import { EventData } from "data/observable";
import { Aircraft, MaintenanceItem } from "../common/aircraft";
import { FleetService } from "../common/fleet.service";
import { AircraftService } from "../common/aircraft.service";
import { PermissionsService } from "../permissions.service";

import * as dialogs from "ui/dialogs";

@Component({
  moduleId: module.id,
  selector: 'app-aircraft-details',
  templateUrl: './aircraft-details.component.html',
  styleUrls: ['./aircraft-details.component.scss']
})
export class AircraftDetailsComponent implements OnInit {
        private aircraft: Aircraft;
        private hoursLeft: number = 0;
        private daysLeft: number = 0;
        private engineLeft: string[] = ['0', '0'];
        private propLeft: string[] = ['0', '0'];
        private hrsAlert: number = 0;
        private daysAlert: number = 0;

	private engAlert: number[] = [0, 0];
        private propAlert: number[] = [0, 0];

        constructor(private route: ActivatedRoute,
                        private routerExtensions: RouterExtensions,
                        private aircraftService: AircraftService,
                        private permissionsService: PermissionsService,
                        private fleetService: FleetService) {
        }

        ngOnInit() {
                const id = this.route.snapshot.params["id"];
                this.aircraft = this.fleetService.getAircraft(id);
                this.updateValues();
        }

        can(action: string) : boolean {
                return this.permissionsService.can(action);
        }

	getEngine(num: number) : string {
		let v:string = this.aircraft.engineHrsAtMaint[num].toString();
		if (v === '987654321') {
			v = 'OC';
		}
		return v;
	}

	getProp(num: number) : string {
		let v:string = this.aircraft.propHrsAtMaint[num].toString();
		if (v === '987654321') {
			v = 'OC';
		}
		return v;
	}

	setAlertStates() {
	        this.hrsAlert = 0;
		if (this.hoursLeft < 10) {
			this.hrsAlert = 2;
		} else if (this.hoursLeft < 20) {
			this.hrsAlert = 1;
		}
	        this.daysAlert = 0;
		if (this.daysLeft < 7) {
			this.daysAlert = 2;
		} else if (this.daysLeft < 14) {
			this.daysAlert = 1;
		}

		for (let i = 0; i < this.propLeft.length; i++) {
			this.engAlert[i] = 0;
			if (Number(this.engineLeft[i]) < 25) {
				this.engAlert[i] = 2;
			} else if (Number(this.engineLeft[i]) < 100) {
				this.engAlert[i] = 1;
			}
			this.propAlert[i] = 0;
			if (Number(this.propLeft[i]) < 25) {
				this.propAlert[i] = 2;
			} else if (Number(this.propLeft[i]) < 100) {
				this.propAlert[i] = 1;
			}
		}
	}

        updateValues() {
                this.hoursLeft = this.aircraftService.getHrsLeft(this.aircraft);
                this.daysLeft = this.aircraftService.getDaysLeft(this.aircraft);
                for (let i = 0; i < this.aircraft.engineHrsAtMaint.length; i++) {
                        this.engineLeft[i] = this.aircraftService.getEngineLeft(this.aircraft, i+1).toString();
                        this.propLeft[i] = this.aircraftService.getPropLeft(this.aircraft, i+1).toString();
			if (this.aircraft.engineHrsAtMaint[i] === 987654321) {
				this.engineLeft[i] = 'OC';
			}
			if (this.aircraft.propHrsAtMaint[i] === 987654321) {
				this.propLeft[i] = 'OC';
			}
                }
		this.setAlertStates();
        }

        adjustClockTime(args) {
                let textField = <TextField>args.object;
                this.aircraft.clockTime = parseInt(textField.text);
        }

        adjustOffsetTime(args) {
                let textField = <TextField>args.object;
                this.aircraft.clockOffset = parseInt(textField.text);
        }

        doubleConfirmDelete(ac: Aircraft) {
                dialogs.confirm({
                        title: "Delete Aircraft",
                        message: "If you enter Delete, " + ac.rego + " WILL BE DELETED!",
                        okButtonText: "Keep " + ac.rego,
                        cancelButtonText: "Delete",
                        }).then((result: boolean) => {
                                if (! result) {
                                        this.fleetService.deleteAircraft(ac._id);
                                        this.routerExtensions.navigate(["/fleet"], { clearHistory: true });
                                }
                        });
}

        deleteAircraft(ac: Aircraft) {
                dialogs.confirm({
                        title: "Delete Aircraft",
                        message: "Are you sure you want to delete " + ac.rego + "?",
                        okButtonText: "Delete",
                        cancelButtonText: "Keep " + ac.rego,
                }).then((result: boolean) => {
                                if (result) {
                                        this.doubleConfirmDelete(ac);
                                }
                        });
        }

        clearMaintenanceItem(num: number) {
                let item = this.aircraft.maintenance[num];
                item.cleared = ! item.cleared
        }

        deleteMaintenanceItem(num: number) {
                let item = this.aircraft.maintenance[num];
                dialogs.confirm({
                        title: "Delete Maintenance Item",
                        message: "Are you sure you want to delete #" + (num+1) + " " + item.maintenance + "?",
                        okButtonText: "Delete",
                        cancelButtonText: "Keep" + item.maintenance,
                }).then((result: boolean) => {
                                if (result) {
                                        this.aircraft.maintenance.splice(num, 1);
                                }
                        });
        }

        public getDateStringFromTuple(dt: number[]): string {
                let st = "";
                if (dt !== undefined) {
                        if (dt[0] !== undefined) {
                                st = String(dt[0]);
                        }
                        if (dt[1] !== undefined) {
                                st += '/' + String(dt[1]);
                        }
                        if (dt[2] !== undefined) {
                                st += '/' + String(dt[2]);
                        }
                }
                return st;
        }

        public getDaysLeft(date: number[]): number {
                let exDate = new Date(date[0], date[1]-1, date[2]);
                let time = exDate.valueOf() - Date.now().valueOf();
                return Math.round(time / (24*60*60*1000));
        }

        public getHoursLeft(hrs: number): number {
                return Math.round((hrs - this.aircraft.ttis)*10)/10;
        }

        save(ac: Aircraft) {
                this.fleetService.updateAircraft(ac);
                this.routerExtensions.navigate(["/fleet"], { clearHistory: true });
        }

        onLoadDate(ev) {
                let datePicker = <DatePicker>ev.object;
                if (this.aircraft.annualDateTuple[0] !== undefined) {
                        datePicker.year = this.aircraft.annualDateTuple[0];
                        datePicker.month = this.aircraft.annualDateTuple[1];
                        datePicker.day = this.aircraft.annualDateTuple[2];
                }
        }
}
