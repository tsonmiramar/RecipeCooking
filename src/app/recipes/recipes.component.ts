import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router, Params } from '@angular/router'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  
  constructor(private dataStorageService: DataStorageService){}

  ngOnInit() {
    this.dataStorageService.fetchData();
  }
}
