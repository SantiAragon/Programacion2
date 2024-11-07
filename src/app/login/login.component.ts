import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { LoginData, LoginResponse } from '../models/auth.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    const loginData: LoginData = {
      email: this.email,
      password: this.password
    };

    this.authService.login(loginData).subscribe({
      next: (response: LoginResponse) => {
        // Verifica explícitamente el estado de la respuesta y el token
        if (response.success && response.token) {
          this.message = 'Login exitoso';
          localStorage.setItem('token', response.token);

          if (response.user) {
            localStorage.setItem('user', JSON.stringify(response.user));
          }

          this.router.navigate(['/dashboard']);
        } else {
          this.message = response.message || 'Credenciales inválidas';
        }
      },
      error: (error: any) => {
        this.message = error.error?.message || 'Error en el servidor';
        console.error('Error:', error);
      }
    });
  }
}
