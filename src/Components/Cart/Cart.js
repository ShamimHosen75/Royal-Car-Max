import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Usereviews from '../../Hooks/Usereviews';

const Cart = () => {
    const[reviews, setReviews] = Usereviews();
    console.log(reviews);
    return (
        <div>
            <Container className='mb-5'>
                <Row>
                    {
                        reviews.slice(0, 3).map (p =><Col md="4" sm="12">
                            <div className='cart-container text-center border border-dark'>
                                 <h4 className='text-center mt-3'>{p.name}</h4><hr />
                                 <p className='px-3'>Your dealership might already have some interactive kiosks around the showroom that provide information about sales and vehicle features. You can also use these devices to ask customers about their experiences{p.review}</p>
                                 <h5 className='mb-3'>Rating is : {p.ratting}</h5>

                            </div>
                        </Col>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Cart;