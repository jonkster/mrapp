import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { PermissionsService } from "../permissions.service";

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private canLogIn: boolean = false;
  private user: string = '';
  private password: string = '';
  private activity: boolean = false;

  constructor(private routerExtensions: RouterExtensions, private permissionsService: PermissionsService) { } 

  ngOnInit() { }

  autoLogIn(user: string) {
          this.permissionsService.setUser(user);
          this.routerExtensions.navigate(["fleet"], { clearHistory: true });
  }

  guestAccess() {
          this.permissionsService.setUser('default');
          this.routerExtensions.navigate(["fleet"], { clearHistory: true });
  }

  logIn() {
        this.activity = true;
        let hash = this.permissionsService.hashPw(this.password);
        if (this.permissionsService.validateUser(this.user, hash)) {
                this.permissionsService.setUser(this.user);
                this.routerExtensions.navigate(["fleet"], { clearHistory: true });
        } else {
                alert("incorrect user/password");
                this.activity = false;
        }
  }

}
