import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Aircraft, MaintenanceItem } from "../fleet/aircraft";
import { FleetService } from "../fleet/fleet.service";
//import { AircraftService } from "../aircraft-details/aircraft.service";

@Component({
  moduleId: module.id,
  selector: 'app-engine-time',
  templateUrl: './engine-time.component.html',
  styleUrls: ['./engine-time.component.scss']
})
export class EngineTimeComponent implements OnInit {
        private twin: boolean = false;

        private aircraft: Aircraft;

        constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private fleetService: FleetService) {
        }

        ngOnInit() { 
                const id = this.route.snapshot.params["id"];
                this.aircraft = this.fleetService.getAircraft(id);
                this.twin = this.aircraft.engineHrsAtMaint.length > 1;
        }

        /*setEngineTime(engine: Number, args) {
                let hrs = <TextField>args.object.text;
                this.aircraft.engineHrsAtMaint[engine] = parseInt(hrs);
        }

        setPropTime(prop: Number, args) {
                let hrs = <TextField>args.object.text;
                this.aircraft.propHrsAtMaint[prop] = parseInt(hrs);
        }*/

        public cancel() {
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

        public save() {
                this.fleetService.updateAircraft(this.aircraft);
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }
}
