import { Item } from '../interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [
    {
      id: 1,
      nome: 'Queijo prato',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 2,
      nome: 'Leite integral',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: false,
    },
    {
      id: 3,
      nome: 'Mamão papaia',
      data: 'Segunda-feira (31/10/2022) às 08:30',
      comprado: true,
    },
  ];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra() {
    return this.listaDeCompra;
  }

  criarItem(nomeItem: string): Item {
    const id = this.listaDeCompra.length + 1;
    return {
      id: id,
      nome: nomeItem,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false,
    };
  }

  salvarItem(nomeItem: string) {
    const item:Item = this.criarItem(nomeItem);
    console.log(item);
    this.listaDeCompra.push(item);
    console.log(this.listaDeCompra);
  }

  editarItem(itemAntigo:Item, nomeItem: string) {
    this.listaDeCompra.map((item)=>{item===itemAntigo});
  }
}
