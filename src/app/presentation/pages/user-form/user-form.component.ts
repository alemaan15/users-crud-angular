import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../core/service/user.service';
import { Usuario } from '../../../core/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      tipo: ['', Validators.required],
      nif: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido1: ['', Validators.required],
      apellido2: [''],
      genero: [''],
      fechaNacimiento: [''],
      direccion: this.fb.group({
        calle: [''],
        numero: [''],
        puerta: [''],
        codigoPostal: [''],
        ciudad: ['']
      })
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched(); 
      return;
    };
    const nuevoUsuario: Usuario = {
      id: Date.now().toString(),
      ...this.userForm.value
    };
    this.userService.addUser(nuevoUsuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }

  onCancel() {
    this.router.navigate(['/usuarios']);  
  }
}
