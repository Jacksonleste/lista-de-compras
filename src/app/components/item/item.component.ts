import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../interfaces/iItem';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, NgIf, NgFor],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar: EventEmitter<any> = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}

  editarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
  }
}
function Import(): (target: ItemComponent, propertyKey: 'item') => void {
  throw new Error('Function not implemented.');
}

function Imput(): (target: ItemComponent, propertyKey: 'item') => void {
  throw new Error('Function not implemented.');
}
