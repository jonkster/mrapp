import { Injectable } from '@angular/core';
import {Couchbase} from 'nativescript-couchbase';
import { AircraftService } from "../aircraft-details/aircraft.service";

import { Aircraft } from "../fleet/aircraft";

@Injectable()
export class FleetService {
    public database: any;
    private aircraft: Aircraft[];

  constructor(private aircraftService: AircraftService) { 
        this.database = new Couchbase("aircraft-database");
        this.database.createView("aircraft", "1", function(document, emitter) {
            if(document.rego) {
                emitter.emit(document._id, document);
            }
        });
    }

    public makeNewAircraft(aircraft: Aircraft) {
            let documentId = this.database.createDocument({
                            "rego": aircraft.rego,
                            "ttis": aircraft.ttis,
                            "type": aircraft.type,
                            "hrsAtMaint": aircraft.hrsAtMaint,
                            "engineHrsAtMaint": aircraft.engineHrsAtMaint,
                            "propHrsAtMaint": aircraft.propHrsAtMaint,
                            "clockTime": aircraft.clockTime,
                            "clockOffset": aircraft.clockOffset,
                            "maintenance": aircraft.maintenance
                            });
    }

    getFleet(): Aircraft[] {
        this.query();
        return this.aircraft;
    }

    getAircraft(id: string): Aircraft {
        return this.aircraft.filter( aircraft => aircraft._id === id)[0];
    }

    public deleteAircraft(id: string) {
            this.database.deleteDocument(id);
            this.aircraft =  this.database.executeQuery("aircraft");
    }

    public getDaysLeft(ac: Aircraft): number {
        return this.aircraftService.getDaysLeft(ac);
    }

    public query() {
            this.aircraft =  this.database.executeQuery("aircraft");
    }

    public regoExists(rego: string): boolean {
        let r = this.aircraft.filter(aircraft => aircraft.rego === rego)[0];
        return (r !== undefined);
    }

    public updateAircraft(ac: Aircraft) {
            this.database.updateDocument(ac._id, ac);
            this.aircraft =  this.database.executeQuery("aircraft");
    }

}
