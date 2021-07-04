import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-material-tab-router';  
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
        {
            label: 'Formulario',
            link: './formulary',
            index: 0
        }, {
            label: 'Lista de Empleados',
            link: './lists',
            index: 1
        }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
        this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
