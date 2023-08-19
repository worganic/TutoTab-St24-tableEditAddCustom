import { Component, Injectable } from '@angular/core';
import { ExpandedComponent } from '../component/users/expanded/expanded.component';
import { ChildComponent } from '../component/injected/child/child.component';
import { Child2Component } from '../component/injected/child2/child2.component';

@Injectable({
  providedIn: 'root'
})
export class ExpandableService {

  constructor() {}
  liste : { [key: string]: any; } | undefined;
 
  getListe() {
    
    this.liste = {
      "users": ExpandedComponent,
      "child1": ChildComponent,
      "child2": Child2Component
    }

    // return pipeUser.Pipe.prototype;
    return this.liste;
  }
}
