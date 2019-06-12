import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { FilmsComponent } from './films/films.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FilmComponent } from './films/film.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrincipalComponent } from './principal/principal.component';
import { CarouselComponent } from './carousel/carousel.component';
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
    CarouselComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PAGES_ROUTES,
    NgbModule,
  ],
})
export class PagesModule { }
