import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  @Input() usuario!: Usuario
  @Output() verUsuario = new EventEmitter<string>();
  @Output() editarUsuario = new EventEmitter<string>();
  @Output() eliminarUsuario = new EventEmitter<string>();
}
