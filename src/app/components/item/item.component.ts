import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  faPen = faPen;
  faTrash = faTrash

  constructor() { }

  ngOnInit(): void { }

}
