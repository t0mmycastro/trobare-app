import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityItemsComponent } from './activity-items.component';

const routes: Routes = [
  {
    path: '',
    component: ActivityItemsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityItemsComponentRoutingModule {}
