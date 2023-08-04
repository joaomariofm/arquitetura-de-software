import { DBClient } from "../entities/DBClient.js";
import { PrismaProcessoSeletivoRepository } from "../repositories/PrismaProcessoSeletivoRepository.js";

export class ListProcessesService {
  async execute() {
		const dbClient = DBClient.getInstance();
		const prismaProcessosSeletivosRepository = new PrismaProcessoSeletivoRepository(dbClient.primsa);

    return await prismaProcessosSeletivosRepository.listAll();
  }
}
