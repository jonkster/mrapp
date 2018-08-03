"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var aircraft_service_1 = require("../aircraft-details/aircraft.service");
var FleetService = /** @class */ (function () {
    function FleetService(aircraftService) {
        this.aircraftService = aircraftService;
        this.database = new nativescript_couchbase_1.Couchbase("aircraft-database");
        this.database.createView("aircraft", "1", function (document, emitter) {
            if (document.rego) {
                emitter.emit(document._id, document);
            }
        });
    }
    FleetService.prototype.makeNewAircraft = function (aircraft) {
        var documentId = this.database.createDocument({
            "rego": aircraft.rego,
            "ttis": aircraft.ttis,
            "type": aircraft.type,
            "hrsAtMaint": aircraft.hrsAtMaint,
            "engineHrsAtMaint": aircraft.engineHrsAtMaint,
            "propHrsAtMaint": aircraft.propHrsAtMaint,
            "clockTime": aircraft.clockTime,
            "clockOffset": aircraft.clockOffset,
            "maintenance": aircraft.maintenance
        });
    };
    FleetService.prototype.getFleet = function () {
        this.query();
        return this.aircraft;
    };
    FleetService.prototype.getAircraft = function (id) {
        return this.aircraft.filter(function (aircraft) { return aircraft._id === id; })[0];
    };
    FleetService.prototype.deleteAircraft = function (id) {
        this.database.deleteDocument(id);
        this.aircraft = this.database.executeQuery("aircraft");
    };
    FleetService.prototype.getDaysLeft = function (ac) {
        return this.aircraftService.getDaysLeft(ac);
    };
    FleetService.prototype.query = function () {
        this.aircraft = this.database.executeQuery("aircraft");
    };
    FleetService.prototype.regoExists = function (rego) {
        var r = this.aircraft.filter(function (aircraft) { return aircraft.rego === rego; })[0];
        return (r !== undefined);
    };
    FleetService.prototype.updateAircraft = function (ac) {
        this.database.updateDocument(ac._id, ac);
        this.aircraft = this.database.executeQuery("aircraft");
    };
    FleetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [aircraft_service_1.AircraftService])
    ], FleetService);
    return FleetService;
}());
exports.FleetService = FleetService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxlZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZsZWV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUVBQWlEO0FBQ2pELHlFQUF1RTtBQUt2RTtJQUlFLHNCQUFvQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDOUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtDQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVMsUUFBUSxFQUFFLE9BQU87WUFDaEUsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxzQ0FBZSxHQUF0QixVQUF1QixRQUFrQjtRQUNqQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUM5QixNQUFNLEVBQUUsUUFBUSxDQUFDLElBQUk7WUFDckIsTUFBTSxFQUFFLFFBQVEsQ0FBQyxJQUFJO1lBQ3JCLE1BQU0sRUFBRSxRQUFRLENBQUMsSUFBSTtZQUNyQixZQUFZLEVBQUUsUUFBUSxDQUFDLFVBQVU7WUFDakMsa0JBQWtCLEVBQUUsUUFBUSxDQUFDLGdCQUFnQjtZQUM3QyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsY0FBYztZQUN6QyxXQUFXLEVBQUUsUUFBUSxDQUFDLFNBQVM7WUFDL0IsYUFBYSxFQUFFLFFBQVEsQ0FBQyxXQUFXO1lBQ25DLGFBQWEsRUFBRSxRQUFRLENBQUMsV0FBVztTQUNsQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsa0NBQVcsR0FBWCxVQUFZLEVBQVU7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFFLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLEdBQUcsS0FBSyxFQUFFLEVBQW5CLENBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0lBRU0scUNBQWMsR0FBckIsVUFBc0IsRUFBVTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTSxrQ0FBVyxHQUFsQixVQUFtQixFQUFZO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sNEJBQUssR0FBWjtRQUNRLElBQUksQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLGlDQUFVLEdBQWpCLFVBQWtCLElBQVk7UUFDMUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxLQUFLLElBQUksRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU0scUNBQWMsR0FBckIsVUFBc0IsRUFBWTtRQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxRQUFRLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQXpEUSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7eUNBSzBCLGtDQUFlO09BSnpDLFlBQVksQ0EyRHhCO0lBQUQsbUJBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q291Y2hiYXNlfSBmcm9tICduYXRpdmVzY3JpcHQtY291Y2hiYXNlJztcbmltcG9ydCB7IEFpcmNyYWZ0U2VydmljZSB9IGZyb20gXCIuLi9haXJjcmFmdC1kZXRhaWxzL2FpcmNyYWZ0LnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgQWlyY3JhZnQgfSBmcm9tIFwiLi4vZmxlZXQvYWlyY3JhZnRcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZsZWV0U2VydmljZSB7XG4gICAgcHVibGljIGRhdGFiYXNlOiBhbnk7XG4gICAgcHJpdmF0ZSBhaXJjcmFmdDogQWlyY3JhZnRbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFpcmNyYWZ0U2VydmljZTogQWlyY3JhZnRTZXJ2aWNlKSB7IFxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IENvdWNoYmFzZShcImFpcmNyYWZ0LWRhdGFiYXNlXCIpO1xuICAgICAgICB0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcoXCJhaXJjcmFmdFwiLCBcIjFcIiwgZnVuY3Rpb24oZG9jdW1lbnQsIGVtaXR0ZXIpIHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlZ28pIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoZG9jdW1lbnQuX2lkLCBkb2N1bWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBtYWtlTmV3QWlyY3JhZnQoYWlyY3JhZnQ6IEFpcmNyYWZ0KSB7XG4gICAgICAgICAgICBsZXQgZG9jdW1lbnRJZCA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVnb1wiOiBhaXJjcmFmdC5yZWdvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHRpc1wiOiBhaXJjcmFmdC50dGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBhaXJjcmFmdC50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaHJzQXRNYWludFwiOiBhaXJjcmFmdC5ocnNBdE1haW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZW5naW5lSHJzQXRNYWludFwiOiBhaXJjcmFmdC5lbmdpbmVIcnNBdE1haW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcEhyc0F0TWFpbnRcIjogYWlyY3JhZnQucHJvcEhyc0F0TWFpbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjbG9ja1RpbWVcIjogYWlyY3JhZnQuY2xvY2tUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xvY2tPZmZzZXRcIjogYWlyY3JhZnQuY2xvY2tPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYWludGVuYW5jZVwiOiBhaXJjcmFmdC5tYWludGVuYW5jZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEZsZWV0KCk6IEFpcmNyYWZ0W10ge1xuICAgICAgICB0aGlzLnF1ZXJ5KCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFpcmNyYWZ0O1xuICAgIH1cblxuICAgIGdldEFpcmNyYWZ0KGlkOiBzdHJpbmcpOiBBaXJjcmFmdCB7XG4gICAgICAgIHJldHVybiB0aGlzLmFpcmNyYWZ0LmZpbHRlciggYWlyY3JhZnQgPT4gYWlyY3JhZnQuX2lkID09PSBpZClbMF07XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZUFpcmNyYWZ0KGlkOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UuZGVsZXRlRG9jdW1lbnQoaWQpO1xuICAgICAgICAgICAgdGhpcy5haXJjcmFmdCA9ICB0aGlzLmRhdGFiYXNlLmV4ZWN1dGVRdWVyeShcImFpcmNyYWZ0XCIpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXREYXlzTGVmdChhYzogQWlyY3JhZnQpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5haXJjcmFmdFNlcnZpY2UuZ2V0RGF5c0xlZnQoYWMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBxdWVyeSgpIHtcbiAgICAgICAgICAgIHRoaXMuYWlyY3JhZnQgPSAgdGhpcy5kYXRhYmFzZS5leGVjdXRlUXVlcnkoXCJhaXJjcmFmdFwiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVnb0V4aXN0cyhyZWdvOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHIgPSB0aGlzLmFpcmNyYWZ0LmZpbHRlcihhaXJjcmFmdCA9PiBhaXJjcmFmdC5yZWdvID09PSByZWdvKVswXTtcbiAgICAgICAgcmV0dXJuIChyICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVBaXJjcmFmdChhYzogQWlyY3JhZnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UudXBkYXRlRG9jdW1lbnQoYWMuX2lkLCBhYyk7XG4gICAgICAgICAgICB0aGlzLmFpcmNyYWZ0ID0gIHRoaXMuZGF0YWJhc2UuZXhlY3V0ZVF1ZXJ5KFwiYWlyY3JhZnRcIik7XG4gICAgfVxuXG59XG4iXX0=