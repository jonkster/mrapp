import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Aircraft, MaintenanceItem } from "../fleet/aircraft";
import { FleetService } from "../fleet/fleet.service";
import { AircraftService } from "../aircraft-details/aircraft.service";

@Component({
  moduleId: module.id,
  selector: 'app-engine-time',
  templateUrl: './engine-time.component.html',
  styleUrls: ['./engine-time.component.scss']
})
export class EngineTimeComponent implements OnInit {

        private aircraft: Aircraft;

        constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private aircraftService: AircraftService, private fleetService: FleetService) {
        }

        ngOnInit() { 
                const id = this.route.snapshot.params["id"];
                this.aircraft = this.fleetService.getAircraft(id);
        }

        public cancel() {
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

        public save() {
                this.fleetService.updateAircraft(this.aircraft);
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }
}
