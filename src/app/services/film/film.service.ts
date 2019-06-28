import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import { URL_SERVICIOS } from '../../config/config';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

declare function getData(url: string);

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }

  /**
   * Loads films
   * @returns  Film[]
   */
  loadFilms() {

    const url = URL_SERVICIOS + 'films';

    return from(getData(url)).pipe(
      map((resp: any) => resp.results)
    );
  }

  /**
   * Gets film
   * @param id film id
   * @returns  Film
   */
  getFilm(id: string) {

    const url = URL_SERVICIOS + 'films/' + id;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

  /**
   * Searchs film
   * @param title film title
   * @returns  Film
   */
  searchFilm(title: string) {

    const url = URL_SERVICIOS + 'films/?search=' + title;

    return from(getData(url)).pipe(
      map((resp: any) => resp.results)
    );

  }



}
