import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const Caution = ({ username, category, url, reasoncode, reason, zsq }) => (
  <Container as="main" className="main">
    <Container>
      <Row className="justify-content-center">
        <Alert variant="warning" className="text-center col-lg-10">
          <i className="fa fa-warning"></i> Are you sure you want to visit the site?
        </Alert>
      </Row>
    </Container>
    <Container className="pt-4 pb-4">
      <Row className="justify-content-center">
        <div className="col-lg-8">
          <h2>Website Warning</h2>
          <p>
            Hi <strong>{username}</strong>. You tried to visit <strong>{url}</strong>.
          </p>
          <p>
            This website is categorized as <strong>{category} </strong> and may contain dangerous content.
          </p>
          <p>
            Security policy <strong>{reasoncode}</strong> is intended to remind you to excersie caution. Click the <strong>Continue</strong> button
            below if you would still like to visit the website. Otherwise close the window.
          </p>
          <strong>Reason:</strong>
          <p>{reason}</p>
          <p>
            Click
            <a href="#" target="_blank" rel="noopener noreferrer nofollow">
              Read Technology Acceptable Use Policy
            </a>
            to learn more about our Policies. For any questions, concerns, or to report suspicious activity, please open a case with your Security
            team.
          </p>
        </div>
      </Row>
    </Container>
    <div className="button button-icon justify-content-md-center mb-5 block text-center">
      <a href={`https://gateway.zscalertwo.net/_sm_ctn?_sm_url=${url}&_sm_rid=${zsq.slice(0, -3)}&_sm_cat=${category}`}>
        Continue<i className="fa fa-angle-right" aria-hidden="true"></i>
      </a>
    </div>
  </Container>
);

Caution.propTypes = {
  username: PropTypes.string,
  category: PropTypes.string,
  url: PropTypes.string,
  reasoncode: PropTypes.string,
  reason: PropTypes.string,
  zsq: PropTypes.string,
};

export default Caution;
