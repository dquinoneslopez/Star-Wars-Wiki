import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/service.index';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];

  constructor(
    public filmService: FilmService
  ) { }

  ngOnInit() {

    this.loadFilms();

  }

  async loadFilms() {

    this.filmService.loadFilms()
                    .subscribe( films => this.films = films );

  }

  searchFilm(title: string) {

    if ( title.length <= 0 ) {

      this.loadFilms();

    }

    this.filmService.searchFilm(title)
                    .subscribe( films => this.films = films );
  }

}
