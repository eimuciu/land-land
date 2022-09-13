import { useState, useRef, useEffect } from 'react';
import {
  container,
  main,
  hamburgerContainer,
  hamburgerLinks,
  hamburgerMenu,
} from './MobileNav.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [elHeight, setElHeight] = useState(52);

  const menuRef = useRef(null);

  useEffect(() => {
    isOpen ? setElHeight(menuRef.current.scrollHeight) : setElHeight(52);
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav ref={menuRef} className={main} style={{ height: `${elHeight}px` }}>
      <div className={container}>
        <Image
          src="/assets/Group 12.svg"
          alt="logo"
          width={100}
          height={'50%'}
        />
        <div className={hamburgerContainer}>
          <div className={hamburgerMenu} role="button" onClick={toggleMenu}>
            {!isOpen ? (
              <i className="fa fa-bars"></i>
            ) : (
              <i className="fa fa-close"></i>
            )}
          </div>
        </div>
      </div>
      <div className={hamburgerLinks}>
        <Link href="/">
          <a onClick={closeMenu}>Chrome Extension</a>
        </Link>
        <Link href="/">
          <a onClick={closeMenu}>Price Comparison</a>
        </Link>
        <Link href="/">
          <a onClick={closeMenu}>Blog</a>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
