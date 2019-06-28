import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule, NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';

// Servicios
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/components.module';


// Pipes
import { LocalNumberPipe } from './pipes/localNumber/local-number.pipe';
import { LocalDatePipe } from './pipes/localDate/local-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    LocalNumberPipe,
    LocalDatePipe,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    ComponentsModule,
    APP_ROUTES,
    ServiceModule,
    NgbCarouselModule,
    NgbCollapseModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
