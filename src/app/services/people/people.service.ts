import { Injectable } from '@angular/core';
import { People } from '../../models/people.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: People;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  loadPeople() {

    const url = URL_SERVICIOS + 'people';

    return this.http.get( url )
                    .pipe(
                      map( (resp: any) => {
                        return resp.people;
                      })
                    );

  }

  getPeople( id: string ) {

    const url = URL_SERVICIOS + 'people/' + id;

    return this.http.get(url)
                    .pipe(
                      map( (resp: any) => resp.people)
                    );

  }

  searchPeople( name: string ) {

    const url = URL_SERVICIOS + 'people/?search=' + name;

    return this.http.get( url )
                    .pipe(
                      map( (resp: any) => resp.people )
                    );

  }
}
