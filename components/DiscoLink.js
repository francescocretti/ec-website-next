import Link from 'next/link';

const DiscoLink = ({ children, href, border, color }) => {

  const borderClass = border ? 'border-b' : '';

  const colorClass = color === 'light' ? 'text-ec-yellow' : 'text-ec-grayred';

  return (
    <Link href={href} >
      <a
        className={`${colorClass} inline-flex items-center text-[40px] mb-10 pb-10 ${borderClass} border-ec-grayred-100 hover:opacity-50`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </Link>
  )
};

export default DiscoLink;