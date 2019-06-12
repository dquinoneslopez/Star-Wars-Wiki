import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HistoryService } from '../../services/shared/history.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  private history: string[];

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

    if (this.historyService.loadHistory() != null) {

      this.history = this.historyService.loadHistory();

    } else {

      this.history = [];
      this.history.push(this.router.url);

    }

    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
                      .subscribe(event => {

      this.history.push(event.url);
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
