import { container, main, navLinks } from './DesktopNav.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const DesktopNav = () => {
  return (
    <nav className={main}>
      <div className={container}>
        <Image
          src="/assets/Group 12.svg"
          alt="logo"
          width={100}
          height={'100%'}
        />
        <div className={navLinks}>
          <Link href="/">
            <a>Chrome Extension</a>
          </Link>
          <Link href="/">
            <a>Price Comparison</a>
          </Link>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
