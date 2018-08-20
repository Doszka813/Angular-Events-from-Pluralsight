import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../../shared';

@Component({
  selector: 'app-events-list',
  template: `
    <div>
      <h1>Upcoming Events</h1>
      <hr>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-3">
          <app-event-card [event] = "event"></app-event-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./events-list.component.css']
})

export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

}
