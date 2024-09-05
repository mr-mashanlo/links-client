import { create } from 'zustand';
import { ILinkStore } from '@/entities/link';

const useLinkStore = create<ILinkStore>( set => ( {
  links: [
    { id: '1725368400', url: '', platform: 'instagram' },
    { id: '1725368700', url: '', platform: 'tiktok' },
    { id: '1725369000', url: '', platform: 'whatsapp' },
    { id: '1725369300', url: '', platform: 'youtube' }
  ],

  setLink( links ) {
    set( () => ( { links } ) );
  },

  addLink( link ) {
    set( state => ( { links: state.links.concat( link ) } ) );
  },

  updateLink( id, updates ) {
    set( state => {
      const index = state.links.findIndex( link => link.id === id );
      const updatedLinks = state.links;
      updatedLinks.splice( index, 1, { ...state.links[index], ...updates } );
      return { links: JSON.parse( JSON.stringify( updatedLinks ) ) };
    } );
  },

  removeLink( link ) {
    set( state => ( { links: state.links.filter( item => item.id !== link.id ) } ) );
  }

} ) );

export default useLinkStore;