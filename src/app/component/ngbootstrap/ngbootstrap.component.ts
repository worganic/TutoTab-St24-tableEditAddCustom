import { Component } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-ngbootstrap',
  templateUrl: './ngbootstrap.component.html',
  styleUrls: ['./ngbootstrap.component.scss'],
  standalone: true,
	imports: [
    NgbDatepickerModule, 
    NgbAlertModule, 
    FormsModule, 
    JsonPipe
  ],
})
export class NgbootstrapComponent {
  model: NgbDateStruct | undefined;
  
}
