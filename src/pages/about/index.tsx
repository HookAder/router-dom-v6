import React from 'react';
import Header from '../../common/header';
import NavBar from '../../common/nav';
import './style.scss';

const About: React.FC = () => {
  return (
    <div>
      <Header title="关于" />
      <h1>About View</h1>
      <NavBar />
    </div>
  );
};

export default About;