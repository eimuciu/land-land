import MobileNav from './MobileNav/MobileNav';
import DesktopNav from './DesktopNav/DesktopNav';
import { useWindowSize } from '../../customHooks/useWindowSize';

const NavBar = () => {
  const [width] = useWindowSize();
  return <header>{width < 1024 ? <MobileNav /> : <DesktopNav />}</header>;
};

export default NavBar;
