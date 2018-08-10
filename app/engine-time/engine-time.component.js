"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var fleet_service_1 = require("../fleet/fleet.service");
//import { AircraftService } from "../aircraft-details/aircraft.service";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lLXRpbWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZW5naW5lLXRpbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFpRDtBQUNqRCxzREFBK0Q7QUFFL0Qsd0RBQXNEO0FBQ3RELHlFQUF5RTtBQVF6RTtJQUtRLDZCQUFvQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLFlBQTBCO1FBQXJHLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSmpILFNBQUksR0FBWSxLQUFLLENBQUM7SUFLOUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDUSxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFFSSxvQ0FBTSxHQUFiO1FBQ1EsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRU0sa0NBQUksR0FBWDtRQUNRLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUEvQkksbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzVDLENBQUM7eUNBTWlDLHVCQUFjLEVBQTRCLHlCQUFnQixFQUF3Qiw0QkFBWTtPQUxwSCxtQkFBbUIsQ0FnQy9CO0lBQUQsMEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWlyY3JhZnQsIE1haW50ZW5hbmNlSXRlbSB9IGZyb20gXCIuLi9mbGVldC9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZsZWV0L2ZsZWV0LnNlcnZpY2VcIjtcbi8vaW1wb3J0IHsgQWlyY3JhZnRTZXJ2aWNlIH0gZnJvbSBcIi4uL2FpcmNyYWZ0LWRldGFpbHMvYWlyY3JhZnQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZW5naW5lLXRpbWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vZW5naW5lLXRpbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9lbmdpbmUtdGltZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEVuZ2luZVRpbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgICAgICBwcml2YXRlIHR3aW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBwcml2YXRlIGFpcmNyYWZ0OiBBaXJjcmFmdDtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIGZsZWV0U2VydmljZTogRmxlZXRTZXJ2aWNlKSB7XG4gICAgICAgIH1cblxuICAgICAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRBaXJjcmFmdChpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy50d2luID0gdGhpcy5haXJjcmFmdC5lbmdpbmVIcnNBdE1haW50Lmxlbmd0aCA+IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvKnNldEVuZ2luZVRpbWUoZW5naW5lOiBOdW1iZXIsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICBsZXQgaHJzID0gPFRleHRGaWVsZD5hcmdzLm9iamVjdC50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQuZW5naW5lSHJzQXRNYWludFtlbmdpbmVdID0gcGFyc2VJbnQoaHJzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFByb3BUaW1lKHByb3A6IE51bWJlciwgYXJncykge1xuICAgICAgICAgICAgICAgIGxldCBocnMgPSA8VGV4dEZpZWxkPmFyZ3Mub2JqZWN0LnRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5wcm9wSHJzQXRNYWludFtwcm9wXSA9IHBhcnNlSW50KGhycyk7XG4gICAgICAgIH0qL1xuXG4gICAgICAgIHB1YmxpYyBjYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGVldFNlcnZpY2UudXBkYXRlQWlyY3JhZnQodGhpcy5haXJjcmFmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG59XG4iXX0=