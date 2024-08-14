import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CategoryService } from 'src/app/core/services/category/category.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit, OnDestroy {

  activities: any[] = [];
  circles: number = 6;
  rotation: number = 0;
  startPosition = { x: 0, y: 0 };
  idCategory: string | null = null;
  idSubcategory: string | null = null;

  constructor(private router: Router, private categoriesService: CategoryService, private route: ActivatedRoute, private navController: NavController) {}

  ngOnInit(): void {
    this.idCategory = this.getCategoryId();
    this.idSubcategory = this.getSubCategoryId();
    this.getActivities();
  }

  ngOnDestroy(): void {
    this.removeEventListeners();
  }

  getActivities(): void {
    this.categoriesService.getCategory().subscribe({
      next: (categories: any) => {
        const category = categories.data.find((cat: any) => cat.id_category === this.idCategory);
        if (category) {
          const subcategory = category.subcategories.find((subcat: any) => subcat.id_subcategory === this.idSubcategory);
          if (subcategory) {
            this.activities = subcategory.categories || [];
            console.log(this.activities)
          } else {
            console.error('Subcategoría no encontrada');
          }
        } else {
          console.error('Categoría no encontrada');
        }
      },
      error: (err) => {
        console.error('Error al obtener las categorías', err);
      }
    });
  }

  getCategoryId(): string | null {
    return this.route.snapshot.paramMap.get('id_category');
  }

  getSubCategoryId(): string | null {
    return this.route.snapshot.paramMap.get('id_subcategory');
  }

  handleMouseDown(event: MouseEvent): void {
    this.startPosition = { x: event.clientX, y: event.clientY };
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = (event: MouseEvent): void => {
    const dx = event.clientX - this.startPosition.x;
    const dy = event.clientY - this.startPosition.y;
    const angle = Math.atan2(dy, dx);
    const degrees = angle * (180 / Math.PI);
    this.rotation = degrees;
  }

  handleMouseUp = (): void => {
    this.removeEventListeners();
  }

  removeEventListeners(): void {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }

  handleTouchStart(event: TouchEvent): void {
    const touch = event.touches[0];
    this.startPosition = { x: touch.clientX, y: touch.clientY };
  }

  handleTouchMove(event: TouchEvent): void {
    const touch = event.touches[0];
    const dx = touch.clientX - this.startPosition.x;
    const dy = touch.clientY - this.startPosition.y;
    const angle = Math.atan2(dy, dx);
    const degrees = angle * (180 / Math.PI);
    this.rotation = degrees;
  }

  calculateTop(index: number): number {
    const angle = index * (360 / this.circles) * (Math.PI / 180);
    const radius = 200;
    return radius * Math.sin(angle);
  }

  calculateLeft(index: number): number {
    const angle = index * (360 / this.circles) * (Math.PI / 180);
    const radius = 200;
    return radius * Math.cos(angle);
  }

  goBack() {
    this.navController.back();
  }
}
