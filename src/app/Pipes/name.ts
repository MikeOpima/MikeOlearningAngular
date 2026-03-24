import {Pipe, PipeTransform} from '@angular/core';
import { FundData } from '../Interfaces/fund-data';

@Pipe({
  name: 'Fname',
  standalone: true
})
export class Name implements PipeTransform {
  transform(fundData: FundData[]): string {
    // @ts-ignore
    return `${fundData.fundData}`;
}
}
