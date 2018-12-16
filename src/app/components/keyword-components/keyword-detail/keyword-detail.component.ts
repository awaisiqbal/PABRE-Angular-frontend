import {Component, Input, OnInit} from '@angular/core';
import {Keyword} from '../../../models/keyword';
import {ActivatedRoute} from '@angular/router';
import {PabreService} from '../../../services/pabre.service';

@Component({
  selector: 'app-keyword-detail',
  templateUrl: './keyword-detail.component.html',
  styleUrls: ['../../shared-css/detail.style.css']
})
export class KeywordDetailComponent implements OnInit {

  @Input() keyword: Keyword;

  constructor(
    private route: ActivatedRoute,
    private pabreService: PabreService) {
  }

  ngOnInit() {
    this.getKeywords();
  }

  private getKeywords() {
    // Obtain metric only if id is given
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.pabreService.getKeyword(id).subscribe(k => this.keyword = k);
    }
  }

}
