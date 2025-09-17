import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ZoomPerso]'
})
export class ZoomPerso {

  constructor(
    private el : ElementRef,
    private renderer : Renderer2
  )
  {}

  @HostListener('mouseenter') onMouseEnter(){
 this.renderer.setStyle(this.el.nativeElement , 'transform', 'scale(1.3)');
 this.renderer.setStyle(this.el.nativeElement , 'backgroundColor' , 'chartreuse');
 this.renderer.setStyle(this.el.nativeElement , 'textShadow' , '2px 2px 2px magenta');
 this.renderer.setStyle(this.el.nativeElement , 'color' , 'white');
 this.renderer.setStyle(this.el.nativeElement , 'font-size' , '18px');
 this.renderer.setStyle(this.el.nativeElement , 'width' , '200px');
 this.renderer.setStyle(this.el.nativeElement , 'box-shadow' , '2px 2px 5px magenta');
 this.renderer.setStyle(this.el.nativeElement , 'transition' , 'all 1s ease-in-out');
 this.renderer.setStyle(this.el.nativeElement , 'animation' , 'rotate 0.3s infinite alternate');
  }

    @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeStyle(this.el.nativeElement , 'transform');
    this.renderer.removeStyle(this.el.nativeElement , 'backgroundColor');
    this.renderer.removeStyle(this.el.nativeElement , 'textShadow');
    this.renderer.removeStyle(this.el.nativeElement , 'color');
    this.renderer.removeStyle(this.el.nativeElement , 'font-size');
    this.renderer.removeStyle(this.el.nativeElement , 'width');
    this.renderer.removeStyle(this.el.nativeElement , 'box-shadow');
    this.renderer.removeStyle(this.el.nativeElement , 'transition');
    this.renderer.removeStyle(this.el.nativeElement , 'animation');
  }

}
