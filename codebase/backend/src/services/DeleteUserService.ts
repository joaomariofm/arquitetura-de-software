import { PrismaUsuarioRepository } from "../repositories/PrismaUsuarioRepository.js";
import { DBClient } from "../entities/DBClient.js";

export class DeleteUserService {
  async execute(id: string) {
		const dbClient = DBClient.getInstance();
		const prismaUsuarioRepository = new PrismaUsuarioRepository(dbClient.primsa);

    return await prismaUsuarioRepository.deleteUser(id);
  }
}
