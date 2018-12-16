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

  @Input() pattern: Pattern;

  constructor(
    private route: ActivatedRoute,
    private pabreService: PabreService) {
  }

  ngOnInit() {
    this.getPattern();
  }

  getPattern(): void {
    // Obtain pattern only if id is given
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.pabreService.getPattern(id).subscribe(pattern => this.pattern = pattern);
    }
  }
}
