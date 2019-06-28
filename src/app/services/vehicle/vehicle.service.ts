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

  /**
   * Loads vehicles
   * @returns  Vehicle[]
   */
  loadVehicles() {

    const url = URL_SERVICIOS + 'vehicles';

    return from(getData(url)).pipe(
      map((resp: any) => resp.results)
    );

  }

  /**
   * Gets vehicle
   * @param id vehicle id
   * @returns  Vechicle
   */
  getVehicle(id: number) {

    const url = URL_SERVICIOS + 'vehicles/' + id;

    return from(getData(url)).pipe(
      map((resp: any) => resp)
    );

  }

}
