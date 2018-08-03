"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fleet_service_1 = require("./fleet.service");
var router_1 = require("nativescript-angular/router");
var FleetComponent = /** @class */ (function () {
    function FleetComponent(routerExtensions, fleetService) {
        this.routerExtensions = routerExtensions;
        this.fleetService = fleetService;
    }
    FleetComponent.prototype.ngOnInit = function () {
        this.fleet = this.fleetService.getFleet();
    };
    FleetComponent.prototype.getDaysLeft = function (ac) {
        return this.fleetService.getDaysLeft(ac);
    };
    FleetComponent.prototype.getHrsLeft = function (ac) {
        return ac.hrsAtMaint - this.getTtis(ac);
    };
    FleetComponent.prototype.getTtis = function (ac) {
        return ac.clockTime + ac.clockOffset;
    };
    FleetComponent.prototype.addAircraft = function () {
        this.routerExtensions.navigate(["newAircraft"], { clearHistory: false });
    };
    FleetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-fleet',
            templateUrl: './fleet.component.html',
            styleUrls: ['./fleet.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, fleet_service_1.FleetService])
    ], FleetComponent);
    return FleetComponent;
}());
exports.FleetComponent = FleetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxlZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGlEQUErQztBQUMvQyxzREFBK0Q7QUFRL0Q7SUFHUSx3QkFBb0IsZ0JBQWtDLEVBQVUsWUFBMEI7UUFBdEUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUUvRixpQ0FBUSxHQUFSO1FBQ1EsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksRUFBWTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxFQUFZO1FBQ2YsTUFBTSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsZ0NBQU8sR0FBUCxVQUFRLEVBQVk7UUFDWixNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQzdDLENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ1EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQXZCSSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQUk0Qyx5QkFBZ0IsRUFBd0IsNEJBQVk7T0FIckYsY0FBYyxDQXlCMUI7SUFBRCxxQkFBQztDQUFBLEFBekJELElBeUJDO0FBekJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFpcmNyYWZ0IH0gZnJvbSBcIi4vYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuL2ZsZWV0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1mbGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGVldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZsZWV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmxlZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgICAgICBwcml2YXRlIGZsZWV0OiBBaXJjcmFmdFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgICAgICAgbmdPbkluaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGVldCA9IHRoaXMuZmxlZXRTZXJ2aWNlLmdldEZsZWV0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXREYXlzTGVmdChhYzogQWlyY3JhZnQpOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZsZWV0U2VydmljZS5nZXREYXlzTGVmdChhYyk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRIcnNMZWZ0KGFjOiBBaXJjcmFmdCk6IG51bWJlciB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjLmhyc0F0TWFpbnQgLSB0aGlzLmdldFR0aXMoYWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0VHRpcyhhYzogQWlyY3JhZnQpOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiBhYy5jbG9ja1RpbWUgKyBhYy5jbG9ja09mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZEFpcmNyYWZ0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJuZXdBaXJjcmFmdFwiXSwgeyBjbGVhckhpc3Rvcnk6IGZhbHNlIH0pO1xuICAgICAgICB9XG5cbn1cbiJdfQ==