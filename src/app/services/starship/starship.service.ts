import { Injectable } from '@angular/core';
import { Starship } from 'src/app/models/starship.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  starship: Starship;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  loadStarship() {

    const url = URL_SERVICIOS + 'starships';

    return this.http.get( url )
                    .pipe(
                      map( (resp: any) => {
                        return resp.starships;
                      })
                    );

  }

  getStarship( id: string ) {

    const url = URL_SERVICIOS + 'starships/' + id;

    return this.http.get(url)
                    .pipe(
                      map( (resp: any) => resp.starship)
                    );

  }

  searchStarship( name: string, model: string ) {

    const url = URL_SERVICIOS + 'starships/?search=' + name + '&model=' + model;

    return this.http.get( url )
                    .pipe(
                      map( (resp: any) => resp.starship )
                    );

  }

}
