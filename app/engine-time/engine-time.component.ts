import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Aircraft, MaintenanceItem } from "../common/aircraft";
import { FleetService } from "../common/fleet.service";
//import { AircraftService } from "../common/aircraft.service";

@Component({
  moduleId: module.id,
  selector: 'app-engine-time',
  templateUrl: './engine-time.component.html',
  styleUrls: ['./engine-time.component.scss']
})
export class EngineTimeComponent implements OnInit {
        private twin: boolean = false;

        private aircraft: Aircraft;
	private eng: string[] = [];
	private prop: string[] = [];

        constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private fleetService: FleetService) {
        }

        ngOnInit() { 
                const id = this.route.snapshot.params["id"];
                this.aircraft = this.fleetService.getAircraft(id);
                this.twin = this.aircraft.engineHrsAtMaint.length > 1;
		
		for (let i = 0; i < this.aircraft.engineHrsAtMaint.length; i++) {
			this.eng.push(this.aircraft.engineHrsAtMaint[i].toString());
			this.prop.push(this.aircraft.propHrsAtMaint[i].toString());
		}
        }

        public cancel() {
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

        public save() {
		for (let i = 0; i < this.aircraft.engineHrsAtMaint.length; i++) {
			this.aircraft.engineHrsAtMaint[i] = Number(this.eng[i]);
			this.aircraft.propHrsAtMaint[i] = Number(this.prop[i]);
		}
                this.fleetService.updateAircraft(this.aircraft);
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

	getHrs(unit: string, num: number) {
		let h = '';
	  	if (unit === 'prop') {
                	h = this.prop[num];
		} else {
                	h = this.eng[num];
		}
		if (h === '987654321') {
			h = 'OC';
		}
		return h;
	}

	setOC(ev: any, unit: string, num: number) {
          if (ev.object.checked) {
	  	if (unit === 'prop') {
                	this.prop[num] = '987654321';
		} else {
                	this.eng[num] = '987654321';
		}
	  }
	}

	updateHrs(unit: string, num: number, ev: any) {
		let v = ev.object.text;
		if (v === 'OC') {
			v = 987654321;
		}
		if (unit === 'prop') {
			this.aircraft.propHrsAtMaint[num] = v;
		} else {
			this.aircraft.engineHrsAtMaint[num] = v;
		}
	}
}
