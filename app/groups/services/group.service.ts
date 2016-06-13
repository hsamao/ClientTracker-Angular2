/**
 * Created by samao on 6/9/16.
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Group} from "../group.model";

@Injectable()

export class GroupService {
    private groups;
    private group;
    private fireBaseUrl:string;
    private fbRef:Firebase;
    private groupRef:Firebase;
    private clientRef:Firebase;


    constructor() {
        this.fireBaseUrl = 'https://clienttrackerapp01.firebaseio.com/';
        this.fbRef = new Firebase(this.fireBaseUrl);
        this.groupRef = this.fbRef.child('groups');
        this.group = {};
    }

    addGroup(newGroup):void {
        this.groupRef.push({
            name: newGroup.name
        });
        return;
    }

    getGroups():Observable<Group> {
        return Observable.create(observer => {
            let listener = this.groupRef.on('child_added', snapshot => {
                let data = snapshot.val();
                observer.next(new Group(
                    snapshot.key(),
                    data.name
                ));
            }, observer.error);
        });
    }

    deleteGroup(id) {
        let delRef = new Firebase(this.fireBaseUrl + 'groups/' + id);
        delRef.remove();
    }

    getGroup(id) {
        let editRef = new Firebase(this.fireBaseUrl + 'groups/' + id);
        var self = this;
        editRef.on("value", function (snapshot) {
            self.group = {
                id: snapshot.key(),
                name: snapshot.val().name
            }
        });
        return self.group;
    }

    editGroup(newGroup):void {
        let updateRef = new Firebase(this.fireBaseUrl + 'groups/' + newGroup.id);
        updateRef.update({
            name: newGroup.name
        });
        return;
    }

}