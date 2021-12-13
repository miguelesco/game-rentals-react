import { IoTriangleOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

const handleClick = (event) => {
  event.preventDefault();
};

const CustomLeftArrow = ({ onClick }) => (
  <div className="left-container">
    <IoTriangleOutline onClick={() => onClick()} onKeyDown={() => handleClick()} aria-hidden="true" className="custom-left-arrow" />
  </div>
);
const CustomRightArrow = ({ onClick }) => (
  <div className="right-container">
    <IoTriangleOutline onClick={() => onClick()} onKeyDown={() => handleClick()} aria-hidden="true" className="custom-right-arrow" />
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
