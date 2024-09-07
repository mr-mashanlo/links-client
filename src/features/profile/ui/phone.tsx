import { FC, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Else, If, Then } from 'react-if';
import { useLinkStore, useProfileStore } from '../store';
import { ILink } from '@/entities/link';
import { platforms } from '@/shared/config';

const Phone: FC = () => {
  const firstname = useProfileStore( state => state.firstname );
  const lastname = useProfileStore( state => state.lastname );
  const email = useProfileStore( state => state.email );
  const image = useProfileStore( state => state.image );
  const storeLinks = useLinkStore( state => state.links );
  const [ links, setLinks ] = useState<Array<ILink>>( storeLinks );

  useEffect( () => { setLinks( storeLinks ); }, [ storeLinks ] );

  return (
    <div className="w-80 px-4 py-20 aspect-[9/16] ring-2 ring-black rounded-xl flex flex-col overflow-auto hidden-scrollbar">
      <div className="text-center">
        <If condition={image.length}>
          <Then><img src={image} alt="Image" className="w-16 h-16 mx-auto rounded-full object-cover" /></Then>
          <Else><div className="w-16 h-16 mx-auto bg-gray-500 rounded-full"></div></Else>
        </If>
        <p className="mt-4 font-bold text-xl">{firstname} {lastname}</p>
        <p className="mt-2 text-gray-500">{email}</p>
      </div>
      <ul className="mt-10 flex flex-col gap-4">
        {links.map( link => ( <li key={link.id}>
          <a href={link.url} className={twMerge( 'p-4 bg-gray-100 rounded-lg flex items-center gap-2', platforms[link.platform].color )} target="_blank">
            <img src={platforms[link.platform].icon} alt="Icon" className="h-5" />
            {platforms[link.platform].title}
          </a>
        </li> ) )}
      </ul>
    </div>
  );
};

export default Phone;