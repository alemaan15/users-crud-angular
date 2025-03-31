import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Usuario } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"})
export class UserService {
  private dataUrl = 'assets/users.json';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.dataUrl);
  }
}