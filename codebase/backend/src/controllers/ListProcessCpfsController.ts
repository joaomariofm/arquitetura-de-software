import { Request, Response, NextFunction } from 'express';
import { CandidatoService } from '../services/CandidatoService.js';
import fs from 'fs';
import { resolve } from 'path';

class ListProcessCpfsController {
  static async handler(request: Request, response: Response, next: NextFunction) {
    const candidatoService = new CandidatoService();

    const { processID } = request.body;

    try {
      const res = await candidatoService.listCpfsByProcessId(processID);

      var cpfs = '';

      for (var i = 0; i < res.length; i++) {
        cpfs = cpfs.concat(res[i], ',');
      }
      
      fs.writeFileSync(`./src/tmp/${processID}.txt`, cpfs);
      const file = resolve(`./src/tmp/${processID}.txt`);

      return response.download(file, `${processID}.txt` , () => {
        fs.unlink(`./src/tmp/${processID}.txt`, () => {});
      });
    } catch (err) {
      next(err);
    }
  }
}

export { ListProcessCpfsController }
