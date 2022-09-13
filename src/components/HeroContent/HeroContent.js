import { useState } from 'react';
import {
  main,
  flexContainer,
  flexItem,
  firstItem,
  secondItem,
  secondItemFlex,
  sIcon,
  sContent,
  orderOne,
  orderTwo,
} from './HeroContent.module.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextInput from '../TextInput/TextInput';
import MainButton from '../MainButton/MainButton';
import CopyTextInput from '../CopyTextInput/CopyTextInput';
import { sendEmail } from '../../api/api';
import Image from 'next/image';

const validation = Yup.object({
  email: Yup.string()
    .trim()
    .email('Must be a valid email address')
    .required('This field is required'),
});

const FirstCard = () => {
  const [successResponse, setSuccessResponse] = useState(false);
  const [referralLink, setReferralLink] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: { email: '' },
    validateOnChange: false,
    validationSchema: validation,
    onSubmit: async (values) => {
      setIsLoading(true);
      const apiresp = await sendEmail(values);
      if (apiresp.record) {
        setReferralLink(apiresp.record.email.email);
        setSuccessResponse(true);
        setIsLoading(false);
        return;
      }
      alert('Something went wrong');
      setIsLoading(false);
    },
  });

  return (
    <>
      <h2>REFER FRIENDS AND GET REWARDS</h2>
      <p>
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      {!successResponse && (
        <div>
          <form onSubmit={formik.handleSubmit}>
            <TextInput
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              placeholder="Enter your email address"
              errorMsg={formik.errors && formik.errors.email}
            />
            <MainButton
              type="submit"
              text={isLoading ? 'Loading...' : 'Get Referral Link'}
            />
          </form>
        </div>
      )}
      {successResponse && (
        <div>
          <CopyTextInput
            placeholder={`https://www.ratepunk.com/referral/${referralLink}`}
          />
        </div>
      )}
      <p style={{ marginTop: '100px', fontSize: '12px' }}>
        Limits on max rewards apply.
      </p>
    </>
  );
};

const SecondCard = () => {
  return (
    <>
      <div className={secondItemFlex}>
        <div className={sIcon}>
          <Image
            src="/assets/Invite Friends Img.svg"
            width={100}
            height={100}
          />
        </div>
        <div className={sContent}>
          <p>STEP 1</p>
          <h3>INVITE FRIENDS</h3>
          <p>Refer friends with your unique referral link.</p>
        </div>
      </div>
      <div className={secondItemFlex}>
        <div className={`${sIcon} ${orderTwo}`}>
          <Image src="/assets/Collect coins img.svg" width={100} height={100} />
        </div>
        <div className={`${sContent} ${orderOne}`}>
          <p>STEP 2</p>
          <h3>COLLECT COINS</h3>
          <p>
            Get 1 coin for each friend that installs our extension using your
            referral link.
          </p>
        </div>
      </div>
      <div className={secondItemFlex}>
        <div className={sIcon}>
          <Image src="/assets/Get voucher img.svg" width={100} height={100} />
        </div>
        <div className={sContent}>
          <p>STEP 3</p>
          <h3>GET VOUCHER</h3>
          <p>
            Redeem for a $20 hotel booking voucher once you collect 20 coins.
          </p>
        </div>
      </div>
    </>
  );
};

const HeroContent = () => {
  return (
    <section className={main}>
      <section className={flexContainer}>
        <section className={`${flexItem} ${firstItem}`}>
          <FirstCard />
        </section>
        <section className={`${flexItem} ${secondItem}`}>
          <SecondCard />
        </section>
      </section>
    </section>
  );
};

export default HeroContent;
