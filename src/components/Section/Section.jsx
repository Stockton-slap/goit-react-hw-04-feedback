import PropTypes from 'prop-types';

import { FeedbackSection, Title } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
