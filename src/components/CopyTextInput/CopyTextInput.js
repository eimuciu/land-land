import { useState } from 'react';
import { main, copyBtn, successBox } from './CopyTextInput.module.scss';

const CopyTextInput = ({ placeholder, value }) => {
  const [message, setMessage] = useState('Your email is confirmed!');
  return (
    <>
      <span className={successBox}>
        <i className="fa fa-check-circle"></i>
        {message}
      </span>
      <div className={main}>
        <span
          onClick={() => {
            navigator.clipboard.writeText(placeholder);
            setMessage('Link copied!');
          }}
          role="button"
          className={copyBtn}
        >
          Copy
        </span>
        <input disabled type="text" value={value} placeholder={placeholder} />
      </div>
    </>
  );
};

export default CopyTextInput;
