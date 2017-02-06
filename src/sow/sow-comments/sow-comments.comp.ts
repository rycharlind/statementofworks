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
                    comments.map(c=> {
                        c.authorUser = af.database.object('/userProfiles/' + c.authorUID);
                    });
                    comments.sort((a,b)=>1);
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

    deleteComment(comment) {
        firebase.database().ref('/sows/' + this.sow.$key + '/comments/' + comment.$key).remove();
    }
}
