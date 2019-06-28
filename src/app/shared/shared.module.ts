import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { FilmService } from '../services/service.index';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent,
  ],
  providers: [
    FilmService
  ]
})
export class SharedModule { }
