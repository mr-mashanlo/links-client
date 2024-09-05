import { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  id: string
  label: string
  className?: string
}

const Textarea: FC<Props> = ( { id, label, className, ...others } ) => {
  return (
    <div className={twMerge( 'relative', className )}>
      <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-white">{label}</label>
      <textarea {...others} id={id} name={id} className="block w-full px-3 py-3 border-2 border-gray-300 focus:border-black"></textarea>
    </div>
  );
};

export default Textarea;