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
  ) {

    if (this.historyService.loadHistory() != null) {

      this.history = this.historyService.loadHistory();

    } else {

      this.history = [];

    }
    this.router.events.pipe(filter((event: any) => event instanceof NavigationEnd))
                      .subscribe(event => {

      this.history.push(event.url);
      this.historyService.saveHistory(this.history);

    });

  }

  ngOnInit() { }

}
