import PropTypes from 'prop-types';
import { FeedbackOptionsListStyled } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackOptionsListStyled>
      {options.map(option => (
        <li key={option.name}>
          <button type="button" name={option.name} onClick={onLeaveFeedback}>
            {option.title}
          </button>
        </li>
      ))}
    </FeedbackOptionsListStyled>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
