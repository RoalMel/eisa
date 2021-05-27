import React from 'react'
import './Vercot.css'

const Vercot = () => {

  return (

    <form className="vertodo">

      <div className='row'>

        <div className='col-sm-12 col-md-8 col-xl-6 vercontenedor1' >
        <br />
          <label for="" id="vercotizaciones" className="verletra1">En Proceso</label>
          
          <label for="" id="vercotizaciones" className="verletra1">A Cotizacion</label>
          <button type="button" className="verletra2"><a href="/a">Ir</a></button>
          <br />
        </div>

        <div className='col-sm-12 col-md-4 col-xl-6 vercontenedor2'>


        </div>


        <div className='col-sm-12 col-md-6 col-xl-6 vercontenedor3'>

          <div className="vercontenedor31">
            <label for="Fecha" id="margen" className="verletra">Del</label>
            <input type="datetime" className="vercuadrodedialogo" id="Fecha" ></input>
            <label for="calendario" className="verletra" id="calendario">al</label>
            <input type="datetime" className="vercuadrodedialogo" name="month" ></input> <br />
            <input type="text" className="vercuadrodedialogo1 " placeholder="Nombre del cliente" id="ver_nombre" ></input>
          </div>


        </div>


        <div className='col-sm-12 col-md-6 col-xl-6 vercontenedor3'>

          <div className="vercontenedor31">

            <button type="button" className="verletra3" id="filtro">Filtrar</button>
            
            <button type="button" className="verletra5" id="mostrar" >Mostrar Todo</button> <br />

            <button type="button" className="verletra6" id="ver_buscar">Buscar</button>
           

          </div>

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
              <button type="button" class="btn btn-info" data-dismiss="modal">Agregar Pago</button>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Crear Orden de Trabajo</button>

            </div>
          </div>
        </div>
      </div>


        </div>

        <div className='col-sm-12 col-md-12 col-xl-12 vercontenedor4'>
          .

        </div>


        <div className='col-sm-12 col-md-12 col-xl-12 contenedor9'>

          <section id="tabla1">
            <table className="tabla" >
              <thead>
                <tr>
                  <th  scope="col">Num.</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Valor</th>
                  <th scope="col">Aplicada</th>
                  <th scope="col">Ver ordenes</th>
                 

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td  data-label="NUM.">1</td>
                  <td data-label="FECHA">02/05/2021 </td>
                  <td data-label="NOMBRE">Juan Gomez</td>
                  <td data-label="VALOR">Q. 200.00</td>
                  <td data-label="APLICADA">SI</td>
                  <td data-label="."> <button type="button" className="verletra7" data-toggle="modal" data-target="#exampleModal" id="Aplicar" >
              Aplicar Cotización
          </button></td>
                 
                </tr>
                <tr>
                <td  data-label="NUM.">2</td>
                  <td data-label="FECHA">02/05/2021 </td>
                  <td data-label="NOMBRE">Juan Gomez</td>
                  <td data-label="VALOR">Q. 200.00</td>
                  <td data-label="APLICADA">SI</td>
                  <td data-label=".">.</td>
                 
                </tr>
                <tr>
                <td  data-label="NUM.">3</td>
                  <td data-label="FECHA">02/05/2021 </td>
                  <td data-label="NOMBRE">Juan Gomez</td>
                  <td data-label="VALOR">Q. 200.00</td>
                  <td data-label="APLICADA">SI</td>
                  <td data-label=".">.</td>
                 
                </tr>
              </tbody>
            </table>

          </section>



        </div>














      </div>
.


    </form>



  )






}



export default Vercot