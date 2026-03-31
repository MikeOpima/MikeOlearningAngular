import {Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appTextColourDirective]',
  standalone: true,
})
export class TextColourDirective implements OnChanges {
  //Take in the price as input
  @Input() appTextColor: number | null = null;
  //Renderer2: Used to safely apply styles to the element, especially in scenarios where direct DOM manipulation might not be that safe
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTextColor'] && this.appTextColor !== null) {
      this.applyTextColor(this.appTextColor);
    }
  }
  private applyTextColor(startPrice: number): void {
    let color = '';
    let fontWeight = 'normal';
    if (startPrice < 500) {
      color = 'darkred';
      fontWeight = 'bold';
    } else if (startPrice >= 500 && startPrice <= 999) {
      color = 'lightcoral';
    } else if (startPrice >= 999 && startPrice <= 9999) {
      color = 'darkorange';
    } else if (startPrice >= 10000) {
      color = 'green';
    }
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', fontWeight);
  }
}
