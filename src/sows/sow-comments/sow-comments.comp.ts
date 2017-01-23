import { Component, Input, ViewContainerRef } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';
import { Comment } from '../../model/comment';
import { UserService } from '../../firebase-service/user.svc';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'sow-comments',
    templateUrl: 'sow-comments.html'
})

export class SowCommentsComponent {

    sow = new Sow();
    currentComment: string;
    comments: FirebaseListObservable<any[]>;

    constructor(
        private sowsService: SowsService,
        private userService: UserService,
        af: AngularFire
    ) {
        this.sowsService.getSelectedSow().subscribe(
            s => {
                this.sow = s;
                this.comments = af.database.list('/sows/' + s.$key + '/comments') as FirebaseListObservable<any[]>;
        });
    }

    saveComment() {
        console.log("save comment");
        var c = new Comment(this.userService.getName(), this.currentComment);
        this.comments.push(c);
        this.currentComment = ''; // clear textfield
    }

    eventHandler(event) {
        console.log(event);
    }
}
