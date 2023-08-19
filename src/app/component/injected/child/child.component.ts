import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';



@Component({
  selector: 'vcr',
  template: `<ng-template #tpl>
      <h1>ViewContainerRef</h1>
    </ng-template>
    <div>Some element</div>
    <div #container></div>
  `,
  styleUrls: ['./child.component.scss'],
  standalone: true,
})
export class ChildComponent {

  @ViewChild('container', { read: ViewContainerRef }) _vcr: any;
  @ViewChild('tpl') tpl: any | undefined;

  ngAfterViewInit() {

    this._vcr.createEmbeddedView(this.tpl);
    const vc = this._vcr.createEmbeddedView(this.tpl);
    console.log("ChildComponent | ngAfterViewInit / vc: ", vc);
  }
}




