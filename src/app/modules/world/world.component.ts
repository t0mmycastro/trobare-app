import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
})
export class WorldComponent  implements OnInit {
  subcategories: any[] = [];
  idCategory: string | null = null;

  constructor(private categoryService: CategoryService, private navController: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
    this.readSubCategory();
  }

  readSubCategory(){
    this.idCategory = this.route.snapshot.paramMap.get('id_category');
    this.categoryService.getCategory().subscribe({
      next: (res: any) => {
        const category = res.data.find((cat: any) => cat.id_category === this.idCategory);
        this.subcategories = category.subcategories;
      }
    })
  }

  goBack() {
    this.navController.back();
  }

}
