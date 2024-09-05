import { IProfile } from './IProfile';

export interface IProfileService {
  getAll: () => Promise<Array<IProfile>>
  getOne: ( id: string ) => Promise<IProfile>
  update: ( id: string, updates: Partial<IProfile> ) => Promise<IProfile>
}