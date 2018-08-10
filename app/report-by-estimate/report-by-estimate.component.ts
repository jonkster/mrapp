import { Component, OnInit } from '@angular/core';
import { Aircraft } from "../fleet/aircraft";
import { FleetService } from "../fleet/fleet.service";

@Component({
  moduleId: module.id,
  selector: 'app-report-by-estimate',
  templateUrl: './report-by-estimate.component.html',
  styleUrls: ['./report-by-estimate.component.scss']
})
export class ReportByEstimateComponent implements OnInit {

  public items: any[];

  constructor(private fleetService: FleetService) { }

  ngOnInit() {
        this.getBy();
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

  public showingBy() : string {
          return 'Sort by Estimated Expiry Order';
  }


}
