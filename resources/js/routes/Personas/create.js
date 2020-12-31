import React, { Component, Fragment } from 'react';
import { Form, Input, Button, Card, Row, Col, Typography } from 'antd';
import { connect } from 'react-redux';
import {agregarPersona} from '../../appRedux/actions/PersonasActions';
const { Title } = Typography;

class create extends Component {
    state = {
        nombre: '',
        apellidos: '',
        telefono: '',
        direccion: ''
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleSubimit = e => {
        // e.preventDefault();
        const {nombre, apellidos, telefono, direccion} = this.state
        const datos = {
            nombre,
            apellidos,
            telefono,
            direccion
        }
        this.props.agregarPersona(datos);
        this.props.history.push('/personas');
    }

    handleCancel = () => {
        this.props.history.push('/personas');
    }

    render() {
        return (
            <Fragment>
                <Card className="gx-card">
                    <Title level={4} className="gx-text-center gx-text-uppercase">Datos Personales</Title>
                    <Form
                        onFinish={this.handleSubimit}
                        name="persona"
                    >
                        <Row gutter={[16, 8]}>
                            <Col md={12} sm={12} xs={24} span={12}>
                                <Form.Item name="nombre" label="Nombre" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} rules={[{required: true, message: 'El campo es obligatorio'}]}>
                                    <Input
                                        name="nombre"
                                        type="text"
                                        placeholder="Escriba su nombre"
                                        onChange={this.handleChange}
                                        value={this.state.nombre}
                                    />
                                </Form.Item>
                            </Col>
                            <Col md={12} sm={12} xs={24} span={12}>
                                <Form.Item name="apellidos" label="Apellidos" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} rules={[{required: true, message: 'Este campo es obligatorio'}]}>
                                    <Input
                                        name="apellidos"
                                        type="text"
                                        placeholder="Escriba sus apellidos"
                                        onChange={this.handleChange}
                                        value={this.apellidos}

                                    />
                                </Form.Item>
                            </Col>
                            <Col md={12} sm={12} xs={24} span={12}>
                                <Form.Item name="telefono" label="Telefono" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} rules={[{required: true, message: 'Este campo es obligatorio'}]}>
                                    <Input
                                        name="telefono"
                                        type="text"
                                        placeholder="Escriba su numero de telefono"
                                        onChange={this.handleChange}
                                        value={this.telefono}
                                    />
                                </Form.Item>
                            </Col>
                            <Col md={12} sm={12} xs={24} span={12}>
                                <Form.Item name="direccion" label="Direccíon" labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} rules={[{required: true, message: 'Este campo es obligatorio'}]}>
                                    <Input
                                        name="direccion"
                                        type="text"
                                        placeholder="Escriba su direccion"
                                        onChange={this.handleChange}
                                        value={this.direccion}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className="gx-text-center">
                            <Button danger className="gx-btn-danger" onClick={this.handleCancel}>Cancelar</Button>
                            <Button type="primary" htmlType="submit">Guardar</Button>
                        </div>
                    </Form>
                </Card>
            </Fragment>
        );
    }
}

export default connect(null, {agregarPersona}) (create);
