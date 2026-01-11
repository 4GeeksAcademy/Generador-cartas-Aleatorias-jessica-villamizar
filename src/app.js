import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Generador de Cartas Aleatorias");


  const cartasPalos = ["♦", "♥", "♠", "♣"];
  const valoresDeCarta = ["A",2,3,4,5,6,7,8,9,"K","Q","J"];

  function signoRamdon (lista){
    let elementoAleatorio = Math.floor(Math.random() * lista.length);
    return lista[elementoAleatorio]
  }
const imagen1 = document.querySelector("#imagen1")
imagen1_Icon.textContent = signoRandon(cartasPalos)



}





