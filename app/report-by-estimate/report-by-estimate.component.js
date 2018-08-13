"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_component_1 = require("../app.component");
var fleet_service_1 = require("../fleet/fleet.service");
var ReportByEstimateComponent = /** @class */ (function () {
    function ReportByEstimateComponent(_changeDetectionRef, routerExtensions, appComponent, fleetService) {
        this._changeDetectionRef = _changeDetectionRef;
        this.routerExtensions = routerExtensions;
        this.appComponent = appComponent;
        this.fleetService = fleetService;
    }
    ReportByEstimateComponent.prototype.ngOnInit = function () {
        this.getBy();
    };
    ReportByEstimateComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    ReportByEstimateComponent.prototype.getDaysLeft = function (item) {
        if (item.daysLeft === undefined) {
            return "(est: " + Number(item.hoursLeft) / 2 + ")";
        }
        return item.daysLeft;
    };
    ReportByEstimateComponent.prototype.getHoursLeft = function (item) {
        if (item.hoursLeft === undefined) {
            return "(est: " + Number(item.daysLeft) * 2 + ")";
        }
        return item.hoursLeft;
    };
    ReportByEstimateComponent.prototype.getBy = function () {
        this.items = this.fleetService.getEstimatedDate();
    };
    ReportByEstimateComponent.prototype.pad = function (st, width) {
        while (st.length < width) {
            st += ' ';
        }
        return st;
    };
    ReportByEstimateComponent.prototype.notify = function () {
        var txt = '';
        txt = this.pad('<b>Estimated Expiry</b>', 20) + "\n";
        txt += this.pad("Rego", 20) + '|';
        txt += this.pad("Item", 20) + '|';
        txt += this.pad("Days Left", 20) + '|';
        txt += this.pad("Hours Left", 20) + "\n";
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            txt += this.pad(item.rego, 20) + '|' + this.pad(item.item, 20) + '|' +
                this.pad(this.getDaysLeft(item), 20) + '|' + this.pad(this.getHoursLeft(item), 20) + "\n";
        }
        txt += "\n";
        this.appComponent.notifySomeone(txt);
    };
    ReportByEstimateComponent.prototype.showingBy = function () {
        return 'Sort by Estimated Expiry Order';
    };
    ReportByEstimateComponent.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ReportByEstimateComponent.prototype, "drawerComponent", void 0);
    ReportByEstimateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-report-by-estimate',
            templateUrl: './report-by-estimate.component.html',
            styleUrls: ['./report-by-estimate.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            router_1.RouterExtensions,
            app_component_1.AppComponent,
            fleet_service_1.FleetService])
    ], ReportByEstimateComponent);
    return ReportByEstimateComponent;
}());
exports.ReportByEstimateComponent = ReportByEstimateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsc0RBQStEO0FBSS9ELDhEQUE0RjtBQUc1RixrREFBZ0Q7QUFFaEQsd0RBQXNEO0FBUXREO0lBSUUsbUNBQW9CLG1CQUFzQyxFQUM1QixnQkFBa0MsRUFDbEMsWUFBMEIsRUFDMUIsWUFBMEI7UUFIcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUs3RCw0Q0FBUSxHQUFSO1FBQ00sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxtREFBZSxHQUFmO1FBQ1EsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUdNLCtDQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDM0QsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFTSxnREFBWSxHQUFuQixVQUFvQixJQUFTO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1B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IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuLi9mbGVldC9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZsZWV0L2ZsZWV0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlcG9ydC1ieS1lc3RpbWF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBvcnQtYnktZXN0aW1hdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXBvcnQtYnktZXN0aW1hdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRCeUVzdGltYXRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICBwdWJsaWMgaXRlbXM6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRCeSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0RGF5c0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXlzTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoZXN0OiBcIiArIE51bWJlcihpdGVtLmhvdXJzTGVmdCkgLyAyICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmRheXNMZWZ0O1xuICB9XG5cbiAgcHVibGljIGdldEhvdXJzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmhvdXJzTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCIoZXN0OiBcIiArIE51bWJlcihpdGVtLmRheXNMZWZ0KSAqIDIgKyBcIilcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaG91cnNMZWZ0O1xuICB9XG5cbiAgcHVibGljIGdldEJ5KCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRFc3RpbWF0ZWREYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgcGFkKHN0OiBzdHJpbmcsIHdpZHRoOm51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHdoaWxlIChzdC5sZW5ndGggPCB3aWR0aCkge1xuICAgICAgICAgICAgICAgIHN0ICs9ICcgJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Q7XG4gIH1cblxuICBwdWJsaWMgbm90aWZ5KCkge1xuICAgICAgICBsZXQgdHh0OiBzdHJpbmcgPSAnJztcbiAgICAgICAgdHh0ID0gdGhpcy5wYWQoJzxiPkVzdGltYXRlZCBFeHBpcnk8L2I+JywgMjApICsgXCJcXG5cIjtcbiAgICAgICAgdHh0ICs9IHRoaXMucGFkKFwiUmVnb1wiLCAyMCkgKyAnfCc7XG4gICAgICAgIHR4dCArPSB0aGlzLnBhZChcIkl0ZW1cIiwgMjApICsgJ3wnO1xuICAgICAgICB0eHQgKz0gdGhpcy5wYWQoXCJEYXlzIExlZnRcIiwgMjApICsgJ3wnO1xuICAgICAgICB0eHQgKz0gdGhpcy5wYWQoXCJIb3VycyBMZWZ0XCIsIDIwKSArIFwiXFxuXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICB0eHQgKz0gdGhpcy5wYWQoaXRlbS5yZWdvLCAyMCkgICsgJ3wnICsgdGhpcy5wYWQoaXRlbS5pdGVtLCAyMCkgKyAnfCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFkKHRoaXMuZ2V0RGF5c0xlZnQoaXRlbSksIDIwKSAgKyAnfCcgKyB0aGlzLnBhZCh0aGlzLmdldEhvdXJzTGVmdChpdGVtKSwgMjApICsgXCJcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICB0eHQgKz0gXCJcXG5cIjtcbiAgICAgICAgdGhpcy5hcHBDb21wb25lbnQubm90aWZ5U29tZW9uZSh0eHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dpbmdCeSgpIDogc3RyaW5nIHtcbiAgICAgICAgICByZXR1cm4gJ1NvcnQgYnkgRXN0aW1hdGVkIEV4cGlyeSBPcmRlcic7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxufVxuIl19