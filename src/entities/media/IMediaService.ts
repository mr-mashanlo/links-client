import { IMedia } from './IMedia';

export interface IMediaService {
  getOneByUser: ( id: string ) => Promise<IMedia>
  create: ( image: FormData ) => Promise<IMedia>,
  delete: ( id: string ) => Promise<{ success: boolean, msg: string }>,
}