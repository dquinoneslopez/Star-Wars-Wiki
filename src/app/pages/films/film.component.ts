import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film/film.service';
import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html'
})
export class FilmComponent implements OnInit {
  people: string[] = [];
  film: Film = new Film('', '', '', '', '', new Date(), [], [], [], [], [], '', '', '');

  constructor(
    public filmService: FilmService,
    public peopleService: PeopleService,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params
                  .subscribe( params => {

                    const id = params.id;

                    this.loadFilm( id );

                  });

   }

  ngOnInit() {}

  loadFilm(id: string) {

    let nId = parseInt(id, 10);

    if (nId >= 1 && nId <= 3) {

      nId += 3;
      id = nId.toString();

    } else if (nId >= 4 && nId <= 6){

      nId -= 3;
      id = nId.toString();

    }

    this.filmService.getFilm( id )
                    .subscribe( film => {

                      this.film = film;
                      this.loadPeople();

                    } );

  }

  loadPeople() {

    for ( const url of this.film.characters ) {

      let character = new People('', '', '', '', '', '', '', '', '', [], [], [], [], '', '', '');
      const split = url.split('/');
      const id = split[split.length - 2];
      console.log('id: ' + id);

      this.peopleService.getPeople( id )
                        .subscribe( people => {

                          character = people;
                          this.people.push( character.name );

                        } );

    }

  }

}
