import {
  main,
  flexContainer,
  storeBox,
  imageBox,
  ratingsBox,
  linkBox,
} from './CommercialContent.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const CommercialContent = () => {
  return (
    <section className={main}>
      <section className={flexContainer}>
        <div className={linkBox}>
          <Link href="https://chrome.google.com/webstore/detail/ratepunk-same-hotel-way-c/gdaioanblcnghddimngklkhgcbomfdck?utm_source=ratepunk">
            <a target="_blank">
              <div className={storeBox}>
                <div className={imageBox}>
                  <Image src="/assets/Chrome Icon.svg" width={50} height={50} />
                </div>
                <div>
                  <p>available in the</p>
                  <p>chrome web store</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div className={linkBox}>
          <Link href="https://apps.apple.com/app/ratepunk/id1607823726">
            <a target="_blank">
              <div className={storeBox}>
                <div className={imageBox}>
                  <Image
                    src="/assets/Apple Store Icon.svg"
                    width={50}
                    height={50}
                  />
                </div>
                <div>
                  <p>available in the</p>
                  <p>apple app store</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
        <div>
          <div className={ratingsBox}>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </div>
          Chrome Store reviews
        </div>
      </section>
    </section>
  );
};

export default CommercialContent;
