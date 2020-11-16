import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color ;
  @HostBinding('style.borderColor') bordercolor ;
  @HostListener('keyup') onKeyUp(){
    this.color = this.colors[Math.floor(Math.random() * (7))] ;
    this.bordercolor = this.colors[Math.floor(Math.random() * (7))] ;
  }
  colors = [ 'red', 'orange', 'yellow', 'green' , 'blue', 'cyan', 'pink' ,'purple']
  constructor() { }

} 