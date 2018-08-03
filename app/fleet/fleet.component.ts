import { Component, OnInit } from '@angular/core';
import { Aircraft } from "./aircraft";
import { FleetService } from "./fleet.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements OnInit {
        private fleet: Aircraft[];

        constructor(private routerExtensions: RouterExtensions, private fleetService: FleetService) { }

        ngOnInit() {
                this.fleet = this.fleetService.getFleet();
        }

        getDaysLeft(ac: Aircraft): number {
                return this.fleetService.getDaysLeft(ac);
        }

        getHrsLeft(ac: Aircraft): number {
                return ac.hrsAtMaint - this.getTtis(ac);
        }

        getTtis(ac: Aircraft): number {
                return ac.clockTime + ac.clockOffset;
        }

        addAircraft() {
                this.routerExtensions.navigate(["newAircraft"], { clearHistory: false });
        }

}
