import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from '../../models/film.model';
import { FilmService } from '../../services/film/film.service';
import { isArray } from 'util';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  public films: Film[] = [];
  public found = true;
  public loaded = false;

  constructor(
    public activatedRoute: ActivatedRoute,
    public filmService: FilmService
  ) {

    activatedRoute.params
                  .subscribe( params => {

                    const term = params.term;
                    this.search( term );

                    this.films = [];

                  });

   }

  ngOnInit() {
  }

  /**
   * Makes a call to FilmService and retrives the searched film by its title
   *
   * @param {string} term
   * @memberof SearchComponent
   */
  search( term: string) {

    this.filmService.searchFilm(term)
                      .subscribe(films => {
                        
                        for (const film of films) {

                          this.films.push(new Film(film.title,
                                                   film.episode_id,
                                                   film.opening_crawl,
                                                   film.director,
                                                   film.producer,
                                                   film.release_date,
                                                   film.species,
                                                   film.starships,
                                                   film.vehicles,
                                                   film.characters,
                                                   film.planets)
                                          );

                        }
                        
                        // If it doesn't find anything set the flag 'found' to false
                        if ( this.films.length === 0) {
                          
                          
                          this.found = false;

                        }
                        
                        this.loaded = true;
                        
                      });

  }

}
