import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Planet } from '../../models/planet.model';
import { PlanetService } from '../../services/planet/planet.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
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

  getPlanet(id: string) {

    this.planetService.getPlanet(id)
                      .subscribe(planet => this.planet = planet.name);

  }

}
