import { Request, Response, NextFunction } from 'express';
import { UsuarioService } from '../services/UsuarioService.js';
import { ApiErrors } from '../errors/apiErrors.js';
import jwt from 'jsonwebtoken';

interface User {
  email: string,
  nome: string,
  token?: string,
  role: string
}

class LoginController {
  static async handler(request: Request, response: Response, next: NextFunction) {
		const usuarioService = new UsuarioService();

    const { email, password } = request.body;

    try {
      if (!email || !password)
        throw new ApiErrors(400, 'required atribute is missing');

      const user:User = await usuarioService.login(email, password);
      const token = jwt.sign({ email: user.email, role: user.role }, process.env.PRIVATE_KEY);
      user.token = token;
  
      return response.status(200).json(user);
    } catch(err) {
      next(err);
    }
  }
}

export { LoginController };
