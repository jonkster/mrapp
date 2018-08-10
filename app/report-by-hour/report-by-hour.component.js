"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fleet_service_1 = require("../fleet/fleet.service");
var ReportByHourComponent = /** @class */ (function () {
    function ReportByHourComponent(fleetService) {
        this.fleetService = fleetService;
        this.sortBy = 'hours';
    }
    ReportByHourComponent.prototype.ngOnInit = function () {
        this.getBy('hours');
    };
    ReportByHourComponent.prototype.getDaysLeft = function (item) {
        if (item.type === 'hours') {
            return '';
        }
        else {
            return item.daysLeft;
        }
    };
    ReportByHourComponent.prototype.getHoursLeft = function (item) {
        if (item.type === 'date') {
            return '';
        }
        else {
            return item.hoursLeft;
        }
    };
    ReportByHourComponent.prototype.getBy = function (by) {
        if (by === 'hours') {
            this.items = this.fleetService.getHours();
        }
        else {
            this.items = this.fleetService.getDate();
        }
    };
    ReportByHourComponent.prototype.showingBy = function () {
        if (this.sortBy === 'hours') {
            return 'Sort by Hours Left';
        }
        else {
            return 'Sort by Days Left';
        }
    };
    ReportByHourComponent.prototype.toggleByHours = function (ev) {
        if (ev.object.checked) {
            this.sortBy = 'hours';
        }
        else {
            this.sortBy = 'date';
        }
        this.getBy(this.sortBy);
    };
    ReportByHourComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-report-by-hour',
            templateUrl: './report-by-hour.component.html',
            styleUrls: ['./report-by-hour.component.scss']
        }),
        __metadata("design:paramtypes", [fleet_service_1.FleetService])
    ], ReportByHourComponent);
    return ReportByHourComponent;
}());
exports.ReportByHourComponent = ReportByHourComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHdEQUFzRDtBQVF0RDtJQUtFLCtCQUFvQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUZ0QyxXQUFNLEdBQVcsT0FBTyxDQUFDO0lBRWlCLENBQUM7SUFFbkQsd0NBQVEsR0FBUjtRQUNNLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLElBQVM7UUFDdEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDbEIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0EsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDN0IsQ0FBQztJQUNQLENBQUM7SUFFTSw0Q0FBWSxHQUFuQixVQUFvQixJQUFTO1FBQ3ZCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuQixNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNBLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzlCLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQUssR0FBWixVQUFhLEVBQVU7UUFDakIsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0EsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2pELENBQUM7SUFDUCxDQUFDO0lBRU0seUNBQVMsR0FBaEI7UUFDTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3BDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNBLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztRQUNuQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLDZDQUFhLEdBQXBCLFVBQXFCLEVBQUU7UUFDZixFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDNUIsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFsRFUscUJBQXFCO1FBTmpDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQy9DLENBQUM7eUNBTWtDLDRCQUFZO09BTG5DLHFCQUFxQixDQW9EakM7SUFBRCw0QkFBQztDQUFBLEFBcERELElBb0RDO0FBcERZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuLi9mbGVldC9haXJjcmFmdFwiO1xuaW1wb3J0IHsgRmxlZXRTZXJ2aWNlIH0gZnJvbSBcIi4uL2ZsZWV0L2ZsZWV0LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXJlcG9ydC1ieS1ob3VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcG9ydC1ieS1ob3VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmVwb3J0LWJ5LWhvdXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXBvcnRCeUhvdXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBpdGVtczogYW55W107XG4gIHByaXZhdGUgc29ydEJ5OiBzdHJpbmcgPSAnaG91cnMnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmxlZXRTZXJ2aWNlOiBGbGVldFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmdldEJ5KCdob3VycycpO1xuICB9XG5cbiAgcHVibGljIGdldERheXNMZWZ0KGl0ZW06IGFueSk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpdGVtLnR5cGUgPT09ICdob3VycycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZGF5c0xlZnQ7XG4gICAgICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBnZXRIb3Vyc0xlZnQoaXRlbTogYW55KTogc3RyaW5nIHtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmhvdXJzTGVmdDtcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIGdldEJ5KGJ5OiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKGJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZmxlZXRTZXJ2aWNlLmdldEhvdXJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtcyA9IHRoaXMuZmxlZXRTZXJ2aWNlLmdldERhdGUoKTtcbiAgICAgICAgfVxuICB9XG5cbiAgcHVibGljIHNob3dpbmdCeSgpIDogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuc29ydEJ5ID09PSAnaG91cnMnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdTb3J0IGJ5IEhvdXJzIExlZnQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAnU29ydCBieSBEYXlzIExlZnQnO1xuICAgICAgICB9XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlQnlIb3Vycyhldikge1xuICAgICAgICAgIGlmIChldi5vYmplY3QuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydEJ5ID0gJ2hvdXJzJztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc29ydEJ5ID0gJ2RhdGUnO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmdldEJ5KHRoaXMuc29ydEJ5KTtcbiAgfVxuXG59XG4iXX0=