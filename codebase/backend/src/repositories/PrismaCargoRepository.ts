import { CargoRepository } from "./CargoRepository.js";
import { PrismaClient } from "@prisma/client";
import { Cargo } from "../entities/Cargo.js";

export class PrismaCargoRepository implements CargoRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async getCargoGroupById(id: number) {
		const cargo = await this.prisma.cargos.findFirst({
      where: {
        codg: id
      },
    });

		if (!cargo) return undefined;

		return new Cargo(
			cargo.id,
			cargo.coIesCurso,
			cargo.desc,
			cargo.grauAcademico,
			cargo.periodo,
			cargo.cidade,
			cargo.codg,
			cargo.vagas,
			cargo.grupo,
			cargo.campus,
		);
	}
}

