import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityComponentRoutingModule } from './activity-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivityComponent } from './activity.component';



@NgModule({
  declarations: [ActivityComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityComponentRoutingModule
  ]
})
export class ActivityModule { }
