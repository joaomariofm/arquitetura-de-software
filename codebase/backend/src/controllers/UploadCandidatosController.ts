import { Request, Response, NextFunction } from 'express';
import { WriteOdsFileService } from '../services/WriteOdsFileService.js';
import { UploadCandidatosService } from '../services/UploadCandidatosService.js';
import { DeleteOdsFileService } from '../services/DeleteOdsFileService.js';
import { ProcessoSeletivoService } from '../services/ProcessoSeletivoService.js';

class UploadCandidatosController {
  static async handler(request: Request, response: Response, next: NextFunction) {
		const processoSeletivoService = new ProcessoSeletivoService();
    const writeOdsFileService = new WriteOdsFileService();
    const deleteOdsFileService = new DeleteOdsFileService();
    const uploadCandidatosService = new UploadCandidatosService();
    
    const { base64, processID } = request.body;

    // writing ods file and registering its id
    const fileId = await writeOdsFileService.execute(base64);

    try {
      // verify processID validity
      await processoSeletivoService.verifyProcessId(processID);

      // upload candidatos table
      await uploadCandidatosService.execute(fileId, processID); 

      // update process step
      const processData = await processoSeletivoService.alterProcessoStep(2, processID);

      return response.status(200).json({
        message: 'Candidatos table updated',
        processData: processData
      });
    } catch (err) {
      next(err);
    } finally {
      deleteOdsFileService.execute(fileId);
    }
  }
}

export { UploadCandidatosController };

