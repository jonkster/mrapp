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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsc0RBQStEO0FBSS9ELDhEQUE0RjtBQUc1RixrREFBZ0Q7QUFFaEQseURBQXVEO0FBUXZEO0lBS0UsbUNBQW9CLG1CQUFzQyxFQUM1QixnQkFBa0MsRUFDbEMsWUFBMEIsRUFDMUIsWUFBMEI7UUFIcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTGhELGdCQUFXLEdBQUcsS0FBSyxDQUFDO0lBS2dDLENBQUM7SUFLN0QsNENBQVEsR0FBUjtRQUNNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsbURBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTk8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsb0RBQW9EO1FBQ3BELFVBQVUsQ0FBQztZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBR00sK0NBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUNkLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQiwyREFBMkQ7WUFDM0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbkMsQ0FBQztJQUVN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QUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzVHLENBQUM7UUFDRCxHQUFHLElBQUksSUFBSSxDQUFDO1FBQ1osSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVNLDZDQUFTLEdBQWhCO1FBQ1EsTUFBTSxDQUFDLGdDQUFnQyxDQUFDO0lBQ2hELENBQUM7SUFFRCwwQ0FBTSxHQUFOO1FBQ00sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUEvRWtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjtzRUFBQztJQVZ2RSx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7U0FDbkQsQ0FBQzt5Q0FNeUMsd0JBQWlCO1lBQ1YseUJBQWdCO1lBQ3BCLDRCQUFZO1lBQ1osNEJBQVk7T0FSN0MseUJBQXlCLENBMkZyQztJQUFELGdDQUFDO0NBQUEsQUEzRkQsSUEyRkM7QUEzRlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFpcmNyYWZ0IH0gZnJvbSBcIi4uL2NvbW1vbi9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbW1vbi9mbGVldC5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1yZXBvcnQtYnktZXN0aW1hdGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0QnlFc3RpbWF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgcHVibGljIGl0ZW1zOiBhbnlbXTtcbiAgcHJpdmF0ZSByZWFkeVRvU2hvdyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRCeSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIC8vIGEgbGl0dGxlIGRlbGF5IHNvIHRoZSBzcGlubmVyIGhhcyB0aW1lIHRvIHNob3cgdXBcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVRvU2hvdyA9IHRydWU7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gIH1cblxuXG4gIHB1YmxpYyBnZXREYXlzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRheXNMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKGl0ZW0uaG91cnNMZWZ0KSAvIDIpICsgXCIgKGVzdClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmRheXNMZWZ0O1xuICB9XG5cbiAgcHVibGljIGdldEVzdERheXMoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKChpdGVtLmhvdXJzTGVmdCAhPT0gdW5kZWZpbmVkKSAmJiAgKGl0ZW0uZGF5c0xlZnQgIT09IHVuZGVmaW5lZCkpXG4gICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoKGl0ZW0uaG91cnNMZWZ0LzIpIDwgaXRlbS5kYXlzTGVmdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKGl0ZW0uaG91cnNMZWZ0KSAvIDIpICsgXCIgKGVzdClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0uZGF5c0xlZnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmhvdXJzTGVmdCkgLyAyKSArIFwiIChlc3QpXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGl0ZW0uZGF5c0xlZnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0SG91cnNMZWZ0KGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaG91cnNMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vcmV0dXJuIE1hdGgucm91bmQoTnVtYmVyKGl0ZW0uZGF5c0xlZnQpICogMikgKyBcIiAoZXN0KVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICctJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaG91cnNMZWZ0O1xuICB9XG5cbiAgcHVibGljIGdldEJ5KCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRFc3RpbWF0ZWREYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgcGFkKHN0OiBzdHJpbmcsIHdpZHRoOm51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIHdoaWxlIChzdC5sZW5ndGggPCB3aWR0aCkge1xuICAgICAgICAgICAgICAgIHN0ICs9ICcgJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Q7XG4gIH1cblxuICBwdWJsaWMgbm90aWZ5KCkge1xuICAgICAgICBsZXQgdHh0OiBzdHJpbmcgPSAnJztcbiAgICAgICAgdHh0ID0gdGhpcy5wYWQoJzxiPkVzdGltYXRlZCBFeHBpcnk8L2I+JywgMjApICsgXCJcXG5cIjtcbiAgICAgICAgdHh0ICs9IHRoaXMucGFkKFwiUmVnb1wiLCAyMCkgKyAnfCc7XG4gICAgICAgIHR4dCArPSB0aGlzLnBhZChcIkl0ZW1cIiwgMjApICsgJ3wnO1xuICAgICAgICB0eHQgKz0gdGhpcy5wYWQoXCJEYXlzIExlZnRcIiwgMjApICsgJ3wnO1xuICAgICAgICB0eHQgKz0gdGhpcy5wYWQoXCJIb3VycyBMZWZ0XCIsIDIwKSArIFwiXFxuXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtc1tpXTtcbiAgICAgICAgICAgICAgICB0eHQgKz0gdGhpcy5wYWQoaXRlbS5yZWdvLCAyMCkgICsgJ3wnICsgdGhpcy5wYWQoaXRlbS5pdGVtLCAyMCkgKyAnfCcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFkKHRoaXMuZ2V0RGF5c0xlZnQoaXRlbSksIDIwKSAgKyAnfCcgKyB0aGlzLnBhZCh0aGlzLmdldEhvdXJzTGVmdChpdGVtKSwgMjApICsgXCJcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICB0eHQgKz0gXCJcXG5cIjtcbiAgICAgICAgdGhpcy5hcHBDb21wb25lbnQubm90aWZ5U29tZW9uZSh0eHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dpbmdCeSgpIDogc3RyaW5nIHtcbiAgICAgICAgICByZXR1cm4gJ1NvcnQgYnkgRXN0aW1hdGVkIEV4cGlyeSBPcmRlcic7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxufVxuIl19