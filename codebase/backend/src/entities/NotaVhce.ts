export class NotaVhce {
	public readonly id: string;
	public readonly cpfCandidato: number;
	public readonly processoSeletivoId: number;
	public readonly n1: number;
	public readonly n2: number;
	public readonly nTotal: number;

	constructor(
		id: string,
		cpfCandidato: number,
		processoSeletivoId: number,
		n1: number,
		n2: number,
		nTotal: number
	) {
		this.id = id;
		this.cpfCandidato = cpfCandidato;
		this.processoSeletivoId = processoSeletivoId;
		this.n1 = n1;
		this.n2 = n2;
		this.nTotal = nTotal;
	}
}

