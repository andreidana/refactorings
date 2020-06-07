import { Component, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'rout-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.sass']
})
export class ContentComponent implements OnInit {

  constructor(private markdownService: MarkdownService) { }

  ngOnInit() {
    this.markdownService.compile('I am using __markdown__.');
  }

}
