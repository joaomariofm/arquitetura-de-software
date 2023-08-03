import { Request, Response, NextFunction } from 'express';
import { UsuarioService } from '../services/UsuarioService.js';
import { ApiErrors } from '../errors/apiErrors.js';

class RegisterUserController {
  static async handler(request: Request, response: Response, next: NextFunction) {
		const usuarioService = new UsuarioService();

    const { email, password, name } = request.body;

    try {
      if (!email || !password || !name)
        throw new ApiErrors(400, 'required atribute is missing');

      const registerServiceResponse = await usuarioService.registerUsuario(email, password, name);

      return response.status(200).json(registerServiceResponse);
    } catch (err) {
      next(err);
    }
  }
}

export { RegisterUserController };
