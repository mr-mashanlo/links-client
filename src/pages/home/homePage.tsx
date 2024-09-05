import { NavLinkButton } from '@/shared/ui';
import { FC } from 'react';

const HomePage: FC = () => {
  return (
    <section className="h-screen">
      <div className="h-full flex items-center justify-center">
        <NavLinkButton to="/edit/profile">Create profile</NavLinkButton>
      </div>
    </section>
  );
};

export default HomePage;