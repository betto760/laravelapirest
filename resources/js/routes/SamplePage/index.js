import React from "react";

import IntlMessages from "../../util/IntlMessages";
import { Button, message } from "antd";

const SamplePage = () => {
    const info = () => {
        message.info('Mensaje normales');
    };

    const error = () => {
        message.error('Mensaje de errores');
    };

    const warning = () => {
        message.warning('Mensaje de advertencias');
    };

    const success = () => {
        message.success('Mensaje satisfactorio');
    }

  return (
    <div>
      <h2 className="title gx-mb-4"><IntlMessages id="sidebar.samplePage"/></h2>
      <div className="gx-d-flex justify-content-center">
        <h4>Hola Mundo como estas!</h4>
        <Button type="primary" onClick={info}>Guardar</Button>
        <Button type="danger" onClick={error}>Cancelar</Button>
        <Button type="ghost" onClick={success}><i className="fas fa-file"></i></Button>
        <Button type="dashed" onClick={warning}><i className="fas fa-save"></i></Button>
      </div>

    </div>
  );
};

export default SamplePage;
