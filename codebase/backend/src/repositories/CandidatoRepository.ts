import { Candidato } from "../entities/Candidato.js";

export interface CandidatoRepository {
	getProcessCps(processID: string): Promise<String[] | undefined>;

	getVhceCpfs(processID: string): Promise<String[] | undefined>;

	getProcessCandidatos(processID: string): Promise<Candidato[] | undefined>;
}

