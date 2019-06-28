import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

declare function getData(url: string);

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {


  constructor() {}

  /**
   * Loads species
   * @returns  Species[]
   */
  loadSpecies() {

    const url = URL_SERVICIOS + 'species';

    return from(
            getData(url)).pipe(
              map((resp: any) => resp.results)
            );

  }

  /**
   * Gets species
   * @param id species id
   * @returns  Species
   */
  getSpecies( id: number ) {

    const url = URL_SERVICIOS + 'species/' + id;

    return from(
            getData(url)).pipe(
              map((resp: any) => resp)
            );

  }

}
