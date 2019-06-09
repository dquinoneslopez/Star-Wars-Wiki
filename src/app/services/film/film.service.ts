import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

declare function getData(url: string);

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() {}

  loadFilms() {

    const url = URL_SERVICIOS + 'films';

    return from(getData(url)).pipe(
       map((resp: any) => resp.results)
     );
  }

  getFilm( id: string ) {

    const url = URL_SERVICIOS + 'films/' + id;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

  searchFilm( title: string ) {

    const url = URL_SERVICIOS + 'films/?search=' + title;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

}
