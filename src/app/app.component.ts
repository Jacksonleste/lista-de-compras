import { Component, OnInit } from '@angular/core';
import { InputComponent } from './components/input/input.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';
import { ItemComponent } from './components/item/item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputComponent, ItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app-lista-de-compras';
  listaDeCompras!: Array<Item>;
  itemEditar!: Item;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {
    this.listaDeCompras = this.listaService.getListaDeCompra();
    console.log(this.listaDeCompras);
  }

  editarItem(item: Item): void {
    this.itemEditar = item;
  }

  limparLista(){
    this.listaDeCompras = [];
  }
}
