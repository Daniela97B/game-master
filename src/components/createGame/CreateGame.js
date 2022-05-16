        /*author : Daniela Montano
        Archivo para crear pagina principal y pagina donde se ingresan jugadores y apuestas
        version 0.0.0
        since : 12/05/22
        */
        import React from 'react'
        import './createGame.css'
        import { Link } from 'react-router-dom';
        import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
        import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

        // CREACION DE ID RANDOM DE PARTIDA DE JUEGO
        let letras = 'fffff-ggg-jjjjj';

        let todo = letras;

        const generateID = (num) => {
            let ID = "";
            for(let x = 0; x < num; x++){
                let aleatorio = Math.floor(Math.random() * todo.length);
                ID += todo.charAt(aleatorio);
            }
            return ID;
        };

        let url = generateID(10)


        const getValueInput = () =>{
            
            // ID RANDOM DEL JUGADOR 1
            let id = '833-294';
            
            let all = id;
            
            const ID = (num) => {
                let ID = "";
                for(let x = 0; x < num; x++){
                    let aleatorio = Math.floor(Math.random() * all.length);
                    ID += all.charAt(aleatorio);
                }
                return ID;
            };
            
            let idPlayer = ID(10)

            // ID RANDOM DEL JUGADOR 1
            let id2 = '833-294';
            
            let all2 = id2;
            
            const ID2 = (num) => {
                let ID = "";
                for(let x = 0; x < num; x++){
                    let aleatorio = Math.floor(Math.random() * all2.length);
                    ID += all2.charAt(aleatorio);
                }
                return ID;
            };
            
            let idPlayer2 = ID2(10)



            // ID RANDOM DEL JUGADOR 3
            let id3 = '833-294';
            
            let all3 = id3;
            
            const ID3 = (num) => {
                let ID = "";
                for(let x = 0; x < num; x++){
                    let aleatorio = Math.floor(Math.random() * all3.length);
                    ID += all3.charAt(aleatorio);
                }
                return ID;
            };
            
            let idPlayer3 = ID3(10)


            // CLASE DE BOTON DE PLAY
            const play = document.querySelector('.play');

            // CLASE DE INPUTS
            const num_gamers1 = document.querySelector('.num_gamers1');
            const num_gamers2 = document.querySelector('.num_gamers2');
            const num_gamers3 = document.querySelector('.num_gamers3');

            // VALOR DEL INPUT
            let inputValueFirst = document.getElementById("first").value;
            let inputValueSecond = document.getElementById("second").value;
            let inputValueThird = document.getElementById("third").value;


            // VALOR DE UN SPAN VACIO PARA MOSTRAR ALERTA
            const info = document.getElementById('info');
            const info2 = document.getElementById('info2');
            const info3 = document.getElementById('info3');


            // NUMERO DE BET
            let bet1 = document.getElementById('betValueFirst').value;
            let bet2 = document.getElementById('betValueSecond').value;
            let bet3 = document.getElementById('betValueThird').value;

            let Random = document.getElementById('Random').value;

            // CONDICION PARA SABER SI EL PRIMER INPUT TIENE EL VALOR VACIO O NO 

            if(inputValueFirst !== '' && bet1 !== ''){
                // ACTIVAMOS Y DESACTIVAMOS CLASES SI EL VALOR ES DIFERENTE DE UN STRING VACIO
                num_gamers1.classList.add('active');
                num_gamers1.classList.remove('false');
                console.log(inputValueFirst)

                // DATOS DE LOS NOMBRE GUARDADOS EN EL LOCALSTORAGE
                localStorage.setItem("Primer nombre", inputValueFirst);
                localStorage.setItem("ID Player One", idPlayer);
                localStorage.setItem("betValueFirst", bet1);

                localStorage.setItem("RANDOM", Random);

                info.innerHTML = '';
            }else {
                // ACTIVAMOS Y DESACTIVAMOS CLASES SI EL VALOR ES IGUAL DE UN STRING VACIO
                num_gamers1.classList.add('false');
                num_gamers1.classList.remove('active');

                info.innerHTML = 'Enter a name';
            }

            // CONDICION PARA SABER SI EL SEGUNDO INPUT TIENE EL VALOR VACIO O NO 

            if(inputValueSecond !== '' && bet2 !== ''){
                num_gamers2.classList.add('active');
                num_gamers2.classList.remove('false');

                // DATOS DE LOS NOMBRE GUARDADOS EN EL LOCALSTORAGE
                localStorage.setItem("Segundo nombre", inputValueSecond);
                localStorage.setItem("ID Player Second", idPlayer2);
                localStorage.setItem("betValueSecond", bet2);

                info2.innerHTML = '';
            }else {
                num_gamers2.classList.add('false');
                num_gamers2.classList.remove('active');

                info2.innerHTML = 'Enter a second name';
            }
            // CONDICION PARA SABER SI EL TERCERO INPUT TIENE EL VALOR VACIO O NO 
            if(inputValueThird !== '' && bet3 !== ''){
                num_gamers3.classList.add('active');
                num_gamers3.classList.remove('false');

                // DATOS DE LOS NOMBRE GUARDADOS EN EL LOCALSTORAGE
                localStorage.setItem("Tercer nombre", inputValueThird);
                localStorage.setItem("ID Player Third", idPlayer3);
                localStorage.setItem("betValueThird", bet3);
                
                info3.innerHTML = '';
            }else {
                num_gamers3.classList.add('false');
                num_gamers3.classList.remove('active');

                info3.innerHTML = 'Enter a Third name';
            }


            if(inputValueFirst !== '' && inputValueSecond !== '' && inputValueThird !== '' && bet1 !== '' && bet2 !== '' && bet3 !== ''){
                play.classList.add('active');
            }else {
                play.classList.remove('active');
            }
        }

        const CreateGame = () => {
        return (
            <>
                <header>
                    <div className='logo'>GAME CRAPTS</div>
                </header>

                <div className='content'>
                    <div className='start'>
                        <div className='gamers'>
                            GAMERS
                        </div>
                        <div className='num_gamers1'>
                            1. <input type="text" placeholder="Firts number" id='first' autoComplete='off' autoFocus="on" />
                            <input type="text" placeholder="Firts number Bet" id='betValueFirst' autoComplete='off'/>
                        </div>

                        <span className='info' id='info'></span>

                        <div className='num_gamers2'>
                            2. <input type="text" placeholder="Second number" id='second' autoComplete='off'/>
                            <input type="text" placeholder="Firts number Bet" id='betValueSecond' autoComplete='off'/>
                        </div>

                        <span className='info' id='info2'></span>

                        <div className='num_gamers3'>
                            3. <input type="text" placeholder="Third number" id='third' autoComplete='off'/>
                            <input type="text" placeholder="Firts number Bet" id='betValueThird' autoComplete='off'/>
                            <button value={url} id='Random' disabled className='disabled'></button>
                        </div>

                        <span className='info' id='info3'></span>

                        <div className='check' onClick={getValueInput}>ACCEPT</div>

                        <div className='game'>
                            <Link to={`/game/${url}`} className='play'><FontAwesomeIcon icon={faCirclePlay} /></Link>
                        </div>
                    </div>       
                    <div className='by'>
                        <div className='name'>
                            By Daniela Montano
                        </div>
                    </div>
                </div>
            </>
        )
        }

        export default CreateGame