import React from 'react'
import './App.css';
import { Col, Container, FormControl, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniregistry } from '@fortawesome/free-brands-svg-icons';
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function MainHead() {
  return (
    <div className="main">
        <div>
            <Container fluid>
                <Row className='shadow p-3 mb-2 bg-white rounded'>
                    <Col lg="auto">
                        <FontAwesomeIcon icon={faUniregistry} size='2x'/>
                    </Col>
                    <Col lg="auto" className='mainDecoration' ><a href='#'>Home</a></Col>
                    <Col lg="auto" className='mainDecoration'><a href='#'>Products</a></Col>
                    <Col lg="auto" className='mainDecoration'><a href='#'>Projects</a></Col>
                    <Col lg="auto" className='mainDecoration'><a href='#'>Clints</a></Col>
                    <Col lg={1} className='mainDecoration'><a href='#'>Career</a></Col>
                    <Col lg={4} className='searchBox'>
                        <FormControl type='text' placeholder='Search Somthing here.......' size='sm'/>
                    </Col>
                    <Col lg={1} className='text-end mainDecoration'><a href='#'>About</a></Col>
                    <Col lg={1} className='text-end mainDecoration' ><a href='#'>Contacts</a></Col>
                    <Col lg={1} className='text-end mainDecoration' ><a href='#'>Account</a></Col>
                    <Col lg="auto">
                        <FontAwesomeIcon icon={faCircleArrowDown} size='2x'/>
                    </Col>
                </Row>        
            </Container>
        </div>  
  </div>
  )
}
