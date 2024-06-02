import Link from "next/link";

interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  onSubmit?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
  as?: "Link";
  href?: string;
}

/**
 *
 * @param as
 *  Link를 넣으면 Link 컴포넌트로 사용됩니다. href param과 함께 사용해주세요.
 * @returns
 */
function BaseButton({
  children,
  className,
  onClick,
  onSubmit,
  disabled,
  type = "button",
  href,
  as,
  ...rest
}: BaseButtonProps) {
  const baseStyle =
    "flexcenter h-48 w-128 rounded-8 border-none bg-blue text-16 font-semibold text-white hover:bg-[#1967d6] focus:outline-none active:bg-[#1251aa] disabled:cursor-not-allowed disabled:bg-gray-400 ";

  if (as === "Link") {
    return (
      <Link
        href={href ?? "#"}
        className={`${baseStyle} ${className}`}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${baseStyle} ${className}`}
      onClick={onClick}
      onSubmit={onSubmit}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default BaseButton;
