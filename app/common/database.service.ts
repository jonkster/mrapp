import { Injectable } from '@angular/core';
import {Couchbase} from 'nativescript-couchbase';

@Injectable()
export class DatabaseService {
    private dbUrl: string = "http://mcap.australiaeast.cloudapp.azure.com:4984/mcdata";
    private database: any;

  constructor() { }

    public setDb(dbName: string) {

        this.database = new Couchbase(dbName);

        let push = this.database.createPushReplication(this.dbUrl);
        let pull = this.database.createPullReplication(this.dbUrl);

        pull.setContinuous(true);
        push.setContinuous(true);

        pull.start();
        push.start();

	/*this.database.createView("aircraft", "1", function(document, emitter) {
            if(document.rego) {
                emitter.emit(document._id, document);
            }
	    });*/

    }

    createDocument(doc: any, mcType: string): string {
        doc.mcType = mcType;
        let id = this.database.createDocument(doc);
        return id;
    }

    public createView(name: string, mcType: string) {

        this.database.createView(name, "1", function(document, emitter) {
	//if(document.rego) {
	    if(document.mcType === mcType) {
                emitter.emit(document._id, document);
            }
        });
    }

    public deleteDocument(id: string) {
            this.database.deleteDocument(id);
    }

    public query (qryName: string): any[] {
            let ac = this.database.executeQuery(qryName);
            return ac;
    }

    public updateDocument(item: any) {
            this.database.updateDocument(item._id, item);
    }

}
