import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// This is an attribute directive
// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective {

  constructor(private elRef: ElementRef, private render: Renderer2) { // dependency injection
    const el = this.elRef.nativeElement;
    // el.style.backgroundColor = 'yellow';
    // el.style.color = 'red';
    // el.style.fontStyle = 'italic';

    this.render.setStyle(el, 'background-color', 'teal');
    this.render.setStyle(el, 'color', 'white');
    this.render.setStyle(el, 'height', '200px');
    this.render.setStyle(el, 'text-align', 'center');

    // Create element P inside the Text
    const para = this.render.createElement('p');
    const text = this.render.createText('Success');
    // appendChild p element have some text
    this.render.appendChild(para, text);
    this.render.appendChild(el, para);

  }

  @HostListener('click', ['$event'])
  onClickedHandler(evt: any): void {
    this.render.setStyle(evt.target, 'background-color', 'skyblue');
  }

}
