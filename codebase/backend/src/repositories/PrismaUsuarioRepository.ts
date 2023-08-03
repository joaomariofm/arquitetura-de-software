import { UsuarioRepository} from './UsuarioRepository.js';
import { Usuario } from '../entities/Usuario.js';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../utils/hashPassword.js';

export class PrismaUsuarioRepository implements UsuarioRepository {
	constructor(private readonly prisma: PrismaClient) {}

	async findByEmailAndPassword(email: string, password: string) {
		const user = await this.prisma.usuario.findFirst({
			where: {
				email: email,
				password: hashPassword(password),
			},
		});

		if (!user) return undefined;

		return new Usuario(user.id, user.email, user.nome, user.role);
	};

	async registerUser(email: string, nome: string, password: string) {
		const user = await this.prisma.usuario.create({ 
      data: {
        email: email,
        nome: nome,
        password: hashPassword(password),
        role: 'ANALYST'
      },
    });

		if (!user) return undefined;

		return new Usuario(user.id, user.email, user.nome, user.role);
	}; 

  async checkEmailAvailability(email: string) {
		const res = await this.prisma.usuario.findFirst({
      where: {
        email: email
      }
    });

		return res !== null;
	}

  async listAnalystUsers() {
		const users = await this.prisma.usuario.findMany({
    	where: {
        role: 'ANALYST'
      },
    });

		return users.map((user) => {
			return new Usuario(user.id, user.email, user.nome, user.role);
		});
	}

  async deleteUser(id: string) {
		await this.prisma.usuario.delete({
    	where: {
        id: id
      }
    });
	}

  async findUserById(id: string) {
		const user = await this.prisma.usuario.findFirst({
      where: {
        id: id
      }
    });

		if (!user) return undefined;

		return new Usuario(user.id, user.email, user.nome, user.role);
	}
}

