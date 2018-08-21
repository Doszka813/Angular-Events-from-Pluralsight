import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="card votingWidget">
                <div class="votingButton">
                    <i *ngIf="voted" class="fas fa-heart"></i>
                    <i *ngIf="!voted" class="far fa-heart"></i>
                </div>
                <div class="badge badge-inverse votingCount">
                    <div>{{count}}</div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./upvote.component.css']
})


export class UpvoteComponent {
    @Input() count: number;
    @Input() voted = false;
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}
