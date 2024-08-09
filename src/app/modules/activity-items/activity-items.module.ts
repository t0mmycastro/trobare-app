import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivityItemsComponentRoutingModule } from './activty-items-routing.module';
import { ActivityItemsComponent } from './activity-items.component';



@NgModule({
  declarations: [ActivityItemsComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityItemsComponentRoutingModule
  ]
})
export class ActivityItemsModule { }
