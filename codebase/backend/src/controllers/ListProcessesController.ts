import { Request, Response, NextFunction } from 'express';
import { ProcessoSeletivoService } from '../services/ProcessoSeletivoService.js';

class ListProcessesController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const processoSeletivoService = new ProcessoSeletivoService();

    const processes = await processoSeletivoService.listProcessosSeletivos();

    return response.status(200).json(processes);
  }
}

export { ListProcessesController }
