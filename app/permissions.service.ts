import { Injectable } from '@angular/core';
import {Couchbase} from 'nativescript-couchbase';

import { DatabaseService } from "./common/database.service";

@Injectable()
export class PermissionsService {

  private user: string = 'default';
  private currentUserClass: string = 'default';
  private knownUsers: any = {
        'admin': { group: 'admin', hash: '6789', email: 'jonathan.p.h.kelly@gmail.com', mcType: 'user' },
        'maintainer': { group: 'maintainer', hash: '6789', email: 'jonathan.p.h.kelly@gmail.com', mcType: 'user' },
        'pilot': { group: 'pilot', hash: '6789', email: 'jonathan.p.h.kelly@gmail.com', mcType: 'user' },
        'default': { group: 'default', hash: '6789', email: 'jonathan.p.h.kelly@gmail.com', mcType: 'user' }
  };

  private permissionsStore: any = {
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

  public database: any;
  private users: any[];

  constructor( private databaseService: DatabaseService) { 
        this.databaseService.setDb("aircraft-database");
        this.databaseService.createView("user", "user");
	this.updateUsers();
  }

  private updateData() {
        this.users = this.databaseService.query("user");
	console.log(this.users);
	for (let i=0; i < this.users.length; i++) {
		let doc = this.users[i];
		this.knownUsers[doc.user] = doc;
		//let documentId = this.databaseService.createDocument(doc, "user");
	}
  }

  public addNewUser(user: string, pw: string, userClass: string) {
        let hash = this.hashPw(pw);
        let doc = {group: userClass, hash: hash, email: 'jonathan.p.h.kelly@gmail.com', mcType: "user", user: user };
	console.log('u', doc);
	let documentId = this.databaseService.createDocument(doc, "user");
	this.updateUsers();
  }

  public can(item: string): boolean {
        return this.checkPerms(this.currentUserClass, item);
  }

  public checkPerms(userClass: string, item: string): boolean {
        if (this.permissionsStore[userClass] === undefined) {
                alert('user class: ' + item + ' not known');
                return false;
        }
        if (this.permissionsStore[userClass][item] !== undefined) {
                return this.permissionsStore[userClass][item];
        }
        alert('do not know permission: ' + item + ' for user class: ' + userClass);
        return false;
  }

  public deleteUser(user: string) {
        delete this.knownUsers[user];
  }


  public getClassOfUser(user: string): string {
        if (this.knownUsers[user] !== undefined) {
                return this.knownUsers[user].group;
        }
        return 'default';
  }

  public getCurrentUser(): string {
        return this.user;
  }

  public getCurrentUserClass(): string {
        return this.currentUserClass;
  }

  public getUserNames(): string[] {
        return Object.keys(this.knownUsers);
  }

  public hashPw(pw: string) : string {
        return pw;
  }

  isAdminAccess() {
        return  (this.getCurrentUser() === 'admin');
  }

  public logOut() {
  }

  public setCurrentUserClass(userClass: string) {
        this.currentUserClass = userClass;
  }

  public setUser(user: string) {
        if (this.knownUsers[user] !== undefined) {
                this.user = user;
        } else {
                alert('I do not know: ' + user + '. Using default access');
                this.user = 'default'
        }
        this.setCurrentUserClass(this.getClassOfUser(this.user));
        console.log(user, this.permissionsStore[this.currentUserClass]);
  }

  public setUserClass(user: string, group: string) {
        this.knownUsers[user].group = group;
  }

  public setUserPw(user: string, pw: string) {
        this.knownUsers[user].hash = this.hashPw(pw);
  }


  public setPerms(userClass: string, item: string, value: boolean) {
        if (this.permissionsStore[userClass] !== undefined) {
                if (this.permissionsStore[userClass][item] === undefined) {
                        alert('adding new permission: ' + item + ' for user class: ' + userClass);
                }
                this.permissionsStore[userClass][item] = value;
        } else {
                alert('user class: ' + item + ' not known');
        }
  }

  userExists(user: string) : boolean {
        return (this.knownUsers[user] !== undefined);
  }

  validateUser(user: string, pwHash: string) : boolean {
        if (this.userExists(user)) {
                return (this.knownUsers[user].hash === pwHash);
        }
        return false;
  }

}
