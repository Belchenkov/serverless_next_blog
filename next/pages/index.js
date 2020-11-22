import React from 'react';
import {
    Card,
    Col,
    Container,
    Image,
    Media,
    Row
} from "react-bootstrap";

import Navbar from "components/Navbar";

const Home = () => {
    return (
        <Container>
            <Navbar />
            <div className='blog-detail-page'>
                <Row>
                    <Col md="8">
                        {/* AUTHOR INTRO STARTS */}
                        <Media className="mb-4 admin-intro">
                            <Image
                                roundedCircle
                                width={64}
                                height={64}
                                className="mr-3"
                                src="https://avatars1.githubusercontent.com/u/16445267?s=460&u=502d2221b767f5c87445fb219a2f52fd82b4b203&v=4"
                                alt="Generic placeholder"
                            />
                            <Media.Body>
                                <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                                <p className="welcome-text">
                                    My name is Aleksey Belchenkov and I am an Fullstack Developer
                                    and this is my blog page.
                                </p>
                            </Media.Body>
                        </Media>
                        {/* AUTHOR INTRO ENDS */}
                    </Col>
                </Row>
                <hr/>
                {/* className from props */}
                <div className={`page-wrapper`}>
                    <Row className="mb-5">
                        <Col md="10">
                            {/* CardListItem STARTS */}
                            <Card className={`fj-card fj-card-list`}>
                                <div className="card-body-wrapper">
                                    <Card.Header
                                        className="d-flex flex-row">
                                        <img
                                            src={'https://via.placeholder.com/150'}
                                            className="rounded-circle mr-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"/>
                                        <div>
                                            <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                                            <Card.Text className="card-date">Placeholder Date</Card.Text>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                                        <Card.Text>Placeholder Subtitle</Card.Text>
                                    </Card.Body>
                                </div>
                                <a href="#" className="card-button">
                                    Read More
                                </a>
                            </Card>
                            {/* CardListItem ENDS */}
                        </Col>

                        <Col md="4">
                            <Card className={`fj-card`}>
                                <div className="card-body-wrapper">
                                    <Card.Header
                                        className="d-flex flex-row">
                                        <img
                                            src={'https://via.placeholder.com/150'}
                                            className="rounded-circle mr-3"
                                            height="50px"
                                            width="50px"
                                            alt="avatar"/>
                                        <div>
                                            <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                                            <Card.Text className="card-date">Placeholder Date</Card.Text>
                                        </div>
                                    </Card.Header>
                                    <div className="view overlay">
                                        <Card.Img
                                            src='https://via.placeholder.com/250'
                                            alt="Card image cap"
                                        />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                                        <Card.Text>Placeholder Subtitle</Card.Text>
                                    </Card.Body>
                                </div>
                                <a className="card-button">
                                    Read More
                                </a>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
            <footer className="page-footer">
                <div>
                    <a target="_blank" href="http://193.187.174.213/">Portfolio</a>{' | '}
                    <a target="_blank" href="https://github.com/Belchenkov">Github</a>{' | '}
                    <a target="_blank" href="https://career.habr.com/belchenkov--aleksey">Habr</a>
                </div>
            </footer>
        </Container>
    );
};

export default Home;