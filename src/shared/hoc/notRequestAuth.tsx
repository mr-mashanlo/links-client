import { FC, ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/features/auth/store';

interface Props {
  children: ReactNode
}

const NotRequestAuth: FC<Props> = ( { children } ) => {
  const { auth } = useAuthStore();

  if ( auth ) {
    return <Navigate to="/" />;
  }

  return children;
};

export default NotRequestAuth;