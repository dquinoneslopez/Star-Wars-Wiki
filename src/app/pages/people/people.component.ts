import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  people: People[];

  constructor(
    public peopleService: PeopleService
  ) { }

  ngOnInit() {

    this.loadPeople();

  }

  loadPeople() {

    this.peopleService.loadPeople()
                      .subscribe( people => this.people = people );

  }

  

}
