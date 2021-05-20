import React, { Component } from 'react'
import imageMaxim from '../img/Maxim.jpg' // relative path to image 
import imageAndrey from '../img/Andrey.jpg' // relative path to image 
import { useTranslation } from 'react-i18next'
import "../../src/i18n"
import { Container } from 'react-bootstrap'
import { Jumbotron } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function AboutDevelopers() {

    const { t } = useTranslation();
    return (
        <Jumbotron style={{ textAlign: "center" }} id="aboutDevelopers">
            <Container>
                <hr></hr>
                <h1 class="jumbotron-heading">{t("developers.team")}</h1>
                <p class="lead text-muted">{t("developers.about")}</p>
                <Row>
                    <Col md={12} lg={6}>
                        <h2>{t("developers.max")}</h2>
                        <img src={imageMaxim} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                        <Link to="https://github.com/pro100-Max"><h5>Github: https://github.com/pro100-Max</h5></Link>
                    </Col>
                    <Col md={12} lg={6}>
                        <h2>{t("developers.andrei")}</h2>
                        <img src={imageAndrey} id="imgWriterDay" class="rounded-circle" id="img-develop"></img>
                        <Link to="https://github.com/Soler-03"><h5>Github: https://github.com/Soler-03</h5></Link>
                    </Col>
                </Row>
            </Container>
        </Jumbotron >
    );

}