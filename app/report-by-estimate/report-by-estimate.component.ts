import { Component, OnInit , ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { ActionItem } from "ui/action-bar";
import { Observable } from "data/observable";
import { RadSideDrawerComponent, SideDrawerType } from 'nativescript-ui-sidedrawer/angular';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

import { AppComponent } from "../app.component";
import { Aircraft } from "../fleet/aircraft";
import { FleetService } from "../fleet/fleet.service";

@Component({
  moduleId: module.id,
  selector: 'app-report-by-estimate',
  templateUrl: './report-by-estimate.component.html',
  styleUrls: ['./report-by-estimate.component.scss']
})
export class ReportByEstimateComponent implements AfterViewInit, OnInit {

  public items: any[];

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
  }


  public getDaysLeft(item: any): string {
                if (item.daysLeft === undefined) {
                        return "(est: " + Number(item.hoursLeft) / 2 + ")";
                }
                return item.daysLeft;
  }

  public getHoursLeft(item: any): string {
                if (item.hoursLeft === undefined) {
                        return "(est: " + Number(item.daysLeft) * 2 + ")";
                }
                return item.hoursLeft;
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
        let txt: string = '';
        txt = this.pad('<b>Estimated Expiry</b>', 20) + "\n";
        txt += this.pad("Rego", 20) + '|';
        txt += this.pad("Item", 20) + '|';
        txt += this.pad("Days Left", 20) + '|';
        txt += this.pad("Hours Left", 20) + "\n";
        for (let i = 0; i < this.items.length; i++) {
                let item = this.items[i];
                txt += this.pad(item.rego, 20)  + '|' + this.pad(item.item, 20) + '|' +
                         this.pad(this.getDaysLeft(item), 20)  + '|' + this.pad(this.getHoursLeft(item), 20) + "\n";
        }
        txt += "\n";
        this.appComponent.notifySomeone(txt);
  }

  public showingBy() : string {
          return 'Sort by Estimated Expiry Order';
  }

  toggle() {
        this.drawer.toggleDrawerState();
  }

}
