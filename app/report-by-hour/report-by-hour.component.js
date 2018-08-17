"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var fleet_service_1 = require("../common/fleet.service");
var ReportByHourComponent = /** @class */ (function () {
    function ReportByHourComponent(_changeDetectionRef, routerExtensions, fleetService) {
        this._changeDetectionRef = _changeDetectionRef;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlHO0FBQ2pHLHNEQUErRDtBQUsvRCw4REFBNEY7QUFJNUYseURBQXVEO0FBUXZEO0lBTUUsK0JBQW9CLG1CQUFzQyxFQUM1QixnQkFBa0MsRUFDbEMsWUFBMEI7UUFGcEMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUM1QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBTGhELFdBQU0sR0FBVyxPQUFPLENBQUM7UUFDekIsZ0JBQVcsR0FBRyxLQUFLLENBQUM7SUFJZ0MsQ0FBQztJQUs3RCx3Q0FBUSxHQUFSO1FBQ00sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0NBQWUsR0FBZjtRQUFBLGlCQU9DO1FBTk8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsb0RBQW9EO1FBQ3BELFVBQVUsQ0FBQztZQUNELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDO0lBRU0sMkNBQVcsR0FBbEIsVUFBbUIsSUFBUztRQUN0QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDcEIsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNsQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixDQUFDO0lBQ1AsQ0FBQztJQUVNLDRDQUFZLEdBQW5CLFVBQW9CLElBQVM7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDOUIsQ0FBQztJQUNQLENBQUM7SUFFTSxxQ0FBSyxHQUFaLFVBQWEsRUFBVTtRQUNqQixFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNsRCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDQSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDakQsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ00sS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLHlDQUFTLEdBQWhCO1FBQ00sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUNwQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDQSxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDbkMsQ0FBQztJQUNQLENBQUM7SUFFTSw2Q0FBYSxHQUFwQixVQUFxQixFQUFFO1FBQ2YsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQzVCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQzNCLENBQUM7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsc0NBQU0sR0FBTjtRQUNNLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBL0RrQztRQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDO2tDQUF5QixnQ0FBc0I7a0VBQUM7SUFWdkUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7eUNBT3lDLHdCQUFpQjtZQUNWLHlCQUFnQjtZQUNwQiw0QkFBWTtPQVI3QyxxQkFBcUIsQ0EyRWpDO0lBQUQsNEJBQUM7Q0FBQSxBQTNFRCxJQTJFQztBQTNFWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiAgIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tIFwidWkvYWN0aW9uLWJhclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuLi9jb21tb24vYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9jb21tb24vZmxlZXQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVwb3J0LWJ5LWhvdXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXBvcnQtYnktaG91ci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydEJ5SG91ckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uSW5pdCB7XG5cbiAgcHVibGljIGl0ZW1zOiBhbnlbXTtcbiAgcHJpdmF0ZSBzb3J0Qnk6IHN0cmluZyA9ICdob3Vycyc7XG4gIHByaXZhdGUgcmVhZHlUb1Nob3cgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRCeSgnaG91cnMnKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgICAvLyBhIGxpdHRsZSBkZWxheSBzbyB0aGUgc3Bpbm5lciBoYXMgdGltZSB0byBzaG93IHVwXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHlUb1Nob3cgPSB0cnVlO1xuICAgICAgICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcHVibGljIGdldERheXNMZWZ0KGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdob3VycycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZGF5c0xlZnQ7XG4gICAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRIb3Vyc0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmhvdXJzTGVmdDtcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIGdldEJ5KGJ5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZmxlZXRTZXJ2aWNlLmdldEhvdXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZmxlZXRTZXJ2aWNlLmdldERhdGUoKTtcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIG5vdGlmeSgpIHtcbiAgICAgICAgYWxlcnQoXCJub3QgYXZhaWxhYmxlIHlldFwiKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93aW5nQnkoKSA6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLnNvcnRCeSA9PT0gJ2hvdXJzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnU29ydCBieSBIb3VycyBMZWZ0JztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ1NvcnQgYnkgRGF5cyBMZWZ0JztcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIHRvZ2dsZUJ5SG91cnMoZXYpIHtcbiAgICAgICAgICBpZiAoZXYub2JqZWN0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeSA9ICdob3Vycyc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNvcnRCeSA9ICdkYXRlJztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5nZXRCeSh0aGlzLnNvcnRCeSk7XG4gIH1cblxuICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxufVxuIl19