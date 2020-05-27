import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HeaderComponent} from '../cpn/header/header.component';
import {FooterComponent} from '../cpn/footer/footer.component';

@NgModule({
  declarations: [HeaderComponent,FooterComponent],
  imports: [
    CommonModule
  ],
  exports : [HeaderComponent,FooterComponent]
})
export class CommonCoreModule { }