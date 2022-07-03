import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emojii'
})
export class EmojiiPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    // split into words

    let list = value.split(' ');
    let newString = '';
    list.forEach(word => {
      newString += this.getEmoji(word) + ' ';
    });

    newString.trimEnd();
    return newString;
  }

  /**
   * when we match with a magical creature return the unicode emoji
   * @param word 
   * @returns word or emoji
   */
  getEmoji(word: string): string {
    switch(word.toLowerCase()) {
      case 'unicorn':        
        return '\u{1f984}';
      case 'sauropod':          
        return '\u{1f995}';
      case 't-rex':          
        return '\u{1f996}';
      case 'dragon' :        
        return '\u{1f409}';
      case 'mammoth' :        
        return '\u{1f9A3}';
      case 'dodo' :        
        return '\u{1f9A4}';
      case 'bison' :        
        return '\u{1f9AC}';
    }

    return word;
  }

}
