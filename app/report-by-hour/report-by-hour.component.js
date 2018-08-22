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
            return (Math.round(Number(item.hoursLeft) * 10) / 10).toString();
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
        var today = this.appComponent.niceDate(new Date());
        var txt = sprintf_js_1.sprintf("----  Upcoming Maintenance %-10s ----\n %s\n", this.showingBy(), today);
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
        var subj = sprintf_js_1.sprintf("Curtis Aviation Maintenance Report (%s), %s", this.showingBy(), today);
        var hdg = sprintf_js_1.sprintf("Maintenance %-10s, (%s)", this.showingBy(), today);
        this.appComponent.notifySomeone(subj, hdg, txt);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlHO0FBQ2pHLHNEQUErRDtBQUsvRCw4REFBNEY7QUFHNUYsa0RBQWdEO0FBRWhELHlEQUF1RDtBQUN2RCx5REFBbUQ7QUFRbkQ7SUFNRSwrQkFBb0IsbUJBQXNDLEVBQzVCLFlBQTBCLEVBQzFCLGdCQUFrQyxFQUNsQyxZQUEwQjtRQUhwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFOaEQsV0FBTSxHQUFXLE9BQU8sQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUtnQyxDQUFDO0lBSzdELHdDQUFRLEdBQVI7UUFDTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFOTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxvREFBb0Q7UUFDcEQsVUFBVSxDQUFDO1lBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZ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LHlCQUFnQjtZQUNwQiw0QkFBWTtPQVQ3QyxxQkFBcUIsQ0FpR2pDO0lBQUQsNEJBQUM7Q0FBQSxBQWpHRCxJQWlHQztBQWpHWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiAgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi4vYXBwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWlyY3JhZnQgfSBmcm9tIFwiLi4vY29tbW9uL2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi4vY29tbW9uL2ZsZWV0LnNlcnZpY2VcIjtcbmltcG9ydCB7c3ByaW50Zn0gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9zcHJpbnRmLWpzXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1yZXBvcnQtYnktaG91cicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBvcnQtYnktaG91ci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlcG9ydC1ieS1ob3VyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmVwb3J0QnlIb3VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcblxuICBwdWJsaWMgaXRlbXM6IGFueVtdO1xuICBwcml2YXRlIHNvcnRCeTogc3RyaW5nID0gJ2hvdXJzJztcbiAgcHJpdmF0ZSByZWFkeVRvU2hvdyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRCeSgnaG91cnMnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAvLyBhIGxpdHRsZSBkZWxheSBzbyB0aGUgc3Bpbm5lciBoYXMgdGltZSB0byBzaG93IHVwXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb1Nob3cgPSB0cnVlO1xuICAgICAgICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcHVibGljIGdldERheXNMZWZ0KGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdob3VycycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZGF5c0xlZnQ7XG4gICAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRIb3Vyc0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoTWF0aC5yb3VuZChOdW1iZXIoaXRlbS5ob3Vyc0xlZnQpKjEwKSAvIDEwKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QnkoYnk6IHN0cmluZykge1xuICAgICAgICBpZiAoYnkgPT09ICdob3VycycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0SG91cnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0RGF0ZSgpO1xuICAgICAgICB9XG4gIH1cblxuICBwdWJsaWMgbm90aWZ5KCkge1xuICBcdGxldCB0b2RheSA9IHRoaXMuYXBwQ29tcG9uZW50Lm5pY2VEYXRlKG5ldyBEYXRlKCkpO1xuXHRsZXQgdHh0ID0gc3ByaW50ZihcIi0tLS0gIFVwY29taW5nIE1haW50ZW5hbmNlICUtMTBzIC0tLS1cXG4gJXNcXG5cIiwgdGhpcy5zaG93aW5nQnkoKSwgdG9kYXkpO1xuICAgICAgICBpZiAodGhpcy5zb3J0QnkgPT09ICdob3VycycpIHtcbiAgICAgICAgICAgICAgICB0eHQgKz0gc3ByaW50ZihcIiUtNnMgfCAgJS00MHN8JS0xMHMgfCUtMTBzXFxuXCIsIFwiUmVnb1wiLCBcIkl0ZW1cIiwgXCJIcnMgTGVmdFwiLCBcIkRheXMgTGVmdFwiICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdHh0ICs9IHNwcmludGYoXCIlLTZzIHwgICUtNDBzfCUtMTBzIHwlLTEwc1xcblwiLCBcIlJlZ29cIiwgXCJJdGVtXCIsIFwiRGF5cyBMZWZ0XCIsIFwiSHJzIExlZnRcIiApO1xuICAgICAgICB9XG5cdHR4dCArPSBcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xcblwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgKz0gc3ByaW50ZihcIiU2cyB8ICAlLTQwc3wlMTBzIHwlMTBzXFxuXCIsIGl0ZW0ucmVnbywgaXRlbS5pdGVtLCB0aGlzLmdldEhvdXJzTGVmdChpdGVtKSwgdGhpcy5nZXREYXlzTGVmdChpdGVtKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR4dCArPSBzcHJpbnRmKFwiJTZzIHwgICUtNDBzfCUxMHMgfCUxMHNcXG5cIiwgaXRlbS5yZWdvLCBpdGVtLml0ZW0sIHRoaXMuZ2V0RGF5c0xlZnQoaXRlbSksIHRoaXMuZ2V0SG91cnNMZWZ0KGl0ZW0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHh0ICs9IFwiXFxuXCI7XG5cdHR4dCArPSBcIl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX1xcblwiO1xuICAgICAgICBcbiAgICAgICAgbGV0IHN1YmogPSBzcHJpbnRmKFwiQ3VydGlzIEF2aWF0aW9uIE1haW50ZW5hbmNlIFJlcG9ydCAoJXMpLCAlc1wiLCB0aGlzLnNob3dpbmdCeSgpLCB0b2RheSk7XG4gICAgICAgIGxldCBoZGc6IHN0cmluZyA9IHNwcmludGYoXCJNYWludGVuYW5jZSAlLTEwcywgKCVzKVwiLCB0aGlzLnNob3dpbmdCeSgpLCB0b2RheSk7XG4gICAgICAgIHRoaXMuYXBwQ29tcG9uZW50Lm5vdGlmeVNvbWVvbmUoc3ViaiwgaGRnLCB0eHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dpbmdCeSgpIDogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTb3J0ZWQgYnkgSG91cnMgTGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTb3J0ZWQgYnkgRGF5cyBMZWZ0JztcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZUJ5SG91cnMoZXYpIHtcbiAgICAgICAgICBpZiAoZXYub2JqZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeSA9ICdob3Vycyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeSA9ICdkYXRlJztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nZXRCeSh0aGlzLnNvcnRCeSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxufVxuIl19