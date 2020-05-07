import { Component, Input, OnInit } from '@angular/core';
import { I18nPluralPipe } from '@angular/common';

@Component({
  selector: 'app-skills-tech-skills',
  templateUrl: './skills-tech-skills.component.html',
  styleUrls: ['./skills-tech-skills.component.scss']
})
export class SkillsTechSkillsComponent implements OnInit {
  @Input() techSkills: any[];
  skillBarMax = 0;
  yearPluralMapping = {
    '=0': 'years',
    '=1': '1 year',
    other: '# years'
  };

  constructor() {
  }

  ngOnInit(): void {
    this.skillBarMax = Math.max(...this.techSkills.map(o => o.years));
  }

  isHalf(decimal): boolean {
    return decimal - 0.5 === Math.floor(decimal);
  }

  halfToFrac(decimal): string {
    // I didn't think it was necessary to make an entire pipe for this
    if (this.isHalf(decimal)) {
      if (decimal < 1) {
        return '½ year';
      } else {
        return Math.floor(decimal) + '½ years';
      }
    } else {
      return decimal + ' years';
    }
  }
}
