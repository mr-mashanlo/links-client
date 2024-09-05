import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import { When } from 'react-if';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode,
  className?: string,
  loading?: boolean,
  variant?: 'solid' | 'outline' | 'ghost'
}

const variantClasses = {
  solid: {
    normal: 'bg-black text-white border-2 border-black',
    hover: 'hover:bg-violet-400 hover:border-violet-400'
  },
  outline: {
    normal: 'border-2 border-gray-200',
    hover: 'hover:border-black'
  },
  ghost: {
    normal: 'bg-gray-50 border-2 border-gray-50',
    hover: 'hover:bg-gray-100 hover:border-gray-100'
  }
};

const Button: FC<Props> = ( { children, className, loading, variant = 'solid', ...others } ) => {
  return (
    <button className={twMerge( 'min-w-28 px-6 py-3 flex items-center justify-center rounded-lg duration-300', variantClasses[variant].normal, variantClasses[variant].hover, className )} {...others}>
      <When condition={loading}><span className="absolute animate-pulse">● ● ●</span></When>
      <span className={loading ? 'opacity-0' : ''}>{children}</span>
    </button>
  );
};

export default Button;