import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bbcodeParser'
})
export class BbcodeParserPipe implements PipeTransform {

  // Extremely rudimentary! Converts [b] -> <b>, [link= -> <a href=",
  // =link] to ">, [/b] -> </b> and [/link] to </a>.
  // In reality, for a more advanced bbcode parser, I would use regex
  // or an exisnig library but this will work for now.
  transform(value: string, ...args: string[]): string {
    return value.replace(/\[b]/g, '<span class="semibold">')
      .replace(/\[\/b]/g, '</span>')
      .replace(/\[link=/g, '<a class="work-exp-link" href="')
      .replace(/=link]/g, '" target="_blank" rel="noopener">')
      .replace(/\[\/link]/g, '</a>');
  }
}
