import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute) {}

  ngOnInit(): void {
      // this.foods = this.foodService.getAll();
      this.route.params.subscribe(params => {
        if(params.searchTerm)
          this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm)
         else if(params.tag) 
         this.foods = this.foodService.getAllFoodsbyTag(params.tag)
         else 
         this.foods = this.foodService.getAll();
      })
  }
}
