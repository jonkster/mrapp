"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var fleet_service_1 = require("./fleet.service");
var router_1 = require("nativescript-angular/router");
var FleetComponent = /** @class */ (function () {
    function FleetComponent(_changeDetectionRef, routerExtensions, fleetService) {
        this._changeDetectionRef = _changeDetectionRef;
        this.routerExtensions = routerExtensions;
        this.fleetService = fleetService;
    }
    FleetComponent.prototype.ngOnInit = function () {
        this.fleet = this.fleetService.getFleet();
    };
    FleetComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    FleetComponent.prototype.getDaysLeft = function (ac) {
        return this.fleetService.getDaysLeft(ac);
    };
    FleetComponent.prototype.getHrsLeft = function (ac) {
        return ac.hrsAtMaint - this.getTtis(ac);
    };
    FleetComponent.prototype.getTtis = function (ac) {
        return ac.clockTime + ac.clockOffset;
    };
    FleetComponent.prototype.addAircraft = function () {
        this.routerExtensions.navigate(["newAircraft"], { clearHistory: false });
    };
    FleetComponent.prototype.stuff = function (args) {
        console.log("Share action item tapped.", args);
    };
    FleetComponent.prototype.toggle = function () {
        this.drawer.toggleDrawerState();
    };
    __decorate([
        core_1.ViewChild(angular_1.RadSideDrawerComponent),
        __metadata("design:type", angular_1.RadSideDrawerComponent)
    ], FleetComponent.prototype, "drawerComponent", void 0);
    FleetComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-fleet',
            templateUrl: './fleet.component.html',
            styleUrls: ['./fleet.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
            router_1.RouterExtensions,
            fleet_service_1.FleetService])
    ], FleetComponent);
    return FleetComponent;
}());
exports.FleetComponent = FleetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxlZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBSy9GLDhEQUEwRjtBQUkxRixpREFBK0M7QUFDL0Msc0RBQStEO0FBUS9EO0lBR1Esd0JBQW9CLG1CQUFzQyxFQUNsQyxnQkFBa0MsRUFDbEMsWUFBMEI7UUFGOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUt2RCxpQ0FBUSxHQUFSO1FBQ1EsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ1EsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxFQUFZO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEVBQVk7UUFDZixNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsRUFBWTtRQUNaLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRVQsOEJBQUssR0FBTCxVQUFNLElBQUk7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTSwrQkFBTSxHQUFiO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFqQ3dDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsyREFBQztJQVA3RSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQUkrQyx3QkFBaUI7WUFDaEIseUJBQWdCO1lBQ3BCLDRCQUFZO09BTDdDLGNBQWMsQ0EyQzFCO0lBQUQscUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztBQTNDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZX0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuL2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZmxlZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmxlZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mbGVldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZsZWV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICAgICAgcHJpdmF0ZSBmbGVldDogQWlyY3JhZnRbXTtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgICAgICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgICAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgICAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZWV0ID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0RmxlZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldERheXNMZWZ0KGFjOiBBaXJjcmFmdCk6IG51bWJlciB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmxlZXRTZXJ2aWNlLmdldERheXNMZWZ0KGFjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldEhyc0xlZnQoYWM6IEFpcmNyYWZ0KTogbnVtYmVyIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWMuaHJzQXRNYWludCAtIHRoaXMuZ2V0VHRpcyhhYyk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRUdGlzKGFjOiBBaXJjcmFmdCk6IG51bWJlciB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjLmNsb2NrVGltZSArIGFjLmNsb2NrT2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkQWlyY3JhZnQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIm5ld0FpcmNyYWZ0XCJdLCB7IGNsZWFySGlzdG9yeTogZmFsc2UgfSk7XG4gICAgICAgIH1cblxuc3R1ZmYoYXJncykge1xuICAgIGNvbnNvbGUubG9nKFwiU2hhcmUgYWN0aW9uIGl0ZW0gdGFwcGVkLlwiLCBhcmdzKTtcbn1cbnB1YmxpYyB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cblxuXG59XG4iXX0=