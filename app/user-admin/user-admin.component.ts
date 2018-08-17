import { Component, OnInit } from '@angular/core';
import { TextField } from "ui/text-field";
import { PermissionsService } from "../permissions.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import * as dialogs from "ui/dialogs";

@Component({
  moduleId: module.id,
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {
        private user: string = '';
        private group: string = '';
        private pw: string = '';
        private changingPw: boolean = false;
        private activity: boolean = false;

        constructor(private route: ActivatedRoute,
                        private routerExtensions: RouterExtensions,
                        private permissionsService: PermissionsService) {

                this.user = this.permissionsService.getCurrentUser();
                this.group = this.permissionsService.getClassOfUser(this.user);
         } 

        ngOnInit() { 
                const id = this.route.snapshot.params["id"];
                if (id !== undefined) {
                        this.user = id;
                        this.group = this.permissionsService.getClassOfUser(this.user);
                } else {
                        if (this.group === 'admin') {
                                this.pickUser();
                        }
                }
        }

        can(action: string) : boolean {
                return this.permissionsService.can(action);
        }


  savePassword() {
        this.permissionsService.setUserPw(this.user, this.pw);
        this.changingPw = false;
  }

  userSpecified(ev) {
        let userControl = <TextField>ev.object;
        let user = userControl.text;
        if (this.permissionsService.userExists(user)) {
        } else {
                dialogs.confirm({
                        title: "Add User",
                        message: user + " is not known - do you want to add as new user?",
                        okButtonText: "Add User",
                        cancelButtonText: "Cancel",
                        }).then((result: boolean) => {
                                if (result) {
                                }
                        });
        }
  }

  changePassword() {
        this.changingPw = true;
  }

  deleteUser() {
        if (this.user !== 'admin') {
                dialogs.confirm({
                        title: "Delete User: " + this.user,
                        message: "If you enter Delete, " + this.user + " WILL BE DELETED!",
                        okButtonText: "Keep " + this.user,
                        cancelButtonText: "Delete",
                        }).then((result: boolean) => {
                                if (! result) {
                                        this.permissionsService.deleteUser(this.user);
                                        alert('user ' + this.user + ' deleted');
                                        this.routerExtensions.navigate(["/fleet"], { clearHistory: true });
                                }
                        });
        } else {
                alert("cannot remove admin account");
        }
  }

  changeClass() {
        if (this.user !== 'admin') {
          dialogs.action({
                title: "User Category",
                message: "Select User category for " + this.user,
                cancelButtonText: "Cancel",
                actions: ["Admin", "Maintainer", "Pilot", "Read Only"]
                }).then((c) => {
                        if (c === "Read Only") {
                                c = 'default';
                        } else if (c === "Pilot") {
                                c = 'pilot';
                        } else if (c === "Maintainer") {
                                c = 'maintainer';
                        } else if (c === "Admin") {
                                c = 'admin';
                        }
                        this.permissionsService.setUserClass(this.user, c);
                        this.routerExtensions.navigate(["userAdmin", this.user], { clearHistory: true });
                        });
        } else {
                alert("cannot change admin account");
        }
  }

  pickUser() {
         let userNames = this.permissionsService.getUserNames();
         dialogs.action({
                title: "Select User",
                message: "Select User to Edit",
                cancelButtonText: "Cancel",
                actions: userNames
                }).then((c) => {
                        if (c === "Read Only") {
                                c = 'default';
                        } else if (c === "Pilot") {
                                c = 'pilot';
                        } else if (c === "Maintainer") {
                                c = 'maintainer';
                        } else if (c === "Admin") {
                                c = 'admin';
                        }
                        this.user = c;
                        this.routerExtensions.navigate(["userAdmin", this.user], { clearHistory: true });
                        });
  }

}
