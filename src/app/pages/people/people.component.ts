import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';
import { cloneDeep } from 'lodash';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  private people: People[];

  constructor(
    private peopleService: PeopleService
  ) { }

  ngOnInit() {

    this.loadPeople();

  }

  /**
   * Makes a call to PeopleService and retrieves the characters from the Star Wars API
   *
   * @memberof PeopleComponent
   */
  loadPeople() {

    this.peopleService.loadPeople()
                      .subscribe( people => this.people = cloneDeep(people) );

  }

}
