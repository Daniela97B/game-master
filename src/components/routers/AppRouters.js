  import React from 'react'
  import { BrowserRouter, Routes, Route } from 'react-router-dom'

  import CreateGame from '../createGame/CreateGame';
  import Game from '../game/Game';
  import StartGame from '../startGame/StartGame';
  import Winner from '../winner/Winner';
  import Start from '../start/Start';
  
//Rutas para el juego
  const AppRouters = () => {
    return (
      <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element = {<Start/>}/>
              <Route path='/createGame' element = {<CreateGame/>}/>
              <Route path='/game/:random' element = {<Game/>}/>
              <Route path='/game/:random/winner' element = {<Winner/>}/>
              <Route path='/startGame' element = {<StartGame/>}/>
          </Routes>
      </BrowserRouter>
      </>
    )
  }

  export default AppRouters