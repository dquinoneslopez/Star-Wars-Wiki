import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  saveHistory(urls: string[]) {

    if (!localStorage.getItem('history') || JSON.parse(localStorage.getItem('history')).length === 0) {

      localStorage.setItem( 'history', JSON.stringify( urls ) );

    } else {

      localStorage.history = JSON.stringify( urls );

    }

  }

  loadHistory() {

    if ( localStorage.getItem('history') ) {

      const history = JSON.parse( localStorage.getItem( 'history' ) );
      return history;

    }
  }
}
