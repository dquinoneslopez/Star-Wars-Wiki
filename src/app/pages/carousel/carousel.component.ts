import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film/film.service';
import { PlanetService } from '../../services/planet/planet.service';
import { SpeciesService } from '../../services/species/species.service';
import { StarshipService } from '../../services/starship/starship.service';
import { VehicleService } from '../../services/vehicle/vehicle.service';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  people: People[];
  peopleFilms: [string, string][];
  peoplePlanets: [string, string][];
  peopleSpecies: [string, string][];
  peopleStarships: [string, string][];
  peopleVehicles: [string, string][];
  @ViewChild('carousel', {static: false}) carousel: any;

  constructor(
    public peopleService: PeopleService,
    public filmService: FilmService,
    public planetService: PlanetService,
    public speciesService: SpeciesService,
    public starshipService: StarshipService,
    public vehicleService: VehicleService,
    public config: NgbCarouselConfig
  ) {

    this.people = [];
    this.peopleFilms = [];
    this.peoplePlanets = [];
    this.peopleSpecies = [];
    this.peopleStarships = [];
    this.peopleVehicles = [];

    config.interval = 10000;
    config.keyboard = true;

    this.loadPeople();
  }

  ngOnInit() {}

  loadPeople() {

    this.peopleService.loadPeople()
                      .subscribe( people => {
                        this.people = people;
                        this.loadPeopleData();
                        
                        
                      } );

  }

  loadPeopleData() {

    for (const character of this.people) {

      this.loadPeopleFilms(character);
      this.loadPeoplePlanets(character);
      this.loadPeopleSpecies(character);
      this.loadPeopleStarships(character);
      this.loadPeopleVehicles(character);

    }

  }

  loadPeopleFilms(character: People) {

    for (const characterUrl of character.films) {

      let characterFilm = new Film('', '', '', '', '', new Date(), [], [], [], [], [], '', '', '');
      const split = characterUrl.split('/');
      const id = split[split.length - 2];

      this.filmService.getFilm(id).subscribe((film: any) => {

        characterFilm = film;
        this.peopleFilms.push([character.name, 'Episode ' + characterFilm.episode_id + ' - ' + characterFilm.title]);

      });

    }

  }

  loadPeoplePlanets(character: People) {

    const homeworldUrl = character.homeworld;
    const homeworldSplit = homeworldUrl.split('/');
    const homeworldId = homeworldSplit[homeworldSplit.length - 2];

    let characterPlanet = '';

    this.planetService.getPlanet(homeworldId).subscribe((planet: any) => {

      characterPlanet = planet.name;
      this.peoplePlanets.push([character.name, characterPlanet]);

    });

  }

  loadPeopleSpecies(character: People) {

    for (const url of character.species) {

      const speciesSplit = url.split('/');
      const speciesId = speciesSplit[speciesSplit.length - 2];
      let characterSpecies = '';

      this.speciesService.getSpecies(speciesId).subscribe((species: any) => {

        characterSpecies = species.name;
        this.peopleSpecies.push([character.name, characterSpecies]);

      });

    }
  }

  loadPeopleStarships(character: People) {

    for (const url of character.starships) {

      const starshipSplit = url.split('/');
      const starshipId = starshipSplit[starshipSplit.length - 2];
      let characterStarship = '';

      this.starshipService.getStarship(starshipId).subscribe((starship: any) => {

        characterStarship = starship.name + ' - ' + starship.model;
        this.peopleStarships.push([character.name, characterStarship]);

      });

    }

  }

  loadPeopleVehicles(character: People) {

    for (const url of character.vehicles) {

      const vehicleSplit = url.split('/');
      const vehicleId = vehicleSplit[vehicleSplit.length - 2];
      let characterVehicle = '';

      this.vehicleService.getVehicle(vehicleId).subscribe((vehicle: any) => {

        characterVehicle = vehicle.name + ' - ' + vehicle.model;
        this.peopleVehicles.push([character.name, characterVehicle]);

      });

    }

  }

}
