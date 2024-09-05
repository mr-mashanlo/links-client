import { ActionFunctionArgs, defer } from 'react-router-dom';
import { mediaService, profileService } from '../service';
import { useAuthStore } from '@/features/auth/store';

const fetchProfile = async ( { params }: ActionFunctionArgs ) => {
  const id = params.id || useAuthStore.getState().id;

  try {
    return defer( { success: true, data: { profile: await profileService.getOne( id ), image: await mediaService.getOneByUser( id ) } } );
  } catch ( error ) {
    return { success: false, error };
  }
};

export default fetchProfile;