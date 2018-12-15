import {Component, OnInit} from '@angular/core';
import {Pattern} from '../../models/pattern';
import {PabreService} from '../../services/pabre.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  patterns: Pattern[] = [];


  constructor(private pabreService: PabreService) {
  }

  ngOnInit() {
    this.getPatterns();
  }

  getPatterns(): void {
    this.pabreService.getPatterns().subscribe(patterns => this.patterns = patterns.slice(1, 5));
  }

}
