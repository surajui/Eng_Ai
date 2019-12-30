import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(Respdata: any, InputText:string): any {
    return Respdata ? Respdata.filter(item => item.title.search(new RegExp(InputText,'i'))>-1):[];
  }
}
