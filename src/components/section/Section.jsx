import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section>
      {children[0]}
      <h1>{title}</h1>
      {children[1]}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
