"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';*/
var email = require("nativescript-email");
var fleet_service_1 = require("./fleet/fleet.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(fleetService) {
        this.fleetService = fleetService;
        this.composeOptions = {
            to: ['jonathan.p.h.kelly@gmail.com'],
            subject: 'Curtis Aviation Maintenance Report',
            body: '<html></html>'
        };
    }
    AppComponent.prototype.notifySomeone = function (msg) {
        var _this = this;
        email.available().then(function (available) {
            if (available) {
                _this.composeOptions.body = msg;
                email.compose(_this.composeOptions).then(function (result) {
                    if (result) {
                    }
                    else {
                    }
                }).catch(function (error) { return console.log(error); });
            }
            else {
                alert('email not available');
            }
        }).catch(function (error) { return console.log(error); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "ns-app",
            templateUrl: "app.component.html",
        }),
        __metadata("design:paramtypes", [fleet_service_1.FleetService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUM7aURBQ2lEO0FBQ2pELDBDQUE0QztBQUM1Qyx1REFBcUQ7QUFTckQ7SUFJUSxzQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNkLEVBQUUsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxvQ0FBb0M7WUFDN0MsSUFBSSxFQUFFLGVBQWU7U0FDNUIsQ0FBQztJQUNWLENBQUM7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixHQUFXO1FBQWhDLGlCQWFDO1FBWk8sS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVM7WUFDeEIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDUixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUixDQUFDO2dCQUNULENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0EsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBekJJLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FNd0MsNEJBQVk7T0FKekMsWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8qaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xuaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJzsqL1xuaW1wb3J0ICogYXMgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4vZmxlZXQvZmxlZXQuc2VydmljZVwiO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcblxuICAgICAgICBjb21wb3NlT3B0aW9uczogZW1haWwuQ29tcG9zZU9wdGlvbnM7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9zZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bzogWydqb25hdGhhbi5wLmgua2VsbHlAZ21haWwuY29tJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJqZWN0OiAnQ3VydGlzIEF2aWF0aW9uIE1haW50ZW5hbmNlIFJlcG9ydCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiAnPGh0bWw+PC9odG1sPidcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIG5vdGlmeVNvbWVvbmUobXNnOiBzdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBlbWFpbC5hdmFpbGFibGUoKS50aGVuKGF2YWlsYWJsZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXZhaWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9zZU9wdGlvbnMuYm9keSA9IG1zZztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWwuY29tcG9zZSh0aGlzLmNvbXBvc2VPcHRpb25zKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2VtYWlsIG5vdCBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICB9XG59XG4iXX0=