import { Routes } from '@angular/router';
import { UserListComponent } from './presentation/pages/user-list/user-list.component';
import { UserFormComponent } from './presentation/pages/user-form/user-form.component';
import { UserDetailsComponent } from './presentation/pages/user-details/user-details.component';

export const routes: Routes = [
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  { path: 'usuarios', component: UserListComponent },
  { path: 'usuarios/nuevo', component: UserFormComponent },
  { path: 'usuarios/editar/:id', component: UserFormComponent },
  { path: 'usuarios/detalle/:id', component: UserDetailsComponent },
];
