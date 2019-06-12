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

  private people: string[] = [];
  public film: Film = new Film('', '', '', '', '', new Date(), [], [], [], [], [], '', '', '');

  /**
   *Creates an instance of FilmComponent. Also takes the url get param and load the film's info
   * @param {FilmService} filmService
   * @param {PeopleService} peopleService
   * @param {ActivatedRoute} activatedRoute
   * @memberof FilmComponent
   */
  constructor(
    private filmService: FilmService,
    private peopleService: PeopleService,
    private activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params
                  .subscribe( params => {

                    const id = params.id;

                    this.loadFilm( id );

                  });

   }

  ngOnInit() {}

  /**
   * Makes a call to FilmService to retrive the film's info and loads the film's characters
   *
   * @param {string} id
   * @memberof FilmComponent
   */
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

                      this.film = Object.assign(this.film, film);
                      this.loadPeople();

                    } );

  }

  /**
   * Makes a call to PeopleService and retrive the characters's names
   *
   * @memberof FilmComponent
   */
  loadPeople() {

    for ( const url of this.film.getCharacters() ) {

      let character = new People('', '', '', '', '', '', '', '', '', [], [], [], []);
      const split = url.split('/');
      const id = split[split.length - 2];

      this.peopleService.getPeople( id )
                        .subscribe( people => {

                          character = Object.assign(character, people);
                          this.people.push( character.getName() );

                        } );

    }

  }

}
