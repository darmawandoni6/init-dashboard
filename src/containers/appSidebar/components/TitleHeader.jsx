import React from 'react';

const TitleHeader = ({ img }) => {
  return (
    <div className="sidebar-brand d-none d-md-flex">
      <img src={img} alt="" />
    </div>
  );
};

export default TitleHeader;
