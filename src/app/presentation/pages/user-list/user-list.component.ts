import { Component, inject, OnInit } from '@angular/core';
import { Usuario } from '../../../core/models/user.model';
import { UserService } from '../../../core/service/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserItemComponent } from '../../components/user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{

  usuarios: Usuario[] = [];
  tipoSeleccionado: string = 'Todos';

  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.cargarUsuarios()
  }

  navegarANuevoUsuario() {
    this.router.navigate(['/usuarios/nuevo']);
  }

  navegarAEditarUsuario(id: string) {
    this.router.navigate(['/usuarios/editar', id]);
  }

  filtrarUsuariosPorTipo() {
    this.userService.getUserByType(this.tipoSeleccionado).subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  verUsuario(id: string) {
    this.router.navigate(['/usuarios/detalle', id]);
  }

  editarUsuario(id: string) {
    this.router.navigate(['/usuarios/editar', id]);
  }

  eliminarUsuario(id: string) {
    const confirmed = confirm(`¿Está seguro de que desea borrar el usuario con id: ${id}?`);
    if (confirmed) {
      this.userService.deleteUser(id).subscribe(() => {
        this.cargarUsuarios();
      });
    }
  }

  private cargarUsuarios() {
    this.userService.getUsers().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }
}
