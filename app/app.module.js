"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-grid-view/angular");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var fleet_service_1 = require("./fleet/fleet.service");
var aircraft_service_1 = require("./aircraft-details/aircraft.service");
var fleet_component_1 = require("./fleet/fleet.component");
var aircraft_details_component_1 = require("./aircraft-details/aircraft-details.component");
var new_aircraft_component_1 = require("./new-aircraft/new-aircraft.component");
var maintenance_item_component_1 = require("./maintenance-item/maintenance-item.component");
var mr_expiry_component_1 = require("./mr-expiry/mr-expiry.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var engine_time_component_1 = require("./engine-time/engine-time.component");
var prop_time_component_1 = require("./prop-time/prop-time.component");
var clock_component_1 = require("./clock/clock.component");
var report_by_hour_component_1 = require("./report-by-hour/report-by-hour.component");
var report_by_estimate_component_1 = require("./report-by-estimate/report-by-estimate.component");
// Uncomment and add to NgModule imports if you need to use two-way binding
var forms_1 = require("nativescript-angular/forms");
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                forms_1.NativeScriptFormsModule,
                nativescript_module_1.NativeScriptModule,
                angular_1.GridViewModule,
                app_routing_1.AppRoutingModule,
                angular_2.NativeScriptUISideDrawerModule
            ],
            declarations: [
                app_component_1.AppComponent,
                fleet_component_1.FleetComponent,
                aircraft_details_component_1.AircraftDetailsComponent,
                new_aircraft_component_1.NewAircraftComponent,
                maintenance_item_component_1.MaintenanceItemComponent,
                mr_expiry_component_1.MrExpiryComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                engine_time_component_1.EngineTimeComponent,
                prop_time_component_1.PropTimeComponent,
                clock_component_1.ClockComponent,
                report_by_hour_component_1.ReportByHourComponent,
                report_by_estimate_component_1.ReportByEstimateComponent
            ],
            providers: [
                item_service_1.ItemService,
                fleet_service_1.FleetService,
                aircraft_service_1.AircraftService,
                dialogs_1.ModalDialogService
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsMERBQWdFO0FBQ2hFLG1FQUE2RTtBQUU3RSw4REFBb0Y7QUFFcEYsdURBQXFEO0FBQ3JELHdFQUFzRTtBQUN0RSwyREFBeUQ7QUFDekQsNEZBQXlGO0FBQ3pGLGdGQUE2RTtBQUM3RSw0RkFBeUY7QUFDekYsdUVBQW9FO0FBRXBFLG9EQUFrRDtBQUNsRCwwREFBd0Q7QUFDeEQsc0VBQW1FO0FBQ25FLDZFQUEwRTtBQUMxRSx1RUFBb0U7QUFDcEUsMkRBQXlEO0FBQ3pELHNGQUFrRjtBQUNsRixrR0FBOEY7QUFFOUYsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUVyRSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBeUN0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUF2Q3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQix3QkFBYztnQkFDZCw4QkFBZ0I7Z0JBQ2hCLHdDQUE4QjthQUNqQztZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCxxREFBd0I7Z0JBQ3hCLDZDQUFvQjtnQkFDcEIscURBQXdCO2dCQUN4Qix1Q0FBaUI7Z0JBQ2pCLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsMkNBQW1CO2dCQUNuQix1Q0FBaUI7Z0JBQ2pCLGdDQUFjO2dCQUNkLGdEQUFxQjtnQkFDckIsd0RBQXlCO2FBQzVCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDBCQUFXO2dCQUNYLDRCQUFZO2dCQUNaLGtDQUFlO2dCQUNmLDRCQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgR3JpZFZpZXdNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtZ3JpZC12aWV3L2FuZ3VsYXInO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2RpcmVjdGl2ZXMvZGlhbG9nc1wiO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi9mbGVldC9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdFNlcnZpY2UgfSBmcm9tIFwiLi9haXJjcmFmdC1kZXRhaWxzL2FpcmNyYWZ0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEZsZWV0Q29tcG9uZW50IH0gZnJvbSBcIi4vZmxlZXQvZmxlZXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBaXJjcmFmdERldGFpbHNDb21wb25lbnQgfSBmcm9tIFwiLi9haXJjcmFmdC1kZXRhaWxzL2FpcmNyYWZ0LWRldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBOZXdBaXJjcmFmdENvbXBvbmVudCB9IGZyb20gXCIuL25ldy1haXJjcmFmdC9uZXctYWlyY3JhZnQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNYWludGVuYW5jZUl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9tYWludGVuYW5jZS1pdGVtL21haW50ZW5hbmNlLWl0ZW0uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNckV4cGlyeUNvbXBvbmVudCB9IGZyb20gXCIuL21yLWV4cGlyeS9tci1leHBpcnkuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS9pdGVtLnNlcnZpY2VcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRW5naW5lVGltZUNvbXBvbmVudCB9IGZyb20gXCIuL2VuZ2luZS10aW1lL2VuZ2luZS10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvcFRpbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9wLXRpbWUvcHJvcC10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2xvY2tDb21wb25lbnQgfSBmcm9tIFwiLi9jbG9jay9jbG9jay5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcG9ydEJ5SG91ckNvbXBvbmVudCB9IGZyb20gXCIuL3JlcG9ydC1ieS1ob3VyL3JlcG9ydC1ieS1ob3VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVwb3J0QnlFc3RpbWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL3JlcG9ydC1ieS1lc3RpbWF0ZS9yZXBvcnQtYnktZXN0aW1hdGUuY29tcG9uZW50XCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgR3JpZFZpZXdNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgRmxlZXRDb21wb25lbnQsXG4gICAgICAgIEFpcmNyYWZ0RGV0YWlsc0NvbXBvbmVudCxcbiAgICAgICAgTmV3QWlyY3JhZnRDb21wb25lbnQsXG4gICAgICAgIE1haW50ZW5hbmNlSXRlbUNvbXBvbmVudCxcbiAgICAgICAgTXJFeHBpcnlDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBFbmdpbmVUaW1lQ29tcG9uZW50LFxuICAgICAgICBQcm9wVGltZUNvbXBvbmVudCxcbiAgICAgICAgQ2xvY2tDb21wb25lbnQsXG4gICAgICAgIFJlcG9ydEJ5SG91ckNvbXBvbmVudCxcbiAgICAgICAgUmVwb3J0QnlFc3RpbWF0ZUNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEl0ZW1TZXJ2aWNlLFxuICAgICAgICBGbGVldFNlcnZpY2UsXG4gICAgICAgIEFpcmNyYWZ0U2VydmljZSxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlIFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==