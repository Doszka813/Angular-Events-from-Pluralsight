import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-upvote',
    template: `
        <div class="votingWidgetContainer pointable" (click)="onClick()">
            <div class="card votingWidget">
                <div class="votingButton">
                    <i class="fas fa-heart" [style.color]="iconColor"></i>
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
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'grey';
    }
    iconColor: string;
    @Output() vote = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}
