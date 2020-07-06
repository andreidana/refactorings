import { Component, OnInit } from '@angular/core';
import { filter } from "rxjs/operators";
import { MarkdownService } from 'ngx-markdown';
import { ActivatedRoute, Router, NavigationStart, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'rout-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  filePath: string;

  constructor(private markdownService: MarkdownService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.filePath = `assets${this.router.url}.md`;
    this.router.events.pipe(filter((event: NavigationEvent) => ( event instanceof NavigationStart )))
                      .subscribe(( event: NavigationStart ) => this.filePath = `assets${event.url}.md`);
    this.markdownService.compile('');
  }
}
