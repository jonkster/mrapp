import { Component, OnInit } from '@angular/core';
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
  selector: 'app-mr-expiry',
  templateUrl: './mr-expiry.component.html',
  styleUrls: ['./mr-expiry.component.scss']
})
export class MrExpiryComponent implements OnInit {
        private aircraft: Aircraft;
        private datePicker: DatePicker;

        constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private modal: ModalDialogService, private aircraftService: AircraftService, private fleetService: FleetService) {
        }

        ngOnInit() { 
                const id = this.route.snapshot.params["id"];
                this.aircraft = this.fleetService.getAircraft(id);
        }

        public cancel() {
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
        }

        public datePickLoad(ev) {
                this.datePicker = <DatePicker>ev.object;
                this.datePicker.year = this.aircraft.annualDateTuple[0];
                this.datePicker.month = this.aircraft.annualDateTuple[1];
                this.datePicker.day = this.aircraft.annualDateTuple[2];
        }

        public datePickSet(ev) {
        }

        public save() {
                this.aircraft.annualDateTuple = [this.datePicker.year , this.datePicker.month, this.datePicker.day];
                this.fleetService.updateAircraft(this.aircraft);
                this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });

        }

}
