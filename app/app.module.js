"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var angular_1 = require("nativescript-grid-view/angular");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
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
                app_routing_1.AppRoutingModule
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
                clock_component_1.ClockComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBRTlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0MsMERBQWdFO0FBQ2hFLG1FQUE2RTtBQUU3RSx1REFBcUQ7QUFDckQsd0VBQXNFO0FBQ3RFLDJEQUF5RDtBQUN6RCw0RkFBeUY7QUFDekYsZ0ZBQTZFO0FBQzdFLDRGQUF5RjtBQUN6Rix1RUFBb0U7QUFFcEUsb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsNkVBQTBFO0FBQzFFLHVFQUFvRTtBQUNwRSwyREFBeUQ7QUFFekQsMkVBQTJFO0FBQzNFLG9EQUFxRTtBQUVyRSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBc0N0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFwQ3JCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLCtCQUF1QjtnQkFDdkIsd0NBQWtCO2dCQUNsQix3QkFBYztnQkFDZCw4QkFBZ0I7YUFDbkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QscURBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLHFEQUF3QjtnQkFDeEIsdUNBQWlCO2dCQUNqQixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLDJDQUFtQjtnQkFDbkIsdUNBQWlCO2dCQUNqQixnQ0FBYzthQUNqQjtZQUNELFNBQVMsRUFBRTtnQkFDUCwwQkFBVztnQkFDWCw0QkFBWTtnQkFDWixrQ0FBZTtnQkFDZiw0QkFBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFJO0lBQUQsZ0JBQUM7Q0FBQSxBQUExQixJQUEwQjtBQUFiLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcblxuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IEdyaWRWaWV3TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWdyaWQtdmlldy9hbmd1bGFyJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcblxuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4vZmxlZXQvZmxlZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgQWlyY3JhZnRTZXJ2aWNlIH0gZnJvbSBcIi4vYWlyY3JhZnQtZGV0YWlscy9haXJjcmFmdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGbGVldENvbXBvbmVudCB9IGZyb20gXCIuL2ZsZWV0L2ZsZWV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWlyY3JhZnREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vYWlyY3JhZnQtZGV0YWlscy9haXJjcmFmdC1kZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmV3QWlyY3JhZnRDb21wb25lbnQgfSBmcm9tIFwiLi9uZXctYWlyY3JhZnQvbmV3LWFpcmNyYWZ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbnRlbmFuY2VJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpbnRlbmFuY2UtaXRlbS9tYWludGVuYW5jZS1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTXJFeHBpcnlDb21wb25lbnQgfSBmcm9tIFwiLi9tci1leHBpcnkvbXItZXhwaXJ5LmNvbXBvbmVudFwiO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVuZ2luZVRpbWVDb21wb25lbnQgfSBmcm9tIFwiLi9lbmdpbmUtdGltZS9lbmdpbmUtdGltZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFByb3BUaW1lQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvcC10aW1lL3Byb3AtdGltZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4vY2xvY2svY2xvY2suY29tcG9uZW50XCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgaWYgeW91IG5lZWQgdG8gdXNlIHR3by13YXkgYmluZGluZ1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyAgaWYgeW91IG5lZWQgdG8gdXNlIHRoZSBIVFRQIHdyYXBwZXJcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgR3JpZFZpZXdNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEZsZWV0Q29tcG9uZW50LFxuICAgICAgICBBaXJjcmFmdERldGFpbHNDb21wb25lbnQsXG4gICAgICAgIE5ld0FpcmNyYWZ0Q29tcG9uZW50LFxuICAgICAgICBNYWludGVuYW5jZUl0ZW1Db21wb25lbnQsXG4gICAgICAgIE1yRXhwaXJ5Q29tcG9uZW50LFxuICAgICAgICBJdGVtc0NvbXBvbmVudCxcbiAgICAgICAgSXRlbURldGFpbENvbXBvbmVudCxcbiAgICAgICAgRW5naW5lVGltZUNvbXBvbmVudCxcbiAgICAgICAgUHJvcFRpbWVDb21wb25lbnQsXG4gICAgICAgIENsb2NrQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSXRlbVNlcnZpY2UsXG4gICAgICAgIEZsZWV0U2VydmljZSxcbiAgICAgICAgQWlyY3JhZnRTZXJ2aWNlLFxuICAgICAgICBNb2RhbERpYWxvZ1NlcnZpY2UgXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19