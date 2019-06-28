import { Injectable } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeSpanish from '@angular/common/locales/es';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private locale: string;
  
  constructor() { }

  /**
   * Sets locale
   * @param value 
   */
setLocale(value: string) {

    this.locale = value;

  }

  /**
   * Gets locale
   * @returns  locale
   */
  getLocale() {

    return this.locale || 'en-US';

  }

  registerCulture(culture: string) {

    if ( !culture ) {
      
      return;

    }

    this.locale = culture;

    // Register locale data since only the en-US locale data comes with Angular
    registerLocaleData(localeSpanish);

  }
  
}
