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
const imagen1_Icon = document.querySelector("#imagen1_Icon");
const paloAleatorio = signoRamdon(cartasPalos)
imagen1_Icon.textContent = paloAleatorio;

const imagen2_Icon = this.document.querySelector("#imagen2_Icon");
imagen2_Icon.textContent = paloAleatorio;

const number = this.document.querySelector("#number");
const numberAleatorio = signoRamdon(valoresDeCarta);
number.textContent = numberAleatorio;

if (paloAleatorio == "♦" || paloAleatorio == "♥"){
  imagen1_Icon.style.color = "red"
  imagen2_Icon.style.color = "red"
}

document.getElementById("button").addEventListener("click", generarCarta);

}





