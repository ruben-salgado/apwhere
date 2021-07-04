import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { PagesService } from '../../pages.service';
import { AlertComponent } from '../alert/alert.component';

import { Employee } from '../../model/employee.model';

@Component({
  selector: 'app-formulary',
  templateUrl: './formulary.component.html',
  styleUrls: ['./formulary.component.css']
})
export class FormularyComponent implements OnInit {

  nameRegx: RegExp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$/;
  departments: String[] = [];
  employee!: Employee;

  employeeForm: FormGroup = this.fb.group({
    name: [, [Validators.required, Validators.minLength(4), Validators.pattern(this.nameRegx)]],
    lastname: [, [Validators.required, Validators.minLength(4), Validators.pattern(this.nameRegx)]],
    department: [, [ Validators.required ] ],
    age: [, this.ageValidator],
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private readonly _service: PagesService,
  ) { }

  ngOnInit() {
    this.departments = ['Contabilidad','Marketing','Sistemas'];
  }

  get name() {
    return this.employeeForm.get('name')?.value;
  }

  get lastname() {
    return this.employeeForm.get('lastname')?.value;
  }

  get department() {
    return this.employeeForm.get('department')?.value;
  }

  get age() {
    return this.employeeForm.get('age')?.value || null;
  }

  ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value!=null && (control.value < 18 || control.value > 80)) {
      return { 'age': true };
    }

    return null;
  }

  changeDepartment(event: Event) {
    this.employeeForm.controls.department.setValue((event.target as HTMLInputElement).value);
  }

  showErrorsMultiple(field: string|Array<string>) {
    return (this.employeeForm.get(field)?.invalid && (this.employeeForm.get(field)?.touched || this.employeeForm.get(field)?.dirty) ) ? 'error' : '';
  }

  send() {
    this.employee  = new Employee(this.name, this.lastname, this.department, this.age);
    this._service.employees.push(this.employee);
    this.employeeForm.reset();
    this.dialog.open(AlertComponent);
  }

}
