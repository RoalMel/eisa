import React from 'react'
import './Ingreso.css'
import $ from 'jquery';

const Ingreso = () => {



  return (

    <form className="todo fluid ">



      <div className='row'>
        <div className='col-sm-12 col-md-10 col-xl-8 contenedor1' >
          <label for="codigo" className="letra">Codigo</label>
          <input type="number" id="codigo" className="cuadrodedialogo"></input>
          <label for="cotizacion" className="cotizacion1">Cotiz. Núm.</label>
          <input type="number" className="cotizacion1" id="cotizacion"></input>
          <label for="Habilitado" id="Habilitado1">Habilitado </label>
          <input type="checkbox" id="Habilitado"></input>
          <br></br>

          <label for="fecha" className="letra">Fecha</label>
          <input type="datetime" id="fecha" className="cuadrodedialogofecha"></input>
          <label for="Con/Sinmedidas" className="letratipo">Tipo</label>
          <select name="" className="cuadrodedialogoproduct" id="Con/Sinmedidas">
            <option value="ConMedidas">Fabricación</option>
            <option value="Sin Medidas">Productos y/o Servicios</option>
          </select>


        </div>

        <div className='col-sm-12 col-md-2 col-xl-4 contenedor2'>


        </div>

        <div className='col-sm-12 col-md-10 col-xl-8 contenedor3'>

          <label for="cliente" className="letra">Cliente</label>
          <input type="text" id="cliente" placeholder="Nombre del cliente "></input> <br></br>

          <label for="tipodecliente" className="letracotizacion">Tipo Clien</label>
          <select name="" className="cuadrodedialogo" id="tipoCliente">
            <option value="Normal">Normal</option>
            <option value="Especial">Especial</option>
          </select>

          <label for="tipodeprecio" className="cotizacion1">Precio Tipo</label>
          <select name="" className="cuadrodedialogo" id="tipodeprecio">
            <option value="Especial">Especial</option>
            <option value="Normal">Normal</option>
            <option value="Personalizado">Personalizado</option>
          </select> <br></br>

          <label for="cotizacion2" className="letracotizacion">Cotización</label>
          <input type="text" id="cotizacion2" placeholder="Nombre de la cotización"></input> <br></br>



        </div>

        <div className='col-sm-12 col-md-2 col-xl-4 contenedor4'>


        </div>

        <div className='col-sm-12 col-md-6 col-xl-5 contenedor5'>

          <div className="form-group8">
            <label for="Buscar" className="letrabuscarproducto">Busc. Prcoduc</label>
            <input list="productos" id="Buscar" />
            <datalist id="productos">
              <option value="Azul"></option>
              <option value="Ventana corrediza de uPVC blanco serie 80"></option>
              <option value="Ventana corrediza de uPVC blanco serie 60"></option>
              <option value="Ventana abatible de uPVC blanco serie 60"></option>
              <option value="Ventana vidrio fijo de uPVC blanco serie 60"></option>
              <option value="Puerta de uPVC blanco marco sencillo"></option>
              <option value="Puerta de uPVC blanco marco doble"></option>
              <option value="Unidad de Circuito de iluminación simple"></option>
              <option value="Unidad de Circuito de tomacorriente polarizado"></option>

            </datalist>

          </div>
        </div>

        <div className='col-sm-12 col-md-6 col-xl-7 contenedor6'>

          <label for="Ancho" className="letrame">Ancho Mts.</label>
          <input type="decimal" className="letram" id="Ancho"></input>
          <label for="Largo" className="letrame1" id="largo1">Largo Mts.</label>
          <input type="decimal" className="letram" id="Largo"></input>
          <label for="Cantidad" className="letracant">Cant.</label>
          <input type="integer" className="letram" id="Cantidad"></input><br></br>


        </div>



        <div className='col-sm-12 col-md-7 col-xl-7 contenedor7'>

          <label for="Descripción" className="letradescripcion1">Descripción</label>
          <input type="text" className="letradescripcion" id="Descripción"></input>


        </div>




        <div className='col-sm-12 col-md-5 col-xl-5 contenedor8'>

          <input type="submit" className="letratotal" value="Insertar" id="Insertar"></input>
          <label for="letratotal1" className="letratotal2">Total</label>
          <input type="number" className="letratotal1"></input>
          <div >

            <button type="button" data-toggle="modal" data-target="#exampleModal" id="Guardar" className="letratota2">
              Guardar
  </button>
          </div>


        </div>

        <div className='col-sm-12 col-md-12 col-xl-12 contenedor9'>

          <section id="tabla1">
            <table className="tabla" >
              <thead>
                <tr>
                  <th scope="col">Cant.</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Ancho</th>
                  <th scope="col">Alto</th>
                  <th scope="col">Total(m)</th>
                  <th scope="col">Costo</th>
                  <th scope="col">Total</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td  data-label="CANT.">1</td>
                  <td data-label="PRODUCTO">Ventana corrediza serie 80 </td>
                  <td data-label="DESCRIPCION">Instalar ventanta segun ubicación del cliente</td>
                  <td data-label="ANCHO">2.45</td>
                  <td data-label="ALTO">3.45</td>
                  <td data-label="TOTAL(M)">8.45</td>
                  <td data-label="COSTO">550.00</td>
                  <td data-label="TOTAL">4647.00</td>
                </tr>
                <tr>
                  <td  data-label="CANT.">1</td>
                  <td data-label="PRODUCTO">Ventana corrediza serie 80 </td>
                  <td data-label="DESCRIPCION">Instalar ventanta segun ubicación del cliente</td>
                  <td data-label="ANCHO">2.45</td>
                  <td data-label="ALTO">3.45</td>
                  <td data-label="TOTAL(M)">8.45</td>
                  <td data-label="COSTO">550.00</td>
                  <td data-label="TOTAL">4647.00</td>
                </tr>
                <tr>
                  <td  data-label="CANT.">1</td>
                  <td data-label="PRODUCTO">Ventana corrediza serie 80 </td>
                  <td data-label="DESCRIPCION">Instalar ventanta segun ubicación del cliente</td>
                  <td data-label="ANCHO">2.45</td>
                  <td data-label="ALTO">3.45</td>
                  <td data-label="TOTAL(M)">8.45</td>
                  <td data-label="COSTO">550.00</td>
                  <td data-label="TOTAL">4647.00</td>
                </tr>
              </tbody>
            </table>

          </section>



        </div>



        <div className='col-sm-12 col-md-12 col-xl-12 contenedor10'>
          hola

        </div>

     


      <div className='col-sm-12 col-md-5 col-xl-5 contenedor11'>

        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Guardar
      </button>

        <label for="letratotal1" className="letratotal2">Total</label>
        <input type="number" className="letratotal1"></input>

      </div>
      </div >

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Que desea hacer</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Elija una opción
          </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-info" data-dismiss="modal">Guardar</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Guardar e imprimir</button>
              <button type="button" class="btn btn-info" data-dismiss="modal">Guardar y Crear orden </button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Guardar e imprimir y Crear orden de
              Trabajo</button>
            </div>
          </div>
        </div>
      </div>









    </form >

  )

}

export default Ingreso