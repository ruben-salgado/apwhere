import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { FormularyComponent } from './pages/formulary/formulary.component';
import { ListsComponent } from './pages/lists/lists.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'formulary', component: FormularyComponent },
      { path: 'lists', component: ListsComponent },
      { path: '**', redirectTo: 'formulary' },
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule {}
