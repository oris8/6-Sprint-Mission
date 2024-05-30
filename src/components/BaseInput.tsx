interface BaseInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const BaseInput: React.FC<BaseInputProps> = ({
  className = "",
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyDown,
  accept,
  autoComplete = "off",
  ...rest
}) => {
  return (
    <input
      className={`focus:outline-blue-500 h-full w-full rounded-[12px] bg-cool-gray-100 p-4 text-base placeholder-cool-gray-400 ${className}`}
      id={label}
      name={label}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      accept={accept}
      autoComplete={autoComplete}
      {...rest}
    />
  );
};

export default BaseInput;
