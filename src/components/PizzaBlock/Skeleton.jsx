import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={415}
    viewBox="0 0 280 415"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="135" cy="90" r="90" />
    <rect x="0" y="205" rx="0" ry="0" width="280" height="27" />
    <rect x="0" y="253" rx="10" ry="10" width="280" height="83" />
    <rect x="0" y="373" rx="0" ry="0" width="87" height="30" />
    <rect x="144" y="364" rx="25" ry="25" width="133" height="50" />
  </ContentLoader>
);

export default Skeleton;
