# WorganicTabV1 / v24 ! Table/Edit/Personnalise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.


## Development server json

Run `json-server --watch db.json` for a dev server. Navigate to `http://localhost:3000/`.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Get clone 
> https://github.com/worganic/TutoTab-St24-tableEditPersonnalise.git
> npm install
> cd .\worganic-tab-v24\
> ng serve

## Project :
v24 - Tableau -> edit - personnalise

    - On met en place la colonne editable pour la date :
        \src\app\component\users\users.component.ts
            >>  {column: 'date',...
                edit: true

    - Je change le nom du selector du component 
        \src\app\shared\component\worg-table\worg-table.component.html
            >> <app-expandable [expandableOptions]="[element, sectionName]"></app-expandable>
        \src\app\shared\component\worg-table\worg-expandable\expandable.component.ts
            >> selector: 'app-expandable',
    
    - On crait un nouveau component d'injection pour les edition :
        ~ ng generate c /shared/component/worg-table/worg-edit --skip-import
        On le rend standalone :

    - On inject un nouveau component 
        \src\app\shared\component\worg-table\worg-table.component.html
            >> <worg-edit ></worg-edit>
        \src\app\shared\component\worg-table\worg-table.component.ts
            >> import { WorgEditComponent } from 'src/app/shared/component/worg-table/worg-edit/worg-edit.component';
            >>  imports: [...
                WorgEditComponent
    
        "à partir le là le nouveau component d'injection apparait dans la vue."

    - On rajoute les options dans la vue :
        \src\app\shared\component\worg-table\worg-table.component.html
            >> <worg-edit [editOptions]="[element, sectionName]"></worg-edit>
        \src\app\shared\component\worg-table\worg-edit\worg-edit.component.ts
            >> @Input() editOptions!: any[];

        "C'est un peu une copie de expandable." 

    - On ajoute toutes les fonctions nécéssaire pour l'injection :
        \src\app\shared\component\worg-table\worg-edit\worg-edit.component.ts
    
    - On crait le service EditListe :
        \src\app\component\editListe.ts
    - On crait le component edit pour users :
        ~ ng generate c /component/users/edit/ --skip-import    

        "On peux maintenant afficher le component enfant users\edit\edit.component."

    - On ajoute le nom de l colonne dans les option à passé (column.column) :
        \src\app\shared\component\worg-table\worg-table.component.html
            >> <worg-edit [editOptions]="[element, sectionName, column.column]"></worg-edit>

    - On modifi la fct suivant l'élément editable appelé :

        \src\app\component\users\edit\edit.component.ts
            >> @Input() column!: any;
        \src\app\shared\component\worg-table\worg-edit\worg-edit.component.ts
            >> column: string = "";
            >> this.column = this.editOptions[2];
            >> this.componentRef.instance.column = this.column;

    - On modifi la fct suivant l'élément editable appelé :


    - On met en place ng-bootstrap pour le design des elements form
        ~ npm install --save @ng-bootstrap/ng-bootstrap --force

        On ajoute bootstrap :
            \angular.json

        ~ ng update @angular/cli @angular/core
        ~ ng add @angular/localize

    - On met à jour angular/cli
        ~ ng update @angular/cli @angular/core

    - On met à jour le component spécifique du users/edit/
        \src\app\component\users\edit\edit.component.html
            >> <div *ngIf="editDate">...
        \src\app\component\users\edit\edit.component.ts
            >> if(this.column == "date"){
            >> changeDate(){...
    - On ajout l'element edit custom à la ligne add :
        \src\app\shared\component\worg-table\worg-table.component.html
            >> <!-- add/custom -->
        


## Problème à résoudre :
    Petit default sur le design, comme d'hab...

## Infos plus :
   
## Update

## Historique :
Avant -> v23 - Tableau -> multiple
Après -> v25 - Tableau -> add - personnalise
## Ressource :
    - date bootstrap :
    https://www.tutsmake.com/angular-14-bootstrap-datepicker-example/?utm_content=cmp-true
    - ng-bootstrap :
    https://ng-bootstrap.github.io/#/home
    - ng-bootstrap datePiker :
    https://ng-bootstrap.github.io/#/components/datepicker/examples
    - PB sur le datePicker :
    https://www.jeffryhouser.com/index.cfm/2022/6/22/Why-is-the-ng-bootstrap-Datepicker-not-letting-me-change-monthsyears
    - ng-bootstrap :
    https://ng-bootstrap.github.io/#/home
    - Json Pipe :
    https://www.angularjswiki.com/pipes/jsonpipe/


## Abouts
created by Johann Loreau
create at 2023/08/18
Le project évolura suivant les remarques et conseils des visiteurs.