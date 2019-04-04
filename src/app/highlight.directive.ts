import { Directive, ElementRef, OnInit, Renderer2, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;



  constructor(private elRef:ElementRef, private renderer:Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  }

@HostListener('mouseenter') mouseEnterEvent (evenData:Event) {
  this.myBackgroundColor ='yellow';
}
@HostListener('mouseleave') mouseLeaveEvent (evenData:Event) {
  this.myBackgroundColor ='transparent'; 
}
}
