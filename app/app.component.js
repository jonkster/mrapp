"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';*/
var email = require("nativescript-email");
var fleet_service_1 = require("./common/fleet.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUM7aURBQ2lEO0FBQ2pELDBDQUE0QztBQUM1Qyx3REFBc0Q7QUFTdEQ7SUFJUSxzQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNkLEVBQUUsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxvQ0FBb0M7WUFDN0MsSUFBSSxFQUFFLGVBQWU7U0FDNUIsQ0FBQztJQUNWLENBQUM7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixHQUFXO1FBQWhDLGlCQWFDO1FBWk8sS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVM7WUFDeEIsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDUixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7Z0JBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07b0JBQ3RDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2IsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDUixDQUFDO2dCQUNULENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUM5QyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0EsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNULENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBekJJLFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxvQkFBb0I7U0FDcEMsQ0FBQzt5Q0FNd0MsNEJBQVk7T0FKekMsWUFBWSxDQTBCeEI7SUFBRCxtQkFBQztDQUFBLEFBMUJELElBMEJDO0FBMUJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbi8qaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xuaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJzsqL1xuaW1wb3J0ICogYXMgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4vY29tbW9uL2ZsZWV0LnNlcnZpY2VcIjtcblxuZGVjbGFyZSB2YXIgYW5kcm9pZDtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtYXBwXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiYXBwLmNvbXBvbmVudC5odG1sXCIsXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHsgXG5cbiAgICAgICAgY29tcG9zZU9wdGlvbnM6IGVtYWlsLkNvbXBvc2VPcHRpb25zO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2VPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86IFsnam9uYXRoYW4ucC5oLmtlbGx5QGdtYWlsLmNvbSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ0N1cnRpcyBBdmlhdGlvbiBNYWludGVuYW5jZSBSZXBvcnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogJzxodG1sPjwvaHRtbD4nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBub3RpZnlTb21lb25lKG1zZzogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgZW1haWwuYXZhaWxhYmxlKCkudGhlbihhdmFpbGFibGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2VPcHRpb25zLmJvZHkgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsLmNvbXBvc2UodGhpcy5jb21wb3NlT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KCdlbWFpbCBub3QgYXZhaWxhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcbiAgICAgICAgfVxufVxuIl19