import { main, icon, errorBox } from './TextInput.module.scss';
import Image from 'next/image';

const emailIcon = '/assets/email icon.svg';

const TextInput = ({ errorMsg, onChange, placeholder, value, name }) => {
  return (
    <>
      <span className={errorBox}>{errorMsg}</span>
      <div className={main}>
        <div className={icon}>
          <Image src={emailIcon} width="20px" height="20px" />
        </div>
        <input
          onChange={onChange}
          name={name}
          value={value}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default TextInput;
