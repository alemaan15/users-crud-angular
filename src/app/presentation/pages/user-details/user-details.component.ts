import { Component, inject, OnInit } from '@angular/core';
import { TipoUsuario, Usuario } from '../../../core/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/service/user.service';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnInit {
  usuario?: Usuario
  tiposUsuario = TipoUsuario  

  private readonly route = inject(Router)
  private readonly activatedRoute = inject(ActivatedRoute)
  private readonly userService = inject(UserService)

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(id).subscribe(user => {
        this.usuario = user;
      });
    }
  }
}
