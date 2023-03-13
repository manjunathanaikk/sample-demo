import { Input } from '@angular/core';
import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appRendererHighlight]',
})
export class RendererHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') color: string | undefined;
  @Input('appRendererHighlight') defaultColor: string = 'red';
  @Input() highlightColor: string = 'yellow';
  constructor(private ele: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.color = this.highlightColor;
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'green');
  }
  @HostListener('mouseenter') onmouseover(event: Event) {
    // this.color = 'red';
    this.color = this.highlightColor;
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'red');
  }
  @HostListener('mouseleave') onmouseleave(event: Event) {
    // this.renderer.setStyle(
    //   this.ele.nativeElement,
    //   'background-color',
    //   'yellow'
    // );
    // this.color = 'yellow';
    this.color = this.defaultColor;
  }
  @HostListener('click') onclick(event: Event) {
    // this.renderer.setStyle(this.ele.nativeElement, 'background-color', 'blue');
    this.color = 'pink';
  }
}
