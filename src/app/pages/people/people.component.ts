import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';
import { Film } from 'src/app/models/film.model';
import { FilmService } from '../../services/film/film.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html'
})
export class PeopleComponent implements OnInit {

  people: People[];

  constructor(
    public peopleService: PeopleService,
    public filmService: FilmService
  ) { }

  ngOnInit() {

    this.loadPeople();

  }

  loadPeople() {

    this.peopleService.loadPeople()
                      .subscribe( people => this.people = people );

  }

  loadFilms() {

    for (const character of this.people) {
      for (const url of character.films) {
        this.filmService.getFilmByUrl(url);
      }
    }

  }

}
