import { DBClient } from "../entities/DBClient.js";
import { PrismaCandidatoRepository } from "../repositories/PrismaCandidatoRepository.js";

export class CandidatoService {
	private dbClient: DBClient;
	private prismaCandidatoRepository: PrismaCandidatoRepository;

	constructor() {
		this.dbClient = DBClient.getInstance();
		this.prismaCandidatoRepository = new PrismaCandidatoRepository(this.dbClient.primsa);
	}
	
	async listCpfsByProcessId(processID: string) {
		return await this.prismaCandidatoRepository.getProcessCps(processID);
	}

	async listVhceCpfsByProcessId(processID: string) {
		return await this.prismaCandidatoRepository.getVhceCpfs(processID);
	}
}

