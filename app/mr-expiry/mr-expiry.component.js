"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var fleet_service_1 = require("../fleet/fleet.service");
var aircraft_service_1 = require("../aircraft-details/aircraft.service");
var MrExpiryComponent = /** @class */ (function () {
    function MrExpiryComponent(route, routerExtensions, modal, aircraftService, fleetService) {
        this.route = route;
        this.routerExtensions = routerExtensions;
        this.modal = modal;
        this.aircraftService = aircraftService;
        this.fleetService = fleetService;
    }
    MrExpiryComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.params["id"];
        this.aircraft = this.fleetService.getAircraft(id);
    };
    MrExpiryComponent.prototype.cancel = function () {
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    MrExpiryComponent.prototype.datePickLoad = function (ev) {
        this.datePicker = ev.object;
        this.datePicker.year = this.aircraft.annualDateTuple[0];
        this.datePicker.month = this.aircraft.annualDateTuple[1];
        this.datePicker.day = this.aircraft.annualDateTuple[2];
    };
    MrExpiryComponent.prototype.datePickSet = function (ev) {
    };
    MrExpiryComponent.prototype.save = function () {
        this.aircraft.annualDateTuple = [this.datePicker.year, this.datePicker.month, this.datePicker.day];
        this.fleetService.updateAircraft(this.aircraft);
        this.routerExtensions.navigate(["/aircraftDetails/" + this.aircraft._id], { clearHistory: true });
    };
    MrExpiryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-mr-expiry',
            templateUrl: './mr-expiry.component.html',
            styleUrls: ['./mr-expiry.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_2.RouterExtensions, dialogs_1.ModalDialogService, aircraft_service_1.AircraftService, fleet_service_1.FleetService])
    ], MrExpiryComponent);
    return MrExpiryComponent;
}());
exports.MrExpiryComponent = MrExpiryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXItZXhwaXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1yLWV4cGlyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUMvRCxtRUFBNkU7QUFLN0Usd0RBQXNEO0FBQ3RELHlFQUF1RTtBQVN2RTtJQUlRLDJCQUFvQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLEtBQXlCLEVBQVUsZUFBZ0MsRUFBVSxZQUEwQjtRQUFsTCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ3RNLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ1EsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFTSx3Q0FBWSxHQUFuQixVQUFvQixFQUFFO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixFQUFFO0lBQ3JCLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ1EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTFHLENBQUM7SUEvQkksaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQUtpQyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBaUIsNEJBQWtCLEVBQTJCLGtDQUFlLEVBQXdCLDRCQUFZO09BSmpNLGlCQUFpQixDQWlDN0I7SUFBRCx3QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IEFpcmNyYWZ0LCBNYWludGVuYW5jZUl0ZW0gfSBmcm9tIFwiLi4vZmxlZXQvYWlyY3JhZnRcIjtcbmltcG9ydCB7IEZsZWV0U2VydmljZSB9IGZyb20gXCIuLi9mbGVldC9mbGVldC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBaXJjcmFmdFNlcnZpY2UgfSBmcm9tIFwiLi4vYWlyY3JhZnQtZGV0YWlscy9haXJjcmFmdC5zZXJ2aWNlXCI7XG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLW1yLWV4cGlyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tci1leHBpcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tci1leHBpcnkuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBNckV4cGlyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgICAgIHByaXZhdGUgYWlyY3JhZnQ6IEFpcmNyYWZ0O1xuICAgICAgICBwcml2YXRlIGRhdGVQaWNrZXI6IERhdGVQaWNrZXI7XG5cbiAgICAgICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBtb2RhbDogTW9kYWxEaWFsb2dTZXJ2aWNlLCBwcml2YXRlIGFpcmNyYWZ0U2VydmljZTogQWlyY3JhZnRTZXJ2aWNlLCBwcml2YXRlIGZsZWV0U2VydmljZTogRmxlZXRTZXJ2aWNlKSB7XG4gICAgICAgIH1cblxuICAgICAgICBuZ09uSW5pdCgpIHsgXG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1tcImlkXCJdO1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQgPSB0aGlzLmZsZWV0U2VydmljZS5nZXRBaXJjcmFmdChpZCk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgY2FuY2VsKCkge1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvYWlyY3JhZnREZXRhaWxzL1wiICsgdGhpcy5haXJjcmFmdC5faWRdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBkYXRlUGlja0xvYWQoZXYpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIgPSA8RGF0ZVBpY2tlcj5ldi5vYmplY3Q7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VyLnllYXIgPSB0aGlzLmFpcmNyYWZ0LmFubnVhbERhdGVUdXBsZVswXTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIubW9udGggPSB0aGlzLmFpcmNyYWZ0LmFubnVhbERhdGVUdXBsZVsxXTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIuZGF5ID0gdGhpcy5haXJjcmFmdC5hbm51YWxEYXRlVHVwbGVbMl07XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZGF0ZVBpY2tTZXQoZXYpIHtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBzYXZlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQuYW5udWFsRGF0ZVR1cGxlID0gW3RoaXMuZGF0ZVBpY2tlci55ZWFyICwgdGhpcy5kYXRlUGlja2VyLm1vbnRoLCB0aGlzLmRhdGVQaWNrZXIuZGF5XTtcbiAgICAgICAgICAgICAgICB0aGlzLmZsZWV0U2VydmljZS51cGRhdGVBaXJjcmFmdCh0aGlzLmFpcmNyYWZ0KTtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FpcmNyYWZ0RGV0YWlscy9cIiArIHRoaXMuYWlyY3JhZnQuX2lkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG5cbiAgICAgICAgfVxuXG59XG4iXX0=