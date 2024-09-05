import { FC, useEffect } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Header } from '@/features/header/ui';
import { Phone } from '@/features/profile/ui';
import { useLinkStore, useProfileStore } from '@/features/profile/store';
import { IProfile } from '@/entities/profile';
import { IMedia } from '@/entities/media';

const ProfileLayout: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { profile: IProfile, image: IMedia } };
  const setFirstname = useProfileStore( state => state.setFirstname );
  const setLastname = useProfileStore( state => state.setLastname );
  const setEmail = useProfileStore( state => state.setEmail );
  const setImage = useProfileStore( state => state.setImage );
  const setLinks = useLinkStore( state => state.setLink );

  useEffect( () => {
    setFirstname( loaderData.data.profile.firstname );
    setLastname( loaderData.data.profile.lastname );
    setEmail( loaderData.data.profile.email );
    setImage( loaderData.data.image.url );
    if ( loaderData.data.profile.links.length ) {
      setLinks( loaderData.data.profile.links );
    }
  }, [ loaderData, setFirstname, setLastname, setEmail, setImage, setLinks ] );

  return (
    <div className="max-w-[1920px] p-6 mx-auto grid gap-7 bg-gray-100">
      <Header />
      <section>
        <div className="grid grid-cols-[1fr_1.45fr] gap-7">
          <div className="p-3 sm:px-10 sm:py-24 bg-white rounded-lg flex flex-col items-center justify-center">
            <Phone />
          </div>
          <div className="bg-white rounded-lg">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileLayout;