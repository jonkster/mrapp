"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var fleet_component_1 = require("./fleet/fleet.component");
var new_aircraft_component_1 = require("./new-aircraft/new-aircraft.component");
var aircraft_details_component_1 = require("./aircraft-details/aircraft-details.component");
var maintenance_item_component_1 = require("./maintenance-item/maintenance-item.component");
var mr_expiry_component_1 = require("./mr-expiry/mr-expiry.component");
var engine_time_component_1 = require("./engine-time/engine-time.component");
var prop_time_component_1 = require("./prop-time/prop-time.component");
var clock_component_1 = require("./clock/clock.component");
var report_by_hour_component_1 = require("./report-by-hour/report-by-hour.component");
var report_by_estimate_component_1 = require("./report-by-estimate/report-by-estimate.component");
var routes = [
    { path: "", redirectTo: "/fleet", pathMatch: "full" },
    { path: "fleet", component: fleet_component_1.FleetComponent },
    { path: "newAircraft", component: new_aircraft_component_1.NewAircraftComponent },
    { path: "mritem/:id", component: maintenance_item_component_1.MaintenanceItemComponent },
    { path: "mrexpiry/:id", component: mr_expiry_component_1.MrExpiryComponent },
    { path: "aircraftDetails/:id", component: aircraft_details_component_1.AircraftDetailsComponent },
    { path: "engineTime/:id", component: engine_time_component_1.EngineTimeComponent },
    { path: "propTime/:id", component: prop_time_component_1.PropTimeComponent },
    { path: "clockTime/:id", component: clock_component_1.ClockComponent },
    { path: "reportByHour", component: report_by_hour_component_1.ReportByHourComponent },
    { path: "reportByEstimate", component: report_by_estimate_component_1.ReportByEstimateComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMkRBQXlEO0FBQ3pELGdGQUE2RTtBQUM3RSw0RkFBeUY7QUFDekYsNEZBQXlGO0FBQ3pGLHVFQUFvRTtBQUNwRSw2RUFBMEU7QUFDMUUsdUVBQW9FO0FBQ3BFLDJEQUF5RDtBQUl6RCxzRkFBa0Y7QUFDbEYsa0dBQThGO0FBRTlGLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFDckQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7SUFDeEQsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRTtJQUMzRCxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHVDQUFpQixFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxxREFBd0IsRUFBRTtJQUNwRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7SUFDMUQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSx1Q0FBaUIsRUFBRTtJQUN0RCxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLGdDQUFjLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFNBQVMsRUFBRSxnREFBcUIsRUFBRTtJQUMxRCxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsd0RBQXlCLEVBQUU7Q0FDckUsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBGbGVldENvbXBvbmVudCB9IGZyb20gXCIuL2ZsZWV0L2ZsZWV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTmV3QWlyY3JhZnRDb21wb25lbnQgfSBmcm9tIFwiLi9uZXctYWlyY3JhZnQvbmV3LWFpcmNyYWZ0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWlyY3JhZnREZXRhaWxzQ29tcG9uZW50IH0gZnJvbSBcIi4vYWlyY3JhZnQtZGV0YWlscy9haXJjcmFmdC1kZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWFpbnRlbmFuY2VJdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vbWFpbnRlbmFuY2UtaXRlbS9tYWludGVuYW5jZS1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTXJFeHBpcnlDb21wb25lbnQgfSBmcm9tIFwiLi9tci1leHBpcnkvbXItZXhwaXJ5LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRW5naW5lVGltZUNvbXBvbmVudCB9IGZyb20gXCIuL2VuZ2luZS10aW1lL2VuZ2luZS10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvcFRpbWVDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9wLXRpbWUvcHJvcC10aW1lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2xvY2tDb21wb25lbnQgfSBmcm9tIFwiLi9jbG9jay9jbG9jay5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXBvcnRCeUhvdXJDb21wb25lbnQgfSBmcm9tIFwiLi9yZXBvcnQtYnktaG91ci9yZXBvcnQtYnktaG91ci5jb21wb25lbnRcIjtcbmltcG9ydCB7IFJlcG9ydEJ5RXN0aW1hdGVDb21wb25lbnQgfSBmcm9tIFwiLi9yZXBvcnQtYnktZXN0aW1hdGUvcmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2ZsZWV0XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiZmxlZXRcIiwgY29tcG9uZW50OiBGbGVldENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJuZXdBaXJjcmFmdFwiLCBjb21wb25lbnQ6IE5ld0FpcmNyYWZ0Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcIm1yaXRlbS86aWRcIiwgY29tcG9uZW50OiBNYWludGVuYW5jZUl0ZW1Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwibXJleHBpcnkvOmlkXCIsIGNvbXBvbmVudDogTXJFeHBpcnlDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYWlyY3JhZnREZXRhaWxzLzppZFwiLCBjb21wb25lbnQ6IEFpcmNyYWZ0RGV0YWlsc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJlbmdpbmVUaW1lLzppZFwiLCBjb21wb25lbnQ6IEVuZ2luZVRpbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwicHJvcFRpbWUvOmlkXCIsIGNvbXBvbmVudDogUHJvcFRpbWVDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiY2xvY2tUaW1lLzppZFwiLCBjb21wb25lbnQ6IENsb2NrQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcInJlcG9ydEJ5SG91clwiLCBjb21wb25lbnQ6IFJlcG9ydEJ5SG91ckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJyZXBvcnRCeUVzdGltYXRlXCIsIGNvbXBvbmVudDogUmVwb3J0QnlFc3RpbWF0ZUNvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19