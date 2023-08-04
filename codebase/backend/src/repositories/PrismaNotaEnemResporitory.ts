import { NotaEnemRepository } from "./NotaEnemRepository.js";
import { PrismaClient } from "@prisma/client";
import { NotaEnem } from "../entities/NotaEnem.js";

export class PrismaNotaEnemRepository implements NotaEnemRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async getNotaByProcessIdAndUserCpf(processID: string, cpf: string) {
    const notaEnem = await this.prisma.notasEnem.findFirst({
      where: {
        processoSeletivoId: processID,
        candidato: { cpf: cpf }
      }
    });

		if (!notaEnem) return undefined;

		return new NotaEnem(
			notaEnem.id,
			notaEnem.numero,
			notaEnem.processoSeletivoId,
			notaEnem.notaCienciasNatureza,
			notaEnem.notaCienciasHumanas,
			notaEnem.notaLinguagens,
			notaEnem.notaMatematica,
			notaEnem.notaRedacao,
			notaEnem.notaTotal,
		);
  }
}

