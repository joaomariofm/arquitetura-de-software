import { Cargo } from '../entities/Cargo.js';

export interface CargoRepository {
  getCargoGroupById(id: number) : Promise<Cargo | undefined>; 
}

