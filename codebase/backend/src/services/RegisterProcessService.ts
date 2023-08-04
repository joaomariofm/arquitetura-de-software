import { ApiErrors } from '../errors/apiErrors.js';
import { DBClient } from '../entities/DBClient.js';
import { PrismaProcessoSeletivoRepository } from '../repositories/PrismaProcessoSeletivoRepository.js';

export class RegisterProcessService {
  async execute(ano: number, inicio: string, termino: string) {
		const dbClient = DBClient.getInstance();
		const prismaProcessosSeletivosRepository = new PrismaProcessoSeletivoRepository(dbClient.primsa);

    const isInUse = await prismaProcessosSeletivosRepository.checkYearAvailability(ano);

    if (isInUse) 
      throw new ApiErrors(400, 'there is already a process registered in this year');

    return prismaProcessosSeletivosRepository.register(ano, inicio, termino);
  }
}
