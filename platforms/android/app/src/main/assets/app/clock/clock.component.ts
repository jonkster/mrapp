import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { EventData } from "data/observable";
import { Aircraft, MaintenanceItem } from "../fleet/aircraft";
import { FleetService } from "../fleet/fleet.service";
import { AircraftService } from "../aircraft-details/aircraft.service";


@Component({
  moduleId: module.id,
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

        private aircraft: Aircraft;

        constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private aircraftService: AircraftService, private fleetService: FleetService) {
        }

        ngOnInit() { 
                const id = this.route.snapshot.params["id"];
                this.aircraft = this.fleetService.getAircraft(id);
                this.aircraft.clockOffset = Number(this.aircraft.ttis) - Number(this.aircraft.clockTime);
        }

        public cancel() {
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

        public save() {
                this.aircraft.clockOffset = Number(this.aircraft.clockOffset);
                this.aircraft.ttis = Number(this.aircraft.ttis);
                this.aircraft.clockTime = Number(this.aircraft.clockTime);
                this.fleetService.updateAircraft(this.aircraft);
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

        updateOffset() {
                this.aircraft.clockOffset = Number(this.aircraft.clockOffset);
                this.aircraft.ttis = Number(this.aircraft.ttis);
                this.aircraft.clockTime = Number(this.aircraft.clockTime);
                this.aircraft.clockOffset = this.aircraft.ttis - this.aircraft.clockTime;
        }
}
