import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import NavibarHome from '../../Components/NavibarHome/NavibarHome'
import style from './home.module.css'



const Home = () => {
  return (
    <>
        <section className={style.bg_nav}>
            <Container >
                <Row>
                    <Col md={12}>
                        <NavibarHome />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
    

  )
}

export default Home