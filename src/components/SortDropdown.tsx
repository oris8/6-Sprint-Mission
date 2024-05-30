import SortIcon from "/public/images/ic_sort.svg";
import ArrowDownIcon from "/public/images/ic_arrow-down.svg";
import BaseDropdown from "./BaseDropdown";
import useDeviceSize from "@/hooks/useDeviceSize";

const SortOptions = {
  recent: "최신순",
  like: "좋아요순",
};

interface SortDropdownProps {
  className?: string;
  order: keyof typeof SortOptions;
  onClick: (selectedOrder: keyof typeof SortOptions) => void;
}

const SortDropdown = ({ className, order, onClick }: SortDropdownProps) => {
  const deviceSize = useDeviceSize();

  const handleOptionClick = (selectedOrder: keyof typeof SortOptions) => {
    onClick(selectedOrder);
  };

  return (
    <BaseDropdown
      className={className}
      buttonContent={
        deviceSize === "small" ? (
          <SortIcon />
        ) : (
          <div className="flex w-24 items-center justify-between px-3 ">
            <p>{SortOptions[order]}</p>
            <ArrowDownIcon />
          </div>
        )
      }
    >
      {Object.keys(SortOptions).map((option) => (
        <button
          key={option}
          onClick={() => handleOptionClick(option as keyof typeof SortOptions)}
          className="flex w-32 justify-center border-b border-gray-200 p-2 text-base font-normal first:rounded-t-[12px] last:rounded-b-[12px] last:border-0"
        >
          {SortOptions[option as keyof typeof SortOptions]}
        </button>
      ))}
    </BaseDropdown>
  );
};

export default SortDropdown;
