import { Component, Input, NgModule } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { NgbDateStruct, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf,
    NgbModule,
    FormsModule,
    JsonPipe]
})
export class EditComponent {
  @Input() element!: any;
  @Input() type!: any;
  @Input() column!: any;

  //
  editDate: boolean = false;
  dateDeb: string = "";
  dateFin: string = "";
  model0: NgbDateStruct | undefined;
  model1: NgbDateStruct | undefined;
  bsValue = new Date();
  resDate: any;

  constructor() { }

  /**
   * ngOnInit
   */
  ngOnInit() {
    this.editDate = false;
    console.log('EditComponent | ngOnInit / this.element :', this.element);
    console.log('EditComponent | ngOnInit / this.type :', this.type);
    console.log('EditComponent | ngOnInit / this.column :', this.column);

    // Input date :
    if(this.column == "date"){
      this.editDate = true;
      //console.log('EditComponent | ngOnInit / this.element.date :', this.element.date);
      this.model0 = this.parse(this.element.date[0]['dateDeb']);
      this.model1 = this.parse(this.element.date[0]['dateFin']);

          // On enregistre les anciennes données dans le input qui servira de relais.
      this.resDate = JSON.stringify(this.element.date);
    }

  }

  changeDate(){
    //console.log('WorgTableComponent | buttonFct / valid / this.model0 : ', this.model0);
   // console.log('WorgTableComponent | buttonFct / valid / this.model1 : ', this.model1);

    if(this.model0?.year == null || this.model0?.month == null || this.model0?.day == null ){
      this.model0 = this.parse(this.element.date[0]['dateDeb']);
    }
    if(this.model1?.year == null || this.model1?.month == null || this.model1?.day == null ){
      this.model1 = this.parse(this.element.date[0]['dateFin']);
    }

    var dateMonth0: any = 1;
    if(this.model0?.month != undefined)dateMonth0 = this.model0?.month;
    if(dateMonth0 < 10)dateMonth0 = '0' + dateMonth0;
    //console.log('WorgTableComponent | buttonFct / valid / dateMonth0 : ', dateMonth0);
    var day0: any = 1;
    if(this.model0?.day != undefined)day0 = this.model0?.day;
    if(day0 < 10)day0 = '0' + day0;

    var dateMonth1: any = 1;
    if(this.model1?.month != undefined)dateMonth1 = this.model1?.month;
    if(dateMonth1 < 10)dateMonth1 = '0' + dateMonth1;
    var day1: any = 1;
    if(this.model1?.day != undefined)day1 = this.model1?.day;
    if(day1 < 10)day1 = '0' + day1;
    const date: any = [{ 
      'dateDeb': this.model0?.year + '-' + dateMonth0 + '-' + day0,
      'dateFin': this.model1?.year + '-' + dateMonth1 + '-' + day1,
    }];



    this.resDate = JSON.stringify(date);
  }

  // Parse pour la date :
  parse(value: string): NgbDateStruct {
    let parts = value.split('-');
    return {
      year: +parts[0],
      month: +parts[1],
      day: +parts[2]
    } as NgbDateStruct;
  }



}
