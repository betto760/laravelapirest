import React, { Component, Fragment } from 'react';
import {Card, Table, Button, Typography, Input, Select, Modal, Row, Col} from "antd";
import { Link } from 'react-router-dom';
import routes from '../../util/routes';
import {mostrarPersonas, showPersona, eliminarPersona, buscarPersona} from '../../appRedux/actions/PersonasActions';
import { connect } from 'react-redux';

const { Text } = Typography;
const Option = Select.Option;

class index extends Component {

    state = {
        visible: false,
        timeOutSearch: undefined,
        buscar: "",
    }

    componentDidMount(){
        this.props.mostrarPersonas();
    }

    cambiarPagina = (page) => {
        this.props.mostrarPersonas(page);
    }

    handleOk = () => {
        this.setState({
            visible: false,
        });
    }

    showModal = (id) => {
        this.setState({
            visible: true,
        });
        this.props.showPersona(id);
    }

    // handleSearch = (value) => {
    //     if (this.state.timeOutSearch) {
    //         clearTimeout(this.state.timeOutSearch);
    //         this.setState({
    //             timeOutSearch: undefined,
    //         });
    //     }
    //     this.state.timeOutSearch = setTimeout(buscarPersona(value), 300);
    //     this.setState({
    //         timeOutSearch: this.state.timeOutSearch,
    //         buscar: value,
    //     });
    // }

    handleSearch = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,

        }, () => {
            const {buscar} = this.state;
            this.props.buscarPersona(buscar);
        });
    }

    btnVer = (id) => {
        return(
            <Button
                type="primary"
                className="gx-mb-0"
                size="small"
                onClick={() => this.showModal(id)}
            >
                <i className="far fa-eye"></i>
            </Button>
        );
    }

    btnEditar = (id) => {
        return(
            <Link
                to={routes.persona_editar + id + '/editar'}
                className="ant-btn ant-btn-dashed ant-btn-sm gx-mb-0"
            >
                <i className="fas fa-eye-dropper"></i>
            </Link>
        );
    }

    btnEliminar = (id) => {
        return(
            <Button
                type="danger"
                className="gx-mb-0"
                size="small"
                onClick={() => this.deleteConfirm(this, id)}
            >
                <i className="fas fa-trash"></i>
            </Button>
        );
    }

    deletePeople = (id) => {
        this.props.eliminarPersona(id);
    }

    deleteConfirm = (context, id) => {
        Modal.confirm({
            title: 'Eliminar',
            content: '¿Esta seguro de eliminar esta Persona?',
            okText: 'Si',
            okType: 'danger',
            cancelText: 'No',
            onOk(){
                context.deletePeople(id);
            },
            onCancel(){
                console.log('Cancelado!');
            }
        });
    }

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'id',
                key: 'id',
                showSorterTooltip: false,
                sorter: (a, b) => a.id - b.id,
            },
            {
                title: 'Nombre',
                dataIndex: 'nombre',
                key: 'nombre',
                showSorterTooltip: false,
                sorter: (a, b) => a.nombre.length - b.nombre.length,
            }, {
                title: 'Apellidos',
                dataIndex: 'apellidos',
                key: 'apellidos',
                showSorterTooltip: false,
                // sorter: (a, b) => a.age - b.age,
                sorter: (a, b) => a.apellidos.length - b.apellidos.length,
            }, {
                title: 'Telefono',
                dataIndex: 'telefono',
                key: 'telefono',
                showSorterTooltip: false,
                sorter: (a, b) => a.telefono.length - b.telefono.length,
            }, {
                title: 'Dirección',
                dataIndex: 'direccion',
                key: 'direccion',
                showSorterTooltip: false,
                sorter: (a, b) => a.direccion.length - b.direccion.length,
            },
            {
                title: 'Opciones',
                key: 'opciones',
                render: record => {
                    return (
                        <Fragment>
                            {this.btnVer(record.id)}
                            {this.btnEditar(record.id)}
                            {this.btnEliminar(record.id)}
                        </Fragment>
                    );
                }
            }
        ];

        const {personas, paginacion, persona} = this.props;
        console.log(personas);
        console.log(paginacion);
        console.log(persona);
        return (
            <Fragment>
                <Modal
                    title="Datos Personales"
                    visible={this.state.visible}
                    closable={false}
                    maskClosable={false}
                    width={720}
                    footer={
                        <div className="gx-text-center">
                            <Button key="1" type="primary" onClick={this.handleOk}>Aceptar</Button>
                        </div>
                    }
                >
                    <Row gutter={[16, 16]}>
                        <Col md={12} sm={12} xs={24} span={12}>
                            <label htmlFor="">Nombre</label>
                            <Input type="text" value={persona.nombre} disabled={true} className="gx-text-dark"></Input>
                        </Col>
                        <Col md={12} sm={12} xs={24} span={12}>
                            <label htmlFor="">Apellidos</label>
                            <Input type="text" value={persona.apellidos} disabled={true} className="gx-text-dark"></Input>
                        </Col>
                        <Col md={12} sm={12} xs={24} span={12}>
                            <label htmlFor="">Telefono</label>
                            <Input type="text" value={persona.telefono} disabled={true} className="gx-text-dark"></Input>
                        </Col>
                        <Col md={12} sm={12} xs={24} span={12}>
                            <label htmlFor="">Direccion</label>
                            <Input type="text" value={persona.direccion} disabled={true} className="gx-text-dark"></Input>
                        </Col>
                    </Row>
                </Modal>
                <Card
                    title={<Text strong={true}>GESTIONAR PERSONAS</Text>}
                    extra={<Link to={routes.persona_nuevo} className="btn btn-primary gx-my-1"><i className="fas fa-plus-circle"></i>&nbsp; Agregar</Link>}
                >
                    <div className="table-operations">
                        <Select className="gx-mr-3 gx-mb-3" defaultValue="10" style={{width: 80}}>
                            <Option value="10">10</Option>
                            <Option value="25">25</Option>
                            <Option value="50">50</Option>
                            <Option value="100">100</Option>
                        </Select>
                        <div className="gx-float-right">
                            <Input
                                name="buscar"
                                placeholder="Buscar . . ."
                                style={{ width: 150 }}
                                value={this.state.buscar}
                                onChange = {this.handleSearch}
                            />
                        </div>
                    </div>
                    <Table
                        rowKey="id"
                        bordered
                        className="gx-table-responsive"
                        columns={columns}
                        dataSource={personas}
                        pagination={{
                            current: paginacion.current_page,
                            defaultCurrent: paginacion.current_page,
                            pageSize: paginacion.per_page,
                            total: paginacion.total,
                            showTotal: (total, range) => `Mostrando ${range[0]}-${range[1]} de un total de ${total} registros`,
                            showSizeChanger: false,
                            responsive: true,
                            onChange: (page) => this.cambiarPagina(page)
                        }}
                    />
                </Card>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    personas: state.personas.personas,
    paginacion: state.personas.pagination,
    persona: state.personas.showPersonaDatos,
});

export default connect(mapStateToProps, {mostrarPersonas, showPersona, eliminarPersona, buscarPersona})(index);
