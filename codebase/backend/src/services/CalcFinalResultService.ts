import { DBClient } from '../entities/DBClient.js';
import { PrismaCargoRepository } from '../repositories/PrismaCargoRepository.js';
import { PrismaCandidatoRepository } from '../repositories/PrismaCandidatoRepository.js';
import { PrismaNotaEnemRepository } from '../repositories/PrismaNotaEnemResporitory.js';

export class CalcFinalResultService {
  async execute(processID: string) {
		const dbClient = DBClient.getInstance();
		const prismaCargoRepository = new PrismaCargoRepository(dbClient.primsa);
		const prismaNotaEnemRepository = new PrismaNotaEnemRepository(dbClient.primsa);
		const prismaCandidatoRepository = new PrismaCandidatoRepository(dbClient.primsa);

    const pesosPorGrupo = [
      { L: 2, CH: 1, CN: 2.5, M: 3, R: 1.5 },
      { L: 2, CH: 1, CN: 1.5, M: 4, R: 1.5 },
      { L: 2, CH: 1, CN: 1, M: 4, R: 2 },
      { L: 2, CH: 1.5, CN: 3, M: 1.5, R: 2 },
      { L: 2, CH: 1, CN: 3, M: 2, R: 2 },
      { L: 2.5, CH: 3, CN: 1, M: 1, R: 2.5 },
      { L: 2.5, CH: 2, CN: 1, M: 2, R: 2.5 },
      { L: 3, CH: 2.5, CN: 1, M: 1, R: 2.5 },
    ]

    const users = await prismaCandidatoRepository.getProcessCandidatos(processID);

    var resultados = []

    for (var i = 0; i < users.length; i++) {
      const cargoId = users[i].cargoId;
      const cargoGroup = (await prismaCargoRepository.getCargoGroupById(cargoId)).grupo;
      const notaEnem = await prismaNotaEnemRepository.getNotaByProcessIdAndUserCpf(processID, users[i].cpf)

      if (notaEnem) {
        const notaLinguagensComPeso = notaEnem.notaLinguagens * pesosPorGrupo[cargoGroup - 1].L;
        const notaCienciasHumanasComPeso = notaEnem.notaCienciasHumanas * pesosPorGrupo[cargoGroup - 1].CH;
        const notaCienciasNaturezaComPeso = notaEnem.notaCienciasNatureza * pesosPorGrupo[cargoGroup - 1].CN
        const notaMatematicaComPeso = notaEnem.notaMatematica * pesosPorGrupo[cargoGroup - 1].M;
        const notaRedacaoComPeso = notaEnem.notaRedacao * pesosPorGrupo[cargoGroup - 1].R;
        const somaDosPesosDoGrupo = pesosPorGrupo[cargoGroup - 1].L + pesosPorGrupo[cargoGroup - 1].CH + pesosPorGrupo[cargoGroup - 1].CN + pesosPorGrupo[cargoGroup - 1].M + pesosPorGrupo[cargoGroup - 1].R;

        const notaFinal = (notaLinguagensComPeso + notaCienciasHumanasComPeso + notaCienciasNaturezaComPeso + notaMatematicaComPeso + notaRedacaoComPeso) / somaDosPesosDoGrupo;

        resultados.push({...users[i], notaFinal: notaFinal});
      }
    }

    return resultados.sort((a, b) => b.notaFinal - a.notaFinal);
  }
}

