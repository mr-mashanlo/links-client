import { ILink } from './Ilink';

export interface ILinkStore {
  links: Array<ILink>,
  setLink: ( links: Array<ILink> ) => void,
  addLink: ( link: ILink ) => void,
  updateLink: ( id: string, updates: Partial<ILink> ) => void
  removeLink: ( link: ILink ) => void
}