import {Component, OnInit} from '@angular/core';
import {Keyword} from '../../../models/keyword';
import {PabreService} from '../../../services/pabre.service';

@Component({
  selector: 'app-keywords',
  templateUrl: './keywords.component.html',
  styleUrls: ['../../shared-css/list.style.css']
})
export class KeywordsComponent implements OnInit {

  keywords: Keyword[];

  constructor(private pabreService: PabreService) {
  }

  ngOnInit() {
    this.getKeywords();
  }

  private getKeywords(): void {
    this.pabreService.getKeywords().subscribe(keywords => this.keywords = keywords);
  }
}
