import { Injectable } from '@angular/core';
import {Couchbase} from 'nativescript-couchbase';

@Injectable()
export class DatabaseService {
    private dbUrl: string = "http://mcap.australiaeast.cloudapp.azure.com:4984/mcdata";
    private database: any;

  constructor() { 
    }

    public setDb(dbName: string) {

        this.database = new Couchbase(dbName);

        let push = this.database.createPushReplication(this.dbUrl);
        let pull = this.database.createPullReplication(this.dbUrl);

        pull.setContinuous(true);
        push.setContinuous(true);

        pull.start();
        push.start();

        this.database.createView("aircraft", "1", function(document, emitter) {
            if(document.rego) {
                emitter.emit(document._id, document);
            }
        });
    }

    createDocument(doc: any, mcType: string): string {
        doc._mcType = mcType;
        return this.database.createDocument(doc);
    }

    public createView(name: string, mcType: string) {

        let docRevision: string = "1";

        this.database.createView(name, docRevision, function(document, emitter) {
            if(document._mcType === mcType) {
                emitter.emit(document._id, document);
            }
        });
    }

    public deleteDocument(id: string) {
            this.database.deleteDocument(id);
    }

    public query (qryName: string): any[] {
            return this.database.executeQuery(qryName);
    }

    public updateDocument(item: any) {
            this.database.updateDocument(item._id, item);
    }

}
