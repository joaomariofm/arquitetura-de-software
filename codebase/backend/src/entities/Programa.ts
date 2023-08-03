export class Programa {
	public readonly id: number;
	public readonly codigo: number;
	public readonly tipo: number;
	public readonly desc: string;
	public readonly categoriaIngresso: string;

	constructor(
		id: number,
		codigo: number,
		tipo: number,
		desc: string,
		categoriaIngresso: string
	) {
		this.id = id;
		this.codigo = codigo;
		this.tipo = tipo;
		this.desc = desc;
		this.categoriaIngresso = categoriaIngresso;
	}
}

