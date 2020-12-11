import React from 'react';

import './styles.css';

const Row = ({ index }) => (
  <div className={`container__row --flex-${index % 2 === 0 ? '1' : '5'}`}>
    <div className="container__row--corner --gray"></div>
    <div className="container__row--select --blue"></div>
    <div className="container__row--corner --gray"></div>
  </div>
)

export default Row;
