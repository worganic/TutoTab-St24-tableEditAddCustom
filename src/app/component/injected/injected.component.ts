import { Component, ViewChild, ViewContainerRef, OnInit,} from '@angular/core';
import { ExpandableService } from '../expandableListe';

@Component({
  selector: 'app-injected',
  templateUrl: './injected.component.html',
  standalone: true
})
export class InjectedComponent implements OnInit {
  title = 'InjectedComponent';
  liste : { [key: string]: any; };
  type: string = "child1";
  element: any;

  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: any;
  componentRef: any;
  

  constructor(private resolver: ViewContainerRef,  private _expandableService: ExpandableService) { 
    console.log("InjectedComponent | constructor" );
    this.liste = this._expandableService.getListe();

  }

  ngOnInit(): void {
    console.log("InjectedComponent | ngOnInit" );
  }

  createComponent(message: any, type: string) {
      console.log("InjectedComponent | createComponent / type :", type);
      this.entry.clear();
      this.componentRef = this.entry.createComponent(this.liste[type]);
      this.componentRef.instance.message = message;
      this.componentRef.instance.element = this.element;
  }
  
  destroyComponent() {
    console.log("InjectedComponent | destroyComponent" );
      this.componentRef.destroy();
  }
} 