"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var fleet_service_1 = require("../common/fleet.service");
//import { AircraftService } from "../common/aircraft.service";
var EngineTimeComponent = /** @class */ (function () {
    function EngineTimeComponent(route, routerExtensions, fleetService) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.fleetService = fleetService;
        this.twin = false;
    }
    EngineTimeComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.aircraft = this.fleetService.getAircraft(id);
        this.twin = this.aircraft.engineHrsAtMaint.length > 1;
    };
    /*setEngineTime(engine: Number, args) {
            let hrs = <TextField>args.object.text;
            this.aircraft.engineHrsAtMaint[engine] = parseInt(hrs);
    }

    setPropTime(prop: Number, args) {
            let hrs = <TextField>args.object.text;
            this.aircraft.propHrsAtMaint[prop] = parseInt(hrs);
    }*/
    EngineTimeComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    EngineTimeComponent.prototype.save = function () {
        this.fleetService.updateAircraft(this.aircraft);
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    EngineTimeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-engine-time',
            templateUrl: './engine-time.component.html',
            styleUrls: ['./engine-time.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, fleet_service_1.FleetService])
    ], EngineTimeComponent);
    return EngineTimeComponent;
}());
exports.EngineTimeComponent = EngineTimeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lLXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lLXRpbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0QseURBQXVEO0FBQ3ZELCtEQUErRDtBQVEvRDtJQUtRLDZCQUFvQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXJHLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSmpILFNBQUksR0FBWSxLQUFLLENBQUM7SUFLOUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDUSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFFSSxvQ0FBTSxHQUFiO1FBQ1EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRU0sa0NBQUksR0FBWDtRQUNRLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUEvQkksbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7eUNBTWlDLHVCQUFjLEVBQTRCLHlCQUFnQixFQUF3Qiw0QkFBWTtPQUxwSCxtQkFBbUIsQ0FnQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWlyY3JhZnQsIE1haW50ZW5hbmNlSXRlbSB9IGZyb20gXCIuLi9jb21tb24vYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9jb21tb24vZmxlZXQuc2VydmljZVwiO1xuLy9pbXBvcnQgeyBBaXJjcmFmdFNlcnZpY2UgfSBmcm9tIFwiLi4vY29tbW9uL2FpcmNyYWZ0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWVuZ2luZS10aW1lJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VuZ2luZS10aW1lLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZW5naW5lLXRpbWUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFbmdpbmVUaW1lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICAgICAgcHJpdmF0ZSB0d2luOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgcHJpdmF0ZSBhaXJjcmFmdDogQWlyY3JhZnQ7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkge1xuICAgICAgICB9XG5cbiAgICAgICAgbmdPbkluaXQoKSB7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0ID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0QWlyY3JhZnQoaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMudHdpbiA9IHRoaXMuYWlyY3JhZnQuZW5naW5lSHJzQXRNYWludC5sZW5ndGggPiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLypzZXRFbmdpbmVUaW1lKGVuZ2luZTogTnVtYmVyLCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhycyA9IDxUZXh0RmllbGQ+YXJncy5vYmplY3QudGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LmVuZ2luZUhyc0F0TWFpbnRbZW5naW5lXSA9IHBhcnNlSW50KGhycyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRQcm9wVGltZShwcm9wOiBOdW1iZXIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgaHJzID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdC50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQucHJvcEhyc0F0TWFpbnRbcHJvcF0gPSBwYXJzZUludChocnMpO1xuICAgICAgICB9Ki9cblxuICAgICAgICBwdWJsaWMgY2FuY2VsKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWlyY3JhZnREZXRhaWxzL1wiICsgdGhpcy5haXJjcmFmdC5faWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzYXZlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmxlZXRTZXJ2aWNlLnVwZGF0ZUFpcmNyYWZ0KHRoaXMuYWlyY3JhZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWlyY3JhZnREZXRhaWxzL1wiICsgdGhpcy5haXJjcmFmdC5faWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxufVxuIl19