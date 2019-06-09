import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film/film.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  people: People[] = [];
  peopleFilms: [string, string][] = [];
  @ViewChild('carousel', {static: false}) carousel: any;

  constructor(
    public peopleService: PeopleService,
    public filmService: FilmService,
    public config: NgbCarouselConfig
  ) {

    config.interval = 10000;
    config.keyboard = true;
    this.loadPeople();
  }

  ngOnInit() {}

  loadPeople() {

    this.peopleService.loadPeople()
                      .subscribe( people => {
                        this.people = people;
                        this.loadPeopleFilms();
                      } );

  }

  loadPeopleFilms() {

    for (const character of this.people) {

      for (const url of character.films) {

        let characterFilm = new Film('', '', '', '', '', new Date(), [], [], [], [], [], '', '', '');
        const split = url.split('/');
        const id = split[split.length - 2];

        this.filmService.getFilm(id).subscribe((film: any) => {

          characterFilm = film;
          this.peopleFilms.push([character.name, 'Episode ' + characterFilm.episode_id + ' - ' + characterFilm.title]);
       
        });
        
      }

    }

  }

  pause() {

    this.carousel.pause();

  }

}
