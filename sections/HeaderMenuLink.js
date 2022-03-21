import Link from 'next/link';

import { useRouter } from 'next/router';

const HeaderMenuLink = ({ text, href, external, color }) => {

  const { pathname } = useRouter();

  const linkColor = color === 'light' ? 'white' : 'text-ec-grayred';

  const inactiveOpacity = color === 'light' ? 'opacity-80' : 'opacity-50';

  const linkStyle = pathname === href ?
    `opacity-100 ${linkColor}` :
    `${inactiveOpacity} ${linkColor}`;

  return (
    <li className={`mb-4 ${linkStyle} transition-opacity hover:opacity-100`}>
      <Link href={href}>
        <a
          className="tracking-[.5em]"
          target={external ? "_blank" : "_self"}
          rel={external ? "noopener noreferrer" : ""}
        >
          {text}</a>
      </Link>
    </li>
  )
};

export default HeaderMenuLink;