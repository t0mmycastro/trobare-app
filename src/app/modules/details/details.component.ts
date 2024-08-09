import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {
  categoryFinal: any = {};
  idCategory: string | null = null;
  idSubcategory: string | null = null;
  idSubcategoryFinal: string | null = null;
  id: string | null = null;

  constructor(
    private route: ActivatedRoute, 
    private navController: NavController,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {}

  readCategory(){
    this.idCategory = this.getIdCategory();
    this.idSubcategory = this.getIdSubCategory();
    this.idSubcategoryFinal = this.getIdSubCategoryFinal();
    this.id = this.getId();
    
    this.categoryService.getCategory().subscribe({
      next: (res: any) => {
        const category = res.data.find((cat: any) => cat.id_category === this.idCategory)
        const subCategory = category.subcategories.find((subcat: any) => subcat.id_subcategory === this.idSubcategory)
        const subcategoryFinal = subCategory.categories.find((subcatFinal: any) => subcatFinal.id_subcategoryFinal === this.idSubcategoryFinal)
        this.categoryFinal = subcategoryFinal.categoriesFinal.find((catFinal: any) => catFinal.id === this.id)
      }
    })
  }

  getIdCategory(){
    return this.route.snapshot.paramMap.get('id_category');
  }

  getIdSubCategory(){
    return this.route.snapshot.paramMap.get('id_subcategory');
  }

  getIdSubCategoryFinal(){
    return this.route.snapshot.paramMap.get('id_subcategory_final');
  }
  
  getId(){
    return this.route.snapshot.paramMap.get('id');
  }

  goBack(){
    this.navController.back();
  }
}
