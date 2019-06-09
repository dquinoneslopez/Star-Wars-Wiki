import { Component, OnInit } from '@angular/core';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film/film.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Species } from '../../models/species.model';
import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';
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
  film: Film = new Film('', '', '', '', '', new Date(), [], [], [], [], [], '', '', '');

  constructor(
    public filmService: FilmService,
    public peopleService: PeopleService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params
                  .subscribe( params => {

                    const id = params.id;

                    this.loadFilm( id );

                  });

   }

  ngOnInit() {this.loadPeople();}

  loadFilm(id: string) {

    let nId = parseInt(id, 10);

    if (nId >= 1 && nId <= 3) {

      nId += 3;
      id = nId.toString();

    } else if (nId >= 4 && nId <= 6){

      nId -= 3;
      id = nId.toString();

    }

    this.filmService.getFilm( id )
                    .subscribe( film => this.film = film );

  }

  loadPeople() {

    for ( const url of this.film.characters ) {

      let character = new People('', '', '', '', '', '', '', '', '', [], [], [], [], '', '', '');

      this.peopleService.getPeopleByUrl( url )
                        .subscribe( people => character = people );

      this.people.push( character );

    }

  }

}
