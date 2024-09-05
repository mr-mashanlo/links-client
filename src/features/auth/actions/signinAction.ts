import { ActionFunctionArgs } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store';
import { authService } from '../service';

const signinAction = async ( { request }: ActionFunctionArgs ) => {
  const formData = await request.formData();
  const email = formData.get( 'email' ) as string;
  const password = formData.get( 'password' ) as string;

  try {
    const profile = await authService.signin( email, password );
    useAuthStore.getState().setID( profile.id );
    useAuthStore.getState().setAuth( true );
    return { success: true };
  } catch ( error ) {
    return { success: false, error };
  }
};

export default signinAction;