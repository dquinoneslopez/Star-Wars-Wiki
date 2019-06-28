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

  /**
   * Loads starships
   * @returns  Starship[]
   */
  loadStarships() {

    const url = URL_SERVICIOS + 'starships';

    return from(getData(url)).pipe(
      map((resp: any) => resp.results)
    );

  }

  /**
   * Gets starship
   * @param id starship id
   * @returns  Starship
   */
  getStarship(id: number) {

    const url = URL_SERVICIOS + 'starships/' + id;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

}
