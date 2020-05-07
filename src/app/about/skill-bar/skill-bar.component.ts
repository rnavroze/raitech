import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit, AfterViewInit {
  @Input() value: number;
  @Input() max: number;
  filledPerc: number;
  unfilledPerc: number;
  maxPerc = 98;
  showFinal = false;

  constructor() {

  }

  ngOnInit(): void {
    this.filledPerc = (this.value / this.max) * this.maxPerc;
    this.unfilledPerc = this.maxPerc - this.filledPerc;
  }

  ngAfterViewInit(): void {
    this.showFinal = true;
  }

  getFilledStyle(): object {
    return {width: (this.showFinal ? this.filledPerc : 0) + '%'};
  }

  getUnfilledStyle(): object {
    return {width: (this.showFinal ? this.unfilledPerc : this.maxPerc) + '%'};
  }

}
