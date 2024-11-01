import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  item: string = '';

  constructor(private listaDeCompraService: ListaDeCompraService) {}

  ngOnInit(): void {}

  salvarItem() {
    console.log('salvarItem');
    if(this.item.length < 0) return;
    this.listaDeCompraService.salvarItem(this.item);
    this.limpaCampo();
  }

  limpaCampo() {
    this.item = '';
  }
}
