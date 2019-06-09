import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

declare function getData(url: string);

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }

  loadVehicles() {

    const url = URL_SERVICIOS + 'vehicles';

    return from(getData(url)).pipe(
      map((resp: any) => resp.results)
    );

  }

  getVehicle( id: string ) {

    const url = URL_SERVICIOS + 'vehicles/' + id;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

}
