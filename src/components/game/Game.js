    /*author : Daniela Montano
            Archivo para mostrar jugadores del juego con su id y nombre.
            version 0.0.0
            since : 12/05/22
            */

    import React from 'react'
    import { Link } from 'react-router-dom';
    import './game.css'


    // OBTENER ID RANDOM DE LA PARTIDA DEL JUEGO
    let paths = window.location.pathname.split('/');
    let idss = paths[paths.length-1];


    let id = localStorage.getItem("ID Player One")
    let nombre = localStorage.getItem("Primer nombre")

    let id2 = localStorage.getItem("ID Player Second")
    let nombre2 = localStorage.getItem("Segundo nombre")

    let id3 = localStorage.getItem("ID Player Third")
    let nombre3 = localStorage.getItem("Tercer nombre")

    let data = {
      id: idss,
      gamer: {
        id,
        nombre
      },

      id1: URL,
      gamer1: {
        id2,
      nombre2,
      },

      id2: URL,
      gamer2: {
        id3,
      nombre3
      },

      inProgress: false,
        winner: {
            id,
            nombre
        }

    }

    const Game = () => {
      // Funcion anonima
    (() => {
      if (window.localStorage) {
          // Si no hay ningún elemento como 'recargar'
          // en el almacenamiento local y luego crea uno &
          // recargar la pagina
          if (!localStorage.getItem('reload')) {
              localStorage['reload'] = true;
              window.location.reload();
          } else {
              // Si existe un elemento 'recargar'
              // luego borre el elemento 'recargar' en
              // almacenamiento local
              localStorage.removeItem('reload');
          }
      }
  })(); 
      return (
        <>
          <div className='title'>GAME</div>
          <div className='datos'>
            <div className='code'>
              <pre>
                {
                  JSON.stringify(data, null, 3)
                }
              </pre>
            </div>

            <div className='center'>
              <Link className='next' to={`/game/${idss}/winner`}>Next</Link>
            </div>
          </div>
        </>
      )
    }

    export default Game