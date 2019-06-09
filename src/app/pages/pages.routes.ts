import { Routes, RouterModule } from '@angular/router';
// import { PagesComponent } from './pages.component';

// import { BusquedaComponent } from './busqueda/busqueda.component';
import { FilmsComponent } from './films/films.component';
import { FilmComponent } from './films/film.component';
import { PeopleComponent } from './people/people.component';
import { PlanetsComponent } from './planets/planets.component';
import { SpeciesComponent } from './species/species.component';
import { StarshipsComponent } from './starships/starships.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { PrincipalComponent } from './principal/principal.component';


const pagesRoutes: Routes = [
    { path: 'principal', component: PrincipalComponent, data: { titulo: 'Index' } },
    { path: 'films', component: FilmsComponent, data: { titulo: 'Films' } },
    { path: 'films/film/:id', component: FilmComponent, data: { titulo: 'Film' } },
    { path: 'people', component: PeopleComponent, data: { titulo: 'People' } },
    { path: 'planets', component: PlanetsComponent, data: { titulo: 'Planets' } },
    { path: 'species', component: SpeciesComponent, data: { titulo: 'Species' } },
    { path: 'starships', component: StarshipsComponent, data: { titulo: 'Starships' } },
    { path: 'vehicles', component: VehiclesComponent, data: { titulo: 'Vehicles' } },
    // { path: 'busqueda/:termino', component: BusquedaComponent, data: { titulo: 'Buscador'} },

    { path: '', redirectTo: '/principal', pathMatch: 'full' },
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
