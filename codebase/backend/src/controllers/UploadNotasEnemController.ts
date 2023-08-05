import { Request, Response, NextFunction } from 'express';
import { WriteOdsFileService } from '../services/WriteOdsFileService.js';
import { UploadNotasEnemService } from '../services/UploadNotasEnemService.js';
import { DeleteOdsFileService } from '../services/DeleteOdsFileService.js';

import { ProcessoSeletivoService } from '../services/ProcessoSeletivoService.js';

class UploadNotasEnemController {
  static async handler(request: Request, response: Response, next: NextFunction) {
		const processoSeletivoService = new ProcessoSeletivoService();
    const writeOdsFileService = new WriteOdsFileService();
    const deleteOdsFileService = new DeleteOdsFileService();
    const uploadNotasEnemService = new UploadNotasEnemService();

    const { base64, processID } = request.body

    // writing ods file and registering its id
    const fileId = await writeOdsFileService.execute(base64);

    try {
      // verify processID validity
      await processoSeletivoService.verifyProcessId(processID);

      // upload notasenem table
      await uploadNotasEnemService.execute(fileId, processID);

      // update process step
      const processData = await processoSeletivoService.alterProcessoStep(3, processID);

      return response.status(200).json({
        message: 'NotasEnem table updated',
        processData: processData
      });
    } catch (err) {
      next(err);
    } finally {
      deleteOdsFileService.execute(fileId);
    }
  }
}

export { UploadNotasEnemController };

