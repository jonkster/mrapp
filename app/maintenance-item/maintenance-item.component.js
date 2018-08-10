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
        this.maintenance.maintenance = "";
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
    MaintenanceItemComponent.prototype.setOilChange = function (type) {
        if (type == 'recommended') {
            this.maintenance.maintenance = "recommended Oil Change";
        }
        else {
            this.maintenance.maintenance = "Oil Change";
        }
        this.maintenance.type = "hours";
        this.maintenance.dueHrs = this.aircraft.ttis + 50;
        this.limitTypeHours = true;
        this.limitTypeDate = false;
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
        //this.maintenance.maintenance = "Oil Change";
        //this.maintenance.dueHrs = this.aircraft.hrsAtMaint - 50;
    };
    MaintenanceItemComponent.prototype.ngOnDestroy = function () {
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnRlbmFuY2UtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWludGVuYW5jZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBQy9ELG1FQUE2RTtBQUs3RSx3REFBc0Q7QUFDdEQseUVBQXVFO0FBU3ZFO0lBT1Esa0NBQW9CLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVUsS0FBeUIsRUFBVSxlQUFnQyxFQUFVLFlBQTBCO1FBQWxMLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKOUwsZ0JBQVcsR0FBcUMsRUFBRSxDQUFDO1FBQ25ELG1CQUFjLEdBQWEsSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQWEsS0FBSyxDQUFDO1FBR2hDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVNLHlDQUFNLEdBQWI7UUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVB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Q0FRaUMsdUJBQWMsRUFBNEIseUJBQWdCLEVBQWlCLDRCQUFrQixFQUEyQixrQ0FBZSxFQUF3Qiw0QkFBWTtPQVBqTSx3QkFBd0IsQ0FxRXBDO0lBQUQsK0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcblxuaW1wb3J0IHsgQWlyY3JhZnQsIE1haW50ZW5hbmNlSXRlbSB9IGZyb20gXCIuLi9mbGVldC9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZsZWV0L2ZsZWV0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEFpcmNyYWZ0U2VydmljZSB9IGZyb20gXCIuLi9haXJjcmFmdC1kZXRhaWxzL2FpcmNyYWZ0LnNlcnZpY2VcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbWFpbnRlbmFuY2UtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tYWludGVuYW5jZS1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbWFpbnRlbmFuY2UtaXRlbS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE1haW50ZW5hbmNlSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICAgICAgcHJpdmF0ZSBhaXJjcmFmdDogQWlyY3JhZnQ7XG4gICAgICAgIHByaXZhdGUgbWFpbnRlbmFuY2U6IE1haW50ZW5hbmNlSXRlbSA9IDxNYWludGVuYW5jZUl0ZW0+e307XG4gICAgICAgIHByaXZhdGUgbGltaXRUeXBlSG91cnMgOiBib29sZWFuID0gdHJ1ZTtcbiAgICAgICAgcHJpdmF0ZSBsaW1pdFR5cGVEYXRlIDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBhaXJjcmFmdFNlcnZpY2U6IEFpcmNyYWZ0U2VydmljZSwgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UubWFpbnRlbmFuY2UgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UuZHVlSHJzID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLnR5cGUgPSBcImhvdXJzXCI7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS5kdWVEYXRlVHVwbGUgPSBbMTk3MCwgMSwgMV07XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS5jbGVhcmVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgY2FuY2VsKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWlyY3JhZnREZXRhaWxzL1wiICsgdGhpcy5haXJjcmFmdC5faWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBkYXRlUGlja0xvYWQoZXYpIHtcbiAgICAgICAgLy8gICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+ZXYub2JqZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGRhdGVQaWNrU2V0KGV2KSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5ldi5vYmplY3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS5kdWVEYXRlVHVwbGUgPSBbZGF0ZVBpY2tlci55ZWFyICwgZGF0ZVBpY2tlci5tb250aCwgZGF0ZVBpY2tlci5kYXldO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNldE9pbENoYW5nZSh0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSAncmVjb21tZW5kZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLm1haW50ZW5hbmNlID0gXCJyZWNvbW1lbmRlZCBPaWwgQ2hhbmdlXCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UubWFpbnRlbmFuY2UgPSBcIk9pbCBDaGFuZ2VcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS50eXBlID0gXCJob3Vyc1wiO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UuZHVlSHJzID0gdGhpcy5haXJjcmFmdC50dGlzICsgNTA7XG4gICAgICAgICAgICAgICAgdGhpcy5saW1pdFR5cGVIb3VycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5saW1pdFR5cGVEYXRlID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2V0SG91ckRhdGUodHlwZTogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS50eXBlID0gdHlwZTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFR5cGVIb3VycyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0VHlwZURhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlSG91cnMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlSG91cnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFR5cGVEYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0Lm1haW50ZW5hbmNlLnB1c2godGhpcy5tYWludGVuYW5jZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5mbGVldFNlcnZpY2UudXBkYXRlQWlyY3JhZnQodGhpcy5haXJjcmFmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbmdPbkluaXQoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRBaXJjcmFmdChpZCk7XG4gICAgICAgICAgICAgICAgLy90aGlzLm1haW50ZW5hbmNlLm1haW50ZW5hbmNlID0gXCJPaWwgQ2hhbmdlXCI7XG4gICAgICAgICAgICAgICAgLy90aGlzLm1haW50ZW5hbmNlLmR1ZUhycyA9IHRoaXMuYWlyY3JhZnQuaHJzQXRNYWludCAtIDUwO1xuICAgICAgICB9XG5cbiAgICAgICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIH1cbn1cbiJdfQ==