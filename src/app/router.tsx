import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, MainLayout, ProfileLayout } from '@/shared/layout';
import { NotRequestAuth, RequestAuth } from '@/shared/hoc';
import { HomePage } from '@/pages/home';
import { SigninPage, SignupPage } from '@/pages/auth';
import { EditLinkPage, EditProfilePage, ViewProfilePage } from '@/pages/profile';
import { signinAction, signupAction } from '@/features/auth/actions';
import { fetchProfile } from '@/features/profile/loadres';
import { updateLinks, updateProfile } from '@/features/profile/actions';

const router = createBrowserRouter( [
  {
    path: '/',
    element: <RequestAuth><MainLayout /></RequestAuth>,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  },

  {
    element: <NotRequestAuth><AuthLayout /></NotRequestAuth>,
    children: [
      {
        path: '/signin',
        element: <SigninPage />,
        action: signinAction
      },
      {
        path: '/signup',
        element: <SignupPage />,
        action: signupAction
      }
    ]
  },

  {
    path: '/edit',
    element: <RequestAuth><ProfileLayout /></RequestAuth>,
    loader: fetchProfile,
    children: [
      {
        index: true,
        path: 'profile',
        element: <EditProfilePage />,
        action: updateProfile
      },
      {
        path: 'links',
        element: <EditLinkPage />,
        action: updateLinks
      }
    ]
  },

  {
    element: <MainLayout />,
    children: [
      {
        path: '/preview/:id',
        element: <ViewProfilePage />,
        loader: fetchProfile
      }
    ]
  }
] );

export default router;