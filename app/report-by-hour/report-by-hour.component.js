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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlHO0FBQ2pHLHNEQUErRDtBQUsvRCw4REFBNEY7QUFHNUYsa0RBQWdEO0FBRWhELHlEQUF1RDtBQUN2RCx5REFBbUQ7QUFRbkQ7SUFNRSwrQkFBb0IsbUJBQXNDLEVBQzVCLFlBQTBCLEVBQzFCLGdCQUFrQyxFQUNsQyxZQUEwQjtRQUhwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQzVCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFOaEQsV0FBTSxHQUFXLE9BQU8sQ0FBQztRQUN6QixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQUtnQyxDQUFDO0lBSzdELHdDQUFRLEdBQVI7UUFDTSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCwrQ0FBZSxHQUFmO1FBQUEsaUJBT0M7UUFOTyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxvREFBb0Q7UUFDcEQsVUFBVSxDQUFDO1lBQ0QsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2pCLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZ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SSxDQUFDLENBQUM7WUFDQSxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDckMsQ0FBQztJQUNQLENBQUM7SUFFTSw2Q0FBYSxHQUFwQixVQUFxQixFQUFFO1FBQ2YsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBaEZrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7a0VBQUM7SUFYdkUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7eUNBT3lDLHdCQUFpQjtZQUNkLDRCQUFZO1lBQ1IseUJBQWdCO1lBQ3BCLDRCQUFZO09BVDdDLHFCQUFxQixDQTZGakM7SUFBRCw0QkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmICAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuLi9jb21tb24vYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9jb21tb24vZmxlZXQuc2VydmljZVwiO1xuaW1wb3J0IHtzcHJpbnRmfSBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL3NwcmludGYtanNcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlcG9ydC1ieS1ob3VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC1ieS1ob3VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRCeUhvdXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG4gIHB1YmxpYyBpdGVtczogYW55W107XG4gIHByaXZhdGUgc29ydEJ5OiBzdHJpbmcgPSAnaG91cnMnO1xuICBwcml2YXRlIHJlYWR5VG9TaG93ID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgYXBwQ29tcG9uZW50OiBBcHBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGZsZWV0U2VydmljZTogRmxlZXRTZXJ2aWNlKSB7IH1cblxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gIHByaXZhdGUgZHJhd2VyOiBSYWRTaWRlRHJhd2VyO1xuXG4gIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEJ5KCdob3VycycpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICAgIC8vIGEgbGl0dGxlIGRlbGF5IHNvIHRoZSBzcGlubmVyIGhhcyB0aW1lIHRvIHNob3cgdXBcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeVRvU2hvdyA9IHRydWU7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF5c0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5kYXlzTGVmdDtcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIGdldEhvdXJzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChNYXRoLnJvdW5kKE51bWJlcihpdGVtLmhvdXJzTGVmdCkqMTApIC8gMTApLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRCeShieTogc3RyaW5nKSB7XG4gICAgICAgIGlmIChieSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRIb3VycygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLmZsZWV0U2VydmljZS5nZXREYXRlKCk7XG4gICAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBub3RpZnkoKSB7XG5cdGxldCB0eHQgPSBzcHJpbnRmKFwiLS0tLSAgVXBjb21pbmcgTWFpbnRlbmFuY2UgJS0xMHMgLS0tLVxcblxcblwiLCB0aGlzLnNob3dpbmdCeSgpKTtcbiAgICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgdHh0ICs9IHNwcmludGYoXCIlLTZzIHwgICUtNDBzfCUtMTBzIHwlLTEwc1xcblwiLCBcIlJlZ29cIiwgXCJJdGVtXCIsIFwiSHJzIExlZnRcIiwgXCJEYXlzIExlZnRcIiApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHR4dCArPSBzcHJpbnRmKFwiJS02cyB8ICAlLTQwc3wlLTEwcyB8JS0xMHNcXG5cIiwgXCJSZWdvXCIsIFwiSXRlbVwiLCBcIkRheXMgTGVmdFwiLCBcIkhycyBMZWZ0XCIgKTtcbiAgICAgICAgfVxuXHR0eHQgKz0gXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cXG5cIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLml0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnRCeSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ICs9IHNwcmludGYoXCIlNnMgfCAgJS00MHN8JTEwcyB8JTEwc1xcblwiLCBpdGVtLnJlZ28sIGl0ZW0uaXRlbSwgdGhpcy5nZXRIb3Vyc0xlZnQoaXRlbSksIHRoaXMuZ2V0RGF5c0xlZnQoaXRlbSkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eHQgKz0gc3ByaW50ZihcIiU2cyB8ICAlLTQwc3wlMTBzIHwlMTBzXFxuXCIsIGl0ZW0ucmVnbywgaXRlbS5pdGVtLCB0aGlzLmdldERheXNMZWZ0KGl0ZW0pLCB0aGlzLmdldEhvdXJzTGVmdChpdGVtKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHR4dCArPSBcIlxcblwiO1xuXHR0eHQgKz0gXCJfX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19cXG5cIjtcbiAgICAgICAgdGhpcy5hcHBDb21wb25lbnQubm90aWZ5U29tZW9uZSh0eHQpO1xuICB9XG5cbiAgcHVibGljIHNob3dpbmdCeSgpIDogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTb3J0ZWQgYnkgSG91cnMgTGVmdCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTb3J0ZWQgYnkgRGF5cyBMZWZ0JztcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZUJ5SG91cnMoZXYpIHtcbiAgICAgICAgICBpZiAoZXYub2JqZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeSA9ICdob3Vycyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeSA9ICdkYXRlJztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nZXRCeSh0aGlzLnNvcnRCeSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxufVxuIl19