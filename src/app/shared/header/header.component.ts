import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  public isNavbarCollapsed=true;

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

  search( event, term ) {
    event.preventDefault()

    this.router.navigate( ['/search', term.value] );

  }

}
