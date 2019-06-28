import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/service.index';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
})
export class FilmsComponent implements OnInit {

  public films: Film[] = [];
  public loaded = false;

  constructor(
    private filmService: FilmService
  ) { }

  ngOnInit() {

    this.loadFilms();

  }

  /**
   * MAkes a call to FilmService and retrieves the information of the movies in the Star Wars API
   *
   * @memberof FilmsComponent
   */
  loadFilms() {

    this.filmService.loadFilms()
                    .subscribe( films => {
                      this.films = films;
                      this.loaded = true;
                    } );

  }

  /**
   * Makes a call to FilmService to search for a given film's title
   *
   * @param {string} title
   * @memberof FilmsComponent
   */
  searchFilm(title: string) {

    if ( title.length <= 0 ) {

      this.loadFilms();

    }

    this.filmService.searchFilm(title)
                    .subscribe( films => this.films = films );
  }

}
