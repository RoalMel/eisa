import React from 'react'
import './Nav1.css'
import $ from 'jquery';

const Nav1 = () => {

    return (
        
<header >
<nav class="navbar navbar-expand-lg navbar-light bg-light todo1">
    <a class="navbar-brand" href="index.html">Inicio</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul id="menulista" class="navbar-nav">
        <li id="item" class="nav-item active">
          <a class="nav-link" href="Cotización.html">Cotización<span class="sr-only">(current)</span></a>

          <ul id="desplegar">
            <li><a href="vercotización.html">Ver Cotizaciónes</a></li>
            <li><a href="">Anular Cotización</a></li>
          </ul>

        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="Ordenesdetrabajo1.html">Ordenes de Trabajo</a>

          <ul id="desplegar">
            <li><a href="../Practica/Ordenesdetrabajo/Enproceso.html">En Proceso</a></li>
            <li><a href="../Practica/Ordenesdetrabajo/Finalizadas.html">Finalizadas</a></li>
            <li><a href="../Practica/Ordenesdetrabajo/Anuladas1.html">Anuladas</a></li>
            <li><a href="../Practica/Ordenesdetrabajo/Todas.html">Todas</a></li>
            <li><a href="GenerarOrden.html">Generar nueva orden</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="Estado.html">Estado</a>

          <ul id="desplegar">
            <li><a href="">Agegar pago</a></li>
            <li><a href="">Pendientes de cobro</a></li>
            <li><a href="cotizacionesaplicadas.html">Cotizaciónes Aplicadas</a></li>
            <li><a href="generalporcliente.html">General por Cliente</a></li>
          </ul>
        </li>
        

        <li id="item" class="nav-item active">
          <a class="nav-link" href="Clientes.html">Clientes</a>

          <ul id="desplegar">
            <li><a href="">Ver lista de clientes</a></li>
            <li><a href="">Agregar nuevo cliente</a></li>
            <li><a href="">Editar cliente</a></li>
            <li><a href="">Eliminar Cliente</a></li>
          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="Caja.html">Caja</a>

          <ul id="desplegar">
            <li><a href="">Apertura de turno</a></li>
            <li><a href="">Cierre de turno</a></li>
            <li><a href="">Caja</a></li>
            <li><a href="">Reporte de Ventas</a></li>
            <li><a href="">Cierre de caja</a></li>
          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="Facturas.html">Facturas</a>

          <ul id="desplegar">
            <li><a href="">Series de Facturas</a></li>
            <li><a href="">Datos de Facturación</a></li>
            <li><a href="">Facturas</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="Gastos.html">Gastos</a>

          <ul id="desplegar">
            <li><a href="">Gastos Generales</a></li>
            <li><a href="">Gastos por orden de trabajo</a></li>

          </ul>
        </li>
        <li id="item" class="nav-item active">
          <a class="nav-link" href="Resumen.html">Resumen</a>

          <ul id="desplegar">
            <li><a href="">Ingresar pagos por orden de trabajo</a></li>
            <li><a href="">Ingresar gastos por orden de trabajo </a></li>
            <li><a href="">Ver ordenes de trabajo</a></li>
            <li><a href="">Ver Cotizaciones</a></li>
          </ul>
        </li>

        <li id="item" class="nav-item active">
          <a class="nav-link" href="Productos.html">Productos</a>

          <ul id="desplegar">
            <li><a href="">Productos</a></li>
            <li><a href="">Precios </a></li>
            <li><a href="">Ventas de Productos</a></li>

          </ul>
        </li>

        <li id="item" class="nav-item active">
          <a class="nav-link" href="RG.html">RG</a>

          <ul id="desplegar">
            <li><a href="">Ver Resumen</a></li>
            <li><a href="">Otros Ingresos </a></li>
            <li><a href="">Otros Gastos</a></li>

          </ul>
        </li>

        <li class="nav-item active">
          <a class="nav-link" href="Configuración.html">Configuración</a>
        </li>

        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Configuración 2</a>
        </li>
      </ul>
    </div>

  </nav>

  
  
</header>


    )
}

export default Nav1




