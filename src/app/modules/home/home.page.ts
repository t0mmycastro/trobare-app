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

  cards = [
    { clipPath: 'polygon(0 0, 100% 0, 100% 75%, 0 100%)', imageUrl: '../../assets/img-bm/11.png' },
    { clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)', imageUrl: '../../assets/img-bm/12.png' },
    { clipPath: 'polygon(0 0, 100% 20%, 100% 80%, 0 100%)', imageUrl: '../../assets/img-bm/13.png' },
    { clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 80%)', imageUrl: '../../assets/img-bm/14.png' },
    { clipPath: 'polygon(0 0, 5% 0, 390% 100%, 0 100%)', imageUrl: '../../assets/img-bm/15.png' }
  ];
  getSubCardStyle(index: number) {
    // Ejemplo de lógica para posicionar subtarjetas específicas
    if (index === 1) { // Posiciona la segunda tarjeta en un lugar específico
      return { 'position': 'absolute', 'bottom': '-70px', 'right': '-15px' };//TARJETA 2
    } else if (index === 3) { // Posiciona la cuarta tarjeta diferente
      return { 'position': 'absolute', 'top': '-40px', 'left': '-20px' }; //TARJETA 4
    } else if (index === 4) { // Posiciona la cuarta tarjeta diferente
      return { 'position': 'absolute', 'top': '-30px', 'left': '-20px' }; //TARJETA 5
    } else if (index === 0) { // Posiciona la cuarta tarjeta diferente
      return { 'position': 'absolute', 'top': '-10px', 'left': '-20px' }; //TARJETA 1
    } else if (index === 2) { // Posiciona la cuarta tarjeta diferente
      return { 'position': 'absolute', 'top': '-30px', 'left': '-17px' }; //TARJETA 3
    }
    // Retorna un estilo vacío para las demás tarjetas
    return {};
  }
  getSubCardStyle1(index: number) {
    if (index === 1) { // Posiciona la segunda tarjeta en un lugar específico
      return { 'position': 'absolute', 'bottom': '-40px', 'right': '10px' };//TARJETA 2
    } else if (index === 3) { // Posiciona la cuarta tarjeta diferente
      return { 'position': 'absolute', 'top': '10px', 'left': '270px' }; //TARJETA 4
    } else if (index === 4) { // Posiciona la cuarta tarjeta diferente
      return { 'position': 'absolute', 'top': '20px', 'left': '10px' }; //TARJETA 5
    } else if (index === 0) { // Posiciona la cuarta tarjeta diferente
      return { 'position': 'absolute', 'top': '-5px', 'left': '5px' }; //TARJETA 1
    } else if (index === 2) { // Posiciona la cuarta tarjeta diferente
      return { 'position': 'absolute', 'top': '3px', 'left': '10px' }; //TARJETA 3
    }

    return {};
  }
}
