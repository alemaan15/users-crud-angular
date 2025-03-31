import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../core/service/user.service';
import { Usuario } from '../../../core/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

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
    private router: Router,
    private activatedRoute: ActivatedRoute
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

    const id = this.activatedRoute.snapshot.paramMap.get('id');
  if (id) {
    this.userService.getUserById(id).subscribe(usuario => {
      if (usuario) {
        this.userForm.patchValue(usuario);
      }
    });
  }
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched(); 
      return;
    };

    const id = this.activatedRoute.snapshot.paramMap.get('id');
  const usuario: Usuario = {
    id: id ?? Date.now().toString(),
    ...this.userForm.value
  };

  if (id) {
    this.userService.updateUser(usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  } else {
    this.userService.addUser(usuario).subscribe(() => {
      this.router.navigate(['/usuarios']);
    });
  }
  }

  onCancel() {
    this.router.navigate(['/usuarios']);  
  }
}
