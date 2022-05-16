  /*author : Daniela Montano
          Archivo para iniciar el juego
          version 0.0.0
          since : 12/05/22
          */

  import React from 'react'
  import './start.css'
  import { Link } from 'react-router-dom';

  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

  const Start = () => {
    return (
      <>
          <div className='containerStart'>
              <div className='titleStart'>START</div>
              <div className='containerPlay'>
                  <Link to="/createGame"><FontAwesomeIcon className='playStart' icon={faCirclePlay} /></Link>
              </div>
              <a href='https://github.com/daniela97B' className='byStart'>By Daniela Montano</a>
              
          </div>  
      </>
    )
  }

  export default Start