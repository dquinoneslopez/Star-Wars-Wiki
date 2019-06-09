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

  people: People[];
  peopleFilms: [string, Film][];
  @ViewChild('carousel', {static: false}) carousel: any;

  constructor(
    public peopleService: PeopleService,
    public filmService: FilmService,
    public config: NgbCarouselConfig
  ) {

    config.interval = 5000;
    config.keyboard = true;
    this.loadPeople();
  }

  ngOnInit() {

    this.loadPeopleFilms();

  }

  loadPeople() {

    this.peopleService.loadPeople()
                      .subscribe( people => this.people = people );

  }

  loadPeopleFilms() {

    for (const character of this.people) {

      for (const film of character.films) {

        this.peopleFilms.push([character.name, this.getFilm(film)]);

      }

    }
  }

  getFilm(url: string) {

    let characterFilm = new Film('', '', '', '', '', new Date(), [], [], [], [], [], '', '', '');
    this.filmService.getFilmByUrl(url).subscribe((film: any) => characterFilm = film);

    return characterFilm;

  }

  pause() {
    this.carousel.pause();
  }

}
