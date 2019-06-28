import { Component } from '@angular/core';
import { SessionService } from './services/service.index';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'star-wars-wiki';

  constructor(private session: SessionService) {}

  spain() {

    this.session.registerCulture('es');

  }
}
