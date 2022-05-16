  /*author : Daniela Montano
            Archivo para mostrar ganador del juego con su id
            version 0.0.0
            since : 12/05/22
            */
  import React from 'react'
  import './winner.css'
  import { Link } from 'react-router-dom';

  let id = localStorage.getItem("ID Player One")
  let nombre = localStorage.getItem("Primer nombre")


  let data = {
    winner: {
      id,
      nombre
    }

  }

  const Winner = () => {
    return (
      <>
          <div className='container'>
              <div className='winner'>WINNER</div>
                  <pre>
                      {
                          JSON.stringify(data, null, 3)
                      }
                  </pre>

              
          </div>

          <Link className='next' to="/startGame">Next</Link>
      </>
    )
  }

  export default Winner