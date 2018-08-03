"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var fleet_service_1 = require("../fleet/fleet.service");
var aircraft_service_1 = require("../aircraft-details/aircraft.service");
var MaintenanceItemComponent = /** @class */ (function () {
    function MaintenanceItemComponent(route, routerExtensions, modal, aircraftService, fleetService) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.modal = modal;
        this.aircraftService = aircraftService;
        this.fleetService = fleetService;
        this.maintenance = {};
        this.limitTypeHours = true;
        this.limitTypeDate = false;
        this.prompt = "Hi THERE!";
        this.maintenance.maintenance = "Oil Change";
        this.maintenance.dueHrs = 0;
        this.maintenance.type = "hours";
        this.maintenance.dueDateTuple = [1970, 1, 1];
        this.maintenance.cleared = false;
    }
    MaintenanceItemComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    MaintenanceItemComponent.prototype.datePickLoad = function (ev) {
        //        let datePicker = <DatePicker>ev.object;
    };
    MaintenanceItemComponent.prototype.datePickSet = function (ev) {
        var datePicker = ev.object;
        this.maintenance.dueDateTuple = [datePicker.year, datePicker.month, datePicker.day];
    };
    MaintenanceItemComponent.prototype.setHourDate = function (type) {
        this.maintenance.type = type;
        if (type === 'hours') {
            this.limitTypeHours = true;
            this.limitTypeDate = false;
        }
        else if (type === 'date') {
            this.limitTypeHours = false;
            this.limitTypeDate = true;
        }
        else {
            this.limitTypeHours = true;
            this.limitTypeDate = true;
        }
    };
    MaintenanceItemComponent.prototype.save = function () {
        this.aircraft.maintenance.push(this.maintenance);
        this.fleetService.updateAircraft(this.aircraft);
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    MaintenanceItemComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.aircraft = this.fleetService.getAircraft(id);
        this.maintenance.maintenance = "Oil Change";
        this.maintenance.dueHrs = this.aircraft.hrsAtMaint - 50;
    };
    MaintenanceItemComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MaintenanceItemComponent.prototype, "prompt", void 0);
    MaintenanceItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-maintenance-item',
            templateUrl: './maintenance-item.component.html',
            styleUrls: ['./maintenance-item.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, dialogs_1.ModalDialogService, aircraft_service_1.AircraftService, fleet_service_1.FleetService])
    ], MaintenanceItemComponent);
    return MaintenanceItemComponent;
}());
exports.MaintenanceItemComponent = MaintenanceItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnRlbmFuY2UtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWludGVuYW5jZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBQy9ELG1FQUE2RTtBQUs3RSx3REFBc0Q7QUFDdEQseUVBQXVFO0FBU3ZFO0lBUVEsa0NBQW9CLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVUsS0FBeUIsRUFBVSxlQUFnQyxFQUFVLFlBQTBCO1FBQWxMLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKOUwsZ0JBQVcsR0FBcUMsRUFBRSxDQUFDO1FBQ25ELG1CQUFjLEdBQWEsSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQWEsS0FBSyxDQUFDO1FBR2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzFCLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVNLHlDQUFNLEdBQWI7UUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFTSwrQ0FBWSxHQUFuQixVQUFvQixFQUFFO1FBQ3RCLGlEQUFpRDtJQUNqRCxDQUFDO0lBRU0sOENBQVcsR0FBbEIsVUFBbUIsRUFBRTtRQUNiLElBQUksVUFBVSxHQUFlLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFHLFVBQVUsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFTSw4Q0FBVyxHQUFsQixVQUFtQixJQUFZO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFFLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7WUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQztJQUNULENBQUM7SUFFTSx1Q0FBSSxHQUFYO1FBQ1EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUMxRyxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNRLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVELDhDQUFXLEdBQVg7SUFDQSxDQUFDO0lBeERRO1FBQVIsWUFBSyxFQUFFOzs0REFBdUI7SUFGMUIsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsbUNBQW1DO1lBQ2hELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO1NBQ2pELENBQUM7eUNBU2lDLHVCQUFjLEVBQTRCLHlCQUFnQixFQUFpQiw0QkFBa0IsRUFBMkIsa0NBQWUsRUFBd0IsNEJBQVk7T0FSak0sd0JBQXdCLENBMkRwQztJQUFELCtCQUFDO0NBQUEsQUEzREQsSUEyREM7QUEzRFksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IEFpcmNyYWZ0LCBNYWludGVuYW5jZUl0ZW0gfSBmcm9tIFwiLi4vZmxlZXQvYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9mbGVldC9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdFNlcnZpY2UgfSBmcm9tIFwiLi4vYWlyY3JhZnQtZGV0YWlscy9haXJjcmFmdC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1haW50ZW5hbmNlLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFpbnRlbmFuY2UtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21haW50ZW5hbmNlLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWludGVuYW5jZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgICAgIEBJbnB1dCgpIHB1YmxpYyBwcm9tcHQ6IHN0cmluZztcbiAgICAgICAgcHJpdmF0ZSBhaXJjcmFmdDogQWlyY3JhZnQ7XG4gICAgICAgIHByaXZhdGUgbWFpbnRlbmFuY2U6IE1haW50ZW5hbmNlSXRlbSA9IDxNYWludGVuYW5jZUl0ZW0+e307XG4gICAgICAgIHByaXZhdGUgbGltaXRUeXBlSG91cnMgOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgcHJpdmF0ZSBsaW1pdFR5cGVEYXRlIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBhaXJjcmFmdFNlcnZpY2U6IEFpcmNyYWZ0U2VydmljZSwgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbXB0ID0gXCJIaSBUSEVSRSFcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLm1haW50ZW5hbmNlID0gXCJPaWwgQ2hhbmdlXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS5kdWVIcnMgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UudHlwZSA9IFwiaG91cnNcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLmR1ZURhdGVUdXBsZSA9IFsxOTcwLCAxLCAxXTtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLmNsZWFyZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBjYW5jZWwoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGRhdGVQaWNrTG9hZChldikge1xuICAgICAgICAvLyAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5ldi5vYmplY3Q7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZGF0ZVBpY2tTZXQoZXYpIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmV2Lm9iamVjdDtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLmR1ZURhdGVUdXBsZSA9IFtkYXRlUGlja2VyLnllYXIgLCBkYXRlUGlja2VyLm1vbnRoLCBkYXRlUGlja2VyLmRheV07XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2V0SG91ckRhdGUodHlwZTogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS50eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFR5cGVIb3VycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0VHlwZURhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlSG91cnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlSG91cnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFR5cGVEYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0Lm1haW50ZW5hbmNlLnB1c2godGhpcy5tYWludGVuYW5jZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGVldFNlcnZpY2UudXBkYXRlQWlyY3JhZnQodGhpcy5haXJjcmFmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbmdPbkluaXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRBaXJjcmFmdChpZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS5tYWludGVuYW5jZSA9IFwiT2lsIENoYW5nZVwiO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UuZHVlSHJzID0gdGhpcy5haXJjcmFmdC5ocnNBdE1haW50IC0gNTA7XG4gICAgICAgIH1cblxuICAgICAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgfVxufVxuIl19