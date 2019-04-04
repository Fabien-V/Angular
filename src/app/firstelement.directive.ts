import { Directive, ElementRef, Renderer2, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFirstelement]'
})
export class FirstelementDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit() {
  
  }

@HostListener('mouseenter') mouseEnterEvent (evenData:Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  this.renderer.setStyle(this.elRef.nativeElement, 'font-size' , '3rem');
}
@HostListener('mouseleave') mouseLeaveEvent (evenData:Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  this.renderer.setStyle(this.elRef.nativeElement, 'font-size' , '1rem');
}
}
