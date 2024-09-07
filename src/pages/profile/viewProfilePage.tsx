import { FC } from 'react';
import { useLoaderData } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Else, If, Then } from 'react-if';
import { IProfile } from '@/entities/profile';
import { IMedia } from '@/entities/media';
import { platforms } from '@/shared/config';

const ViewProfilePage: FC = () => {
  const loaderData = useLoaderData() as { success: boolean, data: { profile: IProfile, image: IMedia } };

  return (
    <section className="min-h-screen">
      <div className="container-block">
        <div className="h-full flex justify-center">
          <div className="w-full max-w-96 py-20 flex flex-col">
            <div className="text-center">
              <If condition={loaderData.data.image.url.length}>
                <Then><img src={loaderData.data.image.url} alt="Image" className="w-16 h-16 mx-auto rounded-full object-cover" /></Then>
                <Else><div className="w-16 h-16 mx-auto bg-gray-500 rounded-full"></div></Else>
              </If>
              <p className="mt-4 font-bold text-xl">{loaderData.data.profile.firstname} {loaderData.data.profile.lastname}</p>
              <p className="mt-2 text-gray-500">{loaderData.data.profile.email}</p>
            </div>
            <ul className="mt-10 flex flex-col gap-4">
              {loaderData.data.profile.links.map( link => ( <li key={link.id}>
                <a href={link.url} className={twMerge( 'p-4 bg-gray-100 rounded-lg flex items-center gap-2', platforms[link.platform].color )} target="_blank">
                  <img src={platforms[link.platform].icon} alt="Icon" className="h-5" />
                  {platforms[link.platform].title}
                </a>
              </li> ) )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewProfilePage;