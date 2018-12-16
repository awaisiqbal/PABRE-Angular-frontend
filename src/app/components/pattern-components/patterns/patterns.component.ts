import {Component, OnInit} from '@angular/core';
import {Pattern} from '../../../models/pattern';
import {PabreService} from '../../../services/pabre.service';

@Component({
  selector: 'app-patterns',
  templateUrl: './patterns.component.html',
  styleUrls: ['../../shared-css/list.style.css']
})
export class PatternsComponent implements OnInit {

  allExpandState = false;
  patterns: Pattern[];
  isLoaded = false;

  constructor(private pabreService: PabreService) {
  }

  ngOnInit() {
    this.getPatterns();
  }

  getPatterns(): void {
    this.pabreService.getPatterns().subscribe(patterns => {
      this.patterns = patterns;
      this.isLoaded = true;
    });
  }
}
