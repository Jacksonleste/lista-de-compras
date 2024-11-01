import { Item } from '../interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaDeCompraService {
  private listaDeCompra: Item[] = [];

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra() {
    this.listaDeCompra = JSON.parse(localStorage?.getItem('items') || '[]')
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
    this.atualizarLocalStorage();
  }

  editarItem(itemAntigo:Item, nomeItem: string) {
    itemAntigo.nome = nomeItem;
    this.atualizarLocalStorage();
  }

  atualizarLocalStorage(){
    localStorage.setItem('items', JSON.stringify(this.listaDeCompra));
  }
}
