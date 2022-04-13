import React,{} from 'react'
//import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'

import { Col, Row, Button} from 'react-bootstrap'

import style from './searchbar.module.css'

const SearchBar = () => {
  return (
    <section className={style.searchbar_container}>
        <Form className={'p-4 ' + style.searchbox_active}>
                    <Row className={'gap-lg-0 gap-3'}>
                        <Col lg={10} md={12}>
                            <Row>
                                <Col lg={3} className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Tipe Driver</Form.Label>
                                        <Form.Select className='ddown' placeholder="Pilih Tipe Driver" name="driver">
                                            <option>Pilih Tipe Driver</option>
                                            <option value="supir">Dengan Supir</option>
                                            <option value="tanpa-supir">Tanpa Supir(lepas kunci)</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col lg={3}  className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Tanggal</Form.Label>
                                        <Form.Control type="date" placeholder="Pilih Tanggal" name="date" />
                                    </Form.Group>
                                </Col>
                                <Col lg={3}  className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Waktu Jemput/Ambil</Form.Label>
                                        <Form.Control type="time" placeholder="Pilih Waktu" name="time" />
                                    </Form.Group>
                                </Col>
                                <Col lg={3}  className={'mt-2'}>
                                    <Form.Group>
                                        <Form.Label>Jumlah Penumpang</Form.Label>
                                        <Form.Control type="number" placeholder="Jumlah Penumpang" name="passenger"/>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={2} md={12} className={'mt-auto d-grid gap-2 '}>
                            <Button variant='success' type="submit">
                                Cari Mobil
                            </Button>
                        </Col>
                    </Row>
                </Form>
    </section>
  )
}

export default SearchBar

