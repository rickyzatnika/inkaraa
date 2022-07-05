import classes from './Form.module.css'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Select from 'react-bootstrap/FormSelect'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Modal from '../modal/Modal'
import Image from 'next/image'

const Forms = () => {



    const [validated, setValidated] = useState(false);
    const handleInput = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://v1.nocodeapi.com/rikcy/google_sheets/odWwbOWnWuqWmWYO?tabId=Sheet1', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify([[nama, email, noHp, noKTP, ticket, jumlahTicket, harga, new Date().toLocaleString()]])
            }
            );
            await response.json()
            setData({ ...data, nama: '', email: '', noHp: '', noKTP: '', ticket: '', jumlahTicket: '', harga: '' })

        } catch (err) {
            console.log(err)
        }

    };

    const [data, setData] = useState({
        nama: '',
        email: '',
        noHp: '',
        noKTP: '',
        ticket: '',
        jumlahTicket: '',

    })


    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const { nama, email, noHp, noKTP, ticket, jumlahTicket, harga } = data;


    const [openModal, setOpenModal] = useState(false);

    const defaultselect = 'BRONZE IDR 350';
    return (
        <>
            <div className={classes.form_ticket}>
                <h2 className={classes.formTitle}>Form Pemesanan Ticket</h2>
                <Row className={classes.GridForm} >
                    <Col md="6">
                        <Form noValidate validated={validated} className={`${classes.Form_Control} text white`} onInput={handleInput} onSubmit={handleSubmit} >

                            <Row className={classes.Form}>
                                <Form.Group className={`${classes.FormGroup} mb-3`} controlId="validationCustom01">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Masukkan Nama Lengkap"
                                        name="nama"
                                        value={nama}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className={`${classes.FormGroup} mb-3`} controlId="validationCustom02">
                                    <Form.Label>Alamat Email</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        placeholder="Example@gmail.com"
                                        name="email"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className={`${classes.FormGroup} mb-3`} as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>No. Handphone</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="+628xxxxxx"
                                        name="noHp"
                                        value={noHp}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className={`${classes.FormGroup} mb-3`} as={Col} md="6" controlId="validationCustom02">
                                    <Form.Label>No. Identitas</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="No. Identitas / NIK.KTP"
                                        name="noKTP"
                                        value={noKTP}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>16 - Digit</Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className={`${classes.FormGroup} mb-3`} as={Col} md="8" controld="validationCustomUsername">
                                    <Form.Label>Ticket</Form.Label>
                                    <InputGroup controlId="validationCustom02">
                                        <Form.Control as={Select} required={true} name='ticket' value={ticket} selected={ticket} type="select" onChange={handleChange}>
                                            <option value={''}>pilih ticket</option>
                                            <option value='BRONZE IDR 350' >BRONZE IDR 350.000</option>
                                            <option value='SILVER A IDR 550' >SILVER A IDR 550.000</option>
                                            <option value='SILVER B IDR 450' >SILVER B IDR 450.000</option>
                                            <option value='GOLD IDR 770' >GOLD IDR 770.000</option>
                                            <option value='PLATINUM IDR 1.100' >PLATINUM IDR 1.100.000</option>
                                        </Form.Control>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group className={`${classes.FormGroup} mb-3 align-center`} as={Col} md="4" >
                                    <Form.Label>Jumlah Ticket</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        placeholder="1"
                                        name="jumlahTicket"
                                        value={jumlahTicket}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Row>

                            <center><button type="submit" className={classes.button} onClick={() => {
                                setOpenModal(true)
                            }} >Submit form</button> {openModal && <Modal closeModal={setOpenModal} />}</center>
                        </Form>
                    </Col>
                    <Col md="6">
                        <Image 
                        width={1200} height={800}
                        src='/hargaTiket.png' alt="ticket senjafest" className={classes.LayoutTiket} />
                    </Col>
                </Row>
            </div>

        </>
    )
}

export default Forms