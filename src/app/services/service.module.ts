import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SharedService,
  FilmService,
  PeopleService,
  PlanetService,
  SpeciesService,
  StarshipService,
  VehicleService,
} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    SharedService,
    FilmService,
    PeopleService,
    PlanetService,
    SpeciesService,
    StarshipService,
    VehicleService,
  ]
})
export class ServiceModule { }
