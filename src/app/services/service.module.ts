import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FilmService,
  HistoryService,
  PeopleService,
  PlanetService,
  SessionService,
  SharedService,
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
    FilmService,
    HistoryService,
    PeopleService,
    PlanetService,
    SessionService,
    SharedService,
    SpeciesService,
    StarshipService,
    VehicleService,
  ]
})
export class ServiceModule { }
