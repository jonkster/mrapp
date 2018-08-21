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
  selector: 'app-report-by-estimate',
  templateUrl: './report-by-estimate.component.html',
  styleUrls: ['./report-by-estimate.component.scss']
})
export class ReportByEstimateComponent implements AfterViewInit, OnInit {

  public items: any[];
  private readyToShow = false;

  constructor(private _changeDetectionRef: ChangeDetectorRef,
                        private routerExtensions: RouterExtensions,
                        private appComponent: AppComponent,
                        private fleetService: FleetService) { }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngOnInit() {
        this.getBy();
  }

  ngAfterViewInit() {
          this.drawer = this.drawerComponent.sideDrawer;
          this._changeDetectionRef.detectChanges();
          // a little delay so the spinner has time to show up
          setTimeout(() => {
                    this.readyToShow = true;
          }, 1000);
  }


  public getDaysLeft(item: any): string {
                if (item.daysLeft === undefined) {
                        //return Math.round(Number(item.hoursLeft) / 2) + " (est)";
                        return '-';
                }
                return item.daysLeft;
  }

  public getEstDays(item: any): string {
        if ((item.hoursLeft !== undefined) &&  (item.daysLeft !== undefined))
        {
                if ((item.hoursLeft/2) < item.daysLeft) {
                        return Math.round(Number(item.hoursLeft) / 2) + " (est)";
                }
        }
        if (item.daysLeft === undefined) {
                return Math.round(Number(item.hoursLeft) / 2) + " (est)";
        }
        return item.daysLeft;
  }

  public getHoursLeft(item: any): string {
                if (item.hoursLeft === undefined) {
                        //return Math.round(Number(item.daysLeft) * 2) + " (est)";
                        return '-';
                }
		return (Math.round(item.hoursLeft * 10) / 10).toString();
  }

  public getBy() {
          this.items = this.fleetService.getEstimatedDate();
  }

  public pad(st: string, width:number): string {
        while (st.length < width) {
                st += ' ';
        }
        return st;
  }

  public notify() {
        let txt: string = "Upcoming Maintenance in estimated order\n---------------------------------------------\n";
	txt += sprintf("%-6s |  %-40s|%-10s |%-10s\n", "Rego", "Item", "Days Left", "Hrs Left" );
	txt += "___________________________________________________________________________\n";
        for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                txt += sprintf("%6s |  %-40s|%10s |%10s\n", item.rego, item.item, this.getDaysLeft(item), this.getHoursLeft(item));
        }
        txt += "\n";
	txt += "___________________________________________________________________________\n";
        this.appComponent.notifySomeone(txt);
  }

  public showingBy() : string {
          return 'Sort by Estimated Expiry Order';
  }

  toggle() {
        this.drawer.toggleDrawerState();
  }

}
