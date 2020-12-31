import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {obtenerPersona, actualizarPersona} from '../../appRedux/actions/PersonasActions';
import { Input, Button, Card, Row, Col, Typography } from 'antd';
const { Title } = Typography;

class edit extends Component {

    state = {
        nombre: '',
        apellidos: '',
        telefono: '',
        direccion: '',
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        this.props.obtenerPersona(id);
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextState){
        const {nombre, apellidos, telefono, direccion} = nextProps.personaDatos;
        this.setState({
            nombre,
            apellidos,
            telefono,
            direccion,
        });
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    handleUpdate = e => {
        e.preventDefault();
        const {id} = this.props.match.params;
        const {nombre, apellidos, telefono, direccion} = this.state
        const infoPersona = {
            id,
            nombre,
            apellidos,
            telefono,
            direccion,
        }
        console.log(infoPersona);
        this.props.actualizarPersona(infoPersona);
        this.props.history.push('/personas');
    }

    handleCancel = () => {
        this.props.history.push('/personas');
    }

    render() {
        const {nombre, apellidos, telefono, direccion} = this.state;
        return (
            <Fragment>
                <Card className="gx-card">
                    <Title level={4} className="gx-text-center gx-text-uppercase">Actualizar Datos Personales</Title>
                    <form className="gx-my-4" onSubmit={this.handleUpdate}>
                        <Row gutter={[16, 16]}>
                            <Col md={12} sm={12} xs={24} span={12}>
                                <label htmlFor="">Nombre</label>
                                <Input
                                    name="nombre"
                                    type="text"
                                    placeholder="Escriba su nombre"
                                    onChange={this.handleChange}
                                    value={nombre}
                                    className="gx-my-1"
                                    required={true}
                                />
                            </Col>
                            <Col md={12} sm={12} xs={24} span={12}>
                                <label htmlFor="">Apellidos</label>
                                <Input
                                    name="apellidos"
                                    type="text"
                                    placeholder="Escriba sus apellidos"
                                    onChange={this.handleChange}
                                    value={apellidos}
                                    className="gx-my-1"
                                    required={true}
                                />
                            </Col>
                            <Col md={12} sm={12} xs={24} span={12}>
                                <label htmlFor="">Telefono</label>
                                <Input
                                    name="telefono"
                                    type="text"
                                    placeholder="Escriba su numero de telefono"
                                    onChange={this.handleChange}
                                    value={telefono}
                                    className="gx-my-1"
                                    required={true}
                                />
                            </Col>
                            <Col md={12} sm={12} xs={24} span={12}>
                                <label htmlFor="">Direccion</label>
                                <Input
                                    name="direccion"
                                    type="text"
                                    placeholder="Escriba su direccion"
                                    onChange={this.handleChange}
                                    value={direccion}
                                    className="gx-my-1"
                                    required={true}
                                />
                            </Col>
                        </Row>
                        <div className="gx-text-center">
                            <Button danger className="gx-btn-danger" onClick={this.handleCancel}>Cancelar</Button>
                            <Button type="primary" htmlType="submit">Guardar</Button>
                        </div>
                    </form>
                </Card>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    personaDatos: state.personas.obtenerPersonaDatos,
});

export default connect(mapStateToProps, {obtenerPersona, actualizarPersona}) (edit);
