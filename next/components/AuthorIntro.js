import React from 'react';
import { Col, Image, Media, Row } from "react-bootstrap";

const AuthorIntro = () => {
    return (
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
    );
};

export default AuthorIntro;