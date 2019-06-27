import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HistoryComponent } from './history/history.component';
import { CarouselComponent } from './carousel/carousel.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    HistoryComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    RouterModule,
  ],
  exports: [
    HistoryComponent,
    CarouselComponent,
  ]
})
export class ComponentsModule {

  constructor() {

    library.add(faAngleDown);

  }

}
