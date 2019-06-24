import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HistoryService } from '../../services/shared/history.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  public history: string[];

  constructor(
    private router: Router,
    private historyService: HistoryService
  ) {}

  /**
   * Loads the stored history if there is one and then listen for new navigation events
   *
   * @memberof HistoryComponent
   */
  ngOnInit() {

    if ((this.historyService.loadHistory() != null) && (this.historyService.loadHistory() != '')) {

      this.history = this.historyService.loadHistory();

    } else {

      this.history = [];
      this.history.push(this.router.url);

    }

    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
                      .subscribe(event => {

                        if (event.url != this.history[this.history.length-1]) {

                          this.history.push(event.url);

                        }
                        
                        this.historyService.saveHistory(this.history);

                      });

   }

  /**
   * Clear the history stored in LocalStorage
   *
   * @memberof HistoryComponent
   */
  clearHistory() {

    this.historyService.clearHistory();
    this.ngOnInit();

  }

}
