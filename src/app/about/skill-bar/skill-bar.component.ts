import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.scss']
})
export class SkillBarComponent implements OnInit, AfterViewInit {
  @Input() value: number;
  @Input() max: number;
  @Input() sequence;

  filledPerc: number;
  unfilledPerc: number;
  showFinal = false;

  sequenceDelay = 150;
  maxPerc = 98;

  constructor() {

  }

  ngOnInit(): void {
    this.filledPerc = (this.value / this.max) * this.maxPerc;
    this.unfilledPerc = this.maxPerc - this.filledPerc;
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.showFinal = true, this.sequence * this.sequenceDelay);
  }

  getFilledStyle(): object {
    return {width: (this.showFinal ? this.filledPerc : 0) + '%'};
  }

  getUnfilledStyle(): object {
    return {width: (this.showFinal ? this.unfilledPerc : this.maxPerc) + '%'};
  }

}
