import PropTypes from 'prop-types';

import { Button, FeedbackBtnList } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <FeedbackBtnList>
      {options.map((option, i) => {
        return (
          <li key={i}>
            <Button
              type="button"
              name={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          </li>
        );
      })}
    </FeedbackBtnList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
