"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var fleet_service_1 = require("../fleet/fleet.service");
var aircraft_service_1 = require("../aircraft-details/aircraft.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2xvY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFHL0Qsd0RBQXNEO0FBQ3RELHlFQUF1RTtBQVN2RTtJQUlRLHdCQUFvQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLGVBQWdDLEVBQVUsWUFBMEI7UUFBL0ksVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7SUFDbkssQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDUSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUcsQ0FBQztJQUVNLDZCQUFJLEdBQVg7UUFDUSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQscUNBQVksR0FBWjtRQUNRLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ2pGLENBQUM7SUE5QkksY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7U0FDdEMsQ0FBQzt5Q0FLaUMsdUJBQWMsRUFBNEIseUJBQWdCLEVBQTJCLGtDQUFlLEVBQXdCLDRCQUFZO09BSjlKLGNBQWMsQ0ErQjFCO0lBQUQscUJBQUM7Q0FBQSxBQS9CRCxJQStCQztBQS9CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdCwgTWFpbnRlbmFuY2VJdGVtIH0gZnJvbSBcIi4uL2ZsZWV0L2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi4vZmxlZXQvZmxlZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgQWlyY3JhZnRTZXJ2aWNlIH0gZnJvbSBcIi4uL2FpcmNyYWZ0LWRldGFpbHMvYWlyY3JhZnQuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1jbG9jaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jbG9jay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nsb2NrLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2xvY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgICAgIHByaXZhdGUgYWlyY3JhZnQ6IEFpcmNyYWZ0O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYWlyY3JhZnRTZXJ2aWNlOiBBaXJjcmFmdFNlcnZpY2UsIHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIG5nT25Jbml0KCkgeyBcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdCA9IHRoaXMuZmxlZXRTZXJ2aWNlLmdldEFpcmNyYWZ0KGlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LmNsb2NrT2Zmc2V0ID0gTnVtYmVyKHRoaXMuYWlyY3JhZnQudHRpcykgLSBOdW1iZXIodGhpcy5haXJjcmFmdC5jbG9ja1RpbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGNhbmNlbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FpcmNyYWZ0RGV0YWlscy9cIiArIHRoaXMuYWlyY3JhZnQuX2lkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LmNsb2NrT2Zmc2V0ID0gTnVtYmVyKHRoaXMuYWlyY3JhZnQuY2xvY2tPZmZzZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQudHRpcyA9IE51bWJlcih0aGlzLmFpcmNyYWZ0LnR0aXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQuY2xvY2tUaW1lID0gTnVtYmVyKHRoaXMuYWlyY3JhZnQuY2xvY2tUaW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZWV0U2VydmljZS51cGRhdGVBaXJjcmFmdCh0aGlzLmFpcmNyYWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FpcmNyYWZ0RGV0YWlscy9cIiArIHRoaXMuYWlyY3JhZnQuX2lkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVPZmZzZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5jbG9ja09mZnNldCA9IE51bWJlcih0aGlzLmFpcmNyYWZ0LmNsb2NrT2Zmc2V0KTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LnR0aXMgPSBOdW1iZXIodGhpcy5haXJjcmFmdC50dGlzKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LmNsb2NrVGltZSA9IE51bWJlcih0aGlzLmFpcmNyYWZ0LmNsb2NrVGltZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5jbG9ja09mZnNldCA9IHRoaXMuYWlyY3JhZnQudHRpcyAtIHRoaXMuYWlyY3JhZnQuY2xvY2tUaW1lO1xuICAgICAgICB9XG59XG4iXX0=