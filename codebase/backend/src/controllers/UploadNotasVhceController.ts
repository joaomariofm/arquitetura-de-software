import { Request, Response, NextFunction } from "express";
import { UploadVhceService } from "../services/UploadVhceService.js";
import { WriteOdsFileService } from "../services/WriteOdsFileService.js";
import { DeleteOdsFileService } from "../services/DeleteOdsFileService.js";

import { ProcessoSeletivoService } from "../services/ProcessoSeletivoService.js";

class UploadNotasVhceController {
  static async handler(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
		const processoSeletivoService = new ProcessoSeletivoService();
    const uploadVhceService = new UploadVhceService();
    const writeOdsFileService = new WriteOdsFileService();
    const deleteOdsFileService = new DeleteOdsFileService();

    const { base64, processID } = request.body;

    // writing ods file and registering its id
    const fileId = await writeOdsFileService.execute(base64);

    try {
      // verify processID validity
      await processoSeletivoService.verifyProcessId(processID);

      // upload notas vhce table
      await uploadVhceService.execute(fileId, processID);

      // update process step
      const processData = await processoSeletivoService.alterProcessoStep(4, processID);

      return response.status(200).json({
        message: "NotasVhce table updated",
        processData: processData,
      });
    } catch (err) {
      next(err);
    } finally {
      deleteOdsFileService.execute(fileId);
    }
  }
}

export { UploadNotasVhceController };

