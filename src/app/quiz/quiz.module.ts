import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { QuizRoutingModule } from './quiz-routing.module';

import { QuestionsComponent } from './pages/questions/questions.component';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    QuizRoutingModule
  ]
})
export class QuizModule {}
