"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var dialogs_1 = require("nativescript-angular/directives/dialogs");
var fleet_service_1 = require("../common/fleet.service");
var aircraft_service_1 = require("../common/aircraft.service");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXItZXhwaXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1yLWV4cGlyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELHNEQUErRDtBQUMvRCxtRUFBNkU7QUFLN0UseURBQXVEO0FBQ3ZELCtEQUE2RDtBQVM3RDtJQUlRLDJCQUFvQixLQUFxQixFQUFVLGdCQUFrQyxFQUFVLEtBQXlCLEVBQVUsZUFBZ0MsRUFBVSxZQUEwQjtRQUFsTCxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFvQjtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQ3RNLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ1EsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDUSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUFFTSx3Q0FBWSxHQUFuQixVQUFvQixFQUFFO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBZSxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFTSx1Q0FBVyxHQUFsQixVQUFtQixFQUFFO0lBQ3JCLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ1EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BHLElBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBRTFHLENBQUM7SUEvQkksaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUMxQyxDQUFDO3lDQUtpQyx1QkFBYyxFQUE0Qix5QkFBZ0IsRUFBaUIsNEJBQWtCLEVBQTJCLGtDQUFlLEVBQXdCLDRCQUFZO09BSmpNLGlCQUFpQixDQWlDN0I7SUFBRCx3QkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZGlyZWN0aXZlcy9kaWFsb2dzXCI7XG5pbXBvcnQgeyBEYXRlUGlja2VyIH0gZnJvbSBcInVpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7IEFpcmNyYWZ0LCBNYWludGVuYW5jZUl0ZW0gfSBmcm9tIFwiLi4vY29tbW9uL2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi4vY29tbW9uL2ZsZWV0LnNlcnZpY2VcIjtcbmltcG9ydCB7IEFpcmNyYWZ0U2VydmljZSB9IGZyb20gXCIuLi9jb21tb24vYWlyY3JhZnQuc2VydmljZVwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ2FwcC1tci1leHBpcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vbXItZXhwaXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbXItZXhwaXJ5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTXJFeHBpcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgICAgICBwcml2YXRlIGFpcmNyYWZ0OiBBaXJjcmFmdDtcbiAgICAgICAgcHJpdmF0ZSBkYXRlUGlja2VyOiBEYXRlUGlja2VyO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgbW9kYWw6IE1vZGFsRGlhbG9nU2VydmljZSwgcHJpdmF0ZSBhaXJjcmFmdFNlcnZpY2U6IEFpcmNyYWZ0U2VydmljZSwgcHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkge1xuICAgICAgICB9XG5cbiAgICAgICAgbmdPbkluaXQoKSB7IFxuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXNbXCJpZFwiXTtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0ID0gdGhpcy5mbGVldFNlcnZpY2UuZ2V0QWlyY3JhZnQoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGNhbmNlbCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2FpcmNyYWZ0RGV0YWlscy9cIiArIHRoaXMuYWlyY3JhZnQuX2lkXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZGF0ZVBpY2tMb2FkKGV2KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VyID0gPERhdGVQaWNrZXI+ZXYub2JqZWN0O1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlci55ZWFyID0gdGhpcy5haXJjcmFmdC5hbm51YWxEYXRlVHVwbGVbMF07XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VyLm1vbnRoID0gdGhpcy5haXJjcmFmdC5hbm51YWxEYXRlVHVwbGVbMV07XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VyLmRheSA9IHRoaXMuYWlyY3JhZnQuYW5udWFsRGF0ZVR1cGxlWzJdO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIGRhdGVQaWNrU2V0KGV2KSB7XG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgc2F2ZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFpcmNyYWZ0LmFubnVhbERhdGVUdXBsZSA9IFt0aGlzLmRhdGVQaWNrZXIueWVhciAsIHRoaXMuZGF0ZVBpY2tlci5tb250aCwgdGhpcy5kYXRlUGlja2VyLmRheV07XG4gICAgICAgICAgICAgICAgdGhpcy5mbGVldFNlcnZpY2UudXBkYXRlQWlyY3JhZnQodGhpcy5haXJjcmFmdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9haXJjcmFmdERldGFpbHMvXCIgKyB0aGlzLmFpcmNyYWZ0Ll9pZF0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuXG4gICAgICAgIH1cblxufVxuIl19