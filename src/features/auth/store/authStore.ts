import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { IAuthStore } from '@/entities/auth/types';

const useAuthStore = create( persist<IAuthStore>( set => ( {
  id: '',
  auth: false,

  setID( id ) {
    set( () => ( { id } ) );
  },

  setAuth( auth ) {
    set( () => ( { auth } ) );
  }

} ), { name: 'auth' } ) );

export default useAuthStore;