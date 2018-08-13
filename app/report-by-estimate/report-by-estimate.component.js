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
            //return Math.round(Number(item.hoursLeft) / 2) + " (est)";
            return '-';
        }
        return item.daysLeft;
    };
    ReportByEstimateComponent.prototype.getEstDays = function (item) {
        if ((item.hoursLeft !== undefined) && (item.daysLeft !== undefined)) {
            if ((item.hoursLeft / 2) < item.daysLeft) {
                return Math.round(Number(item.hoursLeft) / 2) + " (est)";
            }
        }
        if (item.daysLeft === undefined) {
            return Math.round(Number(item.hoursLeft) / 2) + " (est)";
        }
        return item.daysLeft;
    };
    ReportByEstimateComponent.prototype.getHoursLeft = function (item) {
        if (item.hoursLeft === undefined) {
            //return Math.round(Number(item.daysLeft) * 2) + " (est)";
            return '-';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsc0RBQStEO0FBSS9ELDhEQUE0RjtBQUc1RixrREFBZ0Q7QUFFaEQsd0RBQXNEO0FBUXREO0lBSUUsbUNBQW9CLG1CQUFzQyxFQUM1QixnQkFBa0MsRUFDbEMsWUFBMEIsRUFDMUIsWUFBMEI7UUFIcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUs3RCw0Q0FBUSxHQUFSO1FBQ00sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxtREFBZSxHQUFmO1FBQ1EsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUdNLCtDQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsMkRBQTJEO1lBQzNELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ25DLENBQUM7SUFFTSw4Q0FBVSxHQUFqQixVQUFrQixJQUFTO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsSUFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FDckUsQ0FBQztZQUNPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7WUFDakUsQ0FBQztRQUNULENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUM7UUFDakUsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFTSxnREFBWSxHQUFuQixVQUFvQixJQUFTO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzNCLDBEQUEwRDtZQUMxRCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ25CLENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNwQyxDQUFDO0lBRU0seUNBQUssR0FBWjtRQUNRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFTSx1Q0FBRyxHQUFWLFVBQVcsRUFBVSxFQUFFLEtBQVk7UUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQ25CLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDbEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBDQUFNLEdBQWI7UUFDTSxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7UUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUc7Z0JBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RyxDQUFDO1FBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSw2Q0FBUyxHQUFoQjtRQUNRLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztJQUNoRCxDQUFDO0lBRUQsMENBQU0sR0FBTjtRQUNNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBM0VrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7c0VBQUM7SUFUdkUseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ25ELENBQUM7eUNBS3lDLHdCQUFpQjtZQUNWLHlCQUFnQjtZQUNwQiw0QkFBWTtZQUNaLDRCQUFZO09BUDdDLHlCQUF5QixDQXNGckM7SUFBRCxnQ0FBQztDQUFBLEFBdEZELElBc0ZDO0FBdEZZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuLi9mbGVldC9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZsZWV0L2ZsZWV0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlcG9ydC1ieS1lc3RpbWF0ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBvcnQtYnktZXN0aW1hdGUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXBvcnQtYnktZXN0aW1hdGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRCeUVzdGltYXRlQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICBwdWJsaWMgaXRlbXM6IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRCeSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0RGF5c0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXlzTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmhvdXJzTGVmdCkgLyAyKSArIFwiIChlc3QpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5kYXlzTGVmdDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFc3REYXlzKGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmICgoaXRlbS5ob3Vyc0xlZnQgIT09IHVuZGVmaW5lZCkgJiYgIChpdGVtLmRheXNMZWZ0ICE9PSB1bmRlZmluZWQpKVxuICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKChpdGVtLmhvdXJzTGVmdC8yKSA8IGl0ZW0uZGF5c0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmhvdXJzTGVmdCkgLyAyKSArIFwiIChlc3QpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmRheXNMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChOdW1iZXIoaXRlbS5ob3Vyc0xlZnQpIC8gMikgKyBcIiAoZXN0KVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtLmRheXNMZWZ0O1xuICB9XG5cbiAgcHVibGljIGdldEhvdXJzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmhvdXJzTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmRheXNMZWZ0KSAqIDIpICsgXCIgKGVzdClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmhvdXJzTGVmdDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRCeSgpIHtcbiAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0RXN0aW1hdGVkRGF0ZSgpO1xuICB9XG5cbiAgcHVibGljIHBhZChzdDogc3RyaW5nLCB3aWR0aDpudW1iZXIpOiBzdHJpbmcge1xuICAgICAgICB3aGlsZSAoc3QubGVuZ3RoIDwgd2lkdGgpIHtcbiAgICAgICAgICAgICAgICBzdCArPSAnICc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0O1xuICB9XG5cbiAgcHVibGljIG5vdGlmeSgpIHtcbiAgICAgICAgbGV0IHR4dDogc3RyaW5nID0gJyc7XG4gICAgICAgIHR4dCA9IHRoaXMucGFkKCc8Yj5Fc3RpbWF0ZWQgRXhwaXJ5PC9iPicsIDIwKSArIFwiXFxuXCI7XG4gICAgICAgIHR4dCArPSB0aGlzLnBhZChcIlJlZ29cIiwgMjApICsgJ3wnO1xuICAgICAgICB0eHQgKz0gdGhpcy5wYWQoXCJJdGVtXCIsIDIwKSArICd8JztcbiAgICAgICAgdHh0ICs9IHRoaXMucGFkKFwiRGF5cyBMZWZ0XCIsIDIwKSArICd8JztcbiAgICAgICAgdHh0ICs9IHRoaXMucGFkKFwiSG91cnMgTGVmdFwiLCAyMCkgKyBcIlxcblwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgdHh0ICs9IHRoaXMucGFkKGl0ZW0ucmVnbywgMjApICArICd8JyArIHRoaXMucGFkKGl0ZW0uaXRlbSwgMjApICsgJ3wnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZCh0aGlzLmdldERheXNMZWZ0KGl0ZW0pLCAyMCkgICsgJ3wnICsgdGhpcy5wYWQodGhpcy5nZXRIb3Vyc0xlZnQoaXRlbSksIDIwKSArIFwiXFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgdHh0ICs9IFwiXFxuXCI7XG4gICAgICAgIHRoaXMuYXBwQ29tcG9uZW50Lm5vdGlmeVNvbWVvbmUodHh0KTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93aW5nQnkoKSA6IHN0cmluZyB7XG4gICAgICAgICAgcmV0dXJuICdTb3J0IGJ5IEVzdGltYXRlZCBFeHBpcnkgT3JkZXInO1xuICB9XG5cbiAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG5cbn1cbiJdfQ==