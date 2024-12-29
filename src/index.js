// import './style.css';
import _ from 'underscore';

import {crearDeck, pedirCarta, valorCartas} from './usecases'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

//Funcion anonima
(() => {
  'use strict'

      let   deck = [];
      const tipos = ['C','D', 'H', 'S'],
            especiales = ['A', 'J', 'Q', 'K'];
      
      // let puntosJugador = 0;
      // let puntosComputadora = 0;

      let puntosJugadores = [];
      
      //referencias a html
      const btnPedir = document.querySelector('#btnPedir'),
            btnDetener = document.querySelector('#btnDetener'),
            btnReseteo = document.querySelector('#btnNuevo');
      
      const puntos = document.querySelectorAll('small'),
            divCartasJugador = document.querySelectorAll('.divCartas');
 
      
      const determninarGanador = () => {
          const [puntosMinimos, puntosComputadora] = puntosJugadores;
                  //Esta logica no esta bien, pero simon nada mas del ejemplo de una validacion
          setTimeout(() => {
              if (puntosComputadora === puntosMinimos) {
                  alert('nadie Gana');
                          
              }else if ((puntosMinimos > 21)) {
                  alert('Computadora Gana');
                  
              } else if (puntosComputadora > 21) {
                  alert('Jugador Gana');
                  
              } 
          }, 10);
      }
      
      
      const acumularPuntos = (carta, turno) => {
          puntosJugadores[turno] = puntosJugadores[turno] + valorCartas(carta);
          puntos[turno].innerText = puntosJugadores[turno];
          return puntosJugadores[turno];
      }

      const crearCarta = (carta, turno) => {
          const imgCarta = document.createElement('img');
          imgCarta.src = `assets/cartas/${carta}.png`;
          imgCarta.classList.add('carta');
          divCartasJugador[turno].append (imgCarta); //aqui lo estamos agregando al div de HTML usando el append
      }

      const inicializarDeck = (numJugadores = 2) => {
         
        btnPedir.disabled =   false;
        btnDetener.disabled = false;

        for (let i = 0; i < numJugadores; i++) {
         puntosJugadores.push(0);
         
        }

        divCartasJugador.forEach(elem => elem.innerHTML = '');
        puntos.forEach(elem => elem.innerText = 0);

     }      
     
      //Turno Maquina
      let puntosComputadora = 0;
      const turnoComputadora = (puntosMinimos) => {
          do {
              const carta = pedirCarta(deck);
              puntosComputadora = acumularPuntos(carta, puntosJugadores.length -1);
              crearCarta(carta, puntosJugadores.length -1);
      
              if (puntosMinimos > 21) {
                  break;
              }
              
          } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
      
          determninarGanador();
      }
      
      //Eventos
      btnPedir.addEventListener('click', () => {
          const carta = pedirCarta(deck);
          const puntosJugador = acumularPuntos(carta, 0);
          crearCarta(carta, 0);
      
          if (puntosJugador > 21) {
              console.warn('Lo siento');
              btnPedir.disabled = true;
              btnDetener.disabled = true;
              turnoComputadora(puntosJugador);
              // alert('Gana computadora!');        
          }else if (puntosJugador === 21) {
              console.warn('Ganaste 21');
              btnPedir.disabled = true;
              btnDetener.disabled = true;
              turnoComputadora(puntosJugador);
              // alert('Haz Ganado');
          } else if (puntosJugador > 21 && puntosComputadora > 21) {
              alert('Nadie Gana');
          }
      });
      
      btnDetener.addEventListener('click', () => {
          btnPedir.disabled = true;
          btnDetener.disabled = true;
          turnoComputadora(puntosJugadores[0]);
      });
      
      btnReseteo.addEventListener('click', () => {
          inicializarDeck();
          deck = [];
          deck = crearDeck(tipos, especiales);
      });


})();


