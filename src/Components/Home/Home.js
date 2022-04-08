import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../Images/img.png';
import Cart from '../Cart/Cart';
import './Home.css';
const Home = () => {

    const navigate = useNavigate();
    const seeAllReviews = () => {
        navigate(`/reviews`);

    }
    return (
        <div>
            <Container className='main-container'>
                <Row>
                    <Col>
                        <div className='title-container'>
                            <h2 className='web-title text-black'>Royal CarMax 2022</h2>
                            <h3 className='web-title text-danger'>Your best Choice</h3>
                        </div>
                        <div className='description-container'>
                           <p>Royal CarMax is popular in Bangladesh for quality service.We make sure a stress-free car rental experience by providing superior services that provide to our customers individual needs.</p>
                       </div>
                        <button className='button-design bg-danger text-white mt-3'>Live demo</button>
                    </Col>  
                    <Col>
                       <div className='show-container mt-3'>
                           <img className='show-img' src={img} alt="" />
                       </div>
                   </Col>
                </Row>
                <Row>
                <h3 className='web-title text-danger text-center py-5'>Customer Reviews</h3>
                <Cart></Cart>
                <button onClick={seeAllReviews} className='mb-5 button-design bg-danger text-white w-25'>See All Reviews</button>
                </Row>
            </Container>
        </div>
    );
};

export default Home;