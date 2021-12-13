import { IoTriangleOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import style from '../../assets/components_styles/homepage.module.css';

const handleClick = (event) => {
  event.preventDefault();
};

const CustomLeftArrow = ({ onClick }) => (
  <div className="left-container">
    <IoTriangleOutline onClick={() => onClick()} onKeyDown={() => handleClick()} aria-hidden="true" className={style.custom_left_arrow} />
  </div>
);
const CustomRightArrow = ({ onClick }) => (
  <div className="right-container">
    <IoTriangleOutline onClick={() => onClick()} onKeyDown={() => handleClick()} aria-hidden="true" className={style.custom_right_arrow} />
  </div>
);

CustomLeftArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

CustomRightArrow.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export {
  CustomLeftArrow,
  CustomRightArrow,
};
