"use client";

import Link from "next/link";
import Image from "next/image";
import NavLink from "@/components/NavLink";
import BaseButton from "@/components/BaseButton";
import { useAuth } from "@/contexts/AuthProvider";

interface GNBNavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface GNBButtonProps {
  children: React.ReactNode;
}

const GNBLinkStyles = {
  activeStyle: "text-blue",
  inactiveStyle: "text-cool-gray-600",
  baseStyle: "font-bold text-16 md:w-109 md:text-18 md:text-center",
};

const GNBNavLink = ({ href, children }: GNBNavLinkProps) => {
  return (
    <NavLink
      href={href}
      activeClassName={GNBLinkStyles.activeStyle}
      inactiveClassName={GNBLinkStyles.inactiveStyle}
      className={GNBLinkStyles.baseStyle}
    >
      {children}
    </NavLink>
  );
};

const GNBButton = ({ children }: GNBButtonProps) => (
  <BaseButton className="ml-auto h-42 w-88">{children}</BaseButton>
);

function Header() {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 z-20 flex h-70 w-full items-center gap-8 border-b border-gray-200 bg-white px-16 md:px-24 xl:px-200">
      <Link href="/">
        <div className="hidden md:block lg:mr-20">
          <Image
            src="/images/img_panda-logo.svg"
            alt="판다마켓"
            width={150}
            height={41}
            priority={true}
          />
        </div>
      </Link>
      <div className="mr-8 md:hidden">
        <Image
          src="/images/img_panda-logo-typo.svg"
          alt="판다마켓"
          width={81}
          height={40}
          priority={true}
        />
      </div>
      <GNBNavLink href="/boards">자유게시판</GNBNavLink>
      <GNBNavLink href="/items">중고마켓</GNBNavLink>
      {user ? (
        <>
          <Link href="/me" className="ml-auto">
            <Image
              src={user.image || "/images/img_default-profile.png"}
              width={40}
              height={40}
              alt="profile-image"
            />
          </Link>
          <BaseButton onClick={logout}>나가기</BaseButton>
        </>
      ) : (
        <GNBButton>
          <Link href="/login">로그인</Link>
        </GNBButton>
      )}
    </nav>
  );
}

export default Header;
