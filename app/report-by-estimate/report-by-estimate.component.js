"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fleet_service_1 = require("../fleet/fleet.service");
var ReportByEstimateComponent = /** @class */ (function () {
    function ReportByEstimateComponent(fleetService) {
        this.fleetService = fleetService;
    }
    ReportByEstimateComponent.prototype.ngOnInit = function () {
        this.getBy();
    };
    ReportByEstimateComponent.prototype.getDaysLeft = function (item) {
        if (item.daysLeft === undefined) {
            return "(est: " + Number(item.hoursLeft) / 2 + ")";
        }
        return item.daysLeft;
    };
    ReportByEstimateComponent.prototype.getHoursLeft = function (item) {
        if (item.hoursLeft === undefined) {
            return "(est: " + Number(item.daysLeft) * 2 + ")";
        }
        return item.hoursLeft;
    };
    ReportByEstimateComponent.prototype.getBy = function () {
        this.items = this.fleetService.getEstimatedDate();
    };
    ReportByEstimateComponent.prototype.showingBy = function () {
        return 'Sort by Estimated Expiry Order';
    };
    ReportByEstimateComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-report-by-estimate',
            templateUrl: './report-by-estimate.component.html',
            styleUrls: ['./report-by-estimate.component.scss']
        }),
        __metadata("design:paramtypes", [fleet_service_1.FleetService])
    ], ReportByEstimateComponent);
    return ReportByEstimateComponent;
}());
exports.ReportByEstimateComponent = ReportByEstimateComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWVzdGltYXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsd0RBQXNEO0FBUXREO0lBSUUsbUNBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUVuRCw0Q0FBUSxHQUFSO1FBQ00sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTSwrQ0FBVyxHQUFsQixVQUFtQixJQUFTO1FBQ2QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQzFCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQzNELENBQUM7UUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBRU0sZ0RBQVksR0FBbkIsVUFBb0IsSUFBUztRQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUMxRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDcEMsQ0FBQztJQUVNLHlDQUFLLEdBQVo7UUFDUSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBRU0sNkNBQVMsR0FBaEI7UUFDUSxNQUFNLENBQUMsZ0NBQWdDLENBQUM7SUFDaEQsQ0FBQztJQTlCVSx5QkFBeUI7UUFOckMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLFdBQVcsRUFBRSxxQ0FBcUM7WUFDbEQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7U0FDbkQsQ0FBQzt5Q0FLa0MsNEJBQVk7T0FKbkMseUJBQXlCLENBaUNyQztJQUFELGdDQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFpcmNyYWZ0IH0gZnJvbSBcIi4uL2ZsZWV0L2FpcmNyYWZ0XCI7XG5pbXBvcnQgeyBGbGVldFNlcnZpY2UgfSBmcm9tIFwiLi4vZmxlZXQvZmxlZXQuc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVwb3J0LWJ5LWVzdGltYXRlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3JlcG9ydC1ieS1lc3RpbWF0ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlcG9ydEJ5RXN0aW1hdGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBpdGVtczogYW55W107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmbGVldFNlcnZpY2U6IEZsZWV0U2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuZ2V0QnkoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXREYXlzTGVmdChpdGVtOiBhbnkpOiBzdHJpbmcge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRheXNMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIihlc3Q6IFwiICsgTnVtYmVyKGl0ZW0uaG91cnNMZWZ0KSAvIDIgKyBcIilcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZGF5c0xlZnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0SG91cnNMZWZ0KGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaG91cnNMZWZ0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIihlc3Q6IFwiICsgTnVtYmVyKGl0ZW0uZGF5c0xlZnQpICogMiArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5ob3Vyc0xlZnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0QnkoKSB7XG4gICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZmxlZXRTZXJ2aWNlLmdldEVzdGltYXRlZERhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBzaG93aW5nQnkoKSA6IHN0cmluZyB7XG4gICAgICAgICAgcmV0dXJuICdTb3J0IGJ5IEVzdGltYXRlZCBFeHBpcnkgT3JkZXInO1xuICB9XG5cblxufVxuIl19