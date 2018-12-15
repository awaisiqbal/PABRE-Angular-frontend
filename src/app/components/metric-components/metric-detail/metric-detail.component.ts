import {Component, Input, OnInit} from '@angular/core';
import {Metric} from '../../../models/metric';
import {ActivatedRoute} from '@angular/router';
import {PabreService} from '../../../services/pabre.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-metric-detail',
  templateUrl: './metric-detail.component.html',
  styleUrls: ['../../shared-css/detail.style.css']
})
export class MetricDetailComponent implements OnInit {

  @Input() metric: Metric;

  constructor(
    private route: ActivatedRoute,
    private pabreService: PabreService,
    private location: Location) {
  }

  ngOnInit() {
    this.getMetric();
  }

  private getMetric(): void {
    // Obtain metric only if id is given
    if (this.route.snapshot.paramMap.has('id')) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.pabreService.getMetric(id).subscribe(metric => this.metric = metric);
    }
  }

  goBack(): void {
    this.location.back();
  }

}
