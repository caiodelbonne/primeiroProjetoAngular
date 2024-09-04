import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
// lista vem do back
  listaPensamentos: Pensamento [] = []
  constructor(private service:PensamentoService) { }

  ngOnInit(): void {
    // ciclo de vida ,logica
    this.service.listar().subscribe((listaPensamtos)=>{
      this.listaPensamentos= listaPensamtos
    })
  }

}
