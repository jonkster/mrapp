import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef   } from '@angular/core';
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
  selector: 'app-report-by-hour',
  templateUrl: './report-by-hour.component.html',
  styleUrls: ['./report-by-hour.component.scss']
})
export class ReportByHourComponent implements AfterViewInit, OnInit {

  public items: any[];
  private sortBy: string = 'hours';
  private readyToShow = false;

  constructor(private _changeDetectionRef: ChangeDetectorRef,
                        private appComponent: AppComponent,
                        private routerExtensions: RouterExtensions,
                        private fleetService: FleetService) { }

  @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  ngOnInit() {
        this.getBy('hours');
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
        if (item.type === 'hours') {
                return '';
        } else {
                return item.daysLeft;
        }
  }

  public getHoursLeft(item: any): string {
        if (item.type === 'date') {
                return '';
        } else {
                return (Math.round(Number(item.hoursLeft)*10) / 10).toString();
        }
  }

  public getBy(by: string) {
        if (by === 'hours') {
                this.items = this.fleetService.getHours();
        } else {
                this.items = this.fleetService.getDate();
        }
  }

  public notify() {
  	let today = this.appComponent.niceDate(new Date());
	let txt = sprintf("----  Upcoming Maintenance %-10s ----\n %s\n", this.showingBy(), today);
        if (this.sortBy === 'hours') {
                txt += sprintf("%-6s |  %-40s|%-10s |%-10s\n", "Rego", "Item", "Hrs Left", "Days Left" );
        } else {
                txt += sprintf("%-6s |  %-40s|%-10s |%-10s\n", "Rego", "Item", "Days Left", "Hrs Left" );
        }
	txt += "___________________________________________________________________________\n";
        for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                if (this.sortBy === 'hours') {
                        txt += sprintf("%6s |  %-40s|%10s |%10s\n", item.rego, item.item, this.getHoursLeft(item), this.getDaysLeft(item));
                } else {
                        txt += sprintf("%6s |  %-40s|%10s |%10s\n", item.rego, item.item, this.getDaysLeft(item), this.getHoursLeft(item));
                }
        }
        txt += "\n";
	txt += "___________________________________________________________________________\n";
        
        let subj = sprintf("Curtis Aviation Maintenance Report (%s), %s", this.showingBy(), today);
        let hdg: string = sprintf("Maintenance %-10s, (%s)", this.showingBy(), today);
        this.appComponent.notifySomeone(subj, hdg, txt);
  }

  public showingBy() : string {
        if (this.sortBy === 'hours') {
                return 'Sorted by Hours Left';
        } else {
                return 'Sorted by Days Left';
        }
  }

  public toggleByHours(ev) {
          if (ev.object.checked) {
                this.sortBy = 'hours';
          } else {
                this.sortBy = 'date';
          }
          this.getBy(this.sortBy);
  }

  toggle() {
        this.drawer.toggleDrawerState();
  }

}
