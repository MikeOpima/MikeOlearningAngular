import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Directive({
  selector: '[appDisableButtonDirective]',
  standalone: true,
})
export class DisableButtonDirective implements OnInit{
  @Input() appDisableButton!: AbstractControl;
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.updateButtonState();
    this.appDisableButton.valueChanges.subscribe(() => {
    this.updateButtonState();
  });

}

  private updateButtonState() {
    const fundNameControl = this.appDisableButton.get('fundName' );
    const isDisabled = !fundNameControl?.value;

    if (isDisabled) {
      this.el.nativeElement.disabled = true;
      this.el.nativeElement.classList.add('custom-disabled'); //Add custom class when disabled so we don't have to change existing styles
    } else {
      this.el.nativeElement.disabled = false;
      this.el.nativeElement.classList.remove('custom-disabled'); // Remove custom class when enabled
    }
   }
  }

