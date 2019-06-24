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

  loadSpecies() {

    const url = URL_SERVICIOS + 'species';

    return from(
            getData(url)).pipe(
              map((resp: any) => resp.results)
            );

  }

  getSpecies( id: string ) {

    const url = URL_SERVICIOS + 'species/' + id;

    return from(
            getData(url)).pipe(
              map((resp: any) => resp)
            );

  }

}
