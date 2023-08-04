import { DBClient } from "../entities/DBClient.js";
import { PrismaProcessoSeletivoRepository } from "../repositories/PrismaProcessoSeletivoRepository.js";

export class AlterProcessStep {
  async execute(step: number, processID: string) {
		const dbClient = DBClient.getInstance();
		const prismaProcessosSeletivosRepository = new PrismaProcessoSeletivoRepository(dbClient.primsa);

    return await prismaProcessosSeletivosRepository.changeProcessStep(step, processID);
  }
}

