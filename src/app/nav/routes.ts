import { Routes } from '@angular/router';
import {
    EventsListComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventsListResolverService,
    CreateSessionComponent,
    EventsResolverService
} from '../events';
import { Error404Component } from '../errors/404.component';

export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['CanDeactivateCreateEvent'] },
    {path: 'events', component: EventsListComponent, resolve:
        { events: EventsListResolverService }},
    {path: 'events/:id', component: EventDetailComponent, resolve: {event: EventsResolverService}},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
];
