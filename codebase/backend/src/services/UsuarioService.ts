import { DBClient } from "../entities/DBClient.js";
import { PrismaUsuarioRepository } from "../repositories/PrismaUsuarioRepository.js";
import { ApiErrors } from "../errors/apiErrors.js";

export class UsuarioService {
  async deleteUsuario(id: string) {
		const dbClient = DBClient.getInstance();
		const prismaUsuarioRepository = new PrismaUsuarioRepository(dbClient.primsa);

    return await prismaUsuarioRepository.deleteUser(id);
  }
	
	async findUsuarioById(id: string) {
		const dbClient = DBClient.getInstance();
		const prismaUsuarioRepository = new PrismaUsuarioRepository(dbClient.primsa);

    return await prismaUsuarioRepository.findUserById(id);
  }

	async listAnalystUsuario() {
    const dbClient = DBClient.getInstance();
    const prismaUsuarioRepository = new PrismaUsuarioRepository(dbClient.primsa);

		return await prismaUsuarioRepository.listAnalystUsers();
  }

	async login(email: string, password: string) {
		const dbClient = DBClient.getInstance();
		const prismaUserRepository = new PrismaUsuarioRepository(dbClient.primsa);

    const user = await prismaUserRepository.findByEmailAndPassword(email, password);

    if (!user) throw new ApiErrors(400, 'wrong email or password');

    return user;
  }

	async registerUsuario(email: string, password: string, name: string) {
		const dbClient = DBClient.getInstance();
		const prismaUserRepository = new PrismaUsuarioRepository(dbClient.primsa);

    const emailIsInUse = await prismaUserRepository.checkEmailAvailability(email);

    if (emailIsInUse)
      throw new ApiErrors(406, 'email is already in use');

    return prismaUserRepository.registerUser(email, password, name);
  }
}

