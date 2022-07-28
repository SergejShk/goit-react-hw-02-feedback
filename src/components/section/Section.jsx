import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <SectionStyled>
      {title && <h1>{title}</h1>}
      {children}
    </SectionStyled>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
