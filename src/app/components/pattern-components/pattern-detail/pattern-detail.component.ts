import {Component, Input, OnInit} from '@angular/core';
import {Pattern} from '../../../models/pattern';
import {ActivatedRoute} from '@angular/router';
import {PabreService} from '../../../services/pabre.service';

@Component({
  selector: 'app-pattern-detail',
  templateUrl: './pattern-detail.component.html',
  styleUrls: ['../../shared-css/detail.style.css']
})
export class PatternDetailComponent implements OnInit {

  @Input() patternId = 0;
  @Input() pattern: Pattern;
  isEmbedded = false;

  constructor(
    private route: ActivatedRoute,
    private pabreService: PabreService) {
  }

  ngOnInit() {
    this.getPattern();
    if (this.patternId !== 0) {
      this.isEmbedded = true;
    }
  }

  getPattern(): void {
    // Obtain pattern only if id is given
    let idToSearch = this.patternId;
    if (this.patternId === 0 && this.route.snapshot.paramMap.has('id')) {
      idToSearch = +this.route.snapshot.paramMap.get('id');
    }
    if (idToSearch !== 0) {
      this.pabreService.getPattern(idToSearch).subscribe(pattern => this.pattern = pattern);
    }
  }
}
