import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PlanetService } from '../../services/planet/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html'
})
export class PlanetsComponent implements OnInit {

  planet: string;

  constructor(
    public planetService: PlanetService,
    public router: Router
  ) {

    this.planet = '';

  }

  ngOnInit() {
  }

  /**
   * Makes a call to PlanetService and retrieves a planet by it id
   *
   * @param {number} id
   * @memberof PlanetsComponent
   */
  getPlanet(id: number) {

    this.planetService.getPlanet(id)
                      .subscribe(planet => this.planet = planet.name);

  }

}
