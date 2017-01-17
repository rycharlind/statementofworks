import { Component, Input, ViewContainerRef } from '@angular/core';
import { SowsService } from '../sows.svc';
import { Sow } from '../../model/sow';
import { Comment } from '../../model/comment';
import { UserService } from '../../firebase-service/user.svc';

@Component({
    selector: 'sow-comments',
    templateUrl: 'sow-comments.html'
})

export class SowCommentsComponent {

    sow = new Sow();

    currentComment: string;

    constructor(
        private sowsService: SowsService,
        private userService: UserService
    ) {
        this.sowsService.getSelectedSow().subscribe(
            s => {
                this.sow = s;
        });
    }

    saveComment() {
        if (this.sow.comments == null) {
            this.sow.comments = [];
        }

        var c = new Comment
        (this.userService.getName(), this.currentComment);

            this.sow.comments.push(c);

            this.currentComment = ''; //clear textfield

            this.sowsService.saveSow(this.sow);
    }
}
