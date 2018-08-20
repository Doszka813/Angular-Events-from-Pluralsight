import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { IEvent, ISession, EventService } from '../shared';
import { $ } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchTerm = '';
  foundSessions: ISession[];
  constructor(public authService: AuthService, private eventService: EventService) { }

  ngOnInit() {
  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(sessions => {
      this.foundSessions = sessions;
    });
  }
}
