import { OnChanges } from '@angular/core';
import {
  Directive,
  OnInit,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
@Directive({
  selector: '[appAlternetIf]',
})
export class AlternetIfDirective implements OnChanges {
  @Input() set appAlternetIf(condtion: boolean) {
    if (condtion) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
  ngOnChanges(): void {
    // if (this.appAlternetIf) {
    //   this.vcRef.createEmbeddedView(this.templateRef);
    // } else {
    //   this.vcRef.clear();
    // }
  }
}
