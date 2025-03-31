import { Component, inject, OnInit } from '@angular/core';
import { Usuario } from '../../../core/models/user.model';
import { UserService } from '../../../core/service/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{

  usuarios: Usuario[] = [];
  tipoSeleccionado: string = 'Todos';

  private readonly userService = inject(UserService);
  private readonly router = inject(Router);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  navigateToNewUser() {
    this.router.navigate(['/usuarios/nuevo']);
  }

  navigateToEditUser(id: string) {
    this.router.navigate(['/usuarios/editar', id]);
  }

  navigateToUserDetails(id: string) {
    this.router.navigate(['/usuarios/detalle', id]);
  }

  filterUsersByType() {
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
}
