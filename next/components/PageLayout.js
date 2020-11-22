import React from 'react';
import { Container } from "react-bootstrap";

import Navbar from "./Navbar";

const PageLayout = ({ children, className }) => {
    return (
        <Container>
            <Navbar />

            <div className={`page-wrapper ${className}`}>{ children }</div>

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

export default PageLayout;