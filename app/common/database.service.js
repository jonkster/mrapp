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
        this.query("aircraft");
    };
    DatabaseService.prototype.createDocument = function (doc, mcType) {
        doc.mcType = mcType;
        var id = this.database.createDocument(doc);
        return id;
    };
    DatabaseService.prototype.createView = function (name, mcType) {
        this.database.createView(name, "1", function (document, emitter) {
            //if(document.rego) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUVBQWlEO0FBR2pEO0lBSUU7UUFIVSxVQUFLLEdBQVcsMERBQTBELENBQUM7SUFHckUsQ0FBQztJQUVSLCtCQUFLLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFYixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVMsUUFBUSxFQUFFLE9BQU87WUFDaEUsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVWLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELHdDQUFjLEdBQWQsVUFBZSxHQUFRLEVBQUUsTUFBYztRQUNuQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQyxNQUFNLENBQUMsRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVNLG9DQUFVLEdBQWpCLFVBQWtCLElBQVksRUFBRSxNQUFjO1FBRTFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsVUFBUyxRQUFRLEVBQUUsT0FBTztZQUNyRSxxQkFBcUI7WUFDakIsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDekMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLHdDQUFjLEdBQXJCLFVBQXNCLEVBQVU7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLCtCQUFLLEdBQVosVUFBYyxPQUFlO1FBQ3JCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVNLHdDQUFjLEdBQXJCLFVBQXNCLElBQVM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBdkRRLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTs7T0FDQSxlQUFlLENBeUQzQjtJQUFELHNCQUFDO0NBQUEsQUF6REQsSUF5REM7QUF6RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvdWNoYmFzZX0gZnJvbSAnbmF0aXZlc2NyaXB0LWNvdWNoYmFzZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgZGJVcmw6IHN0cmluZyA9IFwiaHR0cDovL21jYXAuYXVzdHJhbGlhZWFzdC5jbG91ZGFwcC5henVyZS5jb206NDk4NC9tY2RhdGFcIjtcbiAgICBwcml2YXRlIGRhdGFiYXNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHB1YmxpYyBzZXREYihkYk5hbWU6IHN0cmluZykge1xuXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBuZXcgQ291Y2hiYXNlKGRiTmFtZSk7XG5cbiAgICAgICAgbGV0IHB1c2ggPSB0aGlzLmRhdGFiYXNlLmNyZWF0ZVB1c2hSZXBsaWNhdGlvbih0aGlzLmRiVXJsKTtcbiAgICAgICAgbGV0IHB1bGwgPSB0aGlzLmRhdGFiYXNlLmNyZWF0ZVB1bGxSZXBsaWNhdGlvbih0aGlzLmRiVXJsKTtcblxuICAgICAgICBwdWxsLnNldENvbnRpbnVvdXModHJ1ZSk7XG4gICAgICAgIHB1c2guc2V0Q29udGludW91cyh0cnVlKTtcblxuICAgICAgICBwdWxsLnN0YXJ0KCk7XG4gICAgICAgIHB1c2guc3RhcnQoKTtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcoXCJhaXJjcmFmdFwiLCBcIjFcIiwgZnVuY3Rpb24oZG9jdW1lbnQsIGVtaXR0ZXIpIHtcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LnJlZ28pIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoZG9jdW1lbnQuX2lkLCBkb2N1bWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cdHRoaXMucXVlcnkoXCJhaXJjcmFmdFwiKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEb2N1bWVudChkb2M6IGFueSwgbWNUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBkb2MubWNUeXBlID0gbWNUeXBlO1xuICAgICAgICBsZXQgaWQgPSB0aGlzLmRhdGFiYXNlLmNyZWF0ZURvY3VtZW50KGRvYyk7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlVmlldyhuYW1lOiBzdHJpbmcsIG1jVHlwZTogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5kYXRhYmFzZS5jcmVhdGVWaWV3KG5hbWUsIFwiMVwiLCBmdW5jdGlvbihkb2N1bWVudCwgZW1pdHRlcikge1xuXHQvL2lmKGRvY3VtZW50LnJlZ28pIHtcblx0ICAgIGlmKGRvY3VtZW50Lm1jVHlwZSA9PT0gbWNUeXBlKSB7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KGRvY3VtZW50Ll9pZCwgZG9jdW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGVsZXRlRG9jdW1lbnQoaWQ6IHN0cmluZykge1xuICAgICAgICAgICAgdGhpcy5kYXRhYmFzZS5kZWxldGVEb2N1bWVudChpZCk7XG4gICAgfVxuXG4gICAgcHVibGljIHF1ZXJ5IChxcnlOYW1lOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgICAgICAgICBsZXQgYWMgPSB0aGlzLmRhdGFiYXNlLmV4ZWN1dGVRdWVyeShxcnlOYW1lKTtcbiAgICAgICAgICAgIHJldHVybiBhYztcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlRG9jdW1lbnQoaXRlbTogYW55KSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLnVwZGF0ZURvY3VtZW50KGl0ZW0uX2lkLCBpdGVtKTtcbiAgICB9XG5cbn1cbiJdfQ==