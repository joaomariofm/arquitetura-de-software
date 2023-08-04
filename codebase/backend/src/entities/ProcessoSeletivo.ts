export class ProcessoSeletivo {
	public readonly id: string;
	public readonly ano: number;
	public readonly inicio: Date;
	public readonly termino: Date;
	public readonly etapa: number;

	constructor(
		id: string,
		ano: number,
		inicio: Date,
		termino: Date,
		etapa: number
	) {
		this.id = id;
		this.ano = ano;
		this.inicio = inicio;
		this.termino = termino;
		this.etapa = etapa;
	}
}

