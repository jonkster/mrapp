"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var fleet_service_1 = require("../common/fleet.service");
var aircraft_service_1 = require("../common/aircraft.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcC10aW1lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInByb3AtdGltZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUUvRCx5REFBdUQ7QUFDdkQsK0RBQTZEO0FBUzdEO0lBSVEsMkJBQW9CLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVUsZUFBZ0MsRUFBVSxZQUEwQjtRQUEvSSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUNuSyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNRLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ1EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRU0sZ0NBQUksR0FBWDtRQUNRLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFuQkksaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQUtpQyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBMkIsa0NBQWUsRUFBd0IsNEJBQVk7T0FKOUosaUJBQWlCLENBb0I3QjtJQUFELHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEFpcmNyYWZ0LCBNYWludGVuYW5jZUl0ZW0gfSBmcm9tIFwiLi4vY29tbW9uL2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi4vY29tbW9uL2ZsZWV0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEFpcmNyYWZ0U2VydmljZSB9IGZyb20gXCIuLi9jb21tb24vYWlyY3JhZnQuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1wcm9wLXRpbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvcC10aW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvcC10aW1lLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvcFRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgICAgIHByaXZhdGUgYWlyY3JhZnQ6IEFpcmNyYWZ0O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgYWlyY3JhZnRTZXJ2aWNlOiBBaXJjcmFmdFNlcnZpY2UsIHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIG5nT25Jbml0KCkgeyBcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zW1wiaWRcIl07XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdCA9IHRoaXMuZmxlZXRTZXJ2aWNlLmdldEFpcmNyYWZ0KGlkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBjYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGVldFNlcnZpY2UudXBkYXRlQWlyY3JhZnQodGhpcy5haXJjcmFmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG59XG4iXX0=