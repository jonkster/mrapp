"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_component_1 = require("../app.component");
var fleet_service_1 = require("../common/fleet.service");
var ReportByEstimateComponent = /** @class */ (function () {
    function ReportByEstimateComponent(_changeDetectionRef, routerExtensions, appComponent, fleetService) {
        this._changeDetectionRef = _changeDetectionRef;
        this.routerExtensions = routerExtensions;
        this.appComponent = appComponent;
        this.fleetService = fleetService;
        this.readyToShow = false;
    }
    ReportByEstimateComponent.prototype.ngOnInit = function () {
        this.getBy();
    };
    ReportByEstimateComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        // a little delay so the spinner has time to show up
        setTimeout(function () {
            _this.readyToShow = true;
        }, 1000);
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
        return (Math.round(item.hoursLeft * 10) / 10).toString();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsc0RBQStEO0FBSS9ELDhEQUE0RjtBQUc1RixrREFBZ0Q7QUFFaEQseURBQXVEO0FBUXZEO0lBS0UsbUNBQW9CLG1CQUFzQyxFQUM1QixnQkFBa0MsRUFDbEMsWUFBMEIsRUFDMUIsWUFBMEI7UUFIcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTGhELGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBS2dDLENBQUM7SUFLN0QsNENBQVEsR0FBUjtRQUNNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTk8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsb0RBQW9EO1FBQ3BELFVBQVUsQ0FBQztZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBR00sK0NBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQiwyREFBMkQ7WUFDM0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVNLDhDQUFVLEdBQWpCLFVBQWtCLElBQVM7UUFDckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxJQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUNyRSxDQUFDO1lBQ08sRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztZQUNqRSxDQUFDO1FBQ1QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztRQUNqRSxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDM0IsQ0FBQztJQUVNLGdEQUFZLEdBQW5CLFVBQW9CLElBQVM7UUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDM0IsMERBQTBEO1lBQzFELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDbkIsQ0FBQztRQUNmLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6RCxDQUFDO0lBRU0seUNBQUssR0FBWjtRQUNRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFFTSx1Q0FBRyxHQUFWLFVBQVcsRUFBVSxFQUFFLEtBQVk7UUFDN0IsT0FBTyxFQUFFLENBQUMsTUFBTSxHQUFHLEtBQUssRUFBRSxDQUFDO1lBQ25CLEVBQUUsSUFBSSxHQUFHLENBQUM7UUFDbEIsQ0FBQztRQUNELE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVNLDBDQUFNLEdBQWI7UUFDTSxJQUFJLEdBQUcsR0FBVyxFQUFFLENBQUM7UUFDckIsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3JELEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDbEMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNsQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3ZDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDekMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3JDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsR0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEdBQUc7Z0JBQzVELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM1RyxDQUFDO1FBQ0QsR0FBRyxJQUFJLElBQUksQ0FBQztRQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSw2Q0FBUyxHQUFoQjtRQUNRLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQztJQUNoRCxDQUFDO0lBRUQsMENBQU0sR0FBTjtRQUNNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBL0VrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7c0VBQUM7SUFWdkUseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxXQUFXLEVBQUUscUNBQXFDO1lBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO1NBQ25ELENBQUM7eUNBTXlDLHdCQUFpQjtZQUNWLHlCQUFnQjtZQUNwQiw0QkFBWTtZQUNaLDRCQUFZO09BUjdDLHlCQUF5QixDQTJGckM7SUFBRCxnQ0FBQztDQUFBLEFBM0ZELElBMkZDO0FBM0ZZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuLi9jb21tb24vYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9jb21tb24vZmxlZXQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVwb3J0LWJ5LWVzdGltYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydEJ5RXN0aW1hdGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG4gIHB1YmxpYyBpdGVtczogYW55W107XG4gIHByaXZhdGUgcmVhZHlUb1Nob3cgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHsgfVxuXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QnkoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAvLyBhIGxpdHRsZSBkZWxheSBzbyB0aGUgc3Bpbm5lciBoYXMgdGltZSB0byBzaG93IHVwXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb1Nob3cgPSB0cnVlO1xuICAgICAgICAgIH0sIDEwMDApO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0RGF5c0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXlzTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmhvdXJzTGVmdCkgLyAyKSArIFwiIChlc3QpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5kYXlzTGVmdDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFc3REYXlzKGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmICgoaXRlbS5ob3Vyc0xlZnQgIT09IHVuZGVmaW5lZCkgJiYgIChpdGVtLmRheXNMZWZ0ICE9PSB1bmRlZmluZWQpKVxuICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKChpdGVtLmhvdXJzTGVmdC8yKSA8IGl0ZW0uZGF5c0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmhvdXJzTGVmdCkgLyAyKSArIFwiIChlc3QpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmRheXNMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChOdW1iZXIoaXRlbS5ob3Vyc0xlZnQpIC8gMikgKyBcIiAoZXN0KVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtLmRheXNMZWZ0O1xuICB9XG5cbiAgcHVibGljIGdldEhvdXJzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmhvdXJzTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmRheXNMZWZ0KSAqIDIpICsgXCIgKGVzdClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgICAgICAgICAgfVxuXHRcdHJldHVybiAoTWF0aC5yb3VuZChpdGVtLmhvdXJzTGVmdCAqIDEwKSAvIDEwKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIGdldEJ5KCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRFc3RpbWF0ZWREYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgcGFkKHN0OiBzdHJpbmcsIHdpZHRoOm51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHdoaWxlIChzdC5sZW5ndGggPCB3aWR0aCkge1xuICAgICAgICAgICAgICAgIHN0ICs9ICcgJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Q7XG4gIH1cblxuICBwdWJsaWMgbm90aWZ5KCkge1xuICAgICAgICBsZXQgdHh0OiBzdHJpbmcgPSAnJztcbiAgICAgICAgdHh0ID0gdGhpcy5wYWQoJzxiPkVzdGltYXRlZCBFeHBpcnk8L2I+JywgMjApICsgXCJcXG5cIjtcbiAgICAgICAgdHh0ICs9IHRoaXMucGFkKFwiUmVnb1wiLCAyMCkgKyAnfCc7XG4gICAgICAgIHR4dCArPSB0aGlzLnBhZChcIkl0ZW1cIiwgMjApICsgJ3wnO1xuICAgICAgICB0eHQgKz0gdGhpcy5wYWQoXCJEYXlzIExlZnRcIiwgMjApICsgJ3wnO1xuICAgICAgICB0eHQgKz0gdGhpcy5wYWQoXCJIb3VycyBMZWZ0XCIsIDIwKSArIFwiXFxuXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICB0eHQgKz0gdGhpcy5wYWQoaXRlbS5yZWdvLCAyMCkgICsgJ3wnICsgdGhpcy5wYWQoaXRlbS5pdGVtLCAyMCkgKyAnfCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFkKHRoaXMuZ2V0RGF5c0xlZnQoaXRlbSksIDIwKSAgKyAnfCcgKyB0aGlzLnBhZCh0aGlzLmdldEhvdXJzTGVmdChpdGVtKSwgMjApICsgXCJcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICB0eHQgKz0gXCJcXG5cIjtcbiAgICAgICAgdGhpcy5hcHBDb21wb25lbnQubm90aWZ5U29tZW9uZSh0eHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dpbmdCeSgpIDogc3RyaW5nIHtcbiAgICAgICAgICByZXR1cm4gJ1NvcnQgYnkgRXN0aW1hdGVkIEV4cGlyeSBPcmRlcic7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxufVxuIl19