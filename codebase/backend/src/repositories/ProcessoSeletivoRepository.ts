import { ProcessoSeletivo } from "../entities/ProcessoSeletivo.js"

export interface ProcessoSeletivoRepository {
  listAll(): Promise<ProcessoSeletivo[] | undefined>;

  register(ano: number, inicio: string, termino: string): Promise<ProcessoSeletivo | undefined>;

  checkYearAvailability(ano: number): Promise<boolean>; 

  searchProcessId(processID: string): Promise<ProcessoSeletivo | undefined>; 

  changeProcessStep(step: number, processID: string): Promise<ProcessoSeletivo | undefined>;
}

