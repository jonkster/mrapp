import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { GridViewModule } from 'nativescript-grid-view/angular';
import { ModalDialogService } from "nativescript-angular/directives/dialogs";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { FleetService } from "./fleet/fleet.service";
import { AircraftService } from "./aircraft-details/aircraft.service";
import { FleetComponent } from "./fleet/fleet.component";
import { AircraftDetailsComponent } from "./aircraft-details/aircraft-details.component";
import { NewAircraftComponent } from "./new-aircraft/new-aircraft.component";
import { MaintenanceItemComponent } from "./maintenance-item/maintenance-item.component";
import { MrExpiryComponent } from "./mr-expiry/mr-expiry.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { EngineTimeComponent } from "./engine-time/engine-time.component";
import { PropTimeComponent } from "./prop-time/prop-time.component";
import { ClockComponent } from "./clock/clock.component";
import { ReportByHourComponent } from "./report-by-hour/report-by-hour.component";
import { ReportByEstimateComponent } from "./report-by-estimate/report-by-estimate.component";

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
        ItemsComponent,
        ItemDetailComponent,
        EngineTimeComponent,
        PropTimeComponent,
        ClockComponent,
        ReportByHourComponent,
        ReportByEstimateComponent
    ],
    providers: [
        ItemService,
        FleetService,
        AircraftService,
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
