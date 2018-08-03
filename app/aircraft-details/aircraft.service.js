"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AircraftService = /** @class */ (function () {
    function AircraftService() {
    }
    AircraftService.prototype.getEngineLeft = function (ac, engine) {
        return ac.engineHrsAtMaint[engine - 1] - this.getTtis(ac);
    };
    AircraftService.prototype.getPropLeft = function (ac, engine) {
        return ac.propHrsAtMaint[engine - 1] - this.getTtis(ac);
    };
    AircraftService.prototype.getHrsLeft = function (ac) {
        return ac.hrsAtMaint - this.getTtis(ac);
    };
    AircraftService.prototype.getDaysLeft = function (ac) {
        if (ac.annualDateTuple !== undefined) {
            var exDate = new Date(ac.annualDateTuple[0], ac.annualDateTuple[1] - 1, ac.annualDateTuple[2]);
            var time = exDate.valueOf() - Date.now().valueOf();
            return Math.round(time / (24 * 60 * 60 * 1000));
        }
        else {
            return 0;
        }
    };
    AircraftService.prototype.getTtis = function (ac) {
        return ac.clockTime + ac.clockOffset;
    };
    AircraftService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], AircraftService);
    return AircraftService;
}());
exports.AircraftService = AircraftService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlyY3JhZnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFpcmNyYWZ0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFJM0M7SUFFRTtJQUFnQixDQUFDO0lBRWhCLHVDQUFhLEdBQWIsVUFBYyxFQUFZLEVBQUUsTUFBYztRQUNyQyxNQUFNLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRixxQ0FBVyxHQUFYLFVBQVksRUFBWSxFQUFFLE1BQWM7UUFDbkMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVGLG9DQUFVLEdBQVYsVUFBVyxFQUFZO1FBQ2xCLE1BQU0sQ0FBQyxFQUFFLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVGLHFDQUFXLEdBQVgsVUFBWSxFQUFZO1FBQ2hCLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUMsRUFBRSxHQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0EsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqQixDQUFDO0lBQ1QsQ0FBQztJQUVGLGlDQUFPLEdBQVAsVUFBUSxFQUFZO1FBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUMzQyxDQUFDO0lBNUJVLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBOEIzQjtJQUFELHNCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUE5QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBaXJjcmFmdCB9IGZyb20gXCIuLi9mbGVldC9haXJjcmFmdFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWlyY3JhZnRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICBnZXRFbmdpbmVMZWZ0KGFjOiBBaXJjcmFmdCwgZW5naW5lOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYWMuZW5naW5lSHJzQXRNYWludFtlbmdpbmUtMV0gLSB0aGlzLmdldFR0aXMoYWMpO1xuICAgIH1cblxuICAgZ2V0UHJvcExlZnQoYWM6IEFpcmNyYWZ0LCBlbmdpbmU6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBhYy5wcm9wSHJzQXRNYWludFtlbmdpbmUtMV0gLSB0aGlzLmdldFR0aXMoYWMpO1xuICAgIH1cblxuICAgZ2V0SHJzTGVmdChhYzogQWlyY3JhZnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gYWMuaHJzQXRNYWludCAtIHRoaXMuZ2V0VHRpcyhhYyk7XG4gICAgfVxuXG4gICBnZXREYXlzTGVmdChhYzogQWlyY3JhZnQpOiBudW1iZXIge1xuICAgICAgICAgICBpZiAoYWMuYW5udWFsRGF0ZVR1cGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICBsZXQgZXhEYXRlID0gbmV3IERhdGUoYWMuYW5udWFsRGF0ZVR1cGxlWzBdLCBhYy5hbm51YWxEYXRlVHVwbGVbMV0tMSwgYWMuYW5udWFsRGF0ZVR1cGxlWzJdKTtcbiAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IGV4RGF0ZS52YWx1ZU9mKCkgLSBEYXRlLm5vdygpLnZhbHVlT2YoKTtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aW1lIC8gKDI0KjYwKjYwKjEwMDApKTtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgfVxuICAgfVxuXG4gIGdldFR0aXMoYWM6IEFpcmNyYWZ0KTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIGFjLmNsb2NrVGltZSArIGFjLmNsb2NrT2Zmc2V0O1xuICB9XG5cbn1cbiJdfQ==