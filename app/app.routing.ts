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
import { SummaryComponent } from "./summary/summary.component";
import { UserComponent } from "./user/user.component";
import { UserAdminComponent } from "./user-admin/user-admin.component";

import { ReportByHourComponent } from "./report-by-hour/report-by-hour.component";
import { ReportByEstimateComponent } from "./report-by-estimate/report-by-estimate.component";

const routes: Routes = [
    { path: "", redirectTo: "/user", pathMatch: "full" },
    { path: "user", component: UserComponent },
    { path: "fleet", component: FleetComponent },
    { path: "newAircraft", component: NewAircraftComponent },
    { path: "mritem/:id", component: MaintenanceItemComponent },
    { path: "mrexpiry/:id", component: MrExpiryComponent },
    { path: "aircraftDetails/:id", component: AircraftDetailsComponent },
    { path: "engineTime/:id", component: EngineTimeComponent },
    { path: "propTime/:id", component: PropTimeComponent },
    { path: "clockTime/:id", component: ClockComponent },
    { path: "reportByHour", component: ReportByHourComponent },
    { path: "reportByEstimate", component: ReportByEstimateComponent },
    { path: "summary", component: SummaryComponent },
    { path: "userAdmin", component: UserAdminComponent },
    { path: "userAdmin/:id", component: UserAdminComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
