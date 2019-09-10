import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import ToyInterface from '../../interfaces/toy.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {

  input;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

  // add(userId: number, id: number, title: string, completed: boolean): void {
  //   title = title.trim();
  //   if (!title) { return; }
  //   this.apiService.addToy({userId, id, title, completed} as ToyInterface)
  //     .subscribe(toy => {
  //       this.toys.push(toy);
  //     });
  // }
}
