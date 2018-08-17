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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsMERBQWdFO0FBQ2hFLG1FQUE2RTtBQUU3RSw4REFBb0Y7QUFFcEYsOERBQTREO0FBQzVELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFDNUQsNkRBQTJEO0FBQzNELDJEQUF5RDtBQUN6RCw0RkFBeUY7QUFDekYsZ0ZBQTZFO0FBQzdFLDRGQUF5RjtBQUN6Rix1RUFBb0U7QUFFcEUsNkVBQTBFO0FBQzFFLHVFQUFvRTtBQUNwRSwyREFBeUQ7QUFDekQsc0ZBQWtGO0FBQ2xGLGtHQUE4RjtBQUM5Rix3REFBc0Q7QUFDdEQsMEVBQXVFO0FBRXZFLDJFQUEyRTtBQUMzRSxvREFBcUU7QUFFckUsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQTBDdEU7SUFIQTs7TUFFRTtJQUNGO0lBQXlCLENBQUM7SUFBYixTQUFTO1FBeENyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsNEJBQVk7YUFDZjtZQUNELE9BQU8sRUFBRTtnQkFDTCwrQkFBdUI7Z0JBQ3ZCLHdDQUFrQjtnQkFDbEIsd0JBQWM7Z0JBQ2QsOEJBQWdCO2dCQUNoQix3Q0FBOEI7YUFDakM7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QscURBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLHFEQUF3QjtnQkFDeEIsdUNBQWlCO2dCQUNqQiwyQ0FBbUI7Z0JBQ25CLHVDQUFpQjtnQkFDakIsZ0NBQWM7Z0JBQ2QsZ0RBQXFCO2dCQUNyQix3REFBeUI7Z0JBQ3pCLHlDQUFrQjtnQkFDbEIsOEJBQWE7YUFDaEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Asa0NBQWU7Z0JBQ2YsNEJBQVk7Z0JBQ1osa0NBQWU7Z0JBQ2Ysd0NBQWtCO2dCQUNsQiw0QkFBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEdyaWRWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdyaWQtdmlldy9hbmd1bGFyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcblxuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vY29tbW9uL2RhdGFiYXNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuL2NvbW1vbi9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdFNlcnZpY2UgfSBmcm9tIFwiLi9jb21tb24vYWlyY3JhZnQuc2VydmljZVwiO1xuaW1wb3J0IHsgUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSBcIi4vcGVybWlzc2lvbnMuc2VydmljZVwiO1xuaW1wb3J0IHsgRmxlZXRDb21wb25lbnQgfSBmcm9tIFwiLi9mbGVldC9mbGVldC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFpcmNyYWZ0RGV0YWlsc0NvbXBvbmVudCB9IGZyb20gXCIuL2FpcmNyYWZ0LWRldGFpbHMvYWlyY3JhZnQtZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5ld0FpcmNyYWZ0Q29tcG9uZW50IH0gZnJvbSBcIi4vbmV3LWFpcmNyYWZ0L25ldy1haXJjcmFmdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1haW50ZW5hbmNlSXRlbUNvbXBvbmVudCB9IGZyb20gXCIuL21haW50ZW5hbmNlLWl0ZW0vbWFpbnRlbmFuY2UtaXRlbS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1yRXhwaXJ5Q29tcG9uZW50IH0gZnJvbSBcIi4vbXItZXhwaXJ5L21yLWV4cGlyeS5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgRW5naW5lVGltZUNvbXBvbmVudCB9IGZyb20gXCIuL2VuZ2luZS10aW1lL2VuZ2luZS10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvcFRpbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9wLXRpbWUvcHJvcC10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2xvY2tDb21wb25lbnQgfSBmcm9tIFwiLi9jbG9jay9jbG9jay5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcG9ydEJ5SG91ckNvbXBvbmVudCB9IGZyb20gXCIuL3JlcG9ydC1ieS1ob3VyL3JlcG9ydC1ieS1ob3VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUmVwb3J0QnlFc3RpbWF0ZUNvbXBvbmVudCB9IGZyb20gXCIuL3JlcG9ydC1ieS1lc3RpbWF0ZS9yZXBvcnQtYnktZXN0aW1hdGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci91c2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVXNlckFkbWluQ29tcG9uZW50IH0gZnJvbSBcIi4vdXNlci1hZG1pbi91c2VyLWFkbWluLmNvbXBvbmVudFwiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEdyaWRWaWV3TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEZsZWV0Q29tcG9uZW50LFxuICAgICAgICBBaXJjcmFmdERldGFpbHNDb21wb25lbnQsXG4gICAgICAgIE5ld0FpcmNyYWZ0Q29tcG9uZW50LFxuICAgICAgICBNYWludGVuYW5jZUl0ZW1Db21wb25lbnQsXG4gICAgICAgIE1yRXhwaXJ5Q29tcG9uZW50LFxuICAgICAgICBFbmdpbmVUaW1lQ29tcG9uZW50LFxuICAgICAgICBQcm9wVGltZUNvbXBvbmVudCxcbiAgICAgICAgQ2xvY2tDb21wb25lbnQsXG4gICAgICAgIFJlcG9ydEJ5SG91ckNvbXBvbmVudCxcbiAgICAgICAgUmVwb3J0QnlFc3RpbWF0ZUNvbXBvbmVudCxcbiAgICAgICAgVXNlckFkbWluQ29tcG9uZW50LFxuICAgICAgICBVc2VyQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRGF0YWJhc2VTZXJ2aWNlLFxuICAgICAgICBGbGVldFNlcnZpY2UsXG4gICAgICAgIEFpcmNyYWZ0U2VydmljZSxcbiAgICAgICAgUGVybWlzc2lvbnNTZXJ2aWNlLFxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2UgXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19