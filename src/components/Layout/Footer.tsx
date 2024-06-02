import Link from "next/link";
import FacebookIcon from "/public/images/ic_facebook.svg";
import TwitterIcon from "/public/images/ic_twitter.svg";
import YoutubeIcon from "/public/images/ic_youtube.svg";
import InstagramIcon from "/public/images/ic_insta.svg";

interface IconType {
  name: "facebook" | "twitter" | "youtube" | "instagram";
  href: string;
  icon: React.ReactElement;
}

const SNS_LIST: IconType[] = [
  { name: "facebook", href: "http://www.facebook.com", icon: <FacebookIcon /> },
  { name: "twitter", href: "http://www.twitter.com", icon: <TwitterIcon /> },
  { name: "youtube", href: "http://www.youtube.com", icon: <YoutubeIcon /> },
  {
    name: "instagram",
    href: "http://www.instagram.com",
    icon: <InstagramIcon />,
  },
];

const Footer = () => {
  return (
    <footer className="min-h-160 flex w-full justify-center bg-gray-900">
      <div className="text-16 md:px-108 xl:px-200 grid w-full max-w-[1520px] px-16 py-32 text-white grid-areas-footer md:flex md:flex-grow-[1] md:justify-between">
        <div className="mt-60 opacity-50 grid-in-copyright md:mt-0 xl:opacity-100">
          @codeit - 2024
        </div>
        <div className="gap-30 flex grid-in-menus">
          <Link href="/privacy" className="text-white">
            Privacy Policy
          </Link>
          <Link href="/faq" className="text-white">
            FAQ
          </Link>
        </div>
        <div className="flex justify-end gap-12 grid-in-socials md:justify-start">
          {SNS_LIST.map(({ name, href, icon }) => (
            <Link key={name} href={href}>
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
