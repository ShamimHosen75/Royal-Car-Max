import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../Images/img.png';
import Cart from '../Cart/Cart';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className='title-container'>
                            <h2 className='web-title text-black'>Royal CarMax 2022</h2>
                            <h2 className='web-title text-danger'>Your best Choice</h2>
                        </div>
                        <div className='description-container'>
                           <p>Royal CarMax is popular in Bangladesh for quality service.We make sure a stress-free car rental experience by providing superior services that provide to our customers individual needs.</p>
                       </div>
                        <button className='button-design bg-danger text-white p-2 m-2'>Live demo</button>
                    </Col>  
                    <Col>
                       <div className='show-container mt-3'>
                           <img className='show-img' src={img} alt="" />
                       </div>
                   </Col>
                </Row>
                <Row>
                <h2 className='web-title text-danger text-center py-5'>Customer Reviews</h2>
                <Cart></Cart>
                </Row>
            </Container>
        </div>
    );
};

export default Home;