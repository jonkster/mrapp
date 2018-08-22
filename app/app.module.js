"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-grid-view/angular");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var angular_2 = require("nativescript-ui-sidedrawer/angular");
var database_service_1 = require("./common/database.service");
var fleet_service_1 = require("./common/fleet.service");
var aircraft_service_1 = require("./common/aircraft.service");
var permissions_service_1 = require("./permissions.service");
var fleet_component_1 = require("./fleet/fleet.component");
var aircraft_details_component_1 = require("./aircraft-details/aircraft-details.component");
var new_aircraft_component_1 = require("./new-aircraft/new-aircraft.component");
var maintenance_item_component_1 = require("./maintenance-item/maintenance-item.component");
var mr_expiry_component_1 = require("./mr-expiry/mr-expiry.component");
var engine_time_component_1 = require("./engine-time/engine-time.component");
var prop_time_component_1 = require("./prop-time/prop-time.component");
var clock_component_1 = require("./clock/clock.component");
var report_by_hour_component_1 = require("./report-by-hour/report-by-hour.component");
var report_by_estimate_component_1 = require("./report-by-estimate/report-by-estimate.component");
var summary_component_1 = require("./summary/summary.component");
var user_component_1 = require("./user/user.component");
var user_admin_component_1 = require("./user-admin/user-admin.component");
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
                engine_time_component_1.EngineTimeComponent,
                prop_time_component_1.PropTimeComponent,
                clock_component_1.ClockComponent,
                report_by_hour_component_1.ReportByHourComponent,
                report_by_estimate_component_1.ReportByEstimateComponent,
                summary_component_1.SummaryComponent,
                user_admin_component_1.UserAdminComponent,
                user_component_1.UserComponent
            ],
            providers: [
                database_service_1.DatabaseService,
                fleet_service_1.FleetService,
                aircraft_service_1.AircraftService,
                permissions_service_1.PermissionsService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsMERBQWdFO0FBQ2hFLG1FQUE2RTtBQUU3RSw4REFBb0Y7QUFFcEYsOERBQTREO0FBQzVELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFDNUQsNkRBQTJEO0FBQzNELDJEQUF5RDtBQUN6RCw0RkFBeUY7QUFDekYsZ0ZBQTZFO0FBQzdFLDRGQUF5RjtBQUN6Rix1RUFBb0U7QUFFcEUsNkVBQTBFO0FBQzFFLHVFQUFvRTtBQUNwRSwyREFBeUQ7QUFDekQsc0ZBQWtGO0FBQ2xGLGtHQUE4RjtBQUM5RixpRUFBK0Q7QUFDL0Qsd0RBQXNEO0FBQ3RELDBFQUF1RTtBQUV2RSwyRUFBMkU7QUFDM0Usb0RBQXFFO0FBRXJFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUEyQ3RFO0lBSEE7O01BRUU7SUFDRjtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXpDckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsK0JBQXVCO2dCQUN2Qix3Q0FBa0I7Z0JBQ2xCLHdCQUFjO2dCQUNkLDhCQUFnQjtnQkFDaEIsd0NBQThCO2FBQ2pDO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHFEQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQixxREFBd0I7Z0JBQ3hCLHVDQUFpQjtnQkFDakIsMkNBQW1CO2dCQUNuQix1Q0FBaUI7Z0JBQ2pCLGdDQUFjO2dCQUNkLGdEQUFxQjtnQkFDckIsd0RBQXlCO2dCQUN6QixvQ0FBZ0I7Z0JBQ2hCLHlDQUFrQjtnQkFDbEIsOEJBQWE7YUFDaEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asa0NBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2Ysd0NBQWtCO2dCQUNsQiw0QkFBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEdyaWRWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdyaWQtdmlldy9hbmd1bGFyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vY29tbW9uL2RhdGFiYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuL2NvbW1vbi9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdFNlcnZpY2UgfSBmcm9tIFwiLi9jb21tb24vYWlyY3JhZnQuc2VydmljZVwiO1xuaW1wb3J0IHsgUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vcGVybWlzc2lvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgRmxlZXRDb21wb25lbnQgfSBmcm9tIFwiLi9mbGVldC9mbGVldC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFpcmNyYWZ0RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL2FpcmNyYWZ0LWRldGFpbHMvYWlyY3JhZnQtZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5ld0FpcmNyYWZ0Q29tcG9uZW50IH0gZnJvbSBcIi4vbmV3LWFpcmNyYWZ0L25ldy1haXJjcmFmdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1haW50ZW5hbmNlSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL21haW50ZW5hbmNlLWl0ZW0vbWFpbnRlbmFuY2UtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1yRXhwaXJ5Q29tcG9uZW50IH0gZnJvbSBcIi4vbXItZXhwaXJ5L21yLWV4cGlyeS5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgRW5naW5lVGltZUNvbXBvbmVudCB9IGZyb20gXCIuL2VuZ2luZS10aW1lL2VuZ2luZS10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvcFRpbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9wLXRpbWUvcHJvcC10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2xvY2tDb21wb25lbnQgfSBmcm9tIFwiLi9jbG9jay9jbG9jay5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcG9ydEJ5SG91ckNvbXBvbmVudCB9IGZyb20gXCIuL3JlcG9ydC1ieS1ob3VyL3JlcG9ydC1ieS1ob3VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVwb3J0QnlFc3RpbWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL3JlcG9ydC1ieS1lc3RpbWF0ZS9yZXBvcnQtYnktZXN0aW1hdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTdW1tYXJ5Q29tcG9uZW50IH0gZnJvbSBcIi4vc3VtbWFyeS9zdW1tYXJ5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXNlckNvbXBvbmVudCB9IGZyb20gXCIuL3VzZXIvdXNlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFVzZXJBZG1pbkNvbXBvbmVudCB9IGZyb20gXCIuL3VzZXItYWRtaW4vdXNlci1hZG1pbi5jb21wb25lbnRcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBHcmlkVmlld01vZHVsZSxcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBGbGVldENvbXBvbmVudCxcbiAgICAgICAgQWlyY3JhZnREZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBOZXdBaXJjcmFmdENvbXBvbmVudCxcbiAgICAgICAgTWFpbnRlbmFuY2VJdGVtQ29tcG9uZW50LFxuICAgICAgICBNckV4cGlyeUNvbXBvbmVudCxcbiAgICAgICAgRW5naW5lVGltZUNvbXBvbmVudCxcbiAgICAgICAgUHJvcFRpbWVDb21wb25lbnQsXG4gICAgICAgIENsb2NrQ29tcG9uZW50LFxuICAgICAgICBSZXBvcnRCeUhvdXJDb21wb25lbnQsXG4gICAgICAgIFJlcG9ydEJ5RXN0aW1hdGVDb21wb25lbnQsXG4gICAgICAgIFN1bW1hcnlDb21wb25lbnQsXG4gICAgICAgIFVzZXJBZG1pbkNvbXBvbmVudCxcbiAgICAgICAgVXNlckNvbXBvbmVudFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERhdGFiYXNlU2VydmljZSxcbiAgICAgICAgRmxlZXRTZXJ2aWNlLFxuICAgICAgICBBaXJjcmFmdFNlcnZpY2UsXG4gICAgICAgIFBlcm1pc3Npb25zU2VydmljZSxcbiAgICAgICAgTW9kYWxEaWFsb2dTZXJ2aWNlIFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==