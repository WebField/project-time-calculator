import {Directive, ElementRef, HostListener, Input, Renderer} from '@angular/core';

@Directive({
  selector: '[materialHover]'
})
export class MaterialHoverDirective {
  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
