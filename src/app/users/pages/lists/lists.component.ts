import { Component, OnInit } from '@angular/core';

import { Employee } from '../../model/employee.model';

import { PagesService } from '../../pages.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastname', 'department', 'age'];
  dataSource: Employee[] = [];
  
  constructor(private readonly _service: PagesService) {}

  ngOnInit(): void {
    this.dataSource = this._service.employees;
  }

}
