"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var permissions_service_1 = require("../permissions.service");
var UserComponent = /** @class */ (function () {
    function UserComponent(routerExtensions, permissionsService) {
        this.routerExtensions = routerExtensions;
        this.permissionsService = permissionsService;
        this.canLogIn = false;
        this.user = '';
        this.password = '';
        this.activity = false;
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent.prototype.autoLogIn = function (user) {
        this.permissionsService.setUser(user);
        this.routerExtensions.navigate(["fleet"], { clearHistory: true });
    };
    UserComponent.prototype.guestAccess = function () {
        this.permissionsService.setUser('default');
        this.routerExtensions.navigate(["fleet"], { clearHistory: true });
    };
    UserComponent.prototype.logIn = function () {
        this.activity = true;
        var hash = this.permissionsService.hashPw(this.password);
        if (this.permissionsService.validateUser(this.user, hash)) {
            this.permissionsService.setUser(this.user);
            this.routerExtensions.navigate(["fleet"], { clearHistory: true });
        }
        else {
            alert("incorrect user/password");
            this.activity = false;
        }
    };
    UserComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions, permissions_service_1.PermissionsService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBK0Q7QUFDL0QsOERBQTREO0FBUTVEO0lBTUUsdUJBQW9CLGdCQUFrQyxFQUFVLGtCQUFzQztRQUFsRixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQVUsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUw5RixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFDbEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVksS0FBSyxDQUFDO0lBRXdFLENBQUM7SUFFM0csZ0NBQVEsR0FBUixjQUFhLENBQUM7SUFFZCxpQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUNkLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELG1DQUFXLEdBQVg7UUFDUSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ00sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDQSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDO0lBQ1AsQ0FBQztJQTlCVSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDO3lDQU9zQyx5QkFBZ0IsRUFBOEIsd0NBQWtCO09BTjNGLGFBQWEsQ0FnQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSBcIi4uL3Blcm1pc3Npb25zLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLXVzZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdXNlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3VzZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBjYW5Mb2dJbjogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHVzZXI6IHN0cmluZyA9ICcnO1xuICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmcgPSAnJztcbiAgcHJpdmF0ZSBhY3Rpdml0eTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucywgcHJpdmF0ZSBwZXJtaXNzaW9uc1NlcnZpY2U6IFBlcm1pc3Npb25zU2VydmljZSkgeyB9IFxuXG4gIG5nT25Jbml0KCkgeyB9XG5cbiAgYXV0b0xvZ0luKHVzZXI6IHN0cmluZykge1xuICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLnNldFVzZXIodXNlcik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcImZsZWV0XCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgfVxuXG4gIGd1ZXN0QWNjZXNzKCkge1xuICAgICAgICAgIHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLnNldFVzZXIoJ2RlZmF1bHQnKTtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiZmxlZXRcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICB9XG5cbiAgbG9nSW4oKSB7XG4gICAgICAgIHRoaXMuYWN0aXZpdHkgPSB0cnVlO1xuICAgICAgICBsZXQgaGFzaCA9IHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLmhhc2hQdyh0aGlzLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKHRoaXMucGVybWlzc2lvbnNTZXJ2aWNlLnZhbGlkYXRlVXNlcih0aGlzLnVzZXIsIGhhc2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uc1NlcnZpY2Uuc2V0VXNlcih0aGlzLnVzZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJmbGVldFwiXSwgeyBjbGVhckhpc3Rvcnk6IHRydWUgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJpbmNvcnJlY3QgdXNlci9wYXNzd29yZFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgfVxuXG59XG4iXX0=