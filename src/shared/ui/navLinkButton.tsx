import { FC, ReactNode } from 'react';
import { NavLink, NavLinkProps, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface Props extends NavLinkProps {
  children: ReactNode,
  to: string
  className?: string
  variant?: 'solid' | 'outline' | 'ghost',
}

const variantClasses = {
  solid: {
    normal: 'bg-black text-white border-2 border-black',
    hover: 'hover:bg-violet-400 hover:border-violet-400',
    active: 'bg-violet-400 border-violet-400'
  },
  outline: {
    normal: 'border-2 border-gray-200',
    hover: 'hover:border-black',
    active: 'border-black'
  },
  ghost: {
    normal: 'bg-gray-50 border-2 border-gray-50',
    hover: 'hover:border-gray-300',
    active: 'border-gray-300'
  }
};

const NavLinkButton: FC<Props> = ( { children, className, to, variant = 'solid', ...others } ) => {
  const location = useLocation();

  return (
    <NavLink to={to} className={twMerge( 'min-w-28 px-6 py-3 flex items-center justify-center rounded-lg duration-300', variantClasses[variant].normal, variantClasses[variant].hover, location.pathname === to && variantClasses[variant].active, className )} {...others}>
      {children}
    </NavLink>
  );
};

export default NavLinkButton;