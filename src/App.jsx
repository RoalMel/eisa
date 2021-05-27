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
            <li><a href="/a">Anular Cotización</a></li>
          </ul>

        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">Ordenes de Trabajo</a>

          <ul id="desplegar">
            <li><Link to="/enproceso">En Proceso</Link></li>
            <li><a href="/a">Finalizadas</a></li>
            <li><a href="/a">Anuladas</a></li>
            <li><a href="/a">Todas</a></li>
            <li><a href="/a">Generar nueva orden</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">Estado</a>

          <ul id="desplegar">
            <li><a href="/a">Agegar pago</a></li>
            <li><a href="/a">Pendientes de cobro</a></li>
            <li><a href="/a">Cotizaciónes Aplicadas</a></li>
            <li><a href="/a">General por Cliente</a></li>
          </ul>
        </li>
        

        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">Clientes</a>

          <ul id="desplegar">
            <li><a href="/a">Ver lista de clientes</a></li>
            <li><a href="/a">Agregar nuevo cliente</a></li>
            <li><a href="/a">Editar cliente</a></li>
            <li><a href="/a">Eliminar Cliente</a></li>
          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">Caja</a>

          <ul id="desplegar">
            <li><a href="/a">Apertura de turno</a></li>
            <li><a href="/a">Cierre de turno</a></li>
            <li><a href="/a">Caja</a></li>
            <li><a href="/a">Reporte de Ventas</a></li>
            <li><a href="/a">Cierre de caja</a></li>
          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">Facturas</a>

          <ul id="desplegar">
            <li><a href="/a">Series de Facturas</a></li>
            <li><a href="/a">Datos de Facturación</a></li>
            <li><a href="/a">Facturas</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">Gastos</a>

          <ul id="desplegar">
            <li><a href="/a">Gastos Generales</a></li>
            <li><a href="/a">Gastos por orden de trabajo</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">Resumen</a>

          <ul id="desplegar">
            <li><a href="/a">Ingresar pagos por orden de trabajo</a></li>
            <li><a href="/a">Ingresar gastos por orden de trabajo </a></li>
            <li><a href="/a">Ver ordenes de trabajo</a></li>
            <li><a href="/a">Ver Cotizaciones</a></li>
          </ul>
        </li>

        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">Productos</a>

          <ul id="desplegar">
            <li><a href="/a">Productos</a></li>
            <li><a href="/a">Precios </a></li>
            <li><a href="/a">Ventas de Productos</a></li>

          </ul>
        </li>

        <li id="item" class="nav-item active">
          <a class="nav-link" href="/a">RG</a>

          <ul id="desplegar">
            <li><a href="/a">Ver Resumen</a></li>
            <li><a href="/a">Otros Ingresos </a></li>
            <li><a href="/a">Otros Gastos</a></li>

          </ul>
        </li>

        <li class="nav-item active">
          <a class="nav-link" href="/a">Configuración</a>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled" href="/a" tabindex="-1" aria-disabled="true">Configuración 2</a>
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