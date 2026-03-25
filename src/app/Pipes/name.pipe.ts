import {Pipe, PipeTransform} from '@angular/core';
import { FundData } from '../Interfaces/fund-data';

@Pipe({
  name: 'Fname',
  standalone: true
})
export class NamePipe implements PipeTransform {
  transform(fundData: FundData): string {
    return `${fundData.fundName}`;
}
}
