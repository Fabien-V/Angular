import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appShowlist]'
})
export class ShowlistDirective {
  @Input() set appShowList(condition:boolean) {
    if (condition) {
      this.vwRef.createEmbeddedView(this.tplRef);
    }
    else {
      this.vwRef.clear();

    }
 

  }

  constructor(private tplRef: TemplateRef<any>, private vwRef:ViewContainerRef) { }

}
