import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Allreviews from '../Allreviews/Allreviews';


const Reviews = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Allreviews></Allreviews>
                </Row>
            </Container>
        </div>
    );
};

export default Reviews;