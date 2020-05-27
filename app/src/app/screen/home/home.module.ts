import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CommonCoreModule } from '../../common-core/common-core.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CommonCoreModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
