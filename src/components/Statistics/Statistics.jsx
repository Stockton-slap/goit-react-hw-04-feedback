import PropTypes from 'prop-types';

import { StatsList, StatsItem } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <StatsList>
      <StatsItem>
        Good: <b>{good}</b>
      </StatsItem>
      <StatsItem>
        Neutral: <b>{neutral}</b>
      </StatsItem>
      <StatsItem>
        Bad: <b>{bad}</b>
      </StatsItem>
      <br />
      <StatsItem>
        Total: <b>{total}</b>
      </StatsItem>
      <StatsItem>
        Positive feedback: <b>{positivePercentage}</b>
      </StatsItem>
    </StatsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
