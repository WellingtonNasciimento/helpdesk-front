import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent {

  ELEMENT_DATA: Chamado[] = [
    {
      id: 1,
      dataAbertura: '13/04/2023',
      dataFechamento: '13/04/2023',
      prioridade: 'ALTA',
      status: 'ANDAMENTO',
      titulo: 'CHAMADO 1',
      descricao: 'TESTE CHAMADO 1',
      tecnico: 1,
      cliente: 6,
      nomeCliente: 'Valdir Cezar',
      nomeTecnico: 'Albert Einstein',
    }
  ]

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {}

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
