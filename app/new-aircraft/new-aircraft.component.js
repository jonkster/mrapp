"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var fleet_service_1 = require("../common/fleet.service");
//import * as dialogs from "ui/dialogs";
var dialogs_1 = require("ui/dialogs");
var NewAircraftComponent = /** @class */ (function () {
    function NewAircraftComponent(fleetService, routerExtensions) {
        this.fleetService = fleetService;
        this.routerExtensions = routerExtensions;
        this.aircraft = {
            _id: "",
            mcType: "aircraft",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWFpcmNyYWZ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5ldy1haXJjcmFmdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQStEO0FBRS9ELHlEQUF1RDtBQUV2RCx3Q0FBd0M7QUFDeEMsc0NBQW1DO0FBUW5DO0lBeUJFLDhCQUFvQixZQUEwQixFQUFVLGdCQUFrQztRQUF0RSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUF2QmxGLGFBQVEsR0FBYTtZQUMzQixHQUFHLEVBQUUsRUFBRTtZQUNQLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLFVBQVUsRUFBRSxDQUFDO1lBQ2IsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckIsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLGVBQWUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQzdCLFNBQVMsRUFBRSxDQUFDO1lBQ1osV0FBVyxFQUFFLENBQUM7WUFDZCxXQUFXLEVBQUUsQ0FBRTtvQkFDSCxhQUFhLEVBQUUsRUFBRTtvQkFDakIsUUFBUSxFQUFFLENBQUM7b0JBQ1gsY0FBYyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVCLE1BQU0sRUFBRSxPQUFPO29CQUNmLFNBQVMsRUFBRSxLQUFLO2lCQUN2QixDQUFDO1NBQ1AsQ0FBQztRQUVNLFlBQU8sR0FBYSxLQUFLLENBQUM7SUFFNEQsQ0FBQztJQUUvRix1Q0FBUSxHQUFSLGNBQWEsQ0FBQztJQUVkLDJDQUFZLEdBQVosVUFBYSxFQUFFO1FBQ1AsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDcEIsTUFBTSxDQUFDO1lBQ2YsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QyxDQUFDO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRCw0Q0FBYSxHQUFiLFVBQWMsSUFBWTtRQUNsQixJQUFJLE9BQU8sR0FBRztZQUNSLEtBQUssRUFBRSxvQkFBb0I7WUFDNUIsT0FBTyxFQUFFLHFDQUFxQztrQkFDbkMsSUFBSTtrQkFDSiw4Q0FBOEM7WUFDekQsWUFBWSxFQUFFLElBQUk7U0FDdEIsQ0FBQztRQUNGLGVBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQUksR0FBSjtRQUNNLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHdDQUFTLEdBQVQsVUFBVSxFQUFFO1FBQ0osRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNULENBQUM7SUFsRVUsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQzdDLENBQUM7eUNBMEJrQyw0QkFBWSxFQUE0Qix5QkFBZ0I7T0F6Qi9FLG9CQUFvQixDQW9FaEM7SUFBRCwyQkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQWlyY3JhZnQgfSBmcm9tIFwiLi4vY29tbW9uL2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi4vY29tbW9uL2ZsZWV0LnNlcnZpY2VcIjtcblxuLy9pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1uZXctYWlyY3JhZnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vbmV3LWFpcmNyYWZ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmV3LWFpcmNyYWZ0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmV3QWlyY3JhZnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgYWlyY3JhZnQ6IEFpcmNyYWZ0ID0ge1xuICAgIF9pZDogXCJcIixcbiAgICBtY1R5cGU6IFwiYWlyY3JhZnRcIixcbiAgICByZWdvOiBcIlwiLFxuICAgIHR0aXM6IDAsXG4gICAgdHlwZTogXCJcIixcbiAgICBocnNBdE1haW50OiAwLFxuICAgIGVuZ2luZUhyc0F0TWFpbnQ6IFswXSxcbiAgICBwcm9wSHJzQXRNYWludDogWzBdLFxuICAgIGFubnVhbERhdGVUdXBsZTogWzEsIDEsIDE5NzBdLFxuICAgIGNsb2NrVGltZTogMCxcbiAgICBjbG9ja09mZnNldDogMCxcbiAgICBtYWludGVuYW5jZTogWyB7XG4gICAgICAgICAgICAgICAgXCJtYWludGVuYW5jZVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgIFwiZHVlSHJzXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJkdWVEYXRlVHVwbGVcIjogWzE5NzAsIDEsIDFdLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImhvdXJzXCIsXG4gICAgICAgICAgICAgICAgXCJjbGVhcmVkXCI6IGZhbHNlXG4gICAgICAgIH1dXG4gIH07XG5cbiAgcHJpdmF0ZSBjYW5TYXZlIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykgeyB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuICBjaGVja1JlZ29TZXQoZXYpIHtcbiAgICAgICAgICBpZiAodGhpcy5haXJjcmFmdC5yZWdvICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISB0aGlzLmZsZWV0U2VydmljZS5yZWdvRXhpc3RzKHRoaXMuYWlyY3JhZnQucmVnbykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5TYXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2FybkR1cGxpY2F0ZSh0aGlzLmFpcmNyYWZ0LnJlZ28pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNhblNhdmUgPSBmYWxzZTtcbiAgfVxuXG4gIHdhcm5EdXBsaWNhdGUocmVnbzogc3RyaW5nKSB7XG4gICAgICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVnaXN0cmF0aW9uIEVudHJ5XCIsXG4gICAgICAgICAgICAgICBtZXNzYWdlOiBcIkFuIEFpcmNyYWZ0IHdpdGggdGhlIHJlZ2lzdHJhdGlvbiAnXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICArIHJlZ28gXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiJyBhbHJlYWR5IGV4aXN0c1xcbkRlbGV0ZSBvbGQgYWlyY3JhZnQgZmlyc3QuXCIsXG4gICAgICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgYWxlcnQob3B0aW9ucyk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInNhdmluZzpcIiwgdGhpcy5haXJjcmFmdCk7XG4gICAgICAgIHRoaXMuZmxlZXRTZXJ2aWNlLm1ha2VOZXdBaXJjcmFmdCh0aGlzLmFpcmNyYWZ0KTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9mbGVldFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gIH1cblxuICBzZXRBc1R3aW4oZXYpIHtcbiAgICAgICAgICBpZiAoZXYub2JqZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LmVuZ2luZUhyc0F0TWFpbnQgPSBbMCwgMF07XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5wcm9wSHJzQXRNYWludCA9IFswLCAwXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQuZW5naW5lSHJzQXRNYWludCA9IFswXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LnByb3BIcnNBdE1haW50ID0gWzBdO1xuICAgICAgICAgIH1cbiAgfVxuXG59XG4iXX0=