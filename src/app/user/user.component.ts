import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input('userName') user: string = '';
  @Input() name: string = '';
  @ContentChild('userParagraph') userParagraph: ElementRef<any> | undefined;
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called');
    // console.log(changes);
  }
  constructor() {
    // console.log('constructor is called');
  }
  ngOnInit(): void {
    // console.log('ngOnInit called');
    // console.log(this.userParagraph);
  }
  ngDoCheck(): void {
    // console.log('ngDoCheck called');
  }
  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit called');
    // console.log(this.userParagraph?.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    // console.log('ngOnDestroy called');
  }
}
