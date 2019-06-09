import { Injectable } from '@angular/core';
import { Species } from '../../models/species.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  species: Species;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  loadSpecies() {

    const url = URL_SERVICIOS + 'species';

    return this.http.get( url )
                    .pipe(
                      map( (resp: any) => {
                        return resp.species;
                      })
                    );

  }

  getSpecies( id: string ) {

    const url = URL_SERVICIOS + 'species/' + id;

    return this.http.get(url)
                    .pipe(
                      map( (resp: any) => resp.species)
                    );

  }

  searchSpecies( name: string ) {

    const url = URL_SERVICIOS + 'films/?search=' + name;

    return this.http.get( url )
                    .pipe(
                      map( (resp: any) => resp.species )
                    );

  }

}
