import { Component, OnInit } from '@angular/core';
import { Aircraft } from "../fleet/aircraft";
import { FleetService } from "../fleet/fleet.service";

@Component({
  moduleId: module.id,
  selector: 'app-report-by-hour',
  templateUrl: './report-by-hour.component.html',
  styleUrls: ['./report-by-hour.component.scss']
})
export class ReportByHourComponent implements OnInit {

  public items: any[];
  private sortBy: string = 'hours';

  constructor(private fleetService: FleetService) { }

  ngOnInit() {
        this.getBy('hours');
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

}
