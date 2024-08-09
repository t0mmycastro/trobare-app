import { Component } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categories: any[] = [];

  constructor(private categoryService: CategoryService){}

  ngOnInit(): void {
    this.readCategory()
  }

  readCategory(){
    this.categoryService.getCategory().subscribe({
      next: (category: any) => {
        console.log('Categories: ', category.data);  // Log the retrieved data to the console.
        this.categories = category.data
      }
    })
  }
}
