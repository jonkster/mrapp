import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { Aircraft, MaintenanceItem } from "../common/aircraft";
import { FleetService } from "../common/fleet.service";
import { AircraftService } from "../common/aircraft.service";


@Component({
  moduleId: module.id,
  selector: 'app-prop-time',
  templateUrl: './prop-time.component.html',
  styleUrls: ['./prop-time.component.scss']
})
export class PropTimeComponent implements OnInit {

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
