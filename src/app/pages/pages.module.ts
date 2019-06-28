import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { CommonModule } from '@angular/common';

import { PAGES_ROUTES } from './pages.routes';

import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FilmComponent } from './films/film.component';
import { PrincipalComponent } from './principal/principal.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    PeopleComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    StarshipsComponent,
    VehiclesComponent,
    FilmComponent,
    PrincipalComponent,
    SearchComponent,
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    ComponentsModule,
    CommonModule,
  ],
})
export class PagesModule { }
