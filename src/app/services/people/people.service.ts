import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

declare function getData(url: string);

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  loadPeople() {

    const url = URL_SERVICIOS + 'people';

    return from(getData(url)).pipe(
      map((resp: any) => resp.results)
    );

  }

  getPeople( id: string ) {

    const url = URL_SERVICIOS + 'people/' + id;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

  getPeopleByUrl(url: string) {

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

}
