import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string
  label: string
  type: 'text' | 'password' | 'url'
}

const Input: FC<Props> = ( { id, label, type, ...others } ) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-white">{label}</label>
      <input {...others} type={type} id={id} name={id} className="w-full p-3 rounded-lg border-2 border-gray-200 focus:border-black" />
    </div>
  );
};

export default Input;