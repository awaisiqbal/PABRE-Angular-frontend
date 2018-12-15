import {Component, OnInit} from '@angular/core';
import {Metric} from '../../../models/metric';
import {PabreService} from '../../../services/pabre.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['../../shared-css/list.style.css']
})
export class MetricsComponent implements OnInit {

  metrics: Metric[];

  constructor(private pabreService: PabreService) {
  }

  ngOnInit() {
    this.getMetrics();
  }

  getMetrics(): void {
    this.pabreService.getMetrics().subscribe(metrics => this.metrics = metrics);
  }

}
