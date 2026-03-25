import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary',
})
export class SummaryPipe implements PipeTransform {

  /**
   * Transforms the input value to a truncated summary.
   * @param value The input string.
   * @param limit The maximum length of the summary (default is 50).
   * @returns The truncated string with ellipsis.
   */
  transform(value: string, limit: number = 50): string {
    if (!value) {
      return '';
    }
    if (value.length <= limit) {
      return value;
    }
    return value.substring(0, limit) + '...';
  }

}
