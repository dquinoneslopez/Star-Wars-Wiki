import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  people: People[] = [];
  @ViewChild('carousel', {static: false}) carousel: any;

  constructor(
    public peopleService: PeopleService,
    public config: NgbCarouselConfig
  ) {

    config.interval = 1000;
    config.keyboard = false;

  }

  ngOnInit() {
  
    this.loadPeople();

  }

  loadPeople() {

    this.peopleService.loadPeople()
                      .subscribe( people => this.people = people );

  }

  pause() {
    this.carousel.pause();
  }

}
