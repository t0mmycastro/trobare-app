import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WorldComponent } from './world.component';
import { WorldPageRoutingModule } from './world-routing.module';



@NgModule({
  declarations: [WorldComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WorldPageRoutingModule
  ]
})
export class WorldModule { }
