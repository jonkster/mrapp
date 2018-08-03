import { Injectable } from '@angular/core';
import { Aircraft } from "../fleet/aircraft";

@Injectable()
export class AircraftService {

  constructor() { }

   getEngineLeft(ac: Aircraft, engine: number): number {
        return ac.engineHrsAtMaint[engine-1] - this.getTtis(ac);
    }

   getPropLeft(ac: Aircraft, engine: number): number {
        return ac.propHrsAtMaint[engine-1] - this.getTtis(ac);
    }

   getHrsLeft(ac: Aircraft): number {
        return ac.hrsAtMaint - this.getTtis(ac);
    }

   getDaysLeft(ac: Aircraft): number {
           if (ac.annualDateTuple !== undefined) {
                   let exDate = new Date(ac.annualDateTuple[0], ac.annualDateTuple[1]-1, ac.annualDateTuple[2]);
                   let time = exDate.valueOf() - Date.now().valueOf();
                   return Math.round(time / (24*60*60*1000));
           } else {
                   return 0;
           }
   }

  getTtis(ac: Aircraft): number {
        return ac.clockTime + ac.clockOffset;
  }

}
