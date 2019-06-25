import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PrincipalComponent } from './principal/principal.component';
import { SearchComponent } from '../shared/search/search.component';

const pagesRoutes: Routes = [
    { path: 'principal', component: PrincipalComponent},
    { path: 'films', component: FilmsComponent},
    { path: 'films/film/:id', component: FilmComponent},
    { path: 'people', component: PeopleComponent},
    { path: 'planets', component: PlanetsComponent},
    { path: 'species', component: SpeciesComponent},
    { path: 'starships', component: StarshipsComponent},
    { path: 'vehicles', component: VehiclesComponent},
    { path: 'search/:term', component: SearchComponent},

    { path: '', redirectTo: '/principal', pathMatch: 'full' },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
