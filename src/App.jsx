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
import Anuladas from "./components/ingreso/Anuladas";
import Finalizadas from "./components/ingreso/Finalizadas";
import Todas from "./components/ingreso/Todas";
import Genererarnuevaorden from "./components/ingreso/Generarnuevaorden";
import './App.css'
import './components/nav/Nav1.css'
import Logo from "./components/ingreso/Logo";


export default function App() {
  return (
    <Router>
      <div>
        <header >
          <nav class="navbar navbar-expand-lg navbar-light bg-light todo1">
            <Link to="/logo" className="navbar-brand" >Inicio</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul id="menulista" className="navbar-nav">
                <li id="item" className="nav-item active">
                  <Link to="/ingreso" className="nav-link" >Cotización<span class="sr-only">(current)</span></Link>

                  <ul id="desplegar">
                    <li><Link to="/vercot">Ver Cotizaciónes</Link></li>
                    <li><a href="/a">Anular Cotización</a></li>
                  </ul>

                </li>
                <li id="item" className="nav-item active">
                  <a class="nav-link" href="/a">Ordenes de Trabajo</a>

                  <ul id="desplegar">
                    <li><Link to="/enproceso">En Proceso</Link></li>
                    <li><Link to="/finalizadas">Finalizadas</Link></li>
                    <li><Link to="/anuladas">Anuladas</Link></li>
                    <li><Link to="/todas">Todas</Link></li>
                    <li><Link to="/generarnuevaorden">Generar nueva orden</Link></li>
                  </ul>
                </li>
                <li id="item" className="nav-item active">
                  <a className="nav-link" href="/a">Estado</a>

                  <ul id="desplegar">
                    <li><a href="/a">Agegar pago</a></li>
                    <li><a href="/a">Pendientes de cobro</a></li>
                    <li><a href="/a">Cotizaciónes Aplicadas</a></li>
                    <li><a href="/a">General por Cliente</a></li>
                  </ul>
                </li>


                <li id="item" className="nav-item active">
                  <a className="nav-link" href="/a">Clientes</a>

                  <ul id="desplegar">
                    <li><a href="/a">Ver lista de clientes</a></li>
                    <li><a href="/a">Agregar nuevo cliente</a></li>
                    <li><a href="/a">Editar cliente</a></li>
                    <li><a href="/a">Eliminar Cliente</a></li>
                  </ul>
                </li>
                <li id="item" className="nav-item active">
                  <a className="nav-link" href="/a">Caja</a>

                  <ul id="desplegar">
                    <li><a href="/a">Apertura de turno</a></li>
                    <li><a href="/a">Cierre de turno</a></li>
                    <li><a href="/a">Caja</a></li>
                    <li><a href="/a">Reporte de Ventas</a></li>
                    <li><a href="/a">Cierre de caja</a></li>
                  </ul>
                </li>
                <li id="item" className="nav-item active">
                  <a className="nav-link" href="/a">Facturas</a>

                  <ul id="desplegar">
                    <li><a href="/a">Series de Facturas</a></li>
                    <li><a href="/a">Datos de Facturación</a></li>
                    <li><a href="/a">Facturas</a></li>

                  </ul>
                </li>
                <li id="item" className="nav-item active">
                  <a className="nav-link" href="/a">Gastos</a>

                  <ul id="desplegar">
                    <li><a href="/a">Gastos Generales</a></li>
                    <li><a href="/a">Gastos por orden de trabajo</a></li>

                  </ul>
                </li>
                <li id="item" class="nav-item active">
                  <a className="nav-link" href="/a">Resumen</a>

                  <ul id="desplegar">
                    <li><a href="/a">Ingresar pagos por orden de trabajo</a></li>
                    <li><a href="/a">Ingresar gastos por orden de trabajo </a></li>
                    <li><a href="/a">Ver ordenes de trabajo</a></li>
                    <li><a href="/a">Ver Cotizaciones</a></li>
                  </ul>
                </li>

                <li id="item" className="nav-item active">
                  <a className="nav-link" href="/a">Productos</a>

                  <ul id="desplegar">
                    <li><a href="/a">Productos</a></li>
                    <li><a href="/a">Precios </a></li>
                    <li><a href="/a">Ventas de Productos</a></li>

                  </ul>
                </li>

                <li id="item" className="nav-item active">
                  <a className="nav-link" href="/a">RG</a>

                  <ul id="desplegar">
                    <li><a href="/a">Ver Resumen</a></li>
                    <li><a href="/a">Otros Ingresos </a></li>
                    <li><a href="/a">Otros Gastos</a></li>

                  </ul>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="/a">Configuración</a>
                </li>

                <li className="nav-item">
                  <a className="nav-link disabled" href="/a" tabindex="-1" aria-disabled="true">Configuración 2</a>
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
          <Route path="/anuladas">
            <Img />
            <Anuladas />
          </Route>
          <Route path="/finalizadas">
            <Img />
            <Finalizadas />
          </Route>
          <Route path="/todas">
            <Img />
            <Todas />
          </Route>
          <Route path="/generarnuevaorden">
            <Img />
            <Genererarnuevaorden />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}