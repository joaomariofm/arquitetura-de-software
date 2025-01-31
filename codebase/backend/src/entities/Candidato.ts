export class Candidato {
	public readonly id: string;
	public readonly cpf: string;
	public readonly cargoId: number;
	public readonly notaEnemId: string;
	public readonly notaVhceId: string;
	public readonly processoSeletivoId: string;
	public readonly numCandidato: string;
	public readonly corRaca: number;
	public readonly formacaoEscolaPublica: boolean;
	public readonly dataInscricao: Date;
	public readonly programa: number;
	public readonly tipoPrograma: number;
	public readonly nomeComunidade: string;
	public readonly anoEnem: number;
	public readonly semestreIngresso: number;

	constructor(
		id: string,
		cpf: string,
		cargoId: number,
		notaEnemId: string,
		notaVhceId: string,
		processoSeletivoId: string,
		numCandidato: string,
		corRaca: number,
		formacaoEscolaPublica: boolean,
		dataInscricao: Date,
		programa: number,
		tipoPrograma: number,
		nomeComunidade: string,
		anoEnem: number,
		semestreIngresso: number
	) {
		this.id = id;
		this.cpf = cpf;
		this.cargoId = cargoId;
		this.notaEnemId = notaEnemId;
		this.notaVhceId = notaVhceId;
		this.processoSeletivoId = processoSeletivoId;
		this.numCandidato = numCandidato;
		this.corRaca = corRaca;
		this.formacaoEscolaPublica = formacaoEscolaPublica;
		this.dataInscricao = dataInscricao;
		this.programa = programa;
		this.tipoPrograma = tipoPrograma;
		this.nomeComunidade = nomeComunidade;
		this.anoEnem = anoEnem;
		this.semestreIngresso = semestreIngresso;
	}
}

