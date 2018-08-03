import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { FleetComponent } from "./fleet/fleet.component";
import { NewAircraftComponent } from "./new-aircraft/new-aircraft.component";
import { AircraftDetailsComponent } from "./aircraft-details/aircraft-details.component";
import { MaintenanceItemComponent } from "./maintenance-item/maintenance-item.component";
import { MrExpiryComponent } from "./mr-expiry/mr-expiry.component";
import { EngineTimeComponent } from "./engine-time/engine-time.component";
import { PropTimeComponent } from "./prop-time/prop-time.component";
import { ClockComponent } from "./clock/clock.component";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "/fleet", pathMatch: "full" },
    { path: "fleet", component: FleetComponent },
    { path: "newAircraft", component: NewAircraftComponent },
    { path: "mritem/:id", component: MaintenanceItemComponent },
    { path: "mrexpiry/:id", component: MrExpiryComponent },
    { path: "aircraftDetails/:id", component: AircraftDetailsComponent },
    { path: "engineTime/:id", component: EngineTimeComponent },
    { path: "propTime/:id", component: PropTimeComponent },
    { path: "clockTime/:id", component: ClockComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
