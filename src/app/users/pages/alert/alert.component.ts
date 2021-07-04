import { Component } from '@angular/core';

@Component({
  selector: 'app-alert',
  template: `
    <h1 mat-dialog-title>Agregar Empleado</h1>
    <div mat-dialog-content>El empleado se dio de alta exitosamente</div>
    <div mat-dialog-actions>
      <button mat-raised-button color="primary" mat-dialog-close>Aceptar</button>
    </div>
  `
})
export class AlertComponent {}
