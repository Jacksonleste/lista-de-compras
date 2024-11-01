import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  item: string = '';

  constructor(private listaDeCompraService: ListaDeCompraService){}

  @Input() itemEditar!:Item;
  editando: boolean = false;
  textBtn = 'Salvar Item';

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
      if(!changes['itemEditar'].firstChange){
        this.item = this.itemEditar?.nome;
        this.editando = true;
        this.textBtn = 'Editar Item';
      }
  }

  salvarItem() {
    if(this.item.length < 0) return;
    this.listaDeCompraService.salvarItem(this.item);
    this.limpaCampo();
  }

  editarItem(){
    if(this.item.length < 0) return;
    this.listaDeCompraService.editarItem(this.itemEditar, this.item);
    this.editando = false;
    this.textBtn = 'Salvar Item';
    this.limpaCampo();
  }

  limpaCampo() {
    this.item = '';
  }


}
