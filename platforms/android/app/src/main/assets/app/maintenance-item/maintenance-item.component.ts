import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { DatePicker } from "ui/date-picker";
import { EventData } from "data/observable";

import { Aircraft, MaintenanceItem } from "../fleet/aircraft";
import { FleetService } from "../fleet/fleet.service";
import { AircraftService } from "../aircraft-details/aircraft.service";


@Component({
  moduleId: module.id,
  selector: 'app-maintenance-item',
  templateUrl: './maintenance-item.component.html',
  styleUrls: ['./maintenance-item.component.scss']
})
export class MaintenanceItemComponent implements OnInit {

        @Input() public prompt: string;
        private aircraft: Aircraft;
        private maintenance: MaintenanceItem = <MaintenanceItem>{};
        private limitTypeHours : boolean = true;
        private limitTypeDate : boolean = false;

        constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private modal: ModalDialogService, private aircraftService: AircraftService, private fleetService: FleetService) {
                this.prompt = "Hi THERE!";
                this.maintenance.maintenance = "Oil Change";
                this.maintenance.dueHrs = 0;
                this.maintenance.type = "hours";
                this.maintenance.dueDateTuple = [1970, 1, 1];
                this.maintenance.cleared = false;
        }

        public cancel() {
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

        public datePickLoad(ev) {
        //        let datePicker = <DatePicker>ev.object;
        }

        public datePickSet(ev) {
                let datePicker = <DatePicker>ev.object;
                this.maintenance.dueDateTuple = [datePicker.year , datePicker.month, datePicker.day];
        }

        public setHourDate(type: string) {
                this.maintenance.type = type;
                if (type === 'hours') {
                        this.limitTypeHours = true;
                        this.limitTypeDate = false;
                } else if  (type === 'date') {
                        this.limitTypeHours = false;
                        this.limitTypeDate = true;
                } else {
                        this.limitTypeHours = true;
                        this.limitTypeDate = true;
                }
        }

        public save() {
                this.aircraft.maintenance.push(this.maintenance);
                this.fleetService.updateAircraft(this.aircraft);
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

        ngOnInit() {
                const id = this.route.snapshot.params["id"];
                this.aircraft = this.fleetService.getAircraft(id);
                this.maintenance.maintenance = "Oil Change";
                this.maintenance.dueHrs = this.aircraft.hrsAtMaint - 50;
        }

        ngOnDestroy() {
        }
}
