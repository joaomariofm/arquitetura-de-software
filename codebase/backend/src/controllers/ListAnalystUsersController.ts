import { Request, Response, NextFunction } from 'express';
import { UsuarioService } from '../services/UsuarioService.js';

class ListAnalystUsersController {
  static async handler(request: Request, response: Response, next: NextFunction) {
		const usuarioService = new UsuarioService();

    try {
      const users = await usuarioService.listAnalystUsuario();
      return response.status(200).json(users);
    } catch(err) {
      next(err);
    }
  }
}

export { ListAnalystUsersController }

