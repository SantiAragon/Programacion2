import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterResponse, UserData } from '../models/auth.models';  // Importa las interfaces desde el archivo de modelos

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost/backend-php/api';

  constructor(private http: HttpClient) {}

  register(userData: UserData): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/register.php`, userData);
  }
}
