  /*author : Daniela Montano
            Archivo para mostrar id de los jugadores, con la apuesta.
            version 0.0.0
            since : 12/05/22
            */
  import React from 'react'
  import './startgame.css';
  import { Link } from 'react-router-dom';

  /* El objeto Storage (API de almacenamiento web) 
  nos permite almacenar datos de manera local en el navegador
  y sin necesidad de realizar alguna conexión a una base de datos. 
  En este artículo te mostraré cómo utilizarlo mediante JavaScript.
  */
  let id = localStorage.getItem("ID Player One")
  let id2 = localStorage.getItem("ID Player Second")
  let id3 = localStorage.getItem("ID Player Third")

  let ID = localStorage.getItem("RANDOM")

  let betValueFirst = localStorage.getItem("betValueFirst");
  let betValueSecond = localStorage.getItem("betValueSecond");
  let betValueThird = localStorage.getItem("betValueThird");

  let data = {
      ID,
      gamerBet: {
        id,
        betValueFirst,
        id2,
        betValueSecond,
        id3,
        betValueThird
      }
    
    }

  const StartGame = () => {
    return (
      <>
          <div className='container'>
                  <pre>
                      {
                          JSON.stringify(data, null, 3)
                      }
                  </pre>

              
          </div>

          <Link className='next' to="/">Finish</Link>
      </>
    )
  }

  export default StartGame