import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterResponse, UserData } from '../models/auth.models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    const userData: UserData = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.authService.register(userData).subscribe({
      next: (response: RegisterResponse) => {
        this.message = 'Registro exitoso';
        console.log('Registro exitoso:', response);
      },
      error: (error: any) => {
        this.message = 'Error en el registro';
        console.error('Error completo:', {
          status: error.status,
          statusText: error.statusText,
          message: error.error?.message,
          error: error
        });
      }
    });
  }
}
