import { ChangeDetectorRef, Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { EditService } from 'src/app/component/editListe';

@Component({
  selector: 'worg-edit',
  templateUrl: './worg-edit.component.html',
  styleUrls: ['./worg-edit.component.scss'],
  standalone: true,
})
export class WorgEditComponent {
  // Récupération d'element et du nom de la catégorie :
  @Input() editOptions!: any[];

  // Injection dans le code html :
  @ViewChild('messagecontainer', { read: ViewContainerRef }) entry: any;
  componentRef: any;

  title = 'EditComponent';
  liste: { [key: string]: any; };
  type: string = "child1";
  element: any;
  column: string = "";

  constructor(
    private changeDetector: ChangeDetectorRef,
    private _editeService: EditService
  ) {
    this.liste = this._editeService.getListe();
  }

  /**
 * ngOnInit
 */
  ngOnInit(): void {
    console.log("ExpandableComponent | ngOnInit / editOptions :", this.editOptions);
    this.type = this.editOptions[1];
    this.element = this.editOptions[0];
    this.column = this.editOptions[2];
  }

  /**
   * createComponent
   * 
   * @param message 
   * @param type 
   */
  createComponent() {
    //console.log("ExpandableComponent | createComponent / type :", type);
    //console.log("ExpandableComponent | createComponent / this.element :", this.element);
    const type = this.type;
    this.entry.clear();
    this.componentRef = this.entry.createComponent(this.liste[type]);
    this.componentRef.instance.type = type;
    this.componentRef.instance.element = this.element;
    this.componentRef.instance.column = this.column;
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
    this.createComponent();
  }
}
