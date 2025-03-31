import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { USERS_MOCK } from "../../data/users_mock";
import { Usuario } from "../models/user.model";

@Injectable({providedIn: "root"})
export class UserService {
  private users: Usuario[] = USERS_MOCK;

  constructor() {}

  getUsers(): Observable<Usuario[]> {
    return of(this.users);
  }

  getUserById(id: string): Observable<Usuario | undefined> {
    const user = this.users.find(user => user.id === id);
    return of(user);
  }

  getUserByType(type: string): Observable<Usuario[]> {
    if(type==="Todos"){
      return of(this.users);
    }
    else{
      const filteredUsers = this.users.filter(user => user.tipo === type);
    return of(filteredUsers);
    }
  }

  addUser(user: Usuario): Observable<Usuario> {
    this.users.push(user);
    return of(user);
  }

  updateUser(updatedUser: Usuario): Observable<Usuario | undefined> {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...updatedUser };
      return of(this.users[index]);
    }
    return of(undefined);
  }

  deleteUser(id: string): Observable<Usuario | undefined> {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      const deletedUser = this.users.splice(index, 1)[0];
      return of(deletedUser);
    }
    return of(undefined);
  }
}