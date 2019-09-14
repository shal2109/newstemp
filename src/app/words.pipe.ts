import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'words'
})
export class WordsPipe implements PipeTransform {

  transform(value: string, args: any[]): any {
  if(!value)
    return null;
  return  value.substr(0,100) + 'Read more';
  }

}
