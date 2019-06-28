import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

declare function getData(url: string);

@Injectable({
  providedIn: 'root'
})


export class PeopleService {

  constructor() { }

  /**
   * Loads people
   * @returns  People[]
   */
  loadPeople() {

    const url = URL_SERVICIOS + 'people';

    return from(getData(url)).pipe(
      map((resp: any) => resp.results)
    );

  }

  /**
   * Gets people
   * @param id character id
   * @returns  People
   */
  getPeople( id: number ) {

    const url = URL_SERVICIOS + 'people/' + id;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

}
