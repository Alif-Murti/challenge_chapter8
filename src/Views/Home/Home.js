import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import NavibarHome from '../../Components/NavibarHome/NavibarHome'
import HeroSect from '../../Components/HeroSect/HeroSect'
import Footer from '../../Components/Footer/Footer'
import style from './home.module.css'



const Home = () => {
  return (
    <>
        <section className={style.header}>
            <Container >
                <Row>
                    <Col md={12}>
                        <NavibarHome />
                    </Col>
                    <Col md={12}>
                        <HeroSect />
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col md={12}>
                        <Footer />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    

  )
}

export default Home