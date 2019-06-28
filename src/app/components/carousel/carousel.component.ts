import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people/people.service';
import { FilmService } from '../../services/film/film.service';
import { PlanetService } from '../../services/planet/planet.service';
import { SpeciesService } from '../../services/species/species.service';
import { StarshipService } from '../../services/starship/starship.service';
import { VehicleService } from '../../services/vehicle/vehicle.service';
import { Character } from '../../models/character.model';
import { Film } from 'src/app/models/film.model';
import { Planet } from 'src/app/models/planet.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {

  @ViewChild('carousel', {static: false}) carousel: any;

  private characters: Character[] = [];
  private people: People[] = [];
  public loaded = false;

  constructor(
    private peopleService: PeopleService,
    private filmService: FilmService,
    private planetService: PlanetService,
    private speciesService: SpeciesService,
    private starshipService: StarshipService,
    private vehicleService: VehicleService,
    private config: NgbCarouselConfig
  ) {

    config.interval = 4000;
    config.keyboard = true;

  }

  ngOnInit() {

    this.loadPeople();

  }

  /**
   * Getter method for the member array "characters"
   *
   * @returns  Character[]
   * @memberof CarouselComponent
   */
  getCharacters() {

    return this.characters;

  }

  /**
   * Load all the characters retrieved from the Star Wars API into the "people" array and 
   * then their info simplified into the member array "characters".
   *
   * @memberof CarouselComponent
   */
  loadPeople() {

    this.peopleService.loadPeople()
                      .subscribe( people => {

                        for ( const character of people) {

                          this.people.push(new People(character.name,
                                                      character.birth_year,
                                                      character.eye_color,
                                                      character.gender,
                                                      character.hair_color,
                                                      character.height,
                                                      character.mass,
                                                      character.skin_color,
                                                      character.homeworld,
                                                      character.films,
                                                      character.species,
                                                      character.starships,
                                                      character.vehicles));
                        }

                        this.loadPeopleData();
                        this.loaded = true;

                      } );

  }

  /**
   * Load the simplified info of the array "people" into the member array "characters"
   *
   * @memberof CarouselComponent
   */
  loadPeopleData() {

    for (const characterPeople of this.people) {

      const character = new Character(
        characterPeople.getName(),
        characterPeople.getBirhtYear(),
        characterPeople.getEyeColor(),
        characterPeople.getGender(),
        characterPeople.getHairColor(),
        characterPeople.getHeight(),
        characterPeople.getMass(),
        characterPeople.getSkinColor(),
        this.loadPeopleHomeworld(characterPeople),
        this.loadPeopleFilms(characterPeople),
        this.loadPeopleSpecies(characterPeople),
        this.loadPeopleStarships(characterPeople),
        this.loadPeopleVehicles(characterPeople)
      );

      this.characters.push(character);
      

    }

  }

  /**
   * Returns an array with the character's movie titles
   *
   * @param {People} people
   * @returns string[]
   * @memberof CarouselComponent
   */
  loadPeopleFilms(people: People) {

    const characterFilms = [];

    for (const filmUrl of people.getFilms()) {

      const split = filmUrl.split('/');
      const id = split[split.length - 2];

      this.filmService.getFilm(id).subscribe((film: any) => {

        const characterFilm = new Film(film.title,
                                       film.episode_id,
                                       film.opening_crawl,
                                       film.director,
                                       film.producer,
                                       film.release_date,
                                       film.species,
                                       film.starships,
                                       film.vehicles,
                                       film.characters,
                                       film.planets);

        const characterFilmTitle = 'Episode ' + characterFilm.getEpisodeId() + ' - ' + characterFilm.getTitle();

        characterFilms.push(characterFilmTitle);

      });

    }

    return characterFilms;

  }

  /**
   * Returns an array with the character's homeworld
   *
   * @param {People} character
   * @returns string[]
   * @memberof CarouselComponent
   */
  loadPeopleHomeworld(character: People) {

    const homeworldUrl = character.getHomeWorld();
    const homeworldSplit = homeworldUrl.split('/');
    const homeworldId = parseInt(homeworldSplit[homeworldSplit.length - 2], 10);

    const characterPlanet = [];

    this.planetService.getPlanet(homeworldId).subscribe((planet: any) => {

      const characterPlanetName = new Planet(planet.name);

      characterPlanet.push(characterPlanetName.getName());

    });

    return characterPlanet;

  }

  /**
   * Returns an array with the character's species
   *
   * @param {People} character
   * @returns string[]
   * @memberof CarouselComponent
   */
  loadPeopleSpecies(character: People) {

    const characterSpecies = [];

    for (const url of character.getSpecies()) {

      const speciesSplit = url.split('/');
      const speciesId = parseInt(speciesSplit[speciesSplit.length - 2], 10);

      this.speciesService.getSpecies(speciesId).subscribe((species: any) => {

        characterSpecies.push(species.name);

      });

    }

    return characterSpecies;

  }

  /**
   * Returns an array with the character's starships
   *
   * @param {People} character
   * @returns string[]
   * @memberof CarouselComponent
   */
  loadPeopleStarships(character: People) {

    const characterStarships = [];

    for (const url of character.getStarships()) {

      const starshipSplit = url.split('/');
      const starshipId = parseInt(starshipSplit[starshipSplit.length - 2], 10);

      this.starshipService.getStarship(starshipId).subscribe((starship: any) => {

        characterStarships.push(starship.name + ' - ' + starship.model);

      });

    }

    return characterStarships;

  }

  /**
   * Returns an array with the character's vehicles
   *
   * @param {People} character
   * @returns string[]
   * @memberof CarouselComponent
   */
  loadPeopleVehicles(character: People) {

    const characterVehicles = [];

    for (const url of character.getVehicles()) {

      const vehicleSplit = url.split('/');
      const vehicleId = parseInt(vehicleSplit[vehicleSplit.length - 2], 10);

      this.vehicleService.getVehicle(vehicleId).subscribe((vehicle: any) => {

        characterVehicles.push(vehicle.name + ' - ' + vehicle.model);

      });

    }

    return characterVehicles;

  }

}
