import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories: Category[] = [];
  constructor() { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'Taxi',
        image: 'assets/imgs/sushi.png',
        active: true,
      },
      {
        id: 2,
        label: 'Car',
        image: 'assets/imgs/sushi.png',
        active: false,
      },
      {
        id: 3,
        label: 'Scooter',
        image: 'assets/imgs/sushi.png',
        active: false,
      },
      {
        id: 4,
        label: 'Pickup',
        image: 'assets/imgs/sushi.png',
        active: false,
      },
    ];
  }

}
