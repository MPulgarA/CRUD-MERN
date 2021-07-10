import React, {useEffect, useState} from 'react';
import { Route, Switch,BrowserRouter as Router} from 'react-router-dom';
import Clientes from './components/Clientes';
import NuevoCliente from './components/NuevoCliente';
import Pedido from './components/Pedido';
import EditarCliente from './components/EditarCliente';

import clienteAxios from './config/axios';


function App() {

  const [pedidos, guardarPedidos] = useState([]);
  const [consultar, guardarConsultar] = useState(true);

  useEffect(() =>{
    if(consultar){
      const consultarApi = () =>{
        clienteAxios.get('/clientes') 
          .then(respuesta =>{
            guardarPedidos(respuesta.data);
            guardarConsultar(false);
          })
          .catch(error => console.log(error));
      }
      consultarApi();
    }
   
  }, [consultar]);

  return (
    <Router>
      <Switch>
        <Route
          exact 
          path="/"
          component={()=> <Clientes pedidos={pedidos}/>}
        />

        <Route
          exact 
          path="/nuevo"
          component={()=> <NuevoCliente guardarConsultar={guardarConsultar}/>}
        />

        <Route
          exact 
          path="/pedido/:id"
          render={(props)=>{
            const pedido = pedidos.filter(pedido => pedido._id === props.match.params.id);
            return(
              <Pedido
                pedido={pedido[0]}
                guardarConsultar={guardarConsultar}
              />
            )
          }}
        />

        <Route
          exact 
          path="/editar/:id"
          render={(props)=>{
            const pedido = pedidos.filter(pedido => pedido._id === props.match.params.id);
            return (
              <EditarCliente 
                pedido={pedido[0]}
                guardarConsultar={guardarConsultar}
              />
            )
          }}
        />
        
        
      </Switch>
    </Router>
  );
}

export default App;
