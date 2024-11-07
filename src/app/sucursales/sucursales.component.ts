import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.component.html'
})
export class SucursalesComponent implements OnInit {
  sucursales: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getSucursales().subscribe(
      (data) => {
        this.sucursales = data;
      },
      (error) => {
        console.error("Error al obtener sucursales:", error);
      }
    );
  }
}
