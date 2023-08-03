export class Usuario {
	public readonly id: string;
	public readonly email: string;
	public readonly nome: string;
	public readonly role: string;

	constructor(id: string, email: string, nome: string, role: string) {
		this.id = id;
		this.email = email;
		this.nome = nome;
		this.role = role;
	}
}

