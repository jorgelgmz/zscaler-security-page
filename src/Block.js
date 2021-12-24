import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

const Block = ({ username, category, url, reasoncode, reason }) => (
  <Container as="main" className="main">
    <Container>
      <Row className="justify-content-center">
        <Alert variant="danger" className="text-center col-lg-10">
          <i className="fa fa-ban"></i> Sorry, this page is blocked for security reasons.
        </Alert>
      </Row>
    </Container>
    <Container className="pt-4 pb-4">
      <Row className="justify-content-center">
        <div className="col-lg-8">
          <h2>Website Blocked</h2>
          <p>
            Hi <strong>{username}</strong>. Employees are not allowed to browse <strong>{category} </strong>
            categories on corporate owned devices.
          </p>
          <p>
            You tried to visit <strong>{url}</strong>, which was blocked by security policy: <strong>{reasoncode}</strong>
          </p>
          <strong>Reason:</strong>
          <p>{reason}</p>
          <p>For any questions, concerns, or to report suspicious activity, please open a case with your Security team.</p>
        </div>
      </Row>
    </Container>
    <div className="button button-icon justify-content-md-center mb-5">
      <a href="#" target="_blank" rel="noopener noreferrer nofollow">
        Read Technology Acceptable Use Policy <i className="fa fa-angle-right" aria-hidden="true"></i>
      </a>
    </div>
  </Container>
);

Block.propTypes = {
  username: PropTypes.string,
  category: PropTypes.string,
  url: PropTypes.string,
  reasoncode: PropTypes.string,
  reason: PropTypes.string,
};

export default Block;
