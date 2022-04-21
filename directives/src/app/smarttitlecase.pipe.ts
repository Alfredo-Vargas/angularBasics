import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'smarttitlecase'
})
export class SmarttitlecasePipe implements PipeTransform {

  transform(text: String): String {
    if (!text){
      return null;
    }

    let exceptions: Array<String> = ["the", "of"];

    let arrayOfWords: Array<String> = text.split(' ');
    let allButFirstWord: Array<String> = arrayOfWords.slice(1);
    let result: String = arrayOfWords[0].substr(0,1).toUpperCase().concat(arrayOfWords[0].substr(1).toLowerCase().concat(" "));
    
    for (let index in allButFirstWord) {
      let temp_word = allButFirstWord[index].toLowerCase();
      if (!exceptions.includes(temp_word)){
        temp_word = temp_word.substr(0,1).toUpperCase().concat(temp_word.substr(1));
      }
      console.log(allButFirstWord[index]);
      result = result.concat(temp_word.concat(" "));
    }

    return result;
  }
}
  // TODO:
  // Ask for the difference between String and string?
