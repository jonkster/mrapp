"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var fleet_service_1 = require("../common/fleet.service");
var aircraft_service_1 = require("../common/aircraft.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbnRlbmFuY2UtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYWludGVuYW5jZS1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBQy9ELG1FQUE2RTtBQUs3RSx5REFBdUQ7QUFDdkQsK0RBQTZEO0FBUzdEO0lBT1Esa0NBQW9CLEtBQXFCLEVBQVUsZ0JBQWtDLEVBQVUsS0FBeUIsRUFBVSxlQUFnQyxFQUFVLFlBQTBCO1FBQWxMLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQW9CO1FBQVUsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFKOUwsZ0JBQVcsR0FBcUMsRUFBRSxDQUFDO1FBQ25ELG1CQUFjLEdBQWEsSUFBSSxDQUFDO1FBQ2hDLGtCQUFhLEdBQWEsS0FBSyxDQUFDO1FBR2hDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekMsQ0FBQztJQUVNLHlDQUFNLEdBQWI7UUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVB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Q0FRaUMsdUJBQWMsRUFBNEIseUJBQWdCLEVBQWlCLDRCQUFrQixFQUEyQixrQ0FBZSxFQUF3Qiw0QkFBWTtPQVBqTSx3QkFBd0IsQ0FxRXBDO0lBQUQsK0JBQUM7Q0FBQSxBQXJFRCxJQXFFQztBQXJFWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9kaXJlY3RpdmVzL2RpYWxvZ3NcIjtcbmltcG9ydCB7IERhdGVQaWNrZXIgfSBmcm9tIFwidWkvZGF0ZS1waWNrZXJcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcblxuaW1wb3J0IHsgQWlyY3JhZnQsIE1haW50ZW5hbmNlSXRlbSB9IGZyb20gXCIuLi9jb21tb24vYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9jb21tb24vZmxlZXQuc2VydmljZVwiO1xuaW1wb3J0IHsgQWlyY3JhZnRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbW1vbi9haXJjcmFmdC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1haW50ZW5hbmNlLWl0ZW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbWFpbnRlbmFuY2UtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL21haW50ZW5hbmNlLWl0ZW0uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNYWludGVuYW5jZUl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgICAgIHByaXZhdGUgYWlyY3JhZnQ6IEFpcmNyYWZ0O1xuICAgICAgICBwcml2YXRlIG1haW50ZW5hbmNlOiBNYWludGVuYW5jZUl0ZW0gPSA8TWFpbnRlbmFuY2VJdGVtPnt9O1xuICAgICAgICBwcml2YXRlIGxpbWl0VHlwZUhvdXJzIDogYm9vbGVhbiA9IHRydWU7XG4gICAgICAgIHByaXZhdGUgbGltaXRUeXBlRGF0ZSA6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLCBwcml2YXRlIG1vZGFsOiBNb2RhbERpYWxvZ1NlcnZpY2UsIHByaXZhdGUgYWlyY3JhZnRTZXJ2aWNlOiBBaXJjcmFmdFNlcnZpY2UsIHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLm1haW50ZW5hbmNlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLmR1ZUhycyA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS50eXBlID0gXCJob3Vyc1wiO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UuZHVlRGF0ZVR1cGxlID0gWzE5NzAsIDEsIDFdO1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UuY2xlYXJlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGNhbmNlbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FpcmNyYWZ0RGV0YWlscy9cIiArIHRoaXMuYWlyY3JhZnQuX2lkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZGF0ZVBpY2tMb2FkKGV2KSB7XG4gICAgICAgIC8vICAgICAgICBsZXQgZGF0ZVBpY2tlciA9IDxEYXRlUGlja2VyPmV2Lm9iamVjdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBkYXRlUGlja1NldChldikge1xuICAgICAgICAgICAgICAgIGxldCBkYXRlUGlja2VyID0gPERhdGVQaWNrZXI+ZXYub2JqZWN0O1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UuZHVlRGF0ZVR1cGxlID0gW2RhdGVQaWNrZXIueWVhciAsIGRhdGVQaWNrZXIubW9udGgsIGRhdGVQaWNrZXIuZGF5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzZXRPaWxDaGFuZ2UodHlwZTogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3JlY29tbWVuZGVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWludGVuYW5jZS5tYWludGVuYW5jZSA9IFwicmVjb21tZW5kZWQgT2lsIENoYW5nZVwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLm1haW50ZW5hbmNlID0gXCJPaWwgQ2hhbmdlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UudHlwZSA9IFwiaG91cnNcIjtcbiAgICAgICAgICAgICAgICB0aGlzLm1haW50ZW5hbmNlLmR1ZUhycyA9IHRoaXMuYWlyY3JhZnQudHRpcyArIDUwO1xuICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlSG91cnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlRGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNldEhvdXJEYXRlKHR5cGU6IHN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFpbnRlbmFuY2UudHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdob3VycycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlSG91cnMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saW1pdFR5cGVEYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICAodHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0VHlwZUhvdXJzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0VHlwZURhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpbWl0VHlwZUhvdXJzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGltaXRUeXBlRGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHNhdmUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5haXJjcmFmdC5tYWludGVuYW5jZS5wdXNoKHRoaXMubWFpbnRlbmFuY2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmxlZXRTZXJ2aWNlLnVwZGF0ZUFpcmNyYWZ0KHRoaXMuYWlyY3JhZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWlyY3JhZnREZXRhaWxzL1wiICsgdGhpcy5haXJjcmFmdC5faWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5nT25Jbml0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0ID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0QWlyY3JhZnQoaWQpO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5tYWludGVuYW5jZS5tYWludGVuYW5jZSA9IFwiT2lsIENoYW5nZVwiO1xuICAgICAgICAgICAgICAgIC8vdGhpcy5tYWludGVuYW5jZS5kdWVIcnMgPSB0aGlzLmFpcmNyYWZ0Lmhyc0F0TWFpbnQgLSA1MDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB9XG59XG4iXX0=