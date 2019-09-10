import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-drone-list-item',
  templateUrl: './drone-list-item.component.html',
  styleUrls: ['./drone-list-item.component.scss']
})
export class DroneListItemComponent {

  constructor() { }

  @Input() id: number;
  @Input() userId: number;
  @Input() title: string;
  @Input() body: string;
  @Input() completed: boolean;

}
