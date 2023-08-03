import { ApiErrors } from '../errors/apiErrors.js';
import { DBClient } from '../entities/DBClient.js';
import { PrismaUsuarioRepository } from '../repositories/PrismaUsuarioRepository.js';

export class LoginService {
  async execute(email: string, password: string) {
		const dbClient = DBClient.getInstance();
		const prismaUserRepository = new PrismaUsuarioRepository(dbClient.primsa);

    const user = await prismaUserRepository.findByEmailAndPassword(email, password);

    if (!user) throw new ApiErrors(400, 'wrong email or password');

    return user;
  }
}
