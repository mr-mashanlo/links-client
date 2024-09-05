import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Form, useNavigation } from 'react-router-dom';
import { Button, Input, Title } from '@/shared/ui';
import { useProfileStore } from '../store';
import { Else, If, Then } from 'react-if';
import { twMerge } from 'tailwind-merge';

const ProfileForm: FC = () => {
  const navigation = useNavigation();
  const firstname = useProfileStore( state => state.firstname );
  const lastname = useProfileStore( state => state.lastname );
  const email = useProfileStore( state => state.email );
  const image = useProfileStore( state => state.image );
  const setFirstname = useProfileStore( state => state.setFirstname );
  const setLastname = useProfileStore( state => state.setLastname );
  const setEmail = useProfileStore( state => state.setEmail );
  const setImage = useProfileStore( state => state.setImage );
  const [ , setFile ] = useState<null | File>( null );
  const [ fileURL, setFileURL ] = useState<string | null>( null );

  const handleImageChange = ( event: ChangeEvent<HTMLInputElement> ) => {
    if ( event.target.files && event.target.files[0] ) {
      const file = event.target.files[0];
      setFile( file );
      setFileURL( URL.createObjectURL( file ) );
      setImage( URL.createObjectURL( file ) );
    }
  };

  useEffect( () => { setFileURL( image ); }, [ image ] );

  return (
    <Form method="post" action="/edit/profile" encType="multipart/form-data" className="h-full flex flex-col gap-8">
      <div className="p-3 sm:p-10 border-b-2 border-gray-100">
        <Title>Profile details</Title>
        <p className="mt-4">Add your details to create personal touch to your profile.</p>
      </div>
      <div className="p-3 sm:p-10 grid gap-8">
        <label htmlFor="image" className={twMerge( 'group w-28 h-28 flex items-center justify-center outline-3 outline-gray-200 rounded-lg cursor-pointer relative', fileURL?.length ? 'outline-solid' : 'outline-dashed' )}>
          <If condition={fileURL?.length}>
            <Then>
              <span className="p-3 text-gray-700 flex items-center justify-center text-xs text-center absolute top-0 left-0 bottom-0 right-0 z-20 opacity-0 duration-300 group-hover:opacity-100">JPEG PNG WEBP formats, up to 2MB</span>
              <img src={fileURL || ''} alt="Preview" className="rounded-lg object-cover duration-300 group-hover:opacity-50" />
            </Then>
            <Else>
              <span className="p-3 text-gray-300 text-xs text-center duration-300 group-hover:text-black">JPEG PNG WEBP formats, up to 2MB</span>
            </Else>
          </If>
        </label>
        <input onChange={e => handleImageChange( e )} type="file" accept="image/*" id="image" name="image" className="w-0 h-0 overflow-hidden absolute" />
        <Input value={firstname} onChange={e => setFirstname( e.target.value )} type="text" id="firstname" label="First name" required />
        <Input value={lastname} onChange={e => setLastname( e.target.value )} type="text" id="lastname" label="Last name" required />
        <Input value={email} onChange={e => setEmail( e.target.value )} type="text" id="email" label="Email" readOnly />
      </div>
      <div className="p-3 sm:p-10 mt-auto flex justify-end border-t-2 border-gray-100">
        <Button type="submit" loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Save</Button>
      </div>
    </Form>
  );
};

export default ProfileForm;