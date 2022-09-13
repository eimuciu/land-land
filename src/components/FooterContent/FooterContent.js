import {
  main,
  flexContainer,
  firstFlexItem,
  secondFlexItem,
  thirdFlexItem,
  iconBox,
  copyRightItem,
  emailImg,
} from './FooterContent.module.scss';
import Image from 'next/image';

const FooterContent = () => {
  return (
    <footer className={main}>
      <section className={flexContainer}>
        <div className={firstFlexItem}>
          <Image src="/assets/Group 12.svg" width={100} height={30} />
          <p>
            Ratepunk compares hotel prices across major online travel agancies.
            When you search for a room, Ratepunk extension scans the top booking
            sites and runs a price comparison, so you can be confident in
            knowing you're getting the best deal!
          </p>
        </div>
        <div className={secondFlexItem}>
          <h4>QUICK LINKS</h4>
          <p>Price Comparison</p>
          <p>Chrome Extension</p>
          <p>How It Works</p>
          <p>Ratepunk Blog</p>
          <p>Privacy Policy</p>
        </div>
        <div className={thirdFlexItem}>
          <div>
            <h4>CONTACT</h4>
            <Image src="/assets/email icon.svg" width="20px" height="20px" />
            <span className={emailImg}>hi@ratepunk.com</span>
          </div>
          <div>
            <h4>SOCIAL</h4>
            <span className={iconBox}>
              <Image
                src="/assets/Icon awesome-instagram.svg"
                width="10px"
                height="10px"
              />
            </span>
            <span className={iconBox}>
              <Image
                src="/assets/Icon awesome-facebook-f.svg"
                width="10px"
                height="10px"
              />
            </span>
            <span className={iconBox}>
              <Image
                src="/assets/Icon awesome-linkedin-in.svg"
                width="10px"
                height="10px"
              />
            </span>
            <span className={iconBox}>
              <Image
                src="/assets/Icon awesome-twitter.svg"
                width="10px"
                height="10px"
              />
            </span>
            <span className={iconBox}>
              <Image
                src="/assets/Icon simple-tiktok.svg"
                width="10px"
                height="10px"
              />
            </span>
          </div>
        </div>
      </section>
      <div className={copyRightItem}>
        <p>&copy; 2021 Ratepunk. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterContent;
