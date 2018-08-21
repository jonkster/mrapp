"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_component_1 = require("../app.component");
var fleet_service_1 = require("../common/fleet.service");
var sprintf_js_1 = require("../node_modules/sprintf-js");
var ReportByHourComponent = /** @class */ (function () {
    function ReportByHourComponent(_changeDetectionRef, appComponent, routerExtensions, fleetService) {
        this._changeDetectionRef = _changeDetectionRef;
        this.appComponent = appComponent;
        this.routerExtensions = routerExtensions;
        this.fleetService = fleetService;
        this.sortBy = 'hours';
        this.readyToShow = false;
    }
    ReportByHourComponent.prototype.ngOnInit = function () {
        this.getBy('hours');
    };
    ReportByHourComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        // a little delay so the spinner has time to show up
        setTimeout(function () {
            _this.readyToShow = true;
        }, 1000);
    };
    ReportByHourComponent.prototype.getDaysLeft = function (item) {
        if (item.type === 'hours') {
            return '';
        }
        else {
            return item.daysLeft;
        }
    };
    ReportByHourComponent.prototype.getHoursLeft = function (item) {
        if (item.type === 'date') {
            return '';
        }
        else {
            return item.hoursLeft;
        }
    };
    ReportByHourComponent.prototype.getBy = function (by) {
        if (by === 'hours') {
            this.items = this.fleetService.getHours();
        }
        else {
            this.items = this.fleetService.getDate();
        }
    };
    ReportByHourComponent.prototype.notify = function () {
        var txt = sprintf_js_1.sprintf("----  Upcoming Maintenance %-10s ----\n\n", this.showingBy());
        if (this.sortBy === 'hours') {
            txt += sprintf_js_1.sprintf("%-6s |  %-40s|%-10s |%-10s\n", "Rego", "Item", "Hrs Left", "Days Left");
        }
        else {
            txt += sprintf_js_1.sprintf("%-6s |  %-40s|%-10s |%-10s\n", "Rego", "Item", "Days Left", "Hrs Left");
        }
        txt += "___________________________________________________________________________\n";
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (this.sortBy === 'hours') {
                txt += sprintf_js_1.sprintf("%6s |  %-40s|%10s |%10s\n", item.rego, item.item, this.getHoursLeft(item), this.getDaysLeft(item));
            }
            else {
                txt += sprintf_js_1.sprintf("%6s |  %-40s|%10s |%10s\n", item.rego, item.item, this.getDaysLeft(item), this.getHoursLeft(item));
            }
        }
        txt += "\n";
        txt += "___________________________________________________________________________\n";
        this.appComponent.notifySomeone(txt);
    };
    ReportByHourComponent.prototype.showingBy = function () {
        if (this.sortBy === 'hours') {
            return 'Sorted by Hours Left';
        }
        else {
            return 'Sorted by Days Left';
        }
    };
    ReportByHourComponent.prototype.toggleByHours = function (ev) {
        if (ev.object.checked) {
            this.sortBy = 'hours';
        }
        else {
            this.sortBy = 'date';
        }
        this.getBy(this.sortBy);
    };
    ReportByHourComponent.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], ReportByHourComponent.prototype, "drawerComponent", void 0);
    ReportByHourComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-report-by-hour',
            templateUrl: './report-by-hour.component.html',
            styleUrls: ['./report-by-hour.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            app_component_1.AppComponent,
            router_1.RouterExtensions,
            fleet_service_1.FleetService])
    ], ReportByHourComponent);
    return ReportByHourComponent;
}());
exports.ReportByHourComponent = ReportByHourComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlHO0FBQ2pHLHNEQUErRDtBQUsvRCw4REFBNEY7QUFHNUYsa0RBQWdEO0FBRWhELHlEQUF1RDtBQUN2RCx5REFBbUQ7QUFRbkQ7SUFNRSwrQkFBb0IsbUJBQXNDLEVBQzVCLFlBQTBCLEVBQzFCLGdCQUFrQyxFQUNsQyxZQUEwQjtRQUhwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFOaEQsV0FBTSxHQUFXLE9BQU8sQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUtnQyxDQUFDO0lBSzdELHdDQUFRLEdBQVI7UUFDTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFOTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxvREFBb0Q7UUFDcEQsVUFBVSxDQUFDO1lBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZ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QUU7UUFDZixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ00sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFoRmtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjtrRUFBQztJQVh2RSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzt5Q0FPeUMsd0JBQWlCO1lBQ2QsNEJBQVk7WUFDUix5QkFBZ0I7WUFDcEIsNEJBQVk7T0FUN0MscUJBQXFCLENBNkZqQztJQUFELDRCQUFDO0NBQUEsQUE3RkQsSUE2RkM7QUE3Rlksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFpcmNyYWZ0IH0gZnJvbSBcIi4uL2NvbW1vbi9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2NvbW1vbi9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQge3NwcmludGZ9IGZyb20gXCIuLi9ub2RlX21vZHVsZXMvc3ByaW50Zi1qc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVwb3J0LWJ5LWhvdXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXBvcnQtYnktaG91ci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydEJ5SG91ckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgcHVibGljIGl0ZW1zOiBhbnlbXTtcbiAgcHJpdmF0ZSBzb3J0Qnk6IHN0cmluZyA9ICdob3Vycyc7XG4gIHByaXZhdGUgcmVhZHlUb1Nob3cgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBhcHBDb21wb25lbnQ6IEFwcENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHsgfVxuXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QnkoJ2hvdXJzJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgLy8gYSBsaXR0bGUgZGVsYXkgc28gdGhlIHNwaW5uZXIgaGFzIHRpbWUgdG8gc2hvdyB1cFxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5VG9TaG93ID0gdHJ1ZTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXlzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmRheXNMZWZ0O1xuICAgICAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0SG91cnNMZWZ0KGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ob3Vyc0xlZnQ7XG4gICAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRCeShieTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChieSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRIb3VycygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmZsZWV0U2VydmljZS5nZXREYXRlKCk7XG4gICAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBub3RpZnkoKSB7XG5cdGxldCB0eHQgPSBzcHJpbnRmKFwiLS0tLSAgVXBjb21pbmcgTWFpbnRlbmFuY2UgJS0xMHMgLS0tLVxcblxcblwiLCB0aGlzLnNob3dpbmdCeSgpKTtcbiAgICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgdHh0ICs9IHNwcmludGYoXCIlLTZzIHwgICUtNDBzfCUtMTBzIHwlLTEwc1xcblwiLCBcIlJlZ29cIiwgXCJJdGVtXCIsIFwiSHJzIExlZnRcIiwgXCJEYXlzIExlZnRcIiApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR4dCArPSBzcHJpbnRmKFwiJS02cyB8ICAlLTQwc3wlLTEwcyB8JS0xMHNcXG5cIiwgXCJSZWdvXCIsIFwiSXRlbVwiLCBcIkRheXMgTGVmdFwiLCBcIkhycyBMZWZ0XCIgKTtcbiAgICAgICAgfVxuXHR0eHQgKz0gXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cXG5cIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRCeSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ICs9IHNwcmludGYoXCIlNnMgfCAgJS00MHN8JTEwcyB8JTEwc1xcblwiLCBpdGVtLnJlZ28sIGl0ZW0uaXRlbSwgdGhpcy5nZXRIb3Vyc0xlZnQoaXRlbSksIHRoaXMuZ2V0RGF5c0xlZnQoaXRlbSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgKz0gc3ByaW50ZihcIiU2cyB8ICAlLTQwc3wlMTBzIHwlMTBzXFxuXCIsIGl0ZW0ucmVnbywgaXRlbS5pdGVtLCB0aGlzLmdldERheXNMZWZ0KGl0ZW0pLCB0aGlzLmdldEhvdXJzTGVmdChpdGVtKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHR4dCArPSBcIlxcblwiO1xuXHR0eHQgKz0gXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cXG5cIjtcbiAgICAgICAgdGhpcy5hcHBDb21wb25lbnQubm90aWZ5U29tZW9uZSh0eHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dpbmdCeSgpIDogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTb3J0ZWQgYnkgSG91cnMgTGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTb3J0ZWQgYnkgRGF5cyBMZWZ0JztcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZUJ5SG91cnMoZXYpIHtcbiAgICAgICAgICBpZiAoZXYub2JqZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeSA9ICdob3Vycyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeSA9ICdkYXRlJztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nZXRCeSh0aGlzLnNvcnRCeSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxufVxuIl19