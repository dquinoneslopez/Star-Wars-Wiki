import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { HistoryService } from '../../services/history/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html'
})
export class HistoryComponent implements OnInit {

  public history: string[];
  public isHistoryCollapsed = true;

  constructor(
    private router: Router,
    private historyService: HistoryService
  ) { }

  /**
   * Loads the stored history if there is one and then listen for new navigation events
   *
   * @memberof HistoryComponent
   */
  ngOnInit() {

    if ((this.historyService.loadHistory() != null) && (this.historyService.loadHistory() !== '')) {

      this.history = this.historyService.loadHistory();

    } else {

      this.history = [];
      this.history.push(this.router.url);

    }

    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(event => {

        // Makes sure that the url isn't currently in the history.
        // If it is, it deletes it and adds tue url at the start
        const urlIndex = this.history.indexOf(event.url);

        if (urlIndex >= 0) {

          this.history.splice(urlIndex, 1);

        }

        this.history.unshift(event.url);

        // It shows only the last ten visited pages
        if (this.history.length > 10) {

          this.history.pop();

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
