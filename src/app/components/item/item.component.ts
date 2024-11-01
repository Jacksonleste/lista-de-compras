import { Item } from './../../interfaces/iItem';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ListaDeCompraService } from '../../service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, NgIf, NgFor, NgClass],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit{
  @Input() item!: Item;
  @Output() emitindoItemParaEditar: EventEmitter<any> = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor(private listaService: ListaDeCompraService) {}

  ngOnInit(): void {}

  editarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
  }

  mudarStatusItem(item:Item){
    this.listaService.trocarStatus(item);
  }

  deleteItem(){
    this.listaService.deletarItem(this.item.id);
  }
  }
function Import(): (target: ItemComponent, propertyKey: 'item') => void {
  throw new Error('Function not implemented.');
}

function Imput(): (target: ItemComponent, propertyKey: 'item') => void {
  throw new Error('Function not implemented.');
}
