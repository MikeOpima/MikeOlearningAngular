import {AfterViewInit, Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appAutoFocusDirective]',
  standalone: true,
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
      //Focus the element after the view initializes
      this.el.nativeElement.focus();
    }

}
