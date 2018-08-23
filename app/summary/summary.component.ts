import { Component, OnInit , ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { AppComponent } from "../app.component";
import { Aircraft } from "../common/aircraft";
import { FleetService } from "../common/fleet.service";
import {sprintf} from "../node_modules/sprintf-js";

@Component({
  moduleId: module.id,
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements AfterViewInit, OnInit {

        private fleet: Aircraft[];
        private sortOrder: string = 'alphabetic';
	private readyToShow = false;

        constructor(private _changeDetectionRef: ChangeDetectorRef,
                        private routerExtensions: RouterExtensions,
                        private appComponent: AppComponent,
			private fleetService: FleetService) {
				this.fleetService.setBusy();
		       	}
        @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
        private drawer: RadSideDrawer;

        ngOnInit() {
                this.fleet = this.fleetService.getFleet();
                this.changeSortOrder();
        }

        ngAfterViewInit() {
                this.drawer = this.drawerComponent.sideDrawer;
                this._changeDetectionRef.detectChanges();
		setTimeout(() => {
			this.readyToShow = true;
	    	}, 1000);
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

	public getAnnualDate(ac: Aircraft) : string {
		return ac.annualDateTuple.join('/');
	}

	public getEngineOH(ac: Aircraft) : string {
		return ac.engineHrsAtMaint.join('/');
	}

	public getPropOH(ac: Aircraft) : string {
		return ac.propHrsAtMaint.join('/');
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
