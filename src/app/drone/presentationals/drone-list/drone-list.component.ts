import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import ToyInterface from '../../interfaces/toy.interface';

@Component({
  selector: 'app-drone-list',
  templateUrl: './drone-list.component.html',
  styleUrls: ['./drone-list.component.scss']
})
export class DroneListComponent implements OnInit {

  toys: ToyInterface[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getToys();
  }

  getToys() {
    this.apiService.fetchToys()
      .subscribe(toys => {
        this.toys = toys;
      });
  }
}
