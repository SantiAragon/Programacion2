import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  clientes: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getClientes().subscribe(
      (data) => {
        this.clientes = data;
      },
      (error) => {
        console.error("Error al obtener clientes:", error);
      }
    );
  }

}
