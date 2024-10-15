import React from 'react'
import'./App.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter, faUniregistry, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <div>
      <div className='footerBackground'>
        <Container fluid>
          <Container>
            <Row>
              <Col lg={2}>
                <div className='footerLogo'>
                  <FontAwesomeIcon icon={faUniregistry} size='4x'/>
                </div>
              </Col>
              <Col>
                <h3>Office Address</h3>
                <pre className='address'>
                  Corporate office :<br/>
                  Plot No:364/11,3rd Floor,<br/>
                  Temple Lands,<br/>
                  Vivekanadanagar Colony,<br/>
                  KukatPally, Hyderabad - 500072.
                </pre>
              </Col>
              <Col>
                <h3>Quick Links</h3>
                <ul className='unorderedList'>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>Products</a></li>
                  <li><a href='#'>Projects</a></li>
                  <li><a href='#'>Clints</a></li>
                  <li><a href='#'>Career</a></li>
                  <li><a href='#'>About</a></li>
                </ul>
              </Col>
              <Col>
              <h3>Contact Us</h3>
                <ul className='unorderedList'>
                  <li><FontAwesomeIcon icon={faYoutube} color='red'/></li>
                  <li><FontAwesomeIcon icon={faFacebook} color='#5890FF'/></li>
                  <li><FontAwesomeIcon icon={faInstagram} color='4f5bd5'/></li>
                  <li><FontAwesomeIcon icon={faTwitter} color='#1da1f2'/></li>
                  <li><FontAwesomeIcon icon={faLinkedin} color='#0077B5'/></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
      <div className='footerBottam'>
        <Container fluid>
          <Container>
            <Row>
              <Col lg={12}>
              <h5>Desined by RajeshBirlangi.</h5>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    </div>
  )
}
