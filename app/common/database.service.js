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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdGFiYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsaUVBQWlEO0FBR2pEO0lBSUU7UUFIVSxVQUFLLEdBQVcsMERBQTBELENBQUM7SUFHckUsQ0FBQztJQUVSLCtCQUFLLEdBQVosVUFBYSxNQUFjO1FBRXZCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQ0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFcEI7Ozs7aUJBSVM7SUFFTixDQUFDO0lBRUQsd0NBQWMsR0FBZCxVQUFlLEdBQVEsRUFBRSxNQUFjO1FBQ25DLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRU0sb0NBQVUsR0FBakIsVUFBa0IsSUFBWSxFQUFFLE1BQWM7UUFFMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFTLFFBQVEsRUFBRSxPQUFPO1lBQ3JFLHFCQUFxQjtZQUNqQixFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN6QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sd0NBQWMsR0FBckIsVUFBc0IsRUFBVTtRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRU0sK0JBQUssR0FBWixVQUFjLE9BQWU7UUFDckIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sd0NBQWMsR0FBckIsVUFBc0IsSUFBUztRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUF0RFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFOztPQUNBLGVBQWUsQ0F3RDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q291Y2hiYXNlfSBmcm9tICduYXRpdmVzY3JpcHQtY291Y2hiYXNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGFiYXNlU2VydmljZSB7XG4gICAgcHJpdmF0ZSBkYlVybDogc3RyaW5nID0gXCJodHRwOi8vbWNhcC5hdXN0cmFsaWFlYXN0LmNsb3VkYXBwLmF6dXJlLmNvbTo0OTg0L21jZGF0YVwiO1xuICAgIHByaXZhdGUgZGF0YWJhc2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcHVibGljIHNldERiKGRiTmFtZTogc3RyaW5nKSB7XG5cbiAgICAgICAgdGhpcy5kYXRhYmFzZSA9IG5ldyBDb3VjaGJhc2UoZGJOYW1lKTtcblxuICAgICAgICBsZXQgcHVzaCA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlUHVzaFJlcGxpY2F0aW9uKHRoaXMuZGJVcmwpO1xuICAgICAgICBsZXQgcHVsbCA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlUHVsbFJlcGxpY2F0aW9uKHRoaXMuZGJVcmwpO1xuXG4gICAgICAgIHB1bGwuc2V0Q29udGludW91cyh0cnVlKTtcbiAgICAgICAgcHVzaC5zZXRDb250aW51b3VzKHRydWUpO1xuXG4gICAgICAgIHB1bGwuc3RhcnQoKTtcbiAgICAgICAgcHVzaC5zdGFydCgpO1xuXG5cdC8qdGhpcy5kYXRhYmFzZS5jcmVhdGVWaWV3KFwiYWlyY3JhZnRcIiwgXCIxXCIsIGZ1bmN0aW9uKGRvY3VtZW50LCBlbWl0dGVyKSB7XG4gICAgICAgICAgICBpZihkb2N1bWVudC5yZWdvKSB7XG4gICAgICAgICAgICAgICAgZW1pdHRlci5lbWl0KGRvY3VtZW50Ll9pZCwgZG9jdW1lbnQpO1xuICAgICAgICAgICAgfVxuXHQgICAgfSk7Ki9cblxuICAgIH1cblxuICAgIGNyZWF0ZURvY3VtZW50KGRvYzogYW55LCBtY1R5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGRvYy5tY1R5cGUgPSBtY1R5cGU7XG4gICAgICAgIGxldCBpZCA9IHRoaXMuZGF0YWJhc2UuY3JlYXRlRG9jdW1lbnQoZG9jKTtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVWaWV3KG5hbWU6IHN0cmluZywgbWNUeXBlOiBzdHJpbmcpIHtcblxuICAgICAgICB0aGlzLmRhdGFiYXNlLmNyZWF0ZVZpZXcobmFtZSwgXCIxXCIsIGZ1bmN0aW9uKGRvY3VtZW50LCBlbWl0dGVyKSB7XG5cdC8vaWYoZG9jdW1lbnQucmVnbykge1xuXHQgICAgaWYoZG9jdW1lbnQubWNUeXBlID09PSBtY1R5cGUpIHtcbiAgICAgICAgICAgICAgICBlbWl0dGVyLmVtaXQoZG9jdW1lbnQuX2lkLCBkb2N1bWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkZWxldGVEb2N1bWVudChpZDogc3RyaW5nKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFiYXNlLmRlbGV0ZURvY3VtZW50KGlkKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcXVlcnkgKHFyeU5hbWU6IHN0cmluZyk6IGFueVtdIHtcbiAgICAgICAgICAgIGxldCBhYyA9IHRoaXMuZGF0YWJhc2UuZXhlY3V0ZVF1ZXJ5KHFyeU5hbWUpO1xuICAgICAgICAgICAgcmV0dXJuIGFjO1xuICAgIH1cblxuICAgIHB1YmxpYyB1cGRhdGVEb2N1bWVudChpdGVtOiBhbnkpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YWJhc2UudXBkYXRlRG9jdW1lbnQoaXRlbS5faWQsIGl0ZW0pO1xuICAgIH1cblxufVxuIl19