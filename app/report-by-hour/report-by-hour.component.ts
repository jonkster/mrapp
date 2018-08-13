import { Component, ViewChild, OnInit, AfterViewInit, ChangeDetectorRef   } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";

import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { Aircraft } from "../fleet/aircraft";
import { FleetService } from "../fleet/fleet.service";

@Component({
  moduleId: module.id,
  selector: 'app-report-by-hour',
  templateUrl: './report-by-hour.component.html',
  styleUrls: ['./report-by-hour.component.scss']
})
export class ReportByHourComponent implements AfterViewInit, OnInit {

  public items: any[];
  private sortBy: string = 'hours';

  constructor(private _changeDetectionRef: ChangeDetectorRef,
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
                return item.hoursLeft;
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
        alert("not available yet");
  }

  public showingBy() : string {
        if (this.sortBy === 'hours') {
                return 'Sort by Hours Left';
        } else {
                return 'Sort by Days Left';
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
