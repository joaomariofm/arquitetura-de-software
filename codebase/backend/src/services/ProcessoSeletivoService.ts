import { DBClient } from "../entities/DBClient.js";
import { PrismaProcessoSeletivoRepository } from "../repositories/PrismaProcessoSeletivoRepository.js";
import { ApiErrors } from "../errors/apiErrors.js";

export class ProcessoSeletivoService {
	private dbClient: DBClient;
	private prismaProcessoSeletivoRepository: PrismaProcessoSeletivoRepository;

	constructor() {
		this.dbClient = DBClient.getInstance();
		this.prismaProcessoSeletivoRepository = new PrismaProcessoSeletivoRepository(this.dbClient.primsa);
	}

	async listProcessosSeletivos() {
		return await this.prismaProcessoSeletivoRepository.listAll();
	}

	async registerProcessoSeletivo(ano: number, inicio: string, termino: string) {
		const isInUse = await this.prismaProcessoSeletivoRepository.checkYearAvailability(ano);

		if (isInUse)
			throw new ApiErrors(400, 'year is already in use');

		return this.prismaProcessoSeletivoRepository.register(ano, inicio, termino);
	}

	async alterProcessoStep(step: number, processID: string) {
		return await this.prismaProcessoSeletivoRepository.changeProcessStep(step, processID);
	}

	async verifyProcessId(processID: string) {
		const response = await this.prismaProcessoSeletivoRepository.searchProcessId(processID);

		if (!response)
			throw new ApiErrors(400, 'process id not found');

		return;
	}
}
