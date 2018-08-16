import { Directive, HostListener, ElementRef, Input } from '@angular/core'; 
//HostListener subscribe to events that are raised from DOM elements...

@Directive({
  selector: '[appInputformater]'
})
export class InputformaterDirective {
  @Input('format') format;
  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log('on focus');
  }

  @HostListener('blur') onblur(){
    let value:string = this.el.nativeElement.value;

    if(this.format == "lowercase")
    this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();
  }
}
