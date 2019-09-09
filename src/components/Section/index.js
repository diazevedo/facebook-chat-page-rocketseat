import React from 'react';

const Section = ({ classSection }) => {
  return <section className={classSection}> Section </section>;
};

export default Section;

Section.defaultProps = {
  classSection: 'main',
};
