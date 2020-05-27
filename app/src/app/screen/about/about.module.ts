import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { CommonCoreModule } from '../../common-core/common-core.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    CommonCoreModule
  ],
  exports:[]
})
export class AboutModule { }
