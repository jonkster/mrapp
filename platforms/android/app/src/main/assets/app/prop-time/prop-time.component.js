"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var fleet_service_1 = require("../fleet/fleet.service");
var aircraft_service_1 = require("../aircraft-details/aircraft.service");
var PropTimeComponent = /** @class */ (function () {
    function PropTimeComponent(route, routerExtensions, aircraftService, fleetService) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.aircraftService = aircraftService;
        this.fleetService = fleetService;
    }
    PropTimeComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.aircraft = this.fleetService.getAircraft(id);
    };
    PropTimeComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    PropTimeComponent.prototype.save = function () {
        this.fleetService.updateAircraft(this.aircraft);
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    PropTimeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-prop-time',
            templateUrl: './prop-time.component.html',
            styleUrls: ['./prop-time.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, aircraft_service_1.AircraftService, fleet_service_1.FleetService])
    ], PropTimeComponent);
    return PropTimeComponent;
}());
exports.PropTimeComponent = PropTimeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3AtdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCx3REFBc0Q7QUFDdEQseUVBQXVFO0FBU3ZFO0lBSVEsMkJBQW9CLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVUsZUFBZ0MsRUFBVSxZQUEwQjtRQUEvSSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNuSyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNRLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ1EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRU0sZ0NBQUksR0FBWDtRQUNRLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFuQkksaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQUtpQyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBMkIsa0NBQWUsRUFBd0IsNEJBQVk7T0FKOUosaUJBQWlCLENBb0I3QjtJQUFELHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFpcmNyYWZ0LCBNYWludGVuYW5jZUl0ZW0gfSBmcm9tIFwiLi4vZmxlZXQvYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9mbGVldC9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdFNlcnZpY2UgfSBmcm9tIFwiLi4vYWlyY3JhZnQtZGV0YWlscy9haXJjcmFmdC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXByb3AtdGltZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9wLXRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9wLXRpbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9wVGltZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAgICAgcHJpdmF0ZSBhaXJjcmFmdDogQWlyY3JhZnQ7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBhaXJjcmFmdFNlcnZpY2U6IEFpcmNyYWZ0U2VydmljZSwgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkge1xuICAgICAgICB9XG5cbiAgICAgICAgbmdPbkluaXQoKSB7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0ID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0QWlyY3JhZnQoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGNhbmNlbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FpcmNyYWZ0RGV0YWlscy9cIiArIHRoaXMuYWlyY3JhZnQuX2lkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZWV0U2VydmljZS51cGRhdGVBaXJjcmFmdCh0aGlzLmFpcmNyYWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FpcmNyYWZ0RGV0YWlscy9cIiArIHRoaXMuYWlyY3JhZnQuX2lkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cbn1cbiJdfQ==