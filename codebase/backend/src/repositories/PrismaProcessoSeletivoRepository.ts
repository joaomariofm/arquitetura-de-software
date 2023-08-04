import { ProcessoSeletivo } from "../entities/ProcessoSeletivo.js";
import { ProcessoSeletivoRepository } from "./ProcessoSeletivoRepository.js";
import { PrismaClient } from "@prisma/client";

export class PrismaProcessoSeletivoRepository implements ProcessoSeletivoRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async listAll() {
    const processosSeletivos = await this.prisma.processosSeletivos.findMany();

		if (!processosSeletivos) return undefined;

		return processosSeletivos.map((processoSeletivo) => {
			return new ProcessoSeletivo(
				processoSeletivo.id,
				processoSeletivo.ano,
				processoSeletivo.inicio,
				processoSeletivo.termino,
				processoSeletivo.etapa,
			);
		});
	}	

	async register(ano: number, inicio: string, termino: string) {
		return await this.prisma.processosSeletivos.create({
      data: {
        ano: ano,
        inicio: inicio,
        termino: termino,
        etapa: 1
      }
    });
	}

	async checkYearAvailability(ano: number) {
		const res = await this.prisma.processosSeletivos.findFirst({
      where: {
        ano: ano
      }
    });

    if (res) 
      return true;
    
    return false;
	}

	async searchProcessId(processID: string) {
		const processoSeletivo = await this.prisma.processosSeletivos.findFirst({
      where: {
        id: processID
      }
    });

		if (!processoSeletivo) return undefined;

		return new ProcessoSeletivo(
			processoSeletivo.id,
			processoSeletivo.ano,
			processoSeletivo.inicio,
			processoSeletivo.termino,
			processoSeletivo.etapa,
		);
	}

	async changeProcessStep(step: number, processID: string) {
		const processoSeletivo = await this.prisma.processosSeletivos.update({
      where: {
        id: processID
      },
      data: {
        etapa: step
      },
      select: {
        id: true,
        ano: true,
        etapa: true,
        inicio: true,
        termino: true,
      }
    });

		if (!processoSeletivo) return undefined;

		return new ProcessoSeletivo(
			processoSeletivo.id,
			processoSeletivo.ano,
			processoSeletivo.inicio,
			processoSeletivo.termino,
			processoSeletivo.etapa,
		);
	}
}

