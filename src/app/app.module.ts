import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './shared/event.service';
import { appRoutes } from './nav/routes';
import { Error404Component } from './errors/404.component';
import { JQ_TOKEN } from './shared/jQuery.service';
import {
  EventsListComponent,
  EventCardComponent,
  EventDetailComponent,
  CreateEventComponent,
  EventsListResolverService,
  SessionListComponent,
  CreateSessionComponent,
  DurationPipe,
  UpvoteComponent,
  LocationValidator,
  EventsResolverService,
} from './events';

import { VoterService } from './shared/index';
import { EventsComponent } from './events/events.component';
import { AuthService } from './user/auth.service';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { HttpClientModule } from '@angular/common/http';
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
    LocationValidator,
    UpvoteComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: JQ_TOKEN, useValue: jQuery
    },
    EventService,
    EventsResolverService,
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
