import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  /**
   * Saves history
   * @param urls urls to store
   */
  saveHistory(urls: string[]) {

    if (!sessionStorage.getItem('history') || JSON.parse(sessionStorage.getItem('history')).length === 0) {

      sessionStorage.setItem( 'history', JSON.stringify( urls ) );

    } else {

      sessionStorage.history = JSON.stringify( urls );

    }

  }

  /**
   * Loads history
   * @returns  string[]
   */
  loadHistory() {

    if ( sessionStorage.getItem('history') ) {

      const history = JSON.parse( sessionStorage.getItem( 'history' ) );
      return history;

    } else {

      sessionStorage.setItem( 'history', '' );

    }

  }

  /**
   * Clears history
   */
  clearHistory() {

    if ( sessionStorage.getItem('history') ) {

      sessionStorage.removeItem('history');

    }

  }
}
