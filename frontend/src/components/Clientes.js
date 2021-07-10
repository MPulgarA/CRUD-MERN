import React from 'react';
import {Link} from 'react-router-dom';

const Clientes = ({pedidos, guardarConsultar}) => {

    if(pedidos.length === 0) return null;

    return ( 
        <>
            <h1 className="my-5">Pedido de pizzas</h1>
            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/nuevo'} className="btn btn-primary py-2 px-4">Tomar pedido</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {pedidos.map(pedidos =>(
                                <Link to={`/pedido/${pedidos._id}`} key={pedidos._id} className="lista mt-3 rou p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{pedidos.nombre}</h3>
                                        <small>{pedidos.fecha} - {pedidos.hora}</small>
                                    </div>
                                    <p className="mb-0">
                                      {pedidos.pedido}  
                                    </p>
                                </Link>   
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Clientes;