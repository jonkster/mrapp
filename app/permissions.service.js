"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_service_1 = require("./common/database.service");
var PermissionsService = /** @class */ (function () {
    function PermissionsService(databaseService) {
        this.databaseService = databaseService;
        this.user = 'default';
        this.currentUserClass = 'default';
        this.knownUsers = {
            'admin': { group: 'admin', hash: '6789', email: 'jonathan.p.h.kelly@gmail.com', mcType: 'user' },
            'maintainer': { group: 'maintainer', hash: '6789', email: 'jonathan.p.h.kelly@gmail.com', mcType: 'user' },
            'pilot': { group: 'pilot', hash: '6789', email: 'jonathan.p.h.kelly@gmail.com', mcType: 'user' },
            'default': { group: 'default', hash: '6789', email: 'jonathan.p.h.kelly@gmail.com', mcType: 'user' }
        };
        this.permissionsStore = {
            'default': {
                'CAN_ADD_USER': false,
                'CAN_ADD_AIRCRAFT': false,
                'CAN_CHANGE_HOURS': false,
                'CAN_CLEAR_MR_ITEMS': false,
                'CAN_CHANGE_MR': false,
                'CAN_DELETE_AIRCRAFT': false,
                'CAN_DELETE_USER': false,
                'CAN_ADJUST_USER': false,
                'CAN_CHANGE_PW': false
            },
            'pilot': {
                'CAN_ADD_USER': false,
                'CAN_ADD_AIRCRAFT': false,
                'CAN_CHANGE_HOURS': true,
                'CAN_CLEAR_MR_ITEMS': true,
                'CAN_CHANGE_MR': false,
                'CAN_DELETE_AIRCRAFT': false,
                'CAN_DELETE_USER': false,
                'CAN_ADJUST_USER': false,
                'CAN_CHANGE_PW': true
            },
            'maintainer': {
                'CAN_ADD_USER': false,
                'CAN_ADD_AIRCRAFT': true,
                'CAN_CHANGE_HOURS': true,
                'CAN_CLEAR_MR_ITEMS': true,
                'CAN_CHANGE_MR': true,
                'CAN_DELETE_AIRCRAFT': true,
                'CAN_DELETE_USER': false,
                'CAN_ADJUST_USER': false,
                'CAN_CHANGE_PW': true
            },
            'admin': {
                'CAN_ADD_USER': true,
                'CAN_ADD_AIRCRAFT': true,
                'CAN_CHANGE_HOURS': true,
                'CAN_CLEAR_MR_ITEMS': true,
                'CAN_CHANGE_MR': true,
                'CAN_DELETE_AIRCRAFT': true,
                'CAN_DELETE_USER': true,
                'CAN_ADJUST_USER': true,
                'CAN_CHANGE_PW': true
            }
        };
        this.databaseService.setDb("aircraft-database");
        this.databaseService.createView("user", "user");
        this.updateData();
    }
    PermissionsService.prototype.updateData = function () {
        this.users = this.databaseService.query("user");
        for (var i = 0; i < this.users.length; i++) {
            var doc = this.users[i];
            this.knownUsers[doc.user] = doc;
            //let documentId = this.databaseService.createDocument(doc, "user");
        }
    };
    PermissionsService.prototype.addNewUser = function (user, pw, userClass) {
        var hash = this.hashPw(pw);
        var doc = { group: userClass, hash: hash, email: 'jonathan.p.h.kelly@gmail.com', mcType: "user", user: user };
        var documentId = this.databaseService.createDocument(doc, "user");
        this.updateData();
    };
    PermissionsService.prototype.can = function (item) {
        return this.checkPerms(this.currentUserClass, item);
    };
    PermissionsService.prototype.checkPerms = function (userClass, item) {
        if (this.permissionsStore[userClass] === undefined) {
            alert('user class: ' + item + ' not known');
            return false;
        }
        if (this.permissionsStore[userClass][item] !== undefined) {
            return this.permissionsStore[userClass][item];
        }
        alert('do not know permission: ' + item + ' for user class: ' + userClass);
        return false;
    };
    PermissionsService.prototype.deleteUser = function (user) {
        delete this.knownUsers[user];
    };
    PermissionsService.prototype.getClassOfUser = function (user) {
        if (this.knownUsers[user] !== undefined) {
            return this.knownUsers[user].group;
        }
        return 'default';
    };
    PermissionsService.prototype.getCurrentUser = function () {
        return this.user;
    };
    PermissionsService.prototype.getCurrentUserClass = function () {
        return this.currentUserClass;
    };
    PermissionsService.prototype.getUserNames = function () {
        return Object.keys(this.knownUsers);
    };
    PermissionsService.prototype.hashPw = function (pw) {
        return pw;
    };
    PermissionsService.prototype.isAdminAccess = function () {
        return (this.getCurrentUser() === 'admin');
    };
    PermissionsService.prototype.logOut = function () {
    };
    PermissionsService.prototype.setCurrentUserClass = function (userClass) {
        this.currentUserClass = userClass;
    };
    PermissionsService.prototype.setUser = function (user) {
        if (this.knownUsers[user] !== undefined) {
            this.user = user;
        }
        else {
            alert('I do not know: ' + user + '. Using default access');
            this.user = 'default';
        }
        this.setCurrentUserClass(this.getClassOfUser(this.user));
    };
    PermissionsService.prototype.setUserClass = function (user, group) {
        this.knownUsers[user].group = group;
    };
    PermissionsService.prototype.setUserPw = function (user, pw) {
        this.knownUsers[user].hash = this.hashPw(pw);
    };
    PermissionsService.prototype.setPerms = function (userClass, item, value) {
        if (this.permissionsStore[userClass] !== undefined) {
            if (this.permissionsStore[userClass][item] === undefined) {
                alert('adding new permission: ' + item + ' for user class: ' + userClass);
            }
            this.permissionsStore[userClass][item] = value;
        }
        else {
            alert('user class: ' + item + ' not known');
        }
    };
    PermissionsService.prototype.userExists = function (user) {
        return (this.knownUsers[user] !== undefined);
    };
    PermissionsService.prototype.validateUser = function (user, pwHash) {
        if (this.userExists(user)) {
            return (this.knownUsers[user].hash === pwHash);
        }
        return false;
    };
    PermissionsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [database_service_1.DatabaseService])
    ], PermissionsService);
    return PermissionsService;
}());
exports.PermissionsService = PermissionsService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVybWlzc2lvbnMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInBlcm1pc3Npb25zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0MsOERBQTREO0FBRzVEO0lBNkRFLDRCQUFxQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUEzRDdDLFNBQUksR0FBVyxTQUFTLENBQUM7UUFDekIscUJBQWdCLEdBQVcsU0FBUyxDQUFDO1FBQ3JDLGVBQVUsR0FBUTtZQUNwQixPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7WUFDaEcsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSw4QkFBOEIsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFO1lBQzFHLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtZQUNoRyxTQUFTLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUU7U0FDekcsQ0FBQztRQUVNLHFCQUFnQixHQUFRO1lBQzFCLFNBQVMsRUFBRTtnQkFDSCxjQUFjLEVBQUUsS0FBSztnQkFDckIsa0JBQWtCLEVBQUUsS0FBSztnQkFDekIsa0JBQWtCLEVBQUUsS0FBSztnQkFDekIsb0JBQW9CLEVBQUUsS0FBSztnQkFDM0IsZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLHFCQUFxQixFQUFFLEtBQUs7Z0JBQzVCLGlCQUFpQixFQUFFLEtBQUs7Z0JBQ3hCLGlC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dGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q291Y2hiYXNlfSBmcm9tICduYXRpdmVzY3JpcHQtY291Y2hiYXNlJztcblxuaW1wb3J0IHsgRGF0YWJhc2VTZXJ2aWNlIH0gZnJvbSBcIi4vY29tbW9uL2RhdGFiYXNlLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25zU2VydmljZSB7XG5cbiAgcHJpdmF0ZSB1c2VyOiBzdHJpbmcgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgY3VycmVudFVzZXJDbGFzczogc3RyaW5nID0gJ2RlZmF1bHQnO1xuICBwcml2YXRlIGtub3duVXNlcnM6IGFueSA9IHtcbiAgICAgICAgJ2FkbWluJzogeyBncm91cDogJ2FkbWluJywgaGFzaDogJzY3ODknLCBlbWFpbDogJ2pvbmF0aGFuLnAuaC5rZWxseUBnbWFpbC5jb20nLCBtY1R5cGU6ICd1c2VyJyB9LFxuICAgICAgICAnbWFpbnRhaW5lcic6IHsgZ3JvdXA6ICdtYWludGFpbmVyJywgaGFzaDogJzY3ODknLCBlbWFpbDogJ2pvbmF0aGFuLnAuaC5rZWxseUBnbWFpbC5jb20nLCBtY1R5cGU6ICd1c2VyJyB9LFxuICAgICAgICAncGlsb3QnOiB7IGdyb3VwOiAncGlsb3QnLCBoYXNoOiAnNjc4OScsIGVtYWlsOiAnam9uYXRoYW4ucC5oLmtlbGx5QGdtYWlsLmNvbScsIG1jVHlwZTogJ3VzZXInIH0sXG4gICAgICAgICdkZWZhdWx0JzogeyBncm91cDogJ2RlZmF1bHQnLCBoYXNoOiAnNjc4OScsIGVtYWlsOiAnam9uYXRoYW4ucC5oLmtlbGx5QGdtYWlsLmNvbScsIG1jVHlwZTogJ3VzZXInIH1cbiAgfTtcblxuICBwcml2YXRlIHBlcm1pc3Npb25zU3RvcmU6IGFueSA9IHtcbiAgICAgICAgJ2RlZmF1bHQnOiB7XG4gICAgICAgICAgICAgICAgJ0NBTl9BRERfVVNFUic6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdDQU5fQUREX0FJUkNSQUZUJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ0NBTl9DSEFOR0VfSE9VUlMnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0NMRUFSX01SX0lURU1TJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ0NBTl9DSEFOR0VfTVInOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0RFTEVURV9BSVJDUkFGVCc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdDQU5fREVMRVRFX1VTRVInOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0FESlVTVF9VU0VSJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ0NBTl9DSEFOR0VfUFcnOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAncGlsb3QnOiB7XG4gICAgICAgICAgICAgICAgJ0NBTl9BRERfVVNFUic6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdDQU5fQUREX0FJUkNSQUZUJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ0NBTl9DSEFOR0VfSE9VUlMnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdDQU5fQ0xFQVJfTVJfSVRFTVMnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdDQU5fQ0hBTkdFX01SJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ0NBTl9ERUxFVEVfQUlSQ1JBRlQnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0RFTEVURV9VU0VSJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ0NBTl9BREpVU1RfVVNFUic6IGZhbHNlLFxuICAgICAgICAgICAgICAgICdDQU5fQ0hBTkdFX1BXJzogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnbWFpbnRhaW5lcic6IHtcbiAgICAgICAgICAgICAgICAnQ0FOX0FERF9VU0VSJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ0NBTl9BRERfQUlSQ1JBRlQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdDQU5fQ0hBTkdFX0hPVVJTJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0NMRUFSX01SX0lURU1TJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0NIQU5HRV9NUic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ0NBTl9ERUxFVEVfQUlSQ1JBRlQnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdDQU5fREVMRVRFX1VTRVInOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0FESlVTVF9VU0VSJzogZmFsc2UsXG4gICAgICAgICAgICAgICAgJ0NBTl9DSEFOR0VfUFcnOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgICdhZG1pbic6IHtcbiAgICAgICAgICAgICAgICAnQ0FOX0FERF9VU0VSJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0FERF9BSVJDUkFGVCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ0NBTl9DSEFOR0VfSE9VUlMnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdDQU5fQ0xFQVJfTVJfSVRFTVMnOiB0cnVlLFxuICAgICAgICAgICAgICAgICdDQU5fQ0hBTkdFX01SJzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnQ0FOX0RFTEVURV9BSVJDUkFGVCc6IHRydWUsXG4gICAgICAgICAgICAgICAgJ0NBTl9ERUxFVEVfVVNFUic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ0NBTl9BREpVU1RfVVNFUic6IHRydWUsXG4gICAgICAgICAgICAgICAgJ0NBTl9DSEFOR0VfUFcnOiB0cnVlXG4gICAgICAgIH1cbiAgfTtcblxuICBwdWJsaWMgZGF0YWJhc2U6IGFueTtcbiAgcHJpdmF0ZSB1c2VyczogYW55W107XG5cbiAgY29uc3RydWN0b3IoIHByaXZhdGUgZGF0YWJhc2VTZXJ2aWNlOiBEYXRhYmFzZVNlcnZpY2UpIHsgXG4gICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLnNldERiKFwiYWlyY3JhZnQtZGF0YWJhc2VcIik7XG4gICAgICAgIHRoaXMuZGF0YWJhc2VTZXJ2aWNlLmNyZWF0ZVZpZXcoXCJ1c2VyXCIsIFwidXNlclwiKTtcblx0dGhpcy51cGRhdGVEYXRhKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZURhdGEoKSB7XG4gICAgICAgIHRoaXMudXNlcnMgPSB0aGlzLmRhdGFiYXNlU2VydmljZS5xdWVyeShcInVzZXJcIik7XG5cdGZvciAobGV0IGk9MDsgaSA8IHRoaXMudXNlcnMubGVuZ3RoOyBpKyspIHtcblx0XHRsZXQgZG9jID0gdGhpcy51c2Vyc1tpXTtcblx0XHR0aGlzLmtub3duVXNlcnNbZG9jLnVzZXJdID0gZG9jO1xuXHRcdC8vbGV0IGRvY3VtZW50SWQgPSB0aGlzLmRhdGFiYXNlU2VydmljZS5jcmVhdGVEb2N1bWVudChkb2MsIFwidXNlclwiKTtcblx0fVxuICB9XG5cbiAgcHVibGljIGFkZE5ld1VzZXIodXNlcjogc3RyaW5nLCBwdzogc3RyaW5nLCB1c2VyQ2xhc3M6IHN0cmluZykge1xuICAgICAgICBsZXQgaGFzaCA9IHRoaXMuaGFzaFB3KHB3KTtcbiAgICAgICAgbGV0IGRvYyA9IHtncm91cDogdXNlckNsYXNzLCBoYXNoOiBoYXNoLCBlbWFpbDogJ2pvbmF0aGFuLnAuaC5rZWxseUBnbWFpbC5jb20nLCBtY1R5cGU6IFwidXNlclwiLCB1c2VyOiB1c2VyIH07XG5cdGxldCBkb2N1bWVudElkID0gdGhpcy5kYXRhYmFzZVNlcnZpY2UuY3JlYXRlRG9jdW1lbnQoZG9jLCBcInVzZXJcIik7XG5cdHRoaXMudXBkYXRlRGF0YSgpO1xuICB9XG5cbiAgcHVibGljIGNhbihpdGVtOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tQZXJtcyh0aGlzLmN1cnJlbnRVc2VyQ2xhc3MsIGl0ZW0pO1xuICB9XG5cbiAgcHVibGljIGNoZWNrUGVybXModXNlckNsYXNzOiBzdHJpbmcsIGl0ZW06IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5wZXJtaXNzaW9uc1N0b3JlW3VzZXJDbGFzc10gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCd1c2VyIGNsYXNzOiAnICsgaXRlbSArICcgbm90IGtub3duJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBlcm1pc3Npb25zU3RvcmVbdXNlckNsYXNzXVtpdGVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnNTdG9yZVt1c2VyQ2xhc3NdW2l0ZW1dO1xuICAgICAgICB9XG4gICAgICAgIGFsZXJ0KCdkbyBub3Qga25vdyBwZXJtaXNzaW9uOiAnICsgaXRlbSArICcgZm9yIHVzZXIgY2xhc3M6ICcgKyB1c2VyQ2xhc3MpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlVXNlcih1c2VyOiBzdHJpbmcpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMua25vd25Vc2Vyc1t1c2VyXTtcbiAgfVxuXG5cbiAgcHVibGljIGdldENsYXNzT2ZVc2VyKHVzZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGlmICh0aGlzLmtub3duVXNlcnNbdXNlcl0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmtub3duVXNlcnNbdXNlcl0uZ3JvdXA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICdkZWZhdWx0JztcbiAgfVxuXG4gIHB1YmxpYyBnZXRDdXJyZW50VXNlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyO1xuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRVc2VyQ2xhc3MoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFVzZXJDbGFzcztcbiAgfVxuXG4gIHB1YmxpYyBnZXRVc2VyTmFtZXMoKTogc3RyaW5nW10ge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5rbm93blVzZXJzKTtcbiAgfVxuXG4gIHB1YmxpYyBoYXNoUHcocHc6IHN0cmluZykgOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gcHc7XG4gIH1cblxuICBpc0FkbWluQWNjZXNzKCkge1xuICAgICAgICByZXR1cm4gICh0aGlzLmdldEN1cnJlbnRVc2VyKCkgPT09ICdhZG1pbicpO1xuICB9XG5cbiAgcHVibGljIGxvZ091dCgpIHtcbiAgfVxuXG4gIHB1YmxpYyBzZXRDdXJyZW50VXNlckNsYXNzKHVzZXJDbGFzczogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXJDbGFzcyA9IHVzZXJDbGFzcztcbiAgfVxuXG4gIHB1YmxpYyBzZXRVc2VyKHVzZXI6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5rbm93blVzZXJzW3VzZXJdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KCdJIGRvIG5vdCBrbm93OiAnICsgdXNlciArICcuIFVzaW5nIGRlZmF1bHQgYWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyID0gJ2RlZmF1bHQnXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRDdXJyZW50VXNlckNsYXNzKHRoaXMuZ2V0Q2xhc3NPZlVzZXIodGhpcy51c2VyKSk7XG4gIH1cblxuICBwdWJsaWMgc2V0VXNlckNsYXNzKHVzZXI6IHN0cmluZywgZ3JvdXA6IHN0cmluZykge1xuICAgICAgICB0aGlzLmtub3duVXNlcnNbdXNlcl0uZ3JvdXAgPSBncm91cDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRVc2VyUHcodXNlcjogc3RyaW5nLCBwdzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMua25vd25Vc2Vyc1t1c2VyXS5oYXNoID0gdGhpcy5oYXNoUHcocHcpO1xuICB9XG5cblxuICBwdWJsaWMgc2V0UGVybXModXNlckNsYXNzOiBzdHJpbmcsIGl0ZW06IHN0cmluZywgdmFsdWU6IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMucGVybWlzc2lvbnNTdG9yZVt1c2VyQ2xhc3NdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZXJtaXNzaW9uc1N0b3JlW3VzZXJDbGFzc11baXRlbV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ2FkZGluZyBuZXcgcGVybWlzc2lvbjogJyArIGl0ZW0gKyAnIGZvciB1c2VyIGNsYXNzOiAnICsgdXNlckNsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uc1N0b3JlW3VzZXJDbGFzc11baXRlbV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhbGVydCgndXNlciBjbGFzczogJyArIGl0ZW0gKyAnIG5vdCBrbm93bicpO1xuICAgICAgICB9XG4gIH1cblxuICB1c2VyRXhpc3RzKHVzZXI6IHN0cmluZykgOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLmtub3duVXNlcnNbdXNlcl0gIT09IHVuZGVmaW5lZCk7XG4gIH1cblxuICB2YWxpZGF0ZVVzZXIodXNlcjogc3RyaW5nLCBwd0hhc2g6IHN0cmluZykgOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudXNlckV4aXN0cyh1c2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5rbm93blVzZXJzW3VzZXJdLmhhc2ggPT09IHB3SGFzaCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbn1cbiJdfQ==