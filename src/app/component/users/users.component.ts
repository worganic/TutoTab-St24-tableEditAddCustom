import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';
import { WorgTableComponent } from 'src/app/shared/component/worg-table/worg-table.component';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, WorgTableComponent, CommonModule]
})
export class UsersComponent implements OnInit {

  @Input() optionRecup!: any[];

  // Données du tableau :
  dataAsync$: Observable<any> | undefined;

  // Options du tableau :
  tableOption!: any[];
  recup = import( "src/app/component/users/pipe/pipe");

  options: any = {
    "sectionName": "users",
    "urlParent": "src/app/component/users",
  
    'affichage': false,// Affichage de app-worg-table.
    'timer': false,// Utilisation ou non du timer.
    'timerTemps': 60,// Temps du timer (réactualisation des données).
    'filtre': false,// Affichage de la ligne filtre.
    'paginator': false,// Paginator oui ou non.
    'paginatorPageSize': 5,//
    'paginatorMaxSize': 2,//
    'infosNbElement': false,// Affichage d'infos (nombre d'élément).
    'infosNbElementText': "Nombre d'élément total",// Affichage d'infos (nombre d'élément).
    'expandabled': true,// Expandable actif.
    'expandableCol': true,// false : exapandable si click sur la ligne // true : uniquement sur certaine colonne :  expandable: true
    'addData': true,// 
  };


  // Liste des colonnes et leur options :
  listeColumns: any[] = [
    {column: 'id', columnTitle: 'id.', type:'number', columnHidden: false, expandable: true, columnPriority:'1'},
    {column: 'username', columnTitle: 'Login', type:'string', columnHidden: false,
      filter: true, filterType: 'text', columnPriority:'3',
      edit: true
    },
    {column: 'firstName', columnTitle: 'Prénom', type:'string', columnHidden: false,
      filter: true, filterType: 'select', 
      filterSelectData: null, 
      filterSelectDefault: 'All', 
      filterSelectVide: 'All',
      pipe: true,
      expandable: true, columnPriority:'4',
      edit: true
    },
    {column: 'lastName', columnTitle: 'Nom', type:'string', columnHidden: false,
      filter: true, filterType: 'text', columnPriority:'4',
      edit: true
    },
    {column: 'date', columnTitle: 'Date', type:'string', columnHidden: false, pipe: true, columnPriority:'2',
      edit: true, editType: 'custom'
    },
    {column: 'age', columnTitle: 'Age', type:'string', columnHidden: false, columnPriority:'5'},
    {column: 'sexe', columnTitle: 'Sexe', type:'string', columnHidden: false,
      filter: true, filterType: 'select', 
      filterSelectData: ['Homme','Femme'], 
      filterSelectDefault: 'All', 
      filterSelectVide: 'All', columnPriority:'5',
      edit: true,
      editType: 'select'
    },
    {column: 'country', columnTitle: 'Pays', type:'string', columnHidden: true, columnPriority:'5'},
    {column: 'password', columnTitle: 'Mot de passe', type:'string', columnHidden: false, columnPriority:'5'},
    {column: 'edit', columnTitle: 'Edit', type:'button', columnHidden: false, columnPriority:'1'},
    {column: 'delete', columnTitle: 'Delete', type:'button', columnHidden: false, columnPriority:'1'},
  ];
  
  /**
   * constructor
   * 
   * @param _usersService 
   * @param _fb 
   */
  constructor(
    private _usersService: UsersService,// Service.
  ) { }

  /**
   * ngOnInit
   */
  async ngOnInit(): Promise<void> {
    //console.log('UsersComponent / ngOnInit');
   // const module = await import( "src/app/component/users/pipe/pipe");
    
    // Liste des options :
    this.tableOption = [{
        options: this.options,// Options.
      //  importPipe: module,
        service:  this._usersService,// Service envoyé à app-worg-table.
        listeColumns: this.listeColumns,// Liste des filtres.
      }
    ];

    // On récupére les options spécifique :
    if(this.optionRecup != null){
      Object.entries(this.optionRecup).forEach(([key, value], index) => {
        console.log('UsersComponent | optionRecup / key :', key);
        console.log('UsersComponent | optionRecup / value :', value);
        this.options[key] = value;
      });
    }
  }

  /**
   * Récupération des données :
   */ 
  getData() {
    //console.log("UsersComponent / getData");
    this.dataAsync$ = this._usersService.geUsers().pipe(
      map((jsonArray: any) => {
        //console.log("UsersComponent / getData / res :", jsonArray);
        return jsonArray;
      })
    );
  }

  /**
   * action
   * 
   * @param data 
   */
  action(data: any){
    console.log("UsersComponent / action / data :", data);
    // delete
    if(data['action']== "delete"){
      this._usersService.delUser(data['element']);
    }
    // editValid
    if(data['action']== "editValid"){
      this._usersService.editUser(data['element']);
    }
    // addValid
    if(data['action']== "addValid"){
      this._usersService.addUser(data['element']);
    }
  }



}
