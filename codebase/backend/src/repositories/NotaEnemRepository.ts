import { NotaEnem } from '../entities/NotaEnem.js';

export interface NotaEnemRepository {
  getNotaByProcessIdAndUserCpf(processID: string, cpf: string): Promise<NotaEnem | undefined>;
}

