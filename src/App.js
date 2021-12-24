import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ReactComponent as Logo } from './img/zscaler_logo.svg';
import { ReactComponent as City } from './img/city.svg';
import Caution from './Caution';
import Block from './Block';
import './App.css';

const params = new URLSearchParams(window.location.search);
const Action = params.get('action');
const Category = params.get('cat');
const Reason = params.get('reason');
const Reasoncode = params.get('reasoncode');
const URL = params.get('url');
const Username = params.get('user');
const ZSQ = params.get('zsq');

const Header = () => (
  <Navbar>
    <Container className="justify-content-center">
      <Row className="mt-4 mb-4">
        <a href="#">
          <Logo alt="Company Logo" height="75px" />
        </a>
      </Row>
    </Container>
  </Navbar>
);

const Main = () =>
  Reasoncode === 'METHOD_CAUTIONED' ? (
    <Caution action={Action} category={Category} reason={Reason} reasoncode={Reasoncode} url={URL} username={Username} zsq={ZSQ} />
  ) : (
    <Block action={Action} category={Category} reason={Reason} reasoncode={Reasoncode} url={URL} username={Username} zsq={ZSQ} />
  );

const Footer = () => (
  <>
    <Container as="footer">
      <City alt="City watermark" className="footer" />
    </Container>
  </>
);

const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

export default App;
