import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionListComponent } from './session-list.component';
import { ISession } from '../../../shared/event.model';

describe('SessionListComponent', () => {
  let component: SessionListComponent;
  // tslint:disable-next-line:prefer-const
  let  mockAuthService, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthService, mockVoterService);
  });

  describe('ngOnChanges', () => {

    it('should filter the sessions corectly', () => {
      component.sessions = <ISession[]>[{name: 's1', level: 'intermediate'},
       {name: 's2', level: 'intermediate'},
       {name: 's3', level: 'beginner'}];

      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });

    it('should sort the sessions corectly', () => {
      component.sessions = <ISession[]>[{name: 's1', level: 'intermediate'},
       {name: 's2', level: 'intermediate'},
       {name: 's3', level: 'beginner'}];

      component.filterBy = 'intermediate';
      component.sortBy = 'name';
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe('s3');
    });
  });

});
