import { useEffect, useRef, useState } from "react";

interface BaseDropdownProps {
  className?: string;
  buttonContent: React.ReactNode;
  children: React.ReactNode;
}

const BaseDropdown = ({
  className,
  buttonContent,
  children,
}: BaseDropdownProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`relative focus:outline-none [&_button:hover]:bg-[#00000005] ${className}`}
      ref={dropdownRef}
    >
      <div
        className="flexcenter h-[42px] rounded-[12px] border border-gray-200 bg-white px-[12px] text-[16px] "
        onClick={toggleDropdown}
      >
        {buttonContent}
      </div>
      {isVisible && (
        <div className="absolute right-0 top-full z-[2] mt-1 rounded-[12px] border border-gray-200 bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default BaseDropdown;
