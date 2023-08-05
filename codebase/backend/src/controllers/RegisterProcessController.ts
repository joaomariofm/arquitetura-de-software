import { Request, Response, NextFunction } from 'express';
import { ProcessoSeletivoService } from '../services/ProcessoSeletivoService.js';
import { ApiErrors } from '../errors/apiErrors.js';

class RegisterProcessController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const processoSeletivoService = new ProcessoSeletivoService();

    const { ano, inicio, termino } = request.body;

    try {
      if (!ano || !inicio || !termino)
        throw new ApiErrors(400, 'required atribute is missing');

      await processoSeletivoService.registerProcessoSeletivo(Number(ano), inicio, termino);

      return response.status(200).json({ message: 'new process successfully registered'});
    } catch (err) {
      next(err);
    }
  }
}

export { RegisterProcessController };

