export class Cargo {
	public readonly id: string;
	public readonly coIesCurso: number;
	public readonly desc: string;
	public readonly grauAcademico: string;
	public readonly periodo: string;
	public readonly cidade: string;
	public readonly codg: number;
	public readonly vagas: number;
	public readonly grupo: number;
	public readonly campus: string;

	constructor(
		id: string,
		coIesCurso: number,
		desc: string,
		grauAcademico: string,
		periodo: string,
		cidade: string,
		codg: number,
		vagas: number,
		grupo: number,
		campus: string
	) {
		this.id = id;
		this.coIesCurso = coIesCurso;
		this.desc = desc;
		this.grauAcademico = grauAcademico;
		this.periodo = periodo;
		this.cidade = cidade;
		this.codg = codg;
		this.vagas = vagas;
		this.grupo = grupo;
		this.campus = campus;
	}
}

