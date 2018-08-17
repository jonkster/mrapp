import { Component } from "@angular/core";
/*import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';*/
import * as email from "nativescript-email";
import { FleetService } from "./common/fleet.service";

declare var android;

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 

        composeOptions: email.ComposeOptions;

        constructor(private fleetService: FleetService) {
                this.composeOptions = {
                        to: ['jonathan.p.h.kelly@gmail.com'],
                        subject: 'Curtis Aviation Maintenance Report',
                        body: '<html></html>'
                };
        }

        public notifySomeone(msg: string) {
                email.available().then(available => {
                        if (available) {
                                this.composeOptions.body = msg;
                                email.compose(this.composeOptions).then(result => {
                                        if (result) {
                                        } else {
                                        }
                                }).catch(error => console.log(error));
                        } else {
                                alert('email not available');
                        }
                }).catch(error => console.log(error));
        }
}
