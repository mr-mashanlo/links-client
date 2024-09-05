import { ActionFunctionArgs } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store';
import { mediaService, profileService } from '../service';

const updateProfile = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const firstname = formData.get( 'firstname' ) as string;
  const lastname = formData.get( 'lastname' ) as string;
  const image = formData.get( 'image' ) as File;
  const id = useAuthStore.getState().id;

  const body = new FormData();
  if ( image.size ) { body.append( 'image', image ); }

  try {
    const profile = await profileService.update( id, { firstname, lastname } );
    if ( image.size ) { await mediaService.create( body ); }
    return { success: true, data: profile };
  } catch ( error ) {
    return error;
  }
};

export default updateProfile;