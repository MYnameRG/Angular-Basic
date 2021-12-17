import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'newcase'
})

export class NewCasePipe implements PipeTransform {
  transform(value: string) {
    if(!value) return null;

    let prepArt = ['in', 'at', 'on', 'of', 'a', 'the', 'an'];
    if(value.length == 1 && value == value.toLowerCase()) return value.charAt(0).toUpperCase();
    else if(value.length > 1 && !value.includes(' ')) return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
    else {
      let words = value.split(' ');
      words[0] = words[0].charAt(0).toUpperCase() + words[0].substr(1).toLowerCase();
      let first = words.shift();
      for(let i=0;i<words.length;i++) {
        if(!prepArt.includes(words[i])) words[i] = words[i].charAt(0).toUpperCase() + words[i].substr(1).toLowerCase();
      }
      value = first + ' ' + words.join(' ');
    }
    
    return value;
  }
}
