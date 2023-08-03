import { ApiErrors } from '../errors/apiErrors.js';
import { PrismaUsuarioRepository } from '../repositories/PrismaUsuarioRepository.js';
import { DBClient } from '../entities/DBClient.js';

export class RegisterUserService {
  async execute(email: string, password: string, name: string) {
		const dbClient = DBClient.getInstance();
		const prismaUserRepository = new PrismaUsuarioRepository(dbClient.primsa);

    const emailIsInUse = await prismaUserRepository.checkEmailAvailability(email);

    if (emailIsInUse)
      throw new ApiErrors(406, 'email is already in use');

    return prismaUserRepository.registerUser(email, password, name);
  }
}
