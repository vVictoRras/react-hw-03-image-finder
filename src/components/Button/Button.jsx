import PropTypes from 'prop-types';

const Button = ({ label, onBtnClick }) => (
  <button className="Button" type="button" onClick={onBtnClick}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onBtnClick: PropTypes.func.isRequired,
};

export default Button;
