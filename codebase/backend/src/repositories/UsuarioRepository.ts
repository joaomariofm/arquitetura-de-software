import { Usuario } from '../entities/Usuario.js';

export interface UsuarioRepository {
	findByEmailAndPassword(email: string, password: string) : Promise<Usuario | undefined>;

	registerUser(email: string, nome: string, password: string) : Promise<Usuario>; 

  checkEmailAvailability(email: string) : Promise<boolean>; 

  listAnalystUsers() : Promise<Usuario[]>; 

  deleteUser(id: string) : Promise<void>; 

  findUserById(id: string) : Promise<Usuario>; 
}

