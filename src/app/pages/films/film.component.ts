import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Species } from '../../models/species.model';
import { People } from '../../models/people.model';
import { Starship } from '../../models/starship.model';
import { Vehicle } from '../../models/vehicle.model';
import { Planet } from '../../models/planet.model';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html'
})
export class FilmComponent implements OnInit {
  people: People[];
  planets: Planet[];
  species: Species[];
  starships: Starship[];
  vehicles: Vehicle[];
  film: Film = new Film('', '', '', '', '', new Date(), this.species, this.starships
  , this.vehicles, this.people, this.planets, '', '', '');

  constructor(
    public filmService: FilmService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params
                  .subscribe( params => {

                    const id = params.id;

                    this.loadFilm( id );
                  });

   }

  ngOnInit() {
  }

  loadFilm(id: string) {

    this.filmService.getFilm( id )
                    .subscribe( film => { this.film = film; });
  }

}
