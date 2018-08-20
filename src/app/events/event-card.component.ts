import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from '../shared';

@Component({
    selector: 'app-event-card',
    template: `
        <div [routerLink]="['/events', event.id]" class="card border-secondary bg-secondary mb-3">
            <div class="img"><img class="logo" src="{{event?.imageUrl}}"></div>
            <div><h2>{{event?.name | uppercase}}</h2></div>
            <div>
                Date: {{event?.date | date:'shortDate'}}
            </div>
            <div [ngStyle] = "getStartTimeStyle()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late start)</span>
                <span *ngSwitchDefault>(Normal start)</span>
            </div>
            <div>
                Price: {{event?.price | currency: 'EUR'}}
            </div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span>&nbsp;</span>
                <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online URL: {{event.onlineUrl}}
            </div>
        </div>
    `,
    styles: [`
        .pad-left { margin-left: 200px; }
        .card { margin: 20px; padding: 20px;}
        .card { min-height: 280px; cursor: pointer}
        .card { color: black; border: 2px solid}
        .logo { width: auto; height: 80px; }
        `

    ]
})

export class EventCardComponent {

    @Input() event: IEvent;

    getStartTimeStyle(): any {
        if (this.event && this.event.time === '8:00 am') {
            return {color: '#008800', 'font-weight': 'bold'};
        }
        return {};
    }
}
