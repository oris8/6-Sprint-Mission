import { ChangeEventHandler, KeyboardEventHandler } from "react";
import BaseInput from "./BaseInput";
import SearchIcon from "/public/images/ic_search.svg";

interface SearchInputProps {
  className?: string;
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onKeyDown?: (value: string) => void;
}

const SearchInput = ({
  className = "",
  placeholder,
  defaultValue = "",
  onChange,
  onKeyDown,
}: SearchInputProps) => {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && onKeyDown) {
      onKeyDown(e.currentTarget.value);
    }
  };

  return (
    <div className={`min-w-294 relative h-40 w-full ${className}`}>
      <div className="absolute left-16 top-8">
        <SearchIcon />
      </div>
      <BaseInput
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="pl-44"
      />
    </div>
  );
};

export default SearchInput;
