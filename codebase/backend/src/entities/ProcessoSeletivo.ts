import { NotasEnem, NotasVhce } from "@prisma/client";
import { Candidato } from "./Candidato.js";

export class ProcessoSeletivo {
	public readonly id: string;
	public readonly candidatos: Array<Candidato>;
	public readonly notasEnem: Array<NotasEnem>;
	public readonly notasVhce: Array<NotasVhce>;
	public readonly ano: number;
	public readonly inicio: Date;
	public readonly termino: Date;
	public readonly etapa: number;

	constructor(
		id: string,
		candidatos: Array<Candidato>,
		notasEnem: Array<NotasEnem>,
		notasVhce: Array<NotasVhce>,
		ano: number,
		inicio: Date,
		termino: Date,
		etapa: number
	) {
		this.id = id;
		this.candidatos = candidatos;
		this.notasEnem = notasEnem;
		this.notasVhce = notasVhce;
		this.ano = ano;
		this.inicio = inicio;
		this.termino = termino;
		this.etapa = etapa;
	}
}

