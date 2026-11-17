import React from 'react';
import Navbar from './Navbar/Navbar';
import Home from './Home/Home';
import Features from './Features/Features';
import Demo from './Demo/Demo';
import GetStarted from './GetStarted/GetStarted';
import Team from './Team/Team';
// import Footer from './Footer/Footer';


const Page = (): JSX.Element => {
  return (
    <div className="pageContainer">
      <Navbar />
      <div id="home" tabIndex={-1} className="pageSection">
        <Home />
      </div>
      <div id="features" tabIndex={-1} className="pageSection">
        <Features />
      </div>
      <div id="demo" tabIndex={-1} className="pageSection">
        <div>
          <Demo />
        </div>
      </div>
      <div id="getstarted" tabIndex={-1} className="pageSection">
        <GetStarted />
      </div>
      <div id="team" tabIndex={-1} className="pageSection">
        <Team />
      </div>
    </div>
  );
};

export default Page;
