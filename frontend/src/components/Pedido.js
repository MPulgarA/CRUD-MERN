import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';


const Pedido = (props, ) => {

    if(!props.pedido){
        props.history.push('/');
        return null;
    }

    const {pedido: {nombre, fecha, hora, pedido, _id}} = props;

    const eliminarCliente = id =>{
            Swal.fire({
                title: 'Seguro de lo que haces?',
                text: "Si se elimina, se perdera, c'est fini",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminar',
                cancelButtonText: 'Cancelar'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    "C'est Fini",
                    'El pedido ha sido eliminado',
                    'success'
                  )
                  clienteAxios.delete(`/clientes/${id}`)
                  .then(respuesta => {
                      props.guardarConsultar(true);
                      props.history.push('/');
                  })
                  .catch(error => console.log(error));

                }
              })
    }


    const editarCliente = id =>{
        props.history.push('/editar');
    }

    return ( 
        <>
            <h1 className="my-5">Pedido: {nombre}</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/'} className="btn btn-primary py-2 px-4">Volver</Link>
                    </div>
                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            <div className="p-5 list-group-item list-group-item-action flex-column align-items-center">
                                <div className="d-flex w-100 justify-content-between mb-4">
                                    <h3 className="mb-3">{nombre}</h3>
                                    <small>{fecha} - {hora}</small>
                                </div>
                                <p className="mb-0">
                                    {pedido}  
                                </p>
                                <div className="d-flex justify-content-around">
                                   
                                    <button 
                                        type="button" 
                                        className="btn btn-danger mt-3 w-25 p-3 font-weight-bold"
                                        onClick={()=>eliminarCliente(_id)}
                                    > 
                                        Eliminar 
                                    </button> 
                                    
                                
                                    <button 
                                        type="button" 
                                        className="btn btn-success mt-3 w-25 p-3 font-weight-bold"
                                        onClick={()=>editarCliente()}
                                    > 
                                        Actualizar 
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                   
            </div>
        </>
     );
}
 
export default withRouter(Pedido);