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
        this.fleet.sort(function (a, b) {
            if (a.type < b.type) {
                return -1;
            }
            else if (a.type > b.type) {
                return 1;
            }
            else if (a.rego < b.rego) {
                return -1;
            }
            else if (a.rego > b.rego) {
                return 1;
            }
            else {
                return 0;
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxlZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBSy9GLDhEQUEwRjtBQUkxRixpREFBK0M7QUFDL0Msc0RBQStEO0FBUS9EO0lBR1Esd0JBQW9CLG1CQUFzQyxFQUNsQyxnQkFBa0MsRUFDbEMsWUFBMEI7UUFGOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUNsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUt2RCxpQ0FBUSxHQUFSO1FBQ1EsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUM7WUFDYixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNsQixDQUFDO1lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDQSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ1EsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVELG9DQUFXLEdBQVgsVUFBWSxFQUFZO1FBQ2hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsbUNBQVUsR0FBVixVQUFXLEVBQVk7UUFDZixNQUFNLENBQUMsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsRUFBWTtRQUNaLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUM7SUFDN0MsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRVQsOEJBQUssR0FBTCxVQUFNLElBQUk7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFDTSwrQkFBTSxHQUFiO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUE5Q3dDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsyREFBQztJQVA3RSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQUkrQyx3QkFBaUI7WUFDaEIseUJBQWdCO1lBQ3BCLDRCQUFZO09BTDdDLGNBQWMsQ0F3RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBPbkluaXQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gXCJ1aS9hY3Rpb24tYmFyXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZX0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuXG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuL2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtZmxlZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmxlZXQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9mbGVldC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZsZWV0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0IHtcbiAgICAgICAgcHJpdmF0ZSBmbGVldDogQWlyY3JhZnRbXTtcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgICAgICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgICAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgICAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZWV0ID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0RmxlZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZWV0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLnR5cGUgPCBiLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLnR5cGUgPiBiLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEucmVnbyA8IGIucmVnbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEucmVnbyA+IGIucmVnbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGF5c0xlZnQoYWM6IEFpcmNyYWZ0KTogbnVtYmVyIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mbGVldFNlcnZpY2UuZ2V0RGF5c0xlZnQoYWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0SHJzTGVmdChhYzogQWlyY3JhZnQpOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiBhYy5ocnNBdE1haW50IC0gdGhpcy5nZXRUdGlzKGFjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFR0aXMoYWM6IEFpcmNyYWZ0KTogbnVtYmVyIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWMuY2xvY2tUaW1lICsgYWMuY2xvY2tPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgICBhZGRBaXJjcmFmdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wibmV3QWlyY3JhZnRcIl0sIHsgY2xlYXJIaXN0b3J5OiBmYWxzZSB9KTtcbiAgICAgICAgfVxuXG5zdHVmZihhcmdzKSB7XG4gICAgY29uc29sZS5sb2coXCJTaGFyZSBhY3Rpb24gaXRlbSB0YXBwZWQuXCIsIGFyZ3MpO1xufVxucHVibGljIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG5cbn1cbiJdfQ==