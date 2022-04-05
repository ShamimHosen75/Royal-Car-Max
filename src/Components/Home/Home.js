import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { img } from '../../Assets/Images/img2.png';
import Cart from '../Cart/Cart';
import './style.css';
const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col md='7' sm='12'>
                        <div className='title-container'>
                            <h2 className='web-title text-warning'>Royal CarMax 2022</h2>
                            <h2 className='web-title text-primary'>Your best Choice</h2>
                        </div>
                        <div className='description-container'>
                           <p>Royal CarMax is popular in Bangladesh for quality service.We make sure a stress-free car rental experience by providing superior services that provide to our customers individual needs. Customer satisfaction by providing quality services is our mission.</p>
                       </div>
                        <button className='button-design'>Live demo</button>
                    </Col>  
                    <Col md='5' sm='12'>
                       <div className='show-container mt-3'>
                           <img className='show-img' src={img} alt="" />
                       </div>
                   </Col>
                </Row>
                <Row>
                <h2 className='web-title text-primary text-center py-5'>Customer Reviews</h2>
                <Cart></Cart>
                </Row>
            </Container>
        </div>
    );
};

export default Home;