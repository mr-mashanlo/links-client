import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode,
  className?: string,
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
  size?: 'xl' | 'lg' | 'md' | 'base' | 'sm' | 'xs'
}

const sizeVariants = {
  xs: 'text-xs leading-normal',
  sm: 'text-sm leading-normal',
  base: 'text-base leading-normal',
  md: 'text-md leading-none',
  lg: 'text-lg leading-none',
  xl: 'text-2xl leading-none'
};

const Title: FC<Props> = ( { children, className, level = 'h1', size = 'xl' } ) => {
  switch ( level ) {
  case 'h6':
    return ( <h6 className={twMerge( 'font-bold', sizeVariants[size], className )}>{children}</h6> );
  case 'h5':
    return ( <h5 className={twMerge( 'font-bold', sizeVariants[size], className )}>{children}</h5> );
  case 'h4':
    return ( <h4 className={twMerge( 'font-bold', sizeVariants[size], className )}>{children}</h4> );
  case 'h3':
    return ( <h3 className={twMerge( 'font-bold', sizeVariants[size], className )}>{children}</h3> );
  case 'h2':
    return ( <h2 className={twMerge( 'font-bold', sizeVariants[size], className )}>{children}</h2> );
  default:
    return ( <h1 className={twMerge( 'font-bold', sizeVariants[size], className )}>{children}</h1> );
  }

};

export default Title;