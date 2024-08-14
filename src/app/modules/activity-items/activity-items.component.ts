import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CategoryService } from 'src/app/core/services/category/category.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-activity-items',
  templateUrl: './activity-items.component.html',
  styleUrls: ['./activity-items.component.scss'],
})
export class ActivityItemsComponent  implements OnInit {

  categoriesFinal: any[] = [];
  idCategory: string | null = null;
  idSubcategory: string | null = null;
  idSubcategoryFinal: string | null = null;

  constructor(     private route: ActivatedRoute, 
    private navController: NavController,
    private modalctrl: ModalController,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.readCategory();
  }

  readCategory(){
    this.idCategory = this.getIdCategory();
    this.idSubcategory = this.getIdSubCategory();
    this.idSubcategoryFinal = this.getIdSubCategoryFinal();
    
    this.categoryService.getCategory().subscribe({
      next: (res: any) => {
        const category = res.data.find((cat: any) => cat.id_category === this.idCategory)
        const subCategory = category.subcategories.find((subcat: any) => subcat.id_subcategory === this.idSubcategory)
        const subcategoryFinal = subCategory.categories.find((subcatFinal: any) => subcatFinal.id_subcategoryFinal === this.idSubcategoryFinal)
        this.categoriesFinal = subcategoryFinal.categoriesFinal;
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

  async openMyModal(categoryFinal: any) {
    const myModal = await this.modalctrl.create({
      component: DetailsComponent,
      cssClass: 'mi-modal-personalizado', // Usar tu clase personalizada aquí
      componentProps: {
        categoryFinal: categoryFinal // Pasas la categoría específica al modal
      }
    });
    return await myModal.present();
  }

  goBack() {
    this.navController.back();
  }

}
