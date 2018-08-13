"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var fleet_service_1 = require("../fleet/fleet.service");
var ReportByHourComponent = /** @class */ (function () {
    function ReportByHourComponent(_changeDetectionRef, routerExtensions, fleetService) {
        this._changeDetectionRef = _changeDetectionRef;
        this.routerExtensions = routerExtensions;
        this.fleetService = fleetService;
        this.sortBy = 'hours';
    }
    ReportByHourComponent.prototype.ngOnInit = function () {
        this.getBy('hours');
    };
    ReportByHourComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
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
        alert("not available yet");
    };
    ReportByHourComponent.prototype.showingBy = function () {
        if (this.sortBy === 'hours') {
            return 'Sort by Hours Left';
        }
        else {
            return 'Sort by Days Left';
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
            router_1.RouterExtensions,
            fleet_service_1.FleetService])
    ], ReportByHourComponent);
    return ReportByHourComponent;
}());
exports.ReportByHourComponent = ReportByHourComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlHO0FBQ2pHLHNEQUErRDtBQUsvRCw4REFBNEY7QUFJNUYsd0RBQXNEO0FBUXREO0lBS0UsK0JBQW9CLG1CQUFzQyxFQUM1QixnQkFBa0MsRUFDbEMsWUFBMEI7UUFGcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSmhELFdBQU0sR0FBVyxPQUFPLENBQUM7SUFJMkIsQ0FBQztJQUs3RCx3Q0FBUSxHQUFSO1FBQ00sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUNRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLENBQUM7SUFDUCxDQUFDO0lBRU0sNENBQVksR0FBbkIsVUFBb0IsSUFBUztRQUN2QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM5QixDQUFDO0lBQ1AsQ0FBQztJQUVNLHFDQUFLLEdBQVosVUFBYSxFQUFVO1FBQ2pCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xELENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNBLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNqRCxDQUFDO0lBQ1AsQ0FBQztJQUVNLHNDQUFNLEdBQWI7UUFDTSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0seUNBQVMsR0FBaEI7UUFDTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUNuQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDZDQUFhLEdBQXBCLFVBQXFCLEVBQUU7UUFDZixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBTSxHQUFOO1FBQ00sSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUEzRGtDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjtrRUFBQztJQVR2RSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsaUNBQWlDLENBQUM7U0FDL0MsQ0FBQzt5Q0FNeUMsd0JBQWlCO1lBQ1YseUJBQWdCO1lBQ3BCLDRCQUFZO09BUDdDLHFCQUFxQixDQXNFakM7SUFBRCw0QkFBQztDQUFBLEFBdEVELElBc0VDO0FBdEVZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmICAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbmltcG9ydCB7IEFpcmNyYWZ0IH0gZnJvbSBcIi4uL2ZsZWV0L2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi4vZmxlZXQvZmxlZXQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVwb3J0LWJ5LWhvdXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXBvcnQtYnktaG91ci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydEJ5SG91ckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgcHVibGljIGl0ZW1zOiBhbnlbXTtcbiAgcHJpdmF0ZSBzb3J0Qnk6IHN0cmluZyA9ICdob3Vycyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHsgfVxuXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QnkoJ2hvdXJzJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgICAgICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGF5c0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5kYXlzTGVmdDtcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIGdldEhvdXJzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICBpZiAoaXRlbS50eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaG91cnNMZWZ0O1xuICAgICAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QnkoYnk6IHN0cmluZykge1xuICAgICAgICBpZiAoYnkgPT09ICdob3VycycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0SG91cnMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0RGF0ZSgpO1xuICAgICAgICB9XG4gIH1cblxuICBwdWJsaWMgbm90aWZ5KCkge1xuICAgICAgICBhbGVydChcIm5vdCBhdmFpbGFibGUgeWV0XCIpO1xuICB9XG5cbiAgcHVibGljIHNob3dpbmdCeSgpIDogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTb3J0IGJ5IEhvdXJzIExlZnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnU29ydCBieSBEYXlzIExlZnQnO1xuICAgICAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQnlIb3Vycyhldikge1xuICAgICAgICAgIGlmIChldi5vYmplY3QuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydEJ5ID0gJ2hvdXJzJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydEJ5ID0gJ2RhdGUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdldEJ5KHRoaXMuc29ydEJ5KTtcbiAgfVxuXG4gIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG59XG4iXX0=