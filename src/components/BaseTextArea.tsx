interface BaseTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const BaseTextArea = ({
  className = "",
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyDown,
  autoComplete = "off",
  ...rest
}: BaseTextAreaProps) => {
  return (
    <>
      <textarea
        className={`${className} h-200 rounded-12 text-16 w-full resize-none  border-0 bg-cool-gray-100
        p-16 [&::placeholder]:text-cool-gray-400 [&:focus]:outline [&:focus]:outline-blue`}
        id={label}
        name={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        autoComplete={autoComplete}
        {...rest}
      />
    </>
  );
};

export default BaseTextArea;
