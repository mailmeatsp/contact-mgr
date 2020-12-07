import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDemoIf]'
})
export class DemoIfDirective {
  isAuth: boolean;
  constructor(private viewContainerRef: ViewContainerRef, private templateRef: TemplateRef<object>) {
    const isAuth = true;

    if (isAuth) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }
}
