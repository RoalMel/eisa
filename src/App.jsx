import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Img from "./components/ingreso/Img";
import Ingreso from "./components/ingreso/Ingreso";
import Vercot from "./components/ingreso/Vercot";
import Enproceso from "./components/ingreso/Enproceso";
import './App.css'
import './components/nav/Nav1.css'
import Logo from "./components/ingreso/Logo";


export default function App() {
  return (
    <Router>
      <div>
      <header >
<nav class="navbar navbar-expand-lg navbar-light bg-light todo1">
    <Link to="/logo" class="navbar-brand" >Inicio</Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul id="menulista" class="navbar-nav">
        <li id="item" class="nav-item active">
          <Link to="/ingreso" class="nav-link" >Cotización<span class="sr-only">(current)</span></Link>

          <ul id="desplegar">
            <li><Link to="/vercot">Ver Cotizaciónes</Link></li>
            <li><a href="#">Anular Cotización</a></li>
          </ul>

        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="#">Ordenes de Trabajo</a>

          <ul id="desplegar">
            <li><Link to="/enproceso">En Proceso</Link></li>
            <li><a href="#">Finalizadas</a></li>
            <li><a href="#">Anuladas</a></li>
            <li><a href="#">Todas</a></li>
            <li><a href="#">Generar nueva orden</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="#">Estado</a>

          <ul id="desplegar">
            <li><a href="">Agegar pago</a></li>
            <li><a href="">Pendientes de cobro</a></li>
            <li><a href="#">Cotizaciónes Aplicadas</a></li>
            <li><a href="#">General por Cliente</a></li>
          </ul>
        </li>
        

        <li id="item" class="nav-item active">
          <a class="nav-link" href="#">Clientes</a>

          <ul id="desplegar">
            <li><a href="">Ver lista de clientes</a></li>
            <li><a href="">Agregar nuevo cliente</a></li>
            <li><a href="">Editar cliente</a></li>
            <li><a href="">Eliminar Cliente</a></li>
          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="#">Caja</a>

          <ul id="desplegar">
            <li><a href="">Apertura de turno</a></li>
            <li><a href="">Cierre de turno</a></li>
            <li><a href="">Caja</a></li>
            <li><a href="">Reporte de Ventas</a></li>
            <li><a href="">Cierre de caja</a></li>
          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="#">Facturas</a>

          <ul id="desplegar">
            <li><a href="">Series de Facturas</a></li>
            <li><a href="">Datos de Facturación</a></li>
            <li><a href="">Facturas</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="">Gastos</a>

          <ul id="desplegar">
            <li><a href="">Gastos Generales</a></li>
            <li><a href="">Gastos por orden de trabajo</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="#">Resumen</a>

          <ul id="desplegar">
            <li><a href="">Ingresar pagos por orden de trabajo</a></li>
            <li><a href="">Ingresar gastos por orden de trabajo </a></li>
            <li><a href="">Ver ordenes de trabajo</a></li>
            <li><a href="">Ver Cotizaciones</a></li>
          </ul>
        </li>

        <li id="item" class="nav-item active">
          <a class="nav-link" href="#">Productos</a>

          <ul id="desplegar">
            <li><a href="">Productos</a></li>
            <li><a href="">Precios </a></li>
            <li><a href="">Ventas de Productos</a></li>

          </ul>
        </li>

        <li id="item" class="nav-item active">
          <a class="nav-link" href="#">RG</a>

          <ul id="desplegar">
            <li><a href="">Ver Resumen</a></li>
            <li><a href="">Otros Ingresos </a></li>
            <li><a href="">Otros Gastos</a></li>

          </ul>
        </li>

        <li class="nav-item active">
          <a class="nav-link" href="#">Configuración</a>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Configuración 2</a>
        </li>
      </ul>
    </div>

  </nav>

  
  
</header>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/ingreso">
            <Img />
            <Ingreso />

          </Route>
          <Route path="/vercot">
            <Img />
            <Vercot />
          </Route>
          <Route path="/logo">
            <Logo />
          </Route>
          <Route path="/enproceso">
            <Img />
            <Enproceso />

          </Route>

        </Switch>
      </div>
    </Router>
  );
}