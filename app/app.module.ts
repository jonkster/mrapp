import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { GridViewModule } from 'nativescript-grid-view/angular';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { DatabaseService } from "./common/database.service";
import { FleetService } from "./common/fleet.service";
import { AircraftService } from "./common/aircraft.service";
import { PermissionsService } from "./permissions.service";
import { FleetComponent } from "./fleet/fleet.component";
import { AircraftDetailsComponent } from "./aircraft-details/aircraft-details.component";
import { NewAircraftComponent } from "./new-aircraft/new-aircraft.component";
import { MaintenanceItemComponent } from "./maintenance-item/maintenance-item.component";
import { MrExpiryComponent } from "./mr-expiry/mr-expiry.component";

import { EngineTimeComponent } from "./engine-time/engine-time.component";
import { PropTimeComponent } from "./prop-time/prop-time.component";
import { ClockComponent } from "./clock/clock.component";
import { ReportByHourComponent } from "./report-by-hour/report-by-hour.component";
import { ReportByEstimateComponent } from "./report-by-estimate/report-by-estimate.component";
import { UserComponent } from "./user/user.component";
import { UserAdminComponent } from "./user-admin/user-admin.component";

// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptFormsModule,
        NativeScriptModule,
        GridViewModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        AppComponent,
        FleetComponent,
        AircraftDetailsComponent,
        NewAircraftComponent,
        MaintenanceItemComponent,
        MrExpiryComponent,
        EngineTimeComponent,
        PropTimeComponent,
        ClockComponent,
        ReportByHourComponent,
        ReportByEstimateComponent,
        UserAdminComponent,
        UserComponent
    ],
    providers: [
        DatabaseService,
        FleetService,
        AircraftService,
        PermissionsService,
        ModalDialogService 
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
