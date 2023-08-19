import { Component, Injectable } from '@angular/core';
import { EditComponent } from './users/edit/edit.component';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor() {}
  liste : { [key: string]: any; } | undefined;
 
  getListe() {
    
    this.liste = {
      "users": EditComponent,
    }
    return this.liste;
  }
}
