import { Injectable } from '@angular/core';
import { Planet } from '../../models/planet.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  
  constructor(
    public http: HttpClient,
    public router: Router
  ) {}

  getPlanet( id: string ) {

    const url = URL_SERVICIOS + 'planets/' + id;

    return this.http.get(url)
                    .pipe(
                      map( (resp: any) => resp)
                    );

  }

}
