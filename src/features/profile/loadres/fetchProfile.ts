import { ActionFunctionArgs } from 'react-router-dom';
import { mediaService, profileService } from '../service';
import { useAuthStore } from '@/features/auth/store';

const fetchProfile = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id || useAuthStore.getState().id;

  try {
    const profile = await profileService.getOne( id );
    const image = await mediaService.getOneByUser( id );
    return { success: true, data: { profile, image } };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProfile;