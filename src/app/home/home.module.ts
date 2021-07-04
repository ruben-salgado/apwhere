import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material/material.module';

import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule
  ]
})
export class HomeModule {}
