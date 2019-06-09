import { Injectable } from '@angular/core';
import { Vehicle } from '../../models/vehicle.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicle: Vehicle;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { }

  loadVehicle() {

    const url = URL_SERVICIOS + 'vehicles';

    return this.http.get( url )
                    .pipe(
                      map( (resp: any) => {
                        return resp.vehicles;
                      })
                    );

  }

  getVehicle( id: string ) {

    const url = URL_SERVICIOS + 'vehicles/' + id;

    return this.http.get(url)
                    .pipe(
                      map( (resp: any) => resp.vehicles)
                    );

  }

  searchVehicle( name: string, model: string ) {

    const url = URL_SERVICIOS + 'vehicles/?search=' + name + '&model=' + model;

    return this.http.get( url )
                    .pipe(
                      map( (resp: any) => resp.vehicle )
                    );

  }

}
