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
        this.database.createView("aircraft", "1", function (document, emitter) {
            if (document.rego) {
                emitter.emit(document._id, document);
            }
        });
    };
    DatabaseService.prototype.createDocument = function (doc, mcType) {
        doc._mcType = mcType;
        return this.database.createDocument(doc);
    };
    DatabaseService.prototype.createView = function (name, mcType) {
        var docRevision = "1";
        this.database.createView(name, docRevision, function (document, emitter) {
            if (document._mcType === mcType) {
                emitter.emit(document._id, document);
            }
        });
    };
    DatabaseService.prototype.deleteDocument = function (id) {
        this.database.deleteDocument(id);
    };
    DatabaseService.prototype.query = function (qryName) {
        return this.database.executeQuery(qryName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUVBQWlEO0FBR2pEO0lBSUU7UUFIVSxVQUFLLEdBQVcsMERBQTBELENBQUM7SUFJbkYsQ0FBQztJQUVNLCtCQUFLLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVMsUUFBUSxFQUFFLE9BQU87WUFDaEUsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3Q0FBYyxHQUFkLFVBQWUsR0FBUSxFQUFFLE1BQWM7UUFDbkMsR0FBRyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7UUFDckIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxvQ0FBVSxHQUFqQixVQUFrQixJQUFZLEVBQUUsTUFBYztRQUUxQyxJQUFJLFdBQVcsR0FBVyxHQUFHLENBQUM7UUFFOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFTLFFBQVEsRUFBRSxPQUFPO1lBQ2xFLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3Q0FBYyxHQUFyQixVQUFzQixFQUFVO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSwrQkFBSyxHQUFaLFVBQWMsT0FBZTtRQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVNLHdDQUFjLEdBQXJCLFVBQXNCLElBQVM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBckRRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBdUQzQjtJQUFELHNCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvdWNoYmFzZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWNvdWNoYmFzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgZGJVcmw6IHN0cmluZyA9IFwiaHR0cDovL21jYXAuYXVzdHJhbGlhZWFzdC5jbG91ZGFwcC5henVyZS5jb206NDk4NC9tY2RhdGFcIjtcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXREYihkYk5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKGRiTmFtZSk7XG5cbiAgICAgICAgbGV0IHB1c2ggPSB0aGlzLmRhdGFiYXNlLmNyZWF0ZVB1c2hSZXBsaWNhdGlvbih0aGlzLmRiVXJsKTtcbiAgICAgICAgbGV0IHB1bGwgPSB0aGlzLmRhdGFiYXNlLmNyZWF0ZVB1bGxSZXBsaWNhdGlvbih0aGlzLmRiVXJsKTtcblxuICAgICAgICBwdWxsLnNldENvbnRpbnVvdXModHJ1ZSk7XG4gICAgICAgIHB1c2guc2V0Q29udGludW91cyh0cnVlKTtcblxuICAgICAgICBwdWxsLnN0YXJ0KCk7XG4gICAgICAgIHB1c2guc3RhcnQoKTtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcoXCJhaXJjcmFmdFwiLCBcIjFcIiwgZnVuY3Rpb24oZG9jdW1lbnQsIGVtaXR0ZXIpIHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlZ28pIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoZG9jdW1lbnQuX2lkLCBkb2N1bWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZURvY3VtZW50KGRvYzogYW55LCBtY1R5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGRvYy5fbWNUeXBlID0gbWNUeXBlO1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhYmFzZS5jcmVhdGVEb2N1bWVudChkb2MpO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVWaWV3KG5hbWU6IHN0cmluZywgbWNUeXBlOiBzdHJpbmcpIHtcblxuICAgICAgICBsZXQgZG9jUmV2aXNpb246IHN0cmluZyA9IFwiMVwiO1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2UuY3JlYXRlVmlldyhuYW1lLCBkb2NSZXZpc2lvbiwgZnVuY3Rpb24oZG9jdW1lbnQsIGVtaXR0ZXIpIHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50Ll9tY1R5cGUgPT09IG1jVHlwZSkge1xuICAgICAgICAgICAgICAgIGVtaXR0ZXIuZW1pdChkb2N1bWVudC5faWQsIGRvY3VtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRlbGV0ZURvY3VtZW50KGlkOiBzdHJpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UuZGVsZXRlRG9jdW1lbnQoaWQpO1xuICAgIH1cblxuICAgIHB1YmxpYyBxdWVyeSAocXJ5TmFtZTogc3RyaW5nKTogYW55W10ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YWJhc2UuZXhlY3V0ZVF1ZXJ5KHFyeU5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVEb2N1bWVudChpdGVtOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UudXBkYXRlRG9jdW1lbnQoaXRlbS5faWQsIGl0ZW0pO1xuICAgIH1cblxufVxuIl19