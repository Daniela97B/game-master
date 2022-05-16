# CANTERAS ll
# SEMANA 4- Ejercicio caso práctico de una página dinámica
Se crea un juego de dados para multiples jugadores.  Se implemneta el juego por medio de React.

Para iniciar presion el boton "START" copiando en el navegador la siguiente linea :localhost:8080, nos lleva a la siguiente
pagina para crear el juego.

En la ruta http://localhost:8080/createGame 
Nos mostrara la vista  para crear el juego con los tres participantes, seguido del numero
para laapuesta del juego. Si no se ingresa el numero o nombre en la casilla, no sera posible comenzar el juego.

http://localhost:8080/game/fffff-ggg-jjjjj
Esta ruta nos muestra el estado del juego y el id de los jugadores con su respectivo nombre. Por defecto, tiene definido que el juego no se 
encuentra en progreso(finalizado). El id del juego se genera automaticamente.

http://localhost:8080/game/fffff-ggg-jjjjj/winner 
Muestra el ganador del juego con su apuesta y nombre, definidos previamente. 

http://localhost:8080/startGame 
Esta url mostrara el id del juego, id de cada jugador y su apuesta. Estos datos se han generado en la funcion creatGame
donde se ingresa el nombre del jugador y la apuesta de cada uno.

NOTA : Tener en cuenta que el id es random, va a ser un id diferente para cada inicio del juego.