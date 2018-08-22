"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/*import * as permissions from "nativescript-permissions";
import * as TNSPhone from 'nativescript-phone';*/
var email = require("nativescript-email");
var fleet_service_1 = require("./common/fleet.service");
var sprintf_js_1 = require("./node_modules/sprintf-js");
var fs = require("file-system");
var AppComponent = /** @class */ (function () {
    function AppComponent(fleetService) {
        this.fleetService = fleetService;
        var documents = fs.knownFolders.documents();
        var path = fs.path.join(documents.path, "reportFile.html");
        var file = fs.File.fromPath(path);
        this.composeOptions = {
            to: ['jonathan.p.h.kelly@gmail.com'],
            subject: 'Curtis Aviation Maintenance Report',
            attachments: [{
                    'fileName': 'reportFile.html',
                    'path': path,
                    'mimeType': 'text/html'
                }
            ]
        };
    }
    AppComponent.prototype.createAttachment = function (hdg, msg) {
        var documents = fs.knownFolders.documents();
        var path = fs.path.join(documents.path, "reportFile.html");
        var file = fs.File.fromPath(path);
        file.writeText('<b>' + hdg + '</b><hr/><pre>' + msg + '</pre>')
            .then(function (result) {
        })
            .catch(function (err) {
            console.log(err);
        });
        return true;
    };
    AppComponent.prototype.niceDate = function (d) {
        var weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var date = [d.getFullYear(), d.getMonth() + 1, d.getDate()];
        var time = [d.getHours(), d.getMinutes(), d.getSeconds()];
        // Determine AM or PM suffix based on the hour
        var suffix = (time[0] < 12) ? "AM" : "PM";
        // Convert hour from military time
        time[0] = (time[0] < 12) ? time[0] : time[0] - 12;
        // If hour is 0, set it to 12
        time[0] = time[0] || 12;
        // Return the formatted string
        return sprintf_js_1.sprintf("%s, %02d/%02d/%d, %02d:%02d:%02d %s", weekDay[d.getDay()], date[0], date[1], date[2], time[0], time[1], time[2], suffix);
    };
    AppComponent.prototype.notifySomeone = function (subj, hdg, attach) {
        var _this = this;
        email.available().then(function (available) {
            if (available) {
                if (_this.createAttachment(hdg, attach)) {
                    _this.composeOptions.subject = subj;
                    _this.composeOptions.body = "Please find " + hdg + " attached.";
                    email.compose(_this.composeOptions).then(function (result) {
                        if (result) {
                        }
                        else {
                        }
                    }).catch(function (error) { return console.log(error); });
                }
                else {
                    alert('could not generate email');
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFFMUM7aURBQ2lEO0FBQ2pELDBDQUE0QztBQUM1Qyx3REFBc0Q7QUFDdEQsd0RBQWtEO0FBQ2xELGdDQUFrQztBQVNsQztJQUlRLHNCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUNwRCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzVDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUMzRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsY0FBYyxHQUFHO1lBQ2QsRUFBRSxFQUFFLENBQUMsOEJBQThCLENBQUM7WUFDcEMsT0FBTyxFQUFFLG9DQUFvQztZQUNsRSxXQUFXLEVBQUUsQ0FBRTtvQkFDZCxVQUFVLEVBQUUsaUJBQWlCO29CQUM3QixNQUFNLEVBQUUsSUFBSTtvQkFDWixVQUFVLEVBQUUsV0FBVztpQkFDdEI7YUFDRDtTQUNhLENBQUM7SUFDVixDQUFDO0lBR0QsdUNBQWdCLEdBQXZCLFVBQXdCLEdBQVcsRUFBRSxHQUFXO1FBQy9DLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDNUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FB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SyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztnQkFDdkMsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDcUIsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQy9ELENBQUM7WUFDbUIsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNBLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQXZFSSxZQUFZO1FBTHhCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsb0JBQW9CO1NBQ3BDLENBQUM7eUNBTXdDLDRCQUFZO09BSnpDLFlBQVksQ0F3RXhCO0lBQUQsbUJBQUM7Q0FBQSxBQXhFRCxJQXdFQztBQXhFWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbi8qaW1wb3J0ICogYXMgcGVybWlzc2lvbnMgZnJvbSBcIm5hdGl2ZXNjcmlwdC1wZXJtaXNzaW9uc1wiO1xuaW1wb3J0ICogYXMgVE5TUGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJzsqL1xuaW1wb3J0ICogYXMgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4vY29tbW9uL2ZsZWV0LnNlcnZpY2VcIjtcbmltcG9ydCB7c3ByaW50Zn0gZnJvbSBcIi4vbm9kZV9tb2R1bGVzL3NwcmludGYtanNcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCJhcHAuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgeyBcblxuICAgICAgICBjb21wb3NlT3B0aW9uczogZW1haWwuQ29tcG9zZU9wdGlvbnM7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkge1xuXHRcdGxldCBkb2N1bWVudHMgPSBmcy5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG5cdFx0bGV0IHBhdGggPSBmcy5wYXRoLmpvaW4oZG9jdW1lbnRzLnBhdGgsIFwicmVwb3J0RmlsZS5odG1sXCIpO1xuXHRcdGxldCBmaWxlID0gZnMuRmlsZS5mcm9tUGF0aChwYXRoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvc2VPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86IFsnam9uYXRoYW4ucC5oLmtlbGx5QGdtYWlsLmNvbSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ViamVjdDogJ0N1cnRpcyBBdmlhdGlvbiBNYWludGVuYW5jZSBSZXBvcnQnLFxuXHRcdFx0YXR0YWNobWVudHM6IFsge1xuXHRcdFx0XHQnZmlsZU5hbWUnOiAncmVwb3J0RmlsZS5odG1sJyxcblx0XHRcdFx0J3BhdGgnOiBwYXRoLFxuXHRcdFx0XHQnbWltZVR5cGUnOiAndGV4dC9odG1sJ1xuXHRcdFx0XHR9XG5cdFx0XHRdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG5cblx0cHVibGljIGNyZWF0ZUF0dGFjaG1lbnQoaGRnOiBzdHJpbmcsIG1zZzogc3RyaW5nKTogYm9vbGVhbiB7XG5cdFx0bGV0IGRvY3VtZW50cyA9IGZzLmtub3duRm9sZGVycy5kb2N1bWVudHMoKTtcblx0XHRsZXQgcGF0aCA9IGZzLnBhdGguam9pbihkb2N1bWVudHMucGF0aCwgXCJyZXBvcnRGaWxlLmh0bWxcIik7XG5cdFx0bGV0IGZpbGUgPSBmcy5GaWxlLmZyb21QYXRoKHBhdGgpO1xuXG5cdFx0ZmlsZS53cml0ZVRleHQoJzxiPicgKyBoZGcgKyAnPC9iPjxoci8+PHByZT4nICsgbXNnICsgJzwvcHJlPicpXG5cdFx0LnRoZW4ocmVzdWx0ID0+IHtcblx0ICAgICAgIFx0fSlcblx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwdWJsaWMgbmljZURhdGUoZDogRGF0ZSk6IHN0cmluZyB7XG5cdFx0bGV0IHdlZWtEYXkgPSBbICdTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnIF07XG5cdFx0bGV0IGRhdGUgPSBbIGQuZ2V0RnVsbFllYXIoKSwgIGQuZ2V0TW9udGgoKSArIDEsIGQuZ2V0RGF0ZSgpIF07XG5cdFx0bGV0IHRpbWUgPSBbIGQuZ2V0SG91cnMoKSwgZC5nZXRNaW51dGVzKCksIGQuZ2V0U2Vjb25kcygpIF07XG5cblx0XHQvLyBEZXRlcm1pbmUgQU0gb3IgUE0gc3VmZml4IGJhc2VkIG9uIHRoZSBob3VyXG5cdFx0bGV0IHN1ZmZpeCA9ICggdGltZVswXSA8IDEyICkgPyBcIkFNXCIgOiBcIlBNXCI7XG5cblx0XHQvLyBDb252ZXJ0IGhvdXIgZnJvbSBtaWxpdGFyeSB0aW1lXG5cdFx0dGltZVswXSA9ICggdGltZVswXSA8IDEyICkgPyB0aW1lWzBdIDogdGltZVswXSAtIDEyO1xuXG5cdFx0Ly8gSWYgaG91ciBpcyAwLCBzZXQgaXQgdG8gMTJcblx0XHR0aW1lWzBdID0gdGltZVswXSB8fCAxMjtcblxuXHRcdC8vIFJldHVybiB0aGUgZm9ybWF0dGVkIHN0cmluZ1xuXHRcdHJldHVybiBzcHJpbnRmKFwiJXMsICUwMmQvJTAyZC8lZCwgJTAyZDolMDJkOiUwMmQgJXNcIiwgd2Vla0RheVtkLmdldERheSgpXSwgZGF0ZVswXSwgZGF0ZVsxXSwgZGF0ZVsyXSwgdGltZVswXSwgdGltZVsxXSwgdGltZVsyXSwgc3VmZml4KTtcblx0fVxuXG4gICAgICAgIHB1YmxpYyBub3RpZnlTb21lb25lKHN1Ymo6IHN0cmluZywgaGRnOiBzdHJpbmcsIGF0dGFjaDogc3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgZW1haWwuYXZhaWxhYmxlKCkudGhlbihhdmFpbGFibGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF2YWlsYWJsZSkge1xuXHRcdFx0XHRpZiAodGhpcy5jcmVhdGVBdHRhY2htZW50KGhkZywgYXR0YWNoKSkge1xuXHRcdFx0XHRcdHRoaXMuY29tcG9zZU9wdGlvbnMuc3ViamVjdCA9IHN1Ymo7XG5cdFx0XHRcdFx0dGhpcy5jb21wb3NlT3B0aW9ucy5ib2R5ID0gXCJQbGVhc2UgZmluZCBcIiArIGhkZyArIFwiIGF0dGFjaGVkLlwiO1xuXHRcdFx0XHRcdGVtYWlsLmNvbXBvc2UodGhpcy5jb21wb3NlT3B0aW9ucykudGhlbihyZXN1bHQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuXHRcdFx0XHR9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdGFsZXJ0KCdjb3VsZCBub3QgZ2VuZXJhdGUgZW1haWwnKTtcblx0XHRcdFx0fVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2VtYWlsIG5vdCBhdmFpbGFibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgICAgICB9XG59XG4iXX0=