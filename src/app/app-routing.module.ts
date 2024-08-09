import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'world/:id_category',
    loadChildren: () => import('./modules/world/world.module').then( m => m.WorldModule)
  },
  {
    path: 'activity/:id_category/:id_subcategory',
    loadChildren: () => import('./modules/activity/activity.module').then( m => m.ActivityModule)
  },
  {
    path: 'activity-items/:id_category/:id_subcategory/:id_subcategory_final',
    loadChildren: () => import('./modules/activity-items/activity-items.module').then( m => m.ActivityItemsModule)
  },
  {
    path: 'activity-items/:id_category/:id_subcategory/:id_subcategory_final',
    loadChildren: () => import('./modules/activity-items/activity-items.module').then( m => m.ActivityItemsModule)
  },
  {
    path: 'details/:id_category/:id_subcategory/:id_subcategory_final/:id',
    loadChildren: () => import('./modules/details/details.module').then( m => m.DetailsModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
