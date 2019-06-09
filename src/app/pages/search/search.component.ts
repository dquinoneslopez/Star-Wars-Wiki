import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film/film.service';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  films: Film[];

  constructor(
    public activatedRoute: ActivatedRoute,
    public filmService: FilmService
  ) {

    activatedRoute.params
                  .subscribe( params => {

                    const term = params.term;
                    this.search( term );

                  });

    this.films = [];

   }

  ngOnInit() {
  }

  search( term: string) {

    this.filmService.searchFilm(term)
                      .subscribe(films => this.films = films);

  }

}
