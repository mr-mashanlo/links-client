import { FC } from 'react';
import { Button, Input, Select, Title } from '@/shared/ui';
import useLinkStore from '../store/linkStore';
import { Form, useNavigation } from 'react-router-dom';

const platforms = [
  { value: 'facebook', title: 'Facebook' },
  { value: 'instagram', title: 'Instagram' },
  { value: 'linkedin', title: 'Linkedin' },
  { value: 'telegram', title: 'Telegram' },
  { value: 'tiktok', title: 'Tiktok' },
  { value: 'whatsapp', title: 'Whatsapp' },
  { value: 'youtube', title: 'Youtube' }
];

const LinksForm: FC = () => {
  const navigation = useNavigation();
  const links = useLinkStore( state => state.links );
  const addLink = useLinkStore( state => state.addLink );
  const updateLink = useLinkStore( state => state.updateLink );
  const removeLink = useLinkStore( state => state.removeLink );

  return (
    <Form method="post" action="/edit/links" className="h-full flex flex-col">
      <div className="p-3 sm:p-10 border-b-2 border-gray-100">
        <Title>Customize your links</Title>
        <p className="mt-4">Add / edit / remove links bellow and then share all your profiles with the world.</p>
      </div>
      <div className="p-3 sm:p-10 grid gap-8">
        <div className="grid gap-11">
          {links.map( link => (
            <div key={link.id} className="grid grid-cols-[2fr_2fr_1fr] gap-8">
              <Select onChange={e => updateLink( link.id, { platform: e.target.value } )} options={platforms} defaultValue={link.platform} id={`platform-${link.id}`} label="Platform" required />
              <Input onChange={e => updateLink( link.id, { url: e.target.value } )} defaultValue={link.url} type="url" id={`url-${link.id}`} label="Link" required />
              <Button onClick={() => removeLink( link )} type="button" variant="outline">Delete</Button>
            </div>
          ) )}
          <Button onClick={() => addLink( { id: String( Date.now() ), url: '', platform: 'instagram' } )} type="button">+</Button>
        </div>
      </div>
      <div className="p-3 sm:p-10 mt-auto flex justify-end border-t-2 border-gray-100">
        <Button type="submit" loading={navigation.state === 'submitting'} disabled={navigation.state === 'submitting'}>Save</Button>
      </div>
    </Form>
  );
};

export default LinksForm;