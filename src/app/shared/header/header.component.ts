import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  /**
   * Redirects to the SearchComponent passing the searched film in the url
   *
   * @param {string} term
   * @memberof HeaderComponent
   */
  search( term: string ) {

    this.router.navigate( ['/search', term] );

  }

}
