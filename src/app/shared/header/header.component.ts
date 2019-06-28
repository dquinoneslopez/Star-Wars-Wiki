import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { FilmService } from '../../services/film/film.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public isNavbarCollapsed = true;
  public results: any[] = [];
  public queryField: FormControl = new FormControl();
  public form: FormGroup;

  constructor(
    public router: Router,
    private filmService: FilmService,
    private formBuilder: FormBuilder,
  ) {

    this.form = this.formBuilder.group({
      query: ['']
    });
   }

  ngOnInit() {

    this.queryField.valueChanges
                   .pipe( debounceTime(200) )
                   .pipe( distinctUntilChanged() )
                   .pipe( switchMap( (query) => this.filmService.searchFilm(query) ) )
                   .subscribe( result => {

                      if (result.status === 400) {

                        return ;

                      } else {

                        this.results = result;

                      }

                   });

  }

  /**
   * Redirects to the SearchComponent passing the searched film in the url
   *
   * @param {string} term
   * @memberof HeaderComponent
   */

  search( event, term ) {
    event.preventDefault();

    this.router.navigate( ['/search', term.value] );

  }

}
