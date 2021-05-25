import React from 'react'
import './Nav.css'
import $ from 'jquery';

const Nav = () => {

/*$(document).ready(main);

var contador = 1 ;
function main() {
  $('.menu').click(function () {
    $('nav').toggle();

    if(contador ==1){
      $('nav').animate({
        left:'0'
      });
      contador =0;
    } else {
      contador = 1;
       $('nav').animate({
        left:'-100%'
    }

  });
  
};

*/

  return (
    <header >

      <div className=" navbar navbar-expand-lg navbar-light menu ">
        <a className=" btn21 " href="#">Menu</a>

        <button className=" btn22" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <nav >

        <div className="container-fluid menu1">


          <ul>
            <li>

              <a href="#">Cotizaciones</a>

              <ul>
                <li><a href="#">1</a></li>
                <li> <a href="#">2o</a></li>
                <li> <a href="#">3</a></li>
                <li> <a href="#"  >4</a></li>
              </ul>

            </li>


            <li>

              <a href="#">Ordenes</a>

              <ul>
                <li><a href="#">5</a></li>
                <li> <a href="#">6</a></li>
                <li> <a href="#">7</a></li>
                <li> <a href="#"  >8</a></li>
              </ul>

            </li>


            <li>

              <a href="#">Estado</a>

              <ul>
                <li><a href="#">9</a></li>
                <li> <a href="#">10</a></li>
                <li> <a href="#">11</a></li>
                <li> <a href="#"  >12</a></li>
              </ul>

            </li>


            <li>

              <a href="#">Clientes</a>

              <ul>
                <li><a href="#">13</a></li>
                <li> <a href="#">14</a></li>
                <li> <a href="#">15</a></li>
                <li> <a href="#"  >16</a></li>
              </ul>

            </li>


          </ul>
        </div>
      </nav>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est perferendis quis ab animi quia quidem magnam doloribus dolorem tenetur nobis voluptates, totam dolores? Necessitatibus at laboriosam beatae repellat qui explicabo.</p>
    </header>
  )
}
export default Nav

