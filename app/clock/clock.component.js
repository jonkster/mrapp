"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var fleet_service_1 = require("../common/fleet.service");
var aircraft_service_1 = require("../common/aircraft.service");
var ClockComponent = /** @class */ (function () {
    function ClockComponent(route, routerExtensions, aircraftService, fleetService) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.aircraftService = aircraftService;
        this.fleetService = fleetService;
    }
    ClockComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.aircraft = this.fleetService.getAircraft(id);
        this.aircraft.clockOffset = Number(this.aircraft.ttis) - Number(this.aircraft.clockTime);
    };
    ClockComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    ClockComponent.prototype.save = function () {
        this.aircraft.clockOffset = Number(this.aircraft.clockOffset);
        this.aircraft.ttis = Number(this.aircraft.ttis);
        this.aircraft.clockTime = Number(this.aircraft.clockTime);
        this.fleetService.updateAircraft(this.aircraft);
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    ClockComponent.prototype.updateOffset = function () {
        this.aircraft.clockOffset = Number(this.aircraft.clockOffset);
        this.aircraft.ttis = Number(this.aircraft.ttis);
        this.aircraft.clockTime = Number(this.aircraft.clockTime);
        this.aircraft.clockOffset = this.aircraft.ttis - this.aircraft.clockTime;
    };
    ClockComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-clock',
            templateUrl: './clock.component.html',
            styleUrls: ['./clock.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, aircraft_service_1.AircraftService, fleet_service_1.FleetService])
    ], ClockComponent);
    return ClockComponent;
}());
exports.ClockComponent = ClockComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFHL0QseURBQXVEO0FBQ3ZELCtEQUE2RDtBQVM3RDtJQUlRLHdCQUFvQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLGVBQWdDLEVBQVUsWUFBMEI7UUFBL0ksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDbkssQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDUSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFDUSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNRLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ2pGLENBQUM7SUE5QkksY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FLaUMsdUJBQWMsRUFBNEIseUJBQWdCLEVBQTJCLGtDQUFlLEVBQXdCLDRCQUFZO09BSjlKLGNBQWMsQ0ErQjFCO0lBQUQscUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdCwgTWFpbnRlbmFuY2VJdGVtIH0gZnJvbSBcIi4uL2NvbW1vbi9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbW1vbi9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdFNlcnZpY2UgfSBmcm9tIFwiLi4vY29tbW9uL2FpcmNyYWZ0LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtY2xvY2snLFxuICB0ZW1wbGF0ZVVybDogJy4vY2xvY2suY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jbG9jay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENsb2NrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgICAgICBwcml2YXRlIGFpcmNyYWZ0OiBBaXJjcmFmdDtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGFpcmNyYWZ0U2VydmljZTogQWlyY3JhZnRTZXJ2aWNlLCBwcml2YXRlIGZsZWV0U2VydmljZTogRmxlZXRTZXJ2aWNlKSB7XG4gICAgICAgIH1cblxuICAgICAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRBaXJjcmFmdChpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5jbG9ja09mZnNldCA9IE51bWJlcih0aGlzLmFpcmNyYWZ0LnR0aXMpIC0gTnVtYmVyKHRoaXMuYWlyY3JhZnQuY2xvY2tUaW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBjYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5jbG9ja09mZnNldCA9IE51bWJlcih0aGlzLmFpcmNyYWZ0LmNsb2NrT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LnR0aXMgPSBOdW1iZXIodGhpcy5haXJjcmFmdC50dGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LmNsb2NrVGltZSA9IE51bWJlcih0aGlzLmFpcmNyYWZ0LmNsb2NrVGltZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGVldFNlcnZpY2UudXBkYXRlQWlyY3JhZnQodGhpcy5haXJjcmFmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlT2Zmc2V0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQuY2xvY2tPZmZzZXQgPSBOdW1iZXIodGhpcy5haXJjcmFmdC5jbG9ja09mZnNldCk7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC50dGlzID0gTnVtYmVyKHRoaXMuYWlyY3JhZnQudHRpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5jbG9ja1RpbWUgPSBOdW1iZXIodGhpcy5haXJjcmFmdC5jbG9ja1RpbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQuY2xvY2tPZmZzZXQgPSB0aGlzLmFpcmNyYWZ0LnR0aXMgLSB0aGlzLmFpcmNyYWZ0LmNsb2NrVGltZTtcbiAgICAgICAgfVxufVxuIl19