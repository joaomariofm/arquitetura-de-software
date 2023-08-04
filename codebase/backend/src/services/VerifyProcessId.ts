import { ApiErrors } from '../errors/apiErrors.js';
import { DBClient } from '../entities/DBClient.js';
import { PrismaProcessoSeletivoRepository } from '../repositories/PrismaProcessoSeletivoRepository.js';

export class VerifyProcessId {
  async execute(processID: string) {
		const dbClient = DBClient.getInstance();
		const prismaProcessosSeletivosRepository = new PrismaProcessoSeletivoRepository(dbClient.primsa);

    const response = await prismaProcessosSeletivosRepository.searchProcessId(processID);
    
    if (!response) {
      throw new ApiErrors(400, 'there is no process registered with the provided id');
    }

    return;
  }
}
