"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_couchbase_1 = require("nativescript-couchbase");
var DatabaseService = /** @class */ (function () {
    function DatabaseService() {
        this.dbUrl = "http://mcap.australiaeast.cloudapp.azure.com:4984/mcdata";
    }
    DatabaseService.prototype.setDb = function (dbName) {
        this.database = new nativescript_couchbase_1.Couchbase(dbName);
        var push = this.database.createPushReplication(this.dbUrl);
        var pull = this.database.createPullReplication(this.dbUrl);
        pull.setContinuous(true);
        push.setContinuous(true);
        pull.start();
        push.start();
        /*this.database.createView("aircraft", "1", function(document, emitter) {
                if(document.rego) {
                    emitter.emit(document._id, document);
                }
            });*/
    };
    DatabaseService.prototype.createDocument = function (doc, mcType) {
        doc.mcType = mcType;
        var id = this.database.createDocument(doc);
        return id;
    };
    DatabaseService.prototype.createView = function (name, mcType) {
        this.database.createView(name, "1", function (document, emitter) {
            if (document.mcType === mcType) {
                emitter.emit(document._id, document);
            }
        });
    };
    DatabaseService.prototype.deleteDocument = function (id) {
        this.database.deleteDocument(id);
    };
    DatabaseService.prototype.query = function (qryName) {
        var ac = this.database.executeQuery(qryName);
        return ac;
    };
    DatabaseService.prototype.updateDocument = function (item) {
        this.database.updateDocument(item._id, item);
    };
    DatabaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUVBQWlEO0FBR2pEO0lBSUU7UUFIVSxVQUFLLEdBQVcsMERBQTBELENBQUM7SUFHckUsQ0FBQztJQUVSLCtCQUFLLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEI7Ozs7aUJBSVM7SUFFTixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEdBQVEsRUFBRSxNQUFjO1FBQ25DLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU0sb0NBQVUsR0FBakIsVUFBa0IsSUFBWSxFQUFFLE1BQWM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFTLFFBQVEsRUFBRSxPQUFPO1lBQ2pFLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3Q0FBYyxHQUFyQixVQUFzQixFQUFVO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSwrQkFBSyxHQUFaLFVBQWMsT0FBZTtRQUNyQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFTSx3Q0FBYyxHQUFyQixVQUFzQixJQUFTO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQXBEUSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7O09BQ0EsZUFBZSxDQXNEM0I7SUFBRCxzQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb3VjaGJhc2V9IGZyb20gJ25hdGl2ZXNjcmlwdC1jb3VjaGJhc2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGF0YWJhc2VTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGRiVXJsOiBzdHJpbmcgPSBcImh0dHA6Ly9tY2FwLmF1c3RyYWxpYWVhc3QuY2xvdWRhcHAuYXp1cmUuY29tOjQ5ODQvbWNkYXRhXCI7XG4gICAgcHJpdmF0ZSBkYXRhYmFzZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBwdWJsaWMgc2V0RGIoZGJOYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlID0gbmV3IENvdWNoYmFzZShkYk5hbWUpO1xuXG4gICAgICAgIGxldCBwdXNoID0gdGhpcy5kYXRhYmFzZS5jcmVhdGVQdXNoUmVwbGljYXRpb24odGhpcy5kYlVybCk7XG4gICAgICAgIGxldCBwdWxsID0gdGhpcy5kYXRhYmFzZS5jcmVhdGVQdWxsUmVwbGljYXRpb24odGhpcy5kYlVybCk7XG5cbiAgICAgICAgcHVsbC5zZXRDb250aW51b3VzKHRydWUpO1xuICAgICAgICBwdXNoLnNldENvbnRpbnVvdXModHJ1ZSk7XG5cbiAgICAgICAgcHVsbC5zdGFydCgpO1xuICAgICAgICBwdXNoLnN0YXJ0KCk7XG5cblx0Lyp0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcoXCJhaXJjcmFmdFwiLCBcIjFcIiwgZnVuY3Rpb24oZG9jdW1lbnQsIGVtaXR0ZXIpIHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlZ28pIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoZG9jdW1lbnQuX2lkLCBkb2N1bWVudCk7XG4gICAgICAgICAgICB9XG5cdCAgICB9KTsqL1xuXG4gICAgfVxuXG4gICAgY3JlYXRlRG9jdW1lbnQoZG9jOiBhbnksIG1jVHlwZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgZG9jLm1jVHlwZSA9IG1jVHlwZTtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5kYXRhYmFzZS5jcmVhdGVEb2N1bWVudChkb2MpO1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGNyZWF0ZVZpZXcobmFtZTogc3RyaW5nLCBtY1R5cGU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcobmFtZSwgXCIxXCIsIGZ1bmN0aW9uKGRvY3VtZW50LCBlbWl0dGVyKSB7XG5cdCAgICBpZihkb2N1bWVudC5tY1R5cGUgPT09IG1jVHlwZSkge1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChkb2N1bWVudC5faWQsIGRvY3VtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZURvY3VtZW50KGlkOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UuZGVsZXRlRG9jdW1lbnQoaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBxdWVyeSAocXJ5TmFtZTogc3RyaW5nKTogYW55W10ge1xuICAgICAgICAgICAgbGV0IGFjID0gdGhpcy5kYXRhYmFzZS5leGVjdXRlUXVlcnkocXJ5TmFtZSk7XG4gICAgICAgICAgICByZXR1cm4gYWM7XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZURvY3VtZW50KGl0ZW06IGFueSkge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS51cGRhdGVEb2N1bWVudChpdGVtLl9pZCwgaXRlbSk7XG4gICAgfVxuXG59XG4iXX0=