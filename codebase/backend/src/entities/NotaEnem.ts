export class NotaEnem {
	public readonly id: string;
	public readonly numero: string;
	public readonly processoSeletivoId: string;
	public readonly notaCienciasNatureza: number;
	public readonly notaCienciasHumanas: number;
	public readonly notaLinguagens: number;
	public readonly notaMatematica: number;
	public readonly notaRedacao: number;
	public readonly notaTotal: number;

	constructor(
		id: string,
		numero: string,
		processoSeletivoId: string,
		notaCienciasNatureza: number,
		notaCienciasHumanas: number,
		notaLinguagens: number,
		notaMatematica: number,
		notaRedacao: number,
		notaTotal: number
	) {
		this.id = id;
		this.numero = numero;
		this.processoSeletivoId = processoSeletivoId;
		this.notaCienciasNatureza = notaCienciasNatureza;
		this.notaCienciasHumanas = notaCienciasHumanas;
		this.notaLinguagens = notaLinguagens;
		this.notaMatematica = notaMatematica;
		this.notaRedacao = notaRedacao;
		this.notaTotal = notaTotal;
	}
}

