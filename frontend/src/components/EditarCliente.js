import React, {useEffect, useState} from 'react';
import {Link, withRouter, useParams} from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


const EditarCliente = (props) => {

    const { id } = useParams();
    const [cliente, guardarCliente] = useState( props.pedido  || {
        id: '',
        nombre: '',
        pedido:  '',
        fecha: '',
        hora: ''
    });
    
    const {nombre, fecha, hora, pedido} = cliente;

    

    const actulizarState = e =>{
        guardarCliente({...cliente, [e.target.name]: e.target.value});
    }

    function validar(obj){
        return !Object.values(obj).every(input => input !== '');
    }
    
    const editarCliente = e =>{
        e.preventDefault();
        
        if(validar(cliente)){
            Swal.fire(
                'H E Y',
                'Todos los campos son obligatorios',
                'warning'
                )
                return;
            }
        clienteAxios.put(`/clientes/${id}`, cliente)
            .then(respuesta =>{
                props.guardarConsultar(true);
                props.history.push('/');
            })
            .catch(error => console.log(error));
    }

    return ( 
        <>
            <h1 className="my-5">Editando Pedido</h1>     
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-primary py-2 px-4">Volver</Link>
                    </div>
                    
                    <div className="col-md-8 mx-auto">
                        <form onSubmit={editarCliente} className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Cliente</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="nombre"
                                    name="nombre"
                                    value={nombre}
                                    placeholder="Nombre Cliente"
                                    onChange={actulizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="pedido">Pedido</label>
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="pedido"
                                    name="pedido"
                                    value={pedido}
                                    placeholder="Pedido"
                                    onChange={actulizarState}
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="fecha">Fecha</label>
                                <input
                                    type="date"
                                    className="form-control form-control-lg"
                                    id="fecha"
                                    value={fecha}
                                    name="fecha"
                                    onChange={actulizarState}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="hora">Hora</label>
                                <input
                                    type="time"
                                    className="form-control form-control-lg"
                                    id="hora"
                                    value={hora}
                                    name="hora" 
                                    onChange={actulizarState}
                                />
                            </div>
                            <input type="submit" className="btn btn-success mt-3 w-100 p-3 font-weight-bold" value="Editar Pedido"/>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default withRouter(EditarCliente);