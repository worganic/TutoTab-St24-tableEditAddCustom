import {Component, Input } from '@angular/core';

@Component({
  selector: 'worg-expandable',
  templateUrl: './expanded.component.html',
  styleUrls: ['./expanded.component.scss'],
  standalone: true
})
export class ExpandedComponent {

  @Input() element!: any;
}
