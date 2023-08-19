import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, OnInit, ChangeDetectorRef,} from '@angular/core';
import { ExpandableService } from 'src/app/component/expandableListe';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  standalone: true
})
export class ExpandableComponent implements OnInit {
  title = 'ExpandableComponent';
  liste : { [key: string]: any; };
  type: string = "child1";
  element: any;

  // Récupération d'element et du nom de la catégorie :
  @Input() expandableOptions!: any[];

  // Injection dans le code html :
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: any;
  componentRef: any;
  
  constructor(
    private changeDetector: ChangeDetectorRef,
    private _expandableService: ExpandableService
    ) { 
    this.liste = this._expandableService.getListe();
  }

  /**
   * ngOnInit
   */
  ngOnInit(): void {
    console.log("ExpandableComponent | ngOnInit / expandableOptions :", this.expandableOptions );
    this.type = this.expandableOptions[1];
    this.element = this.expandableOptions[0];
  }

  /**
   * createComponent
   * 
   * @param message 
   * @param type 
   */
  createComponent(message: any, type: string) {
      //console.log("ExpandableComponent | createComponent / type :", type);
      //console.log("ExpandableComponent | createComponent / this.element :", this.element);
      if(!type)type = this.type;
      this.entry.clear();
      this.componentRef = this.entry.createComponent(this.liste[type]);
      this.componentRef.instance.message = message;
      this.componentRef.instance.element = this.element;
      this.changeDetector.detectChanges();
  }
  
  /**
   * destroyComponent
   */
  destroyComponent() {
      this.componentRef.destroy();
  }

  /**
   * ngAfterViewInit
   */
  ngAfterViewInit() {
    this.createComponent('message', this.type);
  }
} 