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

  search( term: string ) {

    this.router.navigate( ['/search', term] );

  }

}
