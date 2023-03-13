import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightText]',
})
export class HighlightTextDirective implements OnInit {
  constructor(private ele: ElementRef) {}
  ngOnInit(): void {
    (this.ele.nativeElement as HTMLElement).style.backgroundColor = 'red';
    // (<HTMLElement>this.ele.nativeElement).style.backgroundColor = 'red';
  }
}
