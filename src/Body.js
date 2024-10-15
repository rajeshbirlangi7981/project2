import React from 'react'
import './App.css';
import { Button, Carousel, CarouselCaption, CarouselItem, Col, Container, Form, FormControl, FormGroup, FormLabel, Ratio, Row } from 'react-bootstrap';

export default function Body() {
  return (
    <Container fluid className='body'>
        <Container >
            <Row>
                <Col className='bodyUpper'>
                    <div className='imageSection'>
                        <Carousel>
                            <CarouselItem interval={1000}>
                                <Ratio aspectRatio="4x3">
                                    <img src='https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728464400&semt=ais_hybrid' alt='NaturePicture'/>
                                </Ratio>
                                <CarouselCaption>
                                    <h1>First Slide</h1>
                                    <p>Nature is beautiful than any thing.</p>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem interval={1000}>
                                <Ratio aspectRatio="4x3">
                                    <img src='https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728464400&semt=ais_hybrid' alt='NaturePicture'/>
                                </Ratio>
                                <CarouselCaption>
                                    <h1>Second Slide</h1>
                                    <p>Nature is beautiful than any thing.</p>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem interval={1000}>
                                <Ratio aspectRatio="4x3">
                                    <img src='https://img.freepik.com/free-photo/photorealistic-view-tree-nature-with-branches-trunk_23-2151478040.jpg?size=626&ext=jpg&ga=GA1.1.1819120589.1728464400&semt=ais_hybrid' alt='NaturePicture'/>
                                </Ratio>
                                <CarouselCaption>
                                    <h1>Third Slide</h1>
                                    <p>Nature is beautiful than any thing.</p>
                                </CarouselCaption>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </Col>
                <Col className='shadow  bg-white rounded bodyUpper'>
                    <div>
                        <Ratio aspectRatio='4x3'>
                            <Form>
                                <FormGroup className="mb-3">
                                    <FormLabel>First Name</FormLabel>
                                    <FormControl required type='text' placeholder='First Name' className='custom-input'></FormControl>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <FormLabel>Last Name</FormLabel>
                                    <FormControl required type='text' placeholder='Last Name'></FormControl>
                                </FormGroup>
                                <FormGroup className="mb-3">
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl required type='number' placeholder='Phone Number'></FormControl>
                                </FormGroup>
                                {/* <FormGroup className="mb-3">
                                    <FormLabel>User Name</FormLabel>
                                    <FormControl required type='text' placeholder='User Name'></FormControl>
                                </FormGroup> */}
                                <FormGroup className="mb-3">
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl required type='text' placeholder='Email'></FormControl>
                                </FormGroup>
                                <Button variant='primary' type='submit'>Signin</Button>
                            </Form>
                        </Ratio>
                    </div>
                </Col> 
                <Form className='bodyBottam'>
                <p className='para'>We are here to help you click below to get more details.....</p>  
                
                <Button variant='primary' type='submit'>See More</Button>
                </Form>
            </Row>
        </Container>
    </Container>
  )
}
