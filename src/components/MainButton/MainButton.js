import { main } from './MainButton.module.scss';

const MainButton = ({ text, onClick, type }) => {
  return (
    <button type={type} className={main} onClick={onClick}>
      {text}
    </button>
  );
};

export default MainButton;
