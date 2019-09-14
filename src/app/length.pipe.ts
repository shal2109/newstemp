import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
name: 'length'
})
export class LengthPipe implements PipeTransform {

transform(value: any, args:any): any {
if(args){
let array=[];
for(let i=0;args>i;i++){
array.push(value[i]);
}
return array;
}
else{
return value;
}
}

}