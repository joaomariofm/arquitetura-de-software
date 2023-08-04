import { DBClient } from "../entities/DBClient.js";
import { PrismaUsuarioRepository } from "../repositories/PrismaUsuarioRepository.js";
import { ApiErrors } from "../errors/apiErrors.js";

export class UsuarioService {
	private dbClient: DBClient;
	private prismaUsuarioRepository: PrismaUsuarioRepository;

	constructor() {
		this.dbClient = DBClient.getInstance();
		this.prismaUsuarioRepository = new PrismaUsuarioRepository(this.dbClient.primsa);
	}

  async deleteUsuario(id: string) {
    return await this.prismaUsuarioRepository.deleteUser(id);
  }
	
	async findUsuarioById(id: string) {
    return await this.prismaUsuarioRepository.findUserById(id);
  }

	async listAnalystUsuario() {
		return await this.prismaUsuarioRepository.listAnalystUsers();
  }

	async login(email: string, password: string) {
    const user = await this.prismaUsuarioRepository.findByEmailAndPassword(email, password);

    if (!user) throw new ApiErrors(400, 'wrong email or password');

    return user;
  }

	async registerUsuario(email: string, password: string, name: string) {
    const emailIsInUse = await this.prismaUsuarioRepository.checkEmailAvailability(email);

    if (emailIsInUse)
      throw new ApiErrors(406, 'email is already in use');

    return this.prismaUsuarioRepository.registerUser(email, password, name);
  }
}

