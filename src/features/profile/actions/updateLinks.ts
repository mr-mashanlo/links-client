import { ActionFunctionArgs } from 'react-router-dom';
import { profileService } from '../service';
import { useAuthStore } from '@/features/auth/store';

const updateLinks = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const inputs = Array.from( formData.entries() );
  const id = useAuthStore.getState().id;

  const links = inputs.reduce( ( acc: Array<{ id: string, url: string, platform: string }>, item: [string, FormDataEntryValue] ) => {
    const [ key, id ] = item[0].split( '-' );
    const index = acc.findIndex( link => link.id === id );

    if ( index >= 0 ) {
      acc[index] = { ...acc[index], [key]: item[1] as string };
    } else {
      acc.push( { id, url: '', platform: '', [key]: item[1] as string } );
    }

    return acc;
  }, [] );

  try {
    await profileService.update( id, { links } );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default updateLinks;