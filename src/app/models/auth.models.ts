// auth.models.ts
export interface RegisterResponse {
  success: boolean;
  message: string;
}

export interface UserData {
  email: string;
  password: string;
  name: string;  // Agregamos el campo name
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  token?: string;  // Si usas tokens para autenticación
  user?: any;
}
