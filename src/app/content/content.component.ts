import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { ActivatedRoute, UrlSegment, Router, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'rout-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {
  filePath: string;

  constructor(private markdownService: MarkdownService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.filePath = 'assets/';
    this.route.parent.url.subscribe(parentUrlList => {
      this.filePath += parentUrlList.join('/');
      this.filePath += '/';
      this.route.url.subscribe(urlList => this.filePath += urlList.join('/'));
      this.filePath += '.md';
    });
    console.log('path', this.filePath);
    this.markdownService.compile('');
  }

  
}
