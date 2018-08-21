import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';
import { TOASTR_TOKEN, Toastr } from './shared/index';
import { appRoutes } from './nav/routes';
import { Error404Component } from './errors/404.component';
import { JQ_TOKEN } from './shared/jQuery.service';
import {
  EventsListComponent,
  EventCardComponent,
  EventDetailComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventsListResolverService,
  SessionListComponent,
  CreateSessionComponent,
  DurationPipe,
  UpvoteComponent,
} from './events';
import { VoterService } from './shared/index';
import { EventsComponent } from './events/events.component';
import { AuthService } from './user/auth.service';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];


@NgModule({
  declarations: [
    AppComponent,
    EventsComponent,
    EventsListComponent,
    EventCardComponent,
    NavComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    {
      provide: JQ_TOKEN, useValue: jQuery
    },
    EventService,
    EventRouteActivatorService,
    EventsListResolverService,
    AuthService,
    VoterService,
    { provide: 'CanDeactivateCreateEvent',
      useValue: chceckDirtyState
    }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function chceckDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
