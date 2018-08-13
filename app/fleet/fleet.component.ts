import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { AppComponent } from "../app.component";
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
        private sortOrder: string = 'type';

        constructor(private _changeDetectionRef: ChangeDetectorRef,
                        private routerExtensions: RouterExtensions,
                        private appComponent: AppComponent,
                        private fleetService: FleetService) { }

        @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
        private drawer: RadSideDrawer;

        ngOnInit() {
                this.fleet = this.fleetService.getFleet();
                this.changeSortOrder();
        }

        ngAfterViewInit() {
                this.drawer = this.drawerComponent.sideDrawer;
                this._changeDetectionRef.detectChanges();
        }

        changeSortOrder() {
                if (this.sortOrder === 'type') {
                        this.fleet.sort((a, b) => {
                                if (a.type < b.type) {
                                        return -1;
                                } else if (a.type > b.type) {
                                        return 1;
                                } else if (a.rego < b.rego) {
                                        return -1;
                                } else if (a.rego > b.rego) {
                                        return 1;
                                } else {
                                        return 0;
                                }
                        });
                } else if (this.sortOrder === 'alphabetic') {
                        this.fleet.sort((a, b) => {
                                if (a.rego < b.rego) {
                                        return -1;
                                } else if (a.rego > b.rego) {
                                        return 1;
                                } else {
                                        return 0;
                                }
                        });
                }
        }

        getDaysLeft(ac: Aircraft): number {
                return this.fleetService.getDaysLeft(ac);
        }

        getHrsLeft(ac: Aircraft): number {
                let hrs = ac.hrsAtMaint - this.getTtis(ac);
                return Math.round(hrs*10)/ 10
        }

        getTtis(ac: Aircraft): number {
                return ac.clockTime + ac.clockOffset;
        }

        addAircraft() {
                this.routerExtensions.navigate(["newAircraft"], { clearHistory: false });
        }

        public toggle() {
                this.drawer.toggleDrawerState();
        }

        public toggleOrder() {
                if (this.sortOrder === 'type') {
                        this.sortOrder = 'alphabetic';
                } else if (this.sortOrder === 'alphabetic') {
                        this.sortOrder = 'type';
                }
                this.changeSortOrder();
        }


}
