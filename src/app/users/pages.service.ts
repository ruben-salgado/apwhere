import { Injectable } from '@angular/core';

import { Employee } from './model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  employees: Employee[] = [];

}
