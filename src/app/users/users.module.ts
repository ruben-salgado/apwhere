import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { UsersRoutingModule } from './users-routing.module';

import { HomeComponent } from './pages/home/home.component';
import { FormularyComponent } from './pages/formulary/formulary.component';
import { ListsComponent } from './pages/lists/lists.component';
import { AlertComponent } from './pages/alert/alert.component';


@NgModule({
  declarations: [
    FormularyComponent,
    ListsComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    UsersRoutingModule,
  ]
})
export class UsersModule {}
