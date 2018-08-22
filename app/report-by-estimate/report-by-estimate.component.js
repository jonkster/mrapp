"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_component_1 = require("../app.component");
var fleet_service_1 = require("../common/fleet.service");
var sprintf_js_1 = require("../node_modules/sprintf-js");
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
    ReportByEstimateComponent.prototype.notify = function () {
        var today = this.appComponent.niceDate(new Date());
        var txt = sprintf_js_1.sprintf("--- Upcoming Maintenance %-10s ---\n %s \n", this.showingBy(), today);
        txt += sprintf_js_1.sprintf("%-6s |  %-40s|%-10s |%-10s\n", "Rego", "Item", "Days Left", "Hrs Left");
        txt += "___________________________________________________________________________\n";
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            txt += sprintf_js_1.sprintf("%6s |  %-40s|%10s |%10s\n", item.rego, item.item, this.getDaysLeft(item), this.getHoursLeft(item));
        }
        txt += "\n";
        txt += "___________________________________________________________________________\n";
        var subj = 'Curtis Aviation Estimated Order Maintenance Report (' + today + ')';
        var hdg = sprintf_js_1.sprintf("Upcoming Maintenance Report, %-10s, (%s)", this.showingBy(), today);
        this.appComponent.notifySomeone(subj, hdg, txt);
    };
    ReportByEstimateComponent.prototype.showingBy = function () {
        return 'Sorted by Estimated Expiry Order';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsc0RBQStEO0FBSS9ELDhEQUE0RjtBQUc1RixrREFBZ0Q7QUFFaEQseURBQXVEO0FBQ3ZELHlEQUFtRDtBQVFuRDtJQUtFLG1DQUFvQixtQkFBc0MsRUFDNUIsZ0JBQWtDLEVBQ2xDLFlBQTBCLEVBQzFCLFlBQTBCO1FBSHBDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDNUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUxoRCxnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUtnQyxDQUFDO0lBSzdELDRDQUFRLEdBQVI7UUFDTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELG1EQUFlLEdBQWY7UUFBQSxpQkFPQztRQU5PLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLG9EQUFvRDtRQUNwRCxVQUFVLENBQUM7WUFDRCxLQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUNsQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUdNLCtDQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDMUIsMkRBQTJEO1lBQzNELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDbkIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lB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QUVNLDZDQUFTLEdBQWhCO1FBQ1EsTUFBTSxDQUFDLGtDQUFrQyxDQUFDO0lBQ2xELENBQUM7SUFFRCwwQ0FBTSxHQUFOO1FBQ00sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUF4RWtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjtzRUFBQztJQVZ2RSx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7U0FDbkQsQ0FBQzt5Q0FNeUMsd0JBQWlCO1lBQ1YseUJBQWdCO1lBQ3BCLDRCQUFZO1lBQ1osNEJBQVk7T0FSN0MseUJBQXlCLENBb0ZyQztJQUFELGdDQUFDO0NBQUEsQUFwRkQsSUFvRkM7QUFwRlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFpcmNyYWZ0IH0gZnJvbSBcIi4uL2NvbW1vbi9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbW1vbi9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQge3NwcmludGZ9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvc3ByaW50Zi1qc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVwb3J0LWJ5LWVzdGltYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydEJ5RXN0aW1hdGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG4gIHB1YmxpYyBpdGVtczogYW55W107XG4gIHByaXZhdGUgcmVhZHlUb1Nob3cgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHsgfVxuXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QnkoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAvLyBhIGxpdHRsZSBkZWxheSBzbyB0aGUgc3Bpbm5lciBoYXMgdGltZSB0byBzaG93IHVwXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb1Nob3cgPSB0cnVlO1xuICAgICAgICAgIH0sIDEwMDApO1xuICB9XG5cblxuICBwdWJsaWMgZ2V0RGF5c0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXlzTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmhvdXJzTGVmdCkgLyAyKSArIFwiIChlc3QpXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5kYXlzTGVmdDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFc3REYXlzKGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmICgoaXRlbS5ob3Vyc0xlZnQgIT09IHVuZGVmaW5lZCkgJiYgIChpdGVtLmRheXNMZWZ0ICE9PSB1bmRlZmluZWQpKVxuICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKChpdGVtLmhvdXJzTGVmdC8yKSA8IGl0ZW0uZGF5c0xlZnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmhvdXJzTGVmdCkgLyAyKSArIFwiIChlc3QpXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtLmRheXNMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChOdW1iZXIoaXRlbS5ob3Vyc0xlZnQpIC8gMikgKyBcIiAoZXN0KVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpdGVtLmRheXNMZWZ0O1xuICB9XG5cbiAgcHVibGljIGdldEhvdXJzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmhvdXJzTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JldHVybiBNYXRoLnJvdW5kKE51bWJlcihpdGVtLmRheXNMZWZ0KSAqIDIpICsgXCIgKGVzdClcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgICAgICAgICAgfVxuXHRcdHJldHVybiAoTWF0aC5yb3VuZChpdGVtLmhvdXJzTGVmdCAqIDEwKSAvIDEwKS50b1N0cmluZygpO1xuICB9XG5cbiAgcHVibGljIGdldEJ5KCkge1xuICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRFc3RpbWF0ZWREYXRlKCk7XG4gIH1cblxuICBwdWJsaWMgbm90aWZ5KCkge1xuICBcdGxldCB0b2RheSA9IHRoaXMuYXBwQ29tcG9uZW50Lm5pY2VEYXRlKG5ldyBEYXRlKCkpO1xuICAgICAgICBsZXQgdHh0OiBzdHJpbmcgPSBzcHJpbnRmKFwiLS0tIFVwY29taW5nIE1haW50ZW5hbmNlICUtMTBzIC0tLVxcbiAlcyBcXG5cIiwgdGhpcy5zaG93aW5nQnkoKSwgdG9kYXkpO1xuXHR0eHQgKz0gc3ByaW50ZihcIiUtNnMgfCAgJS00MHN8JS0xMHMgfCUtMTBzXFxuXCIsIFwiUmVnb1wiLCBcIkl0ZW1cIiwgXCJEYXlzIExlZnRcIiwgXCJIcnMgTGVmdFwiICk7XG5cdHR4dCArPSBcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xcblwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgdHh0ICs9IHNwcmludGYoXCIlNnMgfCAgJS00MHN8JTEwcyB8JTEwc1xcblwiLCBpdGVtLnJlZ28sIGl0ZW0uaXRlbSwgdGhpcy5nZXREYXlzTGVmdChpdGVtKSwgdGhpcy5nZXRIb3Vyc0xlZnQoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIHR4dCArPSBcIlxcblwiO1xuXHR0eHQgKz0gXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cXG5cIjtcbiAgICAgICAgbGV0IHN1YmogPSAnQ3VydGlzIEF2aWF0aW9uIEVzdGltYXRlZCBPcmRlciBNYWludGVuYW5jZSBSZXBvcnQgKCcgKyB0b2RheSArICcpJztcbiAgICAgICAgbGV0IGhkZzogc3RyaW5nID0gc3ByaW50ZihcIlVwY29taW5nIE1haW50ZW5hbmNlIFJlcG9ydCwgJS0xMHMsICglcylcIiwgdGhpcy5zaG93aW5nQnkoKSwgdG9kYXkpO1xuICAgICAgICB0aGlzLmFwcENvbXBvbmVudC5ub3RpZnlTb21lb25lKHN1YmosIGhkZywgdHh0KTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93aW5nQnkoKSA6IHN0cmluZyB7XG4gICAgICAgICAgcmV0dXJuICdTb3J0ZWQgYnkgRXN0aW1hdGVkIEV4cGlyeSBPcmRlcic7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxufVxuIl19