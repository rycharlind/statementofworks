import { Component, Input, ViewContainerRef } from '@angular/core';
import { SowService } from '../../sow/sow.svc';
import { Sow } from '../../model/sow';
import { Comment } from '../../model/comment';
import { UserService } from '../../firebase-service/user.svc';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable, Subject } from 'rxjs/Rx';

@Component({
    selector: 'sow-comments',
    templateUrl: 'sow-comments.html'
})

export class SowCommentsComponent {

    sow = new Sow();
    currentComment: string;
    comments: FirebaseListObservable<any[]>;

    constructor(
        private sowService: SowService,
        private userService: UserService,
        af: AngularFire
    ) {
        this.sowService.getCurrentSow().subscribe(
            s => {
                this.sow = s;

                this.comments = af.database
                    .list('/sows/' + s.$key + '/comments')
                    .map(comments => {
                        comments.sort((a: Comment, b: Comment) => {
                            var d1 = new Date(a.dateCreated);
                            var d2 = new Date(b.dateCreated);
                            if (d1 > d2) return -1;
                            if (d2 > d1) return 1;
                        });
                        comments.map(c => {
                            c.authorUser = af.database.object('/userProfiles/' + c.authorUID);
                        });
                        return comments;
                    }) as FirebaseListObservable<any[]>;

            });
    }

    saveComment() {
        var comment = new Comment();
        comment.authorUID = this.userService.getUID();
        comment.msg = this.currentComment;
        this.comments.push(comment);
        this.currentComment = '';
    }

    editComment(comment) {
        comment.isEditable = true;
    }

    updateComment(comment) {
        console.log(comment);
        let key = comment.$key;
        if (key) {
            delete comment.$key;
            delete comment.$exists;
            delete comment.authorUser;
            delete comment.isEditable;
            firebase.database().ref('/sows/' + this.sow.$key + '/comments/' + key).update(comment);
            comment.$key = key;
            comment.isEditable = false;
        } else {
            console.log("No key");
        }
    }

    deleteComment(comment) {
        firebase.database().ref('/sows/' + this.sow.$key + '/comments/' + comment.$key).remove();
    }
}
