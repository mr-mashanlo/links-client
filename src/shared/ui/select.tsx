import { DetailedHTMLProps, FC, SelectHTMLAttributes } from 'react';

interface Props extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  id: string
  label: string
  options: Array<{ value: string, title: string }>
}

const Select: FC<Props> = ( { id, label, options, ...others } ) => {
  return (
    <div className="relative">
      <label htmlFor={id} className="px-2 text-sm font-medium absolute -top-[0.55rem] left-5 bg-white">{label}</label>
      <select id={id} name={id} {...others} className="w-full p-3 rounded-lg appearance-none border-2 border-gray-200 focus:border-black">
        {options.map( option => ( <option key={option.value} value={option.value}>{option.title}</option> ) )}
      </select>
    </div>
  );
};

export default Select;