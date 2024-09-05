import { FC } from 'react';
import { Link } from 'react-router-dom';
import { NavLinkButton } from '@/shared/ui';
import { useAuthStore } from '@/features/auth/store';

const Header: FC = () => {
  return (
    <header className="p-3 sm:px-6 sm:py-4 bg-white rounded-lg">
      <div className="grid grid-cols-[1fr_5fr_1fr] items-center justify-between gap-4">
        <Link to="/" className="font-bold text-2xl">Links</Link>
        <div className="flex items-center justify-center gap-4">
          <NavLinkButton to="/edit/profile" variant="ghost">Profile</NavLinkButton>
          <NavLinkButton to="/edit/links" variant="ghost">Links</NavLinkButton>
        </div>
        <div className="flex justify-end">
          <NavLinkButton to={`/preview/${useAuthStore.getState().id}`}>Preview</NavLinkButton>
        </div>
      </div>
    </header>
  );
};

export default Header;