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
        console.log(msg);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUM7aURBQ2lEO0FBQ2pELDBDQUE0QztBQUM1Qyx3REFBc0Q7QUFTdEQ7SUFJUSxzQkFBb0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNkLEVBQUUsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQ3BDLE9BQU8sRUFBRSxvQ0FBb0M7WUFDN0MsSUFBSSxFQUFFLGVBQWU7U0FDNUIsQ0FBQztJQUNWLENBQUM7SUFFTSxvQ0FBYSxHQUFwQixVQUFxQixHQUFXO1FBQWhDLGlCQWNDO1FBYlIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNGLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxTQUFTO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1IsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO2dCQUMvQixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNO29CQUN0QyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNiLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1IsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7WUFDOUMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNBLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQTFCSSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBTXdDLDRCQUFZO09BSnpDLFlBQVksQ0EyQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vKmltcG9ydCAqIGFzIHBlcm1pc3Npb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtcGVybWlzc2lvbnNcIjtcbmltcG9ydCAqIGFzIFROU1Bob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7Ki9cbmltcG9ydCAqIGFzIGVtYWlsIGZyb20gXCJuYXRpdmVzY3JpcHQtZW1haWxcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuL2NvbW1vbi9mbGVldC5zZXJ2aWNlXCI7XG5cbmRlY2xhcmUgdmFyIGFuZHJvaWQ7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm5zLWFwcFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IFxuXG4gICAgICAgIGNvbXBvc2VPcHRpb25zOiBlbWFpbC5Db21wb3NlT3B0aW9ucztcblxuICAgICAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZsZWV0U2VydmljZTogRmxlZXRTZXJ2aWNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb3NlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvOiBbJ2pvbmF0aGFuLnAuaC5rZWxseUBnbWFpbC5jb20nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YmplY3Q6ICdDdXJ0aXMgQXZpYXRpb24gTWFpbnRlbmFuY2UgUmVwb3J0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6ICc8aHRtbD48L2h0bWw+J1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgbm90aWZ5U29tZW9uZShtc2c6IHN0cmluZykge1xuXHRjb25zb2xlLmxvZyhtc2cpO1xuICAgICAgICAgICAgICAgIGVtYWlsLmF2YWlsYWJsZSgpLnRoZW4oYXZhaWxhYmxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdmFpbGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb3NlT3B0aW9ucy5ib2R5ID0gbXNnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWFpbC5jb21wb3NlKHRoaXMuY29tcG9zZU9wdGlvbnMpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydCgnZW1haWwgbm90IGF2YWlsYWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgICAgIH1cbn1cbiJdfQ==