import { PrismaClient } from '@prisma/client';
import { CandidatoRepository } from './CandidatoRepository.js';
import { Candidato } from '../entities/Candidato.js';

export class PrismaCandidatoRepository implements CandidatoRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async getProcessCps(processID: string) {
		const candidatos = await this.prisma.candidatos.findMany({
			where: {
				processoSeletivoId: processID,
			},
			select: {
				cpf: true,
			},
		});
		
		if (!candidatos) return undefined;

		return candidatos.map((candidato) => candidato.cpf);
	}

	async getVhceCpfs(processID: string) {
		const candidatos = await this.prisma.candidatos.findMany({
			where: {
				processoSeletivoId: processID,
				cargoId: 85,
			},
			select: {
				cpf: true,
			},
		});

		if (!candidatos) return undefined;

		return candidatos.map((candidato) => candidato.cpf);
	}

	async getProcessCandidatos(processID: string) {
		const candidatos = await this.prisma.candidatos.findMany({
			where: {
				processoSeletivoId: processID,
			},
		});

		if (!candidatos) return undefined;

		return candidatos.map((candidato) => {
			return new Candidato(
				candidato.id,
				candidato.cpf,
				candidato.cargoId,
				candidato.notaEnemId,
				candidato.notaVhceId,
				candidato.processoSeletivoId,
				candidato.numCandidato,
				candidato.corRaca,
				candidato.formacaoEscolaPublica,
				candidato.dataInscricao,
				candidato.programa,
				candidato.tipoPrograma,
				candidato.nomeComunidade,
				candidato.anoEnem,
				candidato.semestreIngresso,
			);
		});
	}
}
