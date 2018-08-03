"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var fleet_service_1 = require("../fleet/fleet.service");
//import * as dialogs from "ui/dialogs";
var dialogs_1 = require("ui/dialogs");
var NewAircraftComponent = /** @class */ (function () {
    function NewAircraftComponent(fleetService, routerExtensions) {
        this.fleetService = fleetService;
        this.routerExtensions = routerExtensions;
        this.aircraft = {
            _id: "",
            rego: "",
            ttis: 0,
            type: "",
            hrsAtMaint: 0,
            engineHrsAtMaint: [0],
            propHrsAtMaint: [0],
            annualDateTuple: [1, 1, 1970],
            clockTime: 0,
            clockOffset: 0,
            maintenance: [{
                    "maintenance": "",
                    "dueHrs": 0,
                    "dueDateTuple": [1970, 1, 1],
                    "type": "hours",
                    "cleared": false
                }]
        };
        this.canSave = false;
    }
    NewAircraftComponent.prototype.ngOnInit = function () { };
    NewAircraftComponent.prototype.checkRegoSet = function (ev) {
        if (this.aircraft.rego !== "") {
            if (!this.fleetService.regoExists(this.aircraft.rego)) {
                this.canSave = true;
                return;
            }
            else {
                this.warnDuplicate(this.aircraft.rego);
            }
        }
        this.canSave = false;
    };
    NewAircraftComponent.prototype.warnDuplicate = function (rego) {
        var options = {
            title: "Registration Entry",
            message: "An Aircraft with the registration '"
                + rego
                + "' already exists\nDelete old aircraft first.",
            okButtonText: "OK"
        };
        dialogs_1.alert(options);
    };
    NewAircraftComponent.prototype.save = function () {
        console.log("saving:", this.aircraft);
        this.fleetService.makeNewAircraft(this.aircraft);
        this.routerExtensions.navigate(["/fleet"], { clearHistory: true });
    };
    NewAircraftComponent.prototype.setAsTwin = function (ev) {
        if (ev.object.checked) {
            this.aircraft.engineHrsAtMaint = [0, 0];
            this.aircraft.propHrsAtMaint = [0, 0];
        }
        else {
            this.aircraft.engineHrsAtMaint = [0];
            this.aircraft.propHrsAtMaint = [0];
        }
    };
    NewAircraftComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-new-aircraft',
            templateUrl: './new-aircraft.component.html',
            styleUrls: ['./new-aircraft.component.scss']
        }),
        __metadata("design:paramtypes", [fleet_service_1.FleetService, router_1.RouterExtensions])
    ], NewAircraftComponent);
    return NewAircraftComponent;
}());
exports.NewAircraftComponent = NewAircraftComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWFpcmNyYWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1haXJjcmFmdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBRS9ELHdEQUFzRDtBQUV0RCx3Q0FBd0M7QUFDeEMsc0NBQW1DO0FBUW5DO0lBd0JFLDhCQUFvQixZQUEwQixFQUFVLGdCQUFrQztRQUF0RSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF0QmxGLGFBQVEsR0FBYTtZQUMzQixHQUFHLEVBQUUsRUFBRTtZQUNQLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxDQUFDO1lBQ2IsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQzdCLFNBQVMsRUFBRSxDQUFDO1lBQ1osV0FBVyxFQUFFLENBQUM7WUFDZCxXQUFXLEVBQUUsQ0FBRTtvQkFDSCxhQUFhLEVBQUUsRUFBRTtvQkFDakIsUUFBUSxFQUFFLENBQUM7b0JBQ1gsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVCLE1BQU0sRUFBRSxPQUFPO29CQUNmLFNBQVMsRUFBRSxLQUFLO2lCQUN2QixDQUFDO1NBQ1AsQ0FBQztRQUVNLFlBQU8sR0FBYSxLQUFLLENBQUM7SUFFNEQsQ0FBQztJQUUvRix1Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDJDQUFZLEdBQVosVUFBYSxFQUFFO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsTUFBTSxDQUFDO1lBQ2YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsSUFBWTtRQUNsQixJQUFJLE9BQU8sR0FBRztZQUNSLEtBQUssRUFBRSxvQkFBb0I7WUFDNUIsT0FBTyxFQUFFLHFDQUFxQztrQkFDbkMsSUFBSTtrQkFDSiw4Q0FBOEM7WUFDekQsWUFBWSxFQUFFLElBQUk7U0FDdEIsQ0FBQztRQUNGLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQUksR0FBSjtRQUNNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFBVSxFQUFFO1FBQ0osRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNULENBQUM7SUFqRVUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7eUNBeUJrQyw0QkFBWSxFQUE0Qix5QkFBZ0I7T0F4Qi9FLG9CQUFvQixDQW1FaEM7SUFBRCwyQkFBQztDQUFBLEFBbkVELElBbUVDO0FBbkVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWlyY3JhZnQgfSBmcm9tIFwiLi4vZmxlZXQvYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9mbGVldC9mbGVldC5zZXJ2aWNlXCI7XG5cbi8vaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbmV3LWFpcmNyYWZ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL25ldy1haXJjcmFmdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25ldy1haXJjcmFmdC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5ld0FpcmNyYWZ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIGFpcmNyYWZ0OiBBaXJjcmFmdCA9IHtcbiAgICBfaWQ6IFwiXCIsXG4gICAgcmVnbzogXCJcIixcbiAgICB0dGlzOiAwLFxuICAgIHR5cGU6IFwiXCIsXG4gICAgaHJzQXRNYWludDogMCxcbiAgICBlbmdpbmVIcnNBdE1haW50OiBbMF0sXG4gICAgcHJvcEhyc0F0TWFpbnQ6IFswXSxcbiAgICBhbm51YWxEYXRlVHVwbGU6IFsxLCAxLCAxOTcwXSxcbiAgICBjbG9ja1RpbWU6IDAsXG4gICAgY2xvY2tPZmZzZXQ6IDAsXG4gICAgbWFpbnRlbmFuY2U6IFsge1xuICAgICAgICAgICAgICAgIFwibWFpbnRlbmFuY2VcIjogXCJcIixcbiAgICAgICAgICAgICAgICBcImR1ZUhyc1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiZHVlRGF0ZVR1cGxlXCI6IFsxOTcwLCAxLCAxXSxcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJob3Vyc1wiLFxuICAgICAgICAgICAgICAgIFwiY2xlYXJlZFwiOiBmYWxzZVxuICAgICAgICB9XVxuICB9O1xuXG4gIHByaXZhdGUgY2FuU2F2ZSA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZsZWV0U2VydmljZTogRmxlZXRTZXJ2aWNlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgY2hlY2tSZWdvU2V0KGV2KSB7XG4gICAgICAgICAgaWYgKHRoaXMuYWlyY3JhZnQucmVnbyAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKCEgdGhpcy5mbGVldFNlcnZpY2UucmVnb0V4aXN0cyh0aGlzLmFpcmNyYWZ0LnJlZ28pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuU2F2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndhcm5EdXBsaWNhdGUodGhpcy5haXJjcmFmdC5yZWdvKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jYW5TYXZlID0gZmFsc2U7XG4gIH1cblxuICB3YXJuRHVwbGljYXRlKHJlZ286IHN0cmluZykge1xuICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlZ2lzdHJhdGlvbiBFbnRyeVwiLFxuICAgICAgICAgICAgICAgbWVzc2FnZTogXCJBbiBBaXJjcmFmdCB3aXRoIHRoZSByZWdpc3RyYXRpb24gJ1wiIFxuICAgICAgICAgICAgICAgICAgICAgICAgKyByZWdvIFxuICAgICAgICAgICAgICAgICAgICAgICAgKyBcIicgYWxyZWFkeSBleGlzdHNcXG5EZWxldGUgb2xkIGFpcmNyYWZ0IGZpcnN0LlwiLFxuICAgICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCJcbiAgICAgICAgICB9O1xuICAgICAgICAgIGFsZXJ0KG9wdGlvbnMpO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzYXZpbmc6XCIsIHRoaXMuYWlyY3JhZnQpO1xuICAgICAgICB0aGlzLmZsZWV0U2VydmljZS5tYWtlTmV3QWlyY3JhZnQodGhpcy5haXJjcmFmdCk7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvZmxlZXRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgc2V0QXNUd2luKGV2KSB7XG4gICAgICAgICAgaWYgKGV2Lm9iamVjdC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5lbmdpbmVIcnNBdE1haW50ID0gWzAsIDBdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQucHJvcEhyc0F0TWFpbnQgPSBbMCwgMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LmVuZ2luZUhyc0F0TWFpbnQgPSBbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5wcm9wSHJzQXRNYWludCA9IFswXTtcbiAgICAgICAgICB9XG4gIH1cblxufVxuIl19