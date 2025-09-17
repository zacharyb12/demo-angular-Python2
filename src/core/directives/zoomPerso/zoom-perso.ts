import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ZoomPerso]'
})
export class ZoomPerso {

  constructor(
    private el : ElementRef,
    private renderer : Renderer2
  )
  {
    
  }

  @HostListener('mouseenter') onMouseEnter(){
 this.renderer.setStyle(this.el.nativeElement , 'transform', 'scale(1.2)');
 this.renderer.setStyle(this.el.nativeElement , 'backgroundColor' , 'blue');
 this.renderer.setStyle(this.el.nativeElement , 'color' , 'white');
 this.renderer.setStyle(this.el.nativeElement , 'font-size' , '20px');
  }

    @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement , 'transform');
    this.renderer.removeStyle(this.el.nativeElement , 'backgroundColor');
  }

}
