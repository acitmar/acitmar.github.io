import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavBarAcitmar from './components/navbar/NavBarAcitmar';
import GroupCards from './components/GroupCards/GroupCards';
import CarouselAcitmar from './components/CarouselAcitmar/CarouselAcitmar'
import FooterAcitmar from './components/FooterAcitmar/FooterAcitmar';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import logo from './img/acitmarLOGO.gif'
import video from './img/videoAcitmar.gif';
import visual_one from './img/visual1.gif'
import visual_two from './img/visual2.gif'

import './App.css';

const App = () => (
  <MemoryRouter>
    <NavBarAcitmar></NavBarAcitmar>
    <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
    />
    <img
          className="d-block w-100"
          src={video}
          alt="Second slide"
    />
    <CarouselAcitmar></CarouselAcitmar>
    <img
          className="d-block w-100"
          src={visual_two}
          alt="First slide"
    />
    <img
          className="d-block w-100"
          src={visual_one}
          alt="First slide"
    />
    <Container className="p-3">
      <Container className="p-5 mb-4 bg-light rounded-3">
        <GroupCards></GroupCards>
      </Container>
      <Container className="p-5 mb-4 bg-light rounded-3">
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="centroacitmar"
            options={{height: 1000}}
          />
      </Container>
    </Container>
    <FooterAcitmar></FooterAcitmar>
  </MemoryRouter>
);

export default App;
