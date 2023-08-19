import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:  [CommonModule      ]
})
export class HomeComponent implements OnInit {
  numbers: Array<number> = [];

  constructor() {}

  ngOnInit(): void {
    // Affichage de plusieurs ligne pour test :
    this.numbers = Array(30).fill(1).map((x,i)=>i);
  }

}
