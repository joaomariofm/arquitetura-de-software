import { DBClient } from "../entities/DBClient.js";
import { PrismaUsuarioRepository } from "../repositories/PrismaUsuarioRepository.js";

export class ListAnalystUsersService {
  async execute() {
    const dbClient = DBClient.getInstance();
    const prismaUsuarioRepository = new PrismaUsuarioRepository(dbClient.primsa);

		return await prismaUsuarioRepository.listAnalystUsers();
  }
}
