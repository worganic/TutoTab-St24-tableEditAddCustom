import { Component } from '@angular/core';
import { UsersComponent } from 'src/app/component/users/users.component';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.scss'],
  standalone: true,
  imports: [UsersComponent]
})
export class MultipleComponent {

  option2: any = {
    'infosNbElement': true,// Affichage d'infos (nombre d'élément).
  }

  option3: any = {
    'filtre': true,// Affichage de la ligne filtre.
    'paginator': true,// Paginator oui ou non.
  }

  option4: any = {
    'timer': true,// 
    'filtre': true,// Affichage de la ligne filtre.
    "sectionName": "users",
    'affichage': true,// Affichage de app-worg-table.
    'paginator': true,// Paginator oui ou non.
    'infosNbElement': true,// Affichage d'infos (nombre d'élément).
  }





}
