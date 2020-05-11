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
    if (this.counterValue >= 100) {
      setTimeout(() => this.counterValue = 0, 500);
      setTimeout(() => this.incrementValue(), 1000);
    } else {
      this.counterValue++;
      window.setTimeout(() => this.incrementValue(), 50);
    }
  }

}
