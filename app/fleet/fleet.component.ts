import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { AppComponent } from "../app.component";
import { Aircraft } from "../common/aircraft";
import { FleetService } from "../common/fleet.service";
import { PermissionsService } from "../permissions.service";
import { RouterExtensions } from "nativescript-angular/router";

import * as dialogs from "ui/dialogs";

@Component({
  moduleId: module.id,
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements AfterViewInit, OnInit {
        private fleet: Aircraft[];
        private sortOrder: string = 'alphabetic';
        private activity = false;
        private acStatusDetails: any = {};
        private acStatus: any = {};

        constructor(private _changeDetectionRef: ChangeDetectorRef,
                        private routerExtensions: RouterExtensions,
                        private permissionsService: PermissionsService,
                        private appComponent: AppComponent,
                        private fleetService: FleetService) { }
        @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
        private drawer: RadSideDrawer;

        ngOnInit() {
                this.fleet = this.fleetService.getFleet();
                this.changeSortOrder();
                for (let i = 0; i < this.fleet.length; i++) {
                        let ac = this.fleet[i];
                        this.acStatusDetails[ac.rego] = this.fleetService.getAircraftStatusItems(ac); 
                        this.acStatus[ac.rego] = this.fleetService.getStatus(ac.rego);
                }
        }

        ngAfterViewInit() {
                this.drawer = this.drawerComponent.sideDrawer;
                this._changeDetectionRef.detectChanges();
        }

        isAdminAccess() {
                return this.permissionsService.isAdminAccess();
        }

        can(action: string) : boolean {
                return this.permissionsService.can(action);
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
                this.routerExtensions.navigate(["newAircraft"], { clearHistory: true });
        }

        public addUser() {
                dialogs.login({
                        title: "Add New User",
                        message: "User",
                        userName: "",
                        password: "",
                        okButtonText: "Add",
                        cancelButtonText: "Cancel"
                        }).then((r) => {
                                if (r.result) {
                                        if (this.permissionsService.userExists(r.userName)) {
                                                alert("user: " + r.userName + " already exists");
                                                return;
                                        }
                                        dialogs.action({
                                                title: "User Category",
                                                message: "Select User type",
                                                cancelButtonText: "Cancel",
                                                actions: ["Admin", "Maintainer", "Pilot", "Read Only"]
                                        }).then((c) => {
                                                if (c === "Read Only") {
                                                        c = 'default';
                                                } else if (c === "Pilot") {
                                                        c = 'pilot';
                                                } else if (c === "Maintainer") {
                                                        c = 'maintainer';
                                                } else if (c === "Admin") {
                                                        c = 'admin';
                                                }
                                                this.permissionsService.addNewUser(r.userName, r.password, c);
                                                this.routerExtensions.navigate(["userAdmin", r.userName], { clearHistory: true });
                                        });
                                }
                        });
        }

        public removeUser() {
                this.routerExtensions.navigate(["userAdmin"], { clearHistory: true });
        }

        public userSettings() {
                this.routerExtensions.navigate(["userAdmin"], { clearHistory: true });
        }

        /*public logIn() {
                this.routerExtensions.navigate(["./user"], { clearHistory: false });
        }*/

        public logOut() {
                this.permissionsService.setUser('default');
                this.routerExtensions.navigate(["./user"], { clearHistory: false });
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
