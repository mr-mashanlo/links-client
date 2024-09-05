import { create } from 'zustand';
import { IProfileStore } from '@/entities/profile';

const useProfileStore = create<IProfileStore>( set => ( {
  firstname: 'John',
  lastname: 'Doe',
  email: 'johndoe@email.com',
  image: '',

  setFirstname( firstname ) {
    set( () => ( { firstname } ) );
  },

  setLastname( lastname ) {
    set( () => ( { lastname } ) );
  },

  setEmail( email ) {
    set( () => ( { email } ) );
  },

  setImage( image ) {
    set( () => ( { image } ) );
  }

} ) );

export default useProfileStore;