import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

declare function getData(url: string);

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor() { }

  loadStarships() {

    const url = URL_SERVICIOS + 'starships';

    return from(getData(url)).pipe(
      map((resp: any) => resp.results)
    );

  }

  getStarship( id: string ) {

    const url = URL_SERVICIOS + 'starships/' + id;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

}
