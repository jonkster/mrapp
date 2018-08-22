import { Component } from "@angular/core";
/*import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';*/
import * as email from "nativescript-email";
import { FleetService } from "./common/fleet.service";
import {sprintf} from "./node_modules/sprintf-js";
import * as fs from "file-system";

declare var android;

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 

        composeOptions: email.ComposeOptions;

        constructor(private fleetService: FleetService) {
		let documents = fs.knownFolders.documents();
		let path = fs.path.join(documents.path, "reportFile.html");
		let file = fs.File.fromPath(path);
                this.composeOptions = {
                        to: ['jonathan.p.h.kelly@gmail.com'],
                        subject: 'Curtis Aviation Maintenance Report',
			attachments: [ {
				'fileName': 'reportFile.html',
				'path': path,
				'mimeType': 'text/html'
				}
			]
                };
        }

	public createAttachment(hdg: string, msg: string): boolean {
		let documents = fs.knownFolders.documents();
		let path = fs.path.join(documents.path, "reportFile.html");
		let file = fs.File.fromPath(path);

		file.writeText('<b>' + hdg + '</b><hr/><pre>' + msg + '</pre>')
		.then(result => {
	       	})
		.catch(err => {
			console.log(err);
		});
		return true;
	}

	public niceDate(d: Date): string {
		let weekDay = [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ];
		let date = [ d.getFullYear(),  d.getMonth() + 1, d.getDate() ];
		let time = [ d.getHours(), d.getMinutes(), d.getSeconds() ];

		// Determine AM or PM suffix based on the hour
		let suffix = ( time[0] < 12 ) ? "AM" : "PM";

		// Convert hour from military time
		time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

		// If hour is 0, set it to 12
		time[0] = time[0] || 12;

		// Return the formatted string
		return sprintf("%s, %02d/%02d/%d, %02d:%02d:%02d %s", weekDay[d.getDay()], date[0], date[1], date[2], time[0], time[1], time[2], suffix);
	}

        public notifySomeone(subj: string, hdg: string, attach: string) {
                email.available().then(available => {
                        if (available) {
				if (this.createAttachment(hdg, attach)) {
					this.composeOptions.subject = subj;
					this.composeOptions.body = "Please find " + hdg + " attached.";
					email.compose(this.composeOptions).then(result => {
						if (result) {
						} else {
						}
					}).catch(error => console.log(error));
				} else {
                                	alert('could not generate email');
				}
                        } else {
                                alert('email not available');
                        }
                }).catch(error => console.log(error));
        }
}
