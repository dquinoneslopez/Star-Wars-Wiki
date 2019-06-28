import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalDatePipe } from './localDate/local-date.pipe';
import { LocalNumberPipe } from './localNumber/local-number.pipe';

@NgModule({
  declarations: [
    LocalDatePipe,
    LocalNumberPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LocalDatePipe,
    LocalNumberPipe,
  ]
})
export class PipesModule { }
