import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
