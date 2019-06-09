import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

declare function getData(url: string);

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) {}

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

  getFilmByUrl(url: string) {

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
