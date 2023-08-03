import { Cargo } from "./Cargo.js";
import { NotaEnem } from "./NotaEnem.js";
import { NotaVhce } from "./NotaVhce.js";

export class Candidato {
	public readonly id: string;
	public readonly cpf: string;
	public readonly cargoId: string;
	public readonly cargo: Cargo;
	public readonly notaEnemId: string;
	public readonly notaEnem: NotaEnem;
	public readonly notaVhceId: string;
	public readonly notaVhce: NotaVhce;
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
		cargoId: string,
		cargo: Cargo,
		notaEnemId: string,
		notaEnem: NotaEnem,
		notaVhceId: string,
		notaVhce: NotaVhce,
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
		this.cargo = cargo;
		this.notaEnemId = notaEnemId;
		this.notaEnem = notaEnem;
		this.notaVhceId = notaVhceId;
		this.notaVhce = notaVhce;
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
