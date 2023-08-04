import { PrismaCandidatoRepository } from "../repositories/PrismaCandidatoRepository.js";
import { DBClient } from "../entities/DBClient.js";

export class ListProcessCpfsService {
  async execute(processID: string) {
		const dbClient = DBClient.getInstance();
		const prismaCandidatoRepository = new PrismaCandidatoRepository(dbClient.primsa);

		const cpfs = await prismaCandidatoRepository.getProcessCps(processID);

		return cpfs;
  }
}
