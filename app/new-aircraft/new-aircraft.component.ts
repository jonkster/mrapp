import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { Aircraft } from "../common/aircraft";
import { FleetService } from "../common/fleet.service";

//import * as dialogs from "ui/dialogs";
import { alert } from "ui/dialogs";

@Component({
  moduleId: module.id,
  selector: 'app-new-aircraft',
  templateUrl: './new-aircraft.component.html',
  styleUrls: ['./new-aircraft.component.scss']
})
export class NewAircraftComponent implements OnInit {

  private aircraft: Aircraft = {
    _id: "",
    mcType: "aircraft",
    rego: "",
    ttis: 0,
    type: "",
    hrsAtMaint: 0,
    engineHrsAtMaint: [0],
    propHrsAtMaint: [0],
    annualDateTuple: [1, 1, 1970],
    clockTime: 0,
    clockOffset: 0,
    maintenance: [ {
                "maintenance": "",
                "dueHrs": 0,
                "dueDateTuple": [1970, 1, 1],
                "type": "hours",
                "cleared": false
        }]
  };

  private canSave : boolean = false;

  constructor(private fleetService: FleetService, private routerExtensions: RouterExtensions) { }

  ngOnInit() { }

  checkRegoSet(ev) {
          if (this.aircraft.rego !== "") {
                  if (! this.fleetService.regoExists(this.aircraft.rego)) {
                          this.canSave = true;
                          return;
                  } else {
                        this.warnDuplicate(this.aircraft.rego);
                  }
          }
          this.canSave = false;
  }

  warnDuplicate(rego: string) {
          let options = {
                title: "Registration Entry",
               message: "An Aircraft with the registration '" 
                        + rego 
                        + "' already exists\nDelete old aircraft first.",
               okButtonText: "OK"
          };
          alert(options);
  }

  save() {
        console.log("saving:", this.aircraft);
        this.fleetService.makeNewAircraft(this.aircraft);
        this.routerExtensions.navigate(["/fleet"], { clearHistory: true });
  }

  setAsTwin(ev) {
          if (ev.object.checked) {
                this.aircraft.engineHrsAtMaint = [0, 0];
                this.aircraft.propHrsAtMaint = [0, 0];
          } else {
                this.aircraft.engineHrsAtMaint = [0];
                this.aircraft.propHrsAtMaint = [0];
          }
  }

}
