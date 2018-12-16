import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  template: `<button mat-raised-button (click)="goBack()">Back</button> `,
  styles: [``]
})
export class BackButtonComponent implements OnInit {

  constructor(
    private location: Location) {
  }

  ngOnInit() {
  }

  public goBack(): void {
    this.location.back();
  }

}
