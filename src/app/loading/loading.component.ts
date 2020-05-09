import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  counterValue;

  constructor() {
    this.counterValue = 0;
  }

  ngOnInit(): void {
    this.incrementValue();
  }

  incrementValue(): void {
    // I dn't realize this would have the cool bouncing effect because of angular's progress bar animations
    // but it turned out to be nice so I'm keeping it

    this.counterValue = this.counterValue + 1 > 100 ? 0 : this.counterValue + 1;
    window.setTimeout(() => this.incrementValue(), 50);
  }

}
