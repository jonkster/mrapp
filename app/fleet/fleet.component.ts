import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import {RadSideDrawerComponent, SideDrawerType} from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { Aircraft } from "./aircraft";
import { FleetService } from "./fleet.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements AfterViewInit, OnInit {
        private fleet: Aircraft[];

        constructor(private _changeDetectionRef: ChangeDetectorRef,
                        private routerExtensions: RouterExtensions,
                        private fleetService: FleetService) { }

        @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
        private drawer: RadSideDrawer;

        ngOnInit() {
                this.fleet = this.fleetService.getFleet();
        }

        ngAfterViewInit() {
                this.drawer = this.drawerComponent.sideDrawer;
                this._changeDetectionRef.detectChanges();
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

stuff(args) {
    console.log("Share action item tapped.", args);
}
public toggle() {
        this.drawer.toggleDrawerState();
  }


}
