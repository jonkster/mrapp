"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_component_1 = require("../app.component");
var fleet_service_1 = require("./fleet.service");
var router_1 = require("nativescript-angular/router");
var FleetComponent = /** @class */ (function () {
    function FleetComponent(_changeDetectionRef, routerExtensions, appComponent, fleetService) {
        this._changeDetectionRef = _changeDetectionRef;
        this.routerExtensions = routerExtensions;
        this.appComponent = appComponent;
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
        var hrs = ac.hrsAtMaint - this.getTtis(ac);
        return Math.round(hrs * 10) / 10;
    };
    FleetComponent.prototype.getTtis = function (ac) {
        return ac.clockTime + ac.clockOffset;
    };
    FleetComponent.prototype.addAircraft = function () {
        this.routerExtensions.navigate(["newAircraft"], { clearHistory: false });
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
            app_component_1.AppComponent,
            fleet_service_1.FleetService])
    ], FleetComponent);
    return FleetComponent;
}());
exports.FleetComponent = FleetComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxlZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmxlZXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStGO0FBSy9GLDhEQUE0RjtBQUc1RixrREFBZ0Q7QUFFaEQsaURBQStDO0FBQy9DLHNEQUErRDtBQVEvRDtJQUdRLHdCQUFvQixtQkFBc0MsRUFDbEMsZ0JBQWtDLEVBQ2xDLFlBQTBCLEVBQzFCLFlBQTBCO1FBSDlCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBbUI7UUFDbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztJQUFJLENBQUM7SUFLdkQsaUNBQVEsR0FBUjtRQUNRLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDO1lBQ2IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDckIsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQixDQUFDO1FBQ1QsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNRLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7UUFDOUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxvQ0FBVyxHQUFYLFVBQVksRUFBWTtRQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELG1DQUFVLEdBQVYsVUFBVyxFQUFZO1FBQ2YsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBQyxFQUFFLENBQUMsR0FBRSxFQUFFLENBQUE7SUFDckMsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxFQUFZO1FBQ1osTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ1EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUE1Q2tDO1FBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7a0NBQXlCLGdDQUFzQjsyREFBQztJQVI3RSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUN0QyxDQUFDO3lDQUkrQyx3QkFBaUI7WUFDaEIseUJBQWdCO1lBQ3BCLDRCQUFZO1lBQ1osNEJBQVk7T0FON0MsY0FBYyxDQXVEMUI7SUFBRCxxQkFBQztDQUFBLEFBdkRELElBdURDO0FBdkRZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBY3Rpb25JdGVtIH0gZnJvbSBcInVpL2FjdGlvbi1iYXJcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXInO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSBcIi4uL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFpcmNyYWZ0IH0gZnJvbSBcIi4vYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuL2ZsZWV0LnNlcnZpY2VcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1mbGVldCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mbGVldC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2ZsZWV0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRmxlZXRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuICAgICAgICBwcml2YXRlIGZsZWV0OiBBaXJjcmFmdFtdO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlIGFwcENvbXBvbmVudDogQXBwQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgICAgICAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBwdWJsaWMgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuICAgICAgICBwcml2YXRlIGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuICAgICAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZWV0ID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0RmxlZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZWV0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhLnR5cGUgPCBiLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhLnR5cGUgPiBiLnR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEucmVnbyA8IGIucmVnbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGEucmVnbyA+IGIucmVnbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0RGF5c0xlZnQoYWM6IEFpcmNyYWZ0KTogbnVtYmVyIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mbGVldFNlcnZpY2UuZ2V0RGF5c0xlZnQoYWMpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0SHJzTGVmdChhYzogQWlyY3JhZnQpOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIGxldCBocnMgPSBhYy5ocnNBdE1haW50IC0gdGhpcy5nZXRUdGlzKGFjKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChocnMqMTApLyAxMFxuICAgICAgICB9XG5cbiAgICAgICAgZ2V0VHRpcyhhYzogQWlyY3JhZnQpOiBudW1iZXIge1xuICAgICAgICAgICAgICAgIHJldHVybiBhYy5jbG9ja1RpbWUgKyBhYy5jbG9ja09mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZEFpcmNyYWZ0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJuZXdBaXJjcmFmdFwiXSwgeyBjbGVhckhpc3Rvcnk6IGZhbHNlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICAgICAgICB9XG5cblxufVxuIl19