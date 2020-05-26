import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {HeaderComponent} from '../../cpn/header/header.component';
import {FooterComponent} from '../../cpn/footer/footer.component';
@NgModule({
  declarations: [HomeComponent,HeaderComponent,FooterComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
