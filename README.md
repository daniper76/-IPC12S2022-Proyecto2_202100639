# Documentación del Proyecto 2 IPC1 F 💻


## Tabla de Datos: 

| Carnet | Nombre Completo  | Auxiliar   |Sección|
| :------------ |:---------------:| :-----:|:-----:|
| 202100639      | Francisco Daniel Peruch de León | Javier Oswaldo Mirón Cifuentes |F|


## FRONTEND :


Para la realización del frontend se utilizo la tecnología de Angular, por medio del cual se crearon diferentes componenetes, modelos y servicios  los cuales fueron de utilidad para la creación del diseño y el dinamismo de la página web debido a que por medio de Angular se pudo vincular el backend creado para esta aplicación, el cual contenia los diferentes datos que posteriormente fueron mostrados a lo largo de la aplicación de una manera agradable a la vista del usario.

- Los servicios utilizados para la creación del frontend fueron los siguientes:

  * jugadores.service: En este servicio se importaton los módulos de Angular HttpClient y HttpHeaders, con esto se pudo crear un variable de tipo HttpClient, la cual fue utilizada en el método llamado CargarDatos() y asi poder enviar los datos de los jugadores al componente Home el cual valiendose de este servicio cargo los datos de los jugadores desde el backend y los mostro a el usuario de una forma agradable.
  * usuario.service: En este servicio se importaton los módulos de Angular HttpClient y HttpHeaders, y el módulo de UsuarioInterface de los Models, en este servicio se creo el método CargarDatos() el cual cargaba los datos de los usuarios y los returnaba, asi en el componente login podían ser guardados en un arreglo, el mismo que sirvio para poder realizar la validación de la contraseña y el usuario en el login. Este servicio tambien fue utilizado en el componente navigation para poder eliminar el usuario que estaba en la sesión  y asi posibilitar el regreso a la pagiana donde se encuentra el login.

- Los componenentes utilizados para la creación del fronted fueron los siguientes:

  * Home: En este componenete se realizaron las diferentes funcionalidades y el diseño de la homePage, en donde se encuentran el buscador y aparecen las tarjetas de los jugadores.
  * Login: En este componente se realizaron las direntes funcionalidades y el diseño de la pagina donde se encuentra el login para ingresar a la aplicación.
  * navigation: En este componente se realizaron las funcionalidades del boton para cerrar sesión.
  * tarjetas: En este componente se realizo el diseño de las tarjetas, además de la lógica de como estas tarjetas obtenían los datos e imagen para mostrarlos en la homePage.

- Los models utilizados para la creación del frontend fueron los siguientes:

  * jugadorInterface: Este se utilizo para poder manejar los datos de los jugadores para cada tarjeta.
  * usuarioInterface: Este se utilizo para poder manejar los datos de los usuarios a travéz de la aplicación.
 

### Manual de Uso de la Aplicación:


+ Se debre ingresar la dirección http://localhost:4200/login en el buscador para poder llegar a la pagina de login de la aplicación.

[![cap1.jpg](https://i.postimg.cc/zfcfW02x/cap1.jpg)](https://postimg.cc/SXcqb7h9)

+ Una vez en la pagina donde se encuentra el login se debe ingresar el usuario y contraseña correcta para ingresar a la aplicación.

[![C2.jpg](https://i.postimg.cc/RhV6LNQR/C2.jpg)](https://postimg.cc/JDvz17FD)

+ Una vez dentro de la aplicación se desplegaran las diferentes tarjetas de los jugadores con sus datos e imagen, para ver más imagenes solo deslice hacia abajo.

[![c3.jpg](https://i.postimg.cc/yxdhYf5s/c3.jpg)](https://postimg.cc/zbsHxk8c)

+ Para buscar a una selección, a un jugador o a los jugadores de una región. Introducir la palabra clave de lo que desea buscar en la barra de busqueda y luego oprima el botón correspondiente a la clase de busqueda que desea hacer. Ejemplo:
  - Nombre del Jugador: Jack.
  - Oprimir el botón Nombre.
 
 [![2022-11-05-1.png](https://i.postimg.cc/nVyrqWtL/2022-11-05-1.png)](https://postimg.cc/3WZ3TnNM)

+ Para salir de la aplicación se debe oprimir el botón que tiene la leyenda "Log out".

[![c4.jpg](https://i.postimg.cc/tTftrKDw/c4.jpg)](https://postimg.cc/S26MRtBf)

## BACKEND:

+ El puerto utilizado fue el 3000.

+ Los módulos utilizados para el desarrollo del backend fueron los siguientes:
  - indexRoutes: En este módulo se creo el arreglo de objetos que contiene los datos de los 20 jugadores, el cual emula a una base de datos, en este módulo se crearon las rutas y asi poder brindar las respuestas correspondientes a cada endpoint en relación a los jugadores.
  - usuariosRoutes: En este módulo se creo el arreglo de objetos que contiene a los usuarios que pueden acceder a la aplicación. En este módulo se creo la ruta para poder acceder a los datos json de los usuarios.
  - index: En este módulo se realizo la lógica para la creación del servidor en el puerto 3000, determinando las rutas. En este caso se determinaron los endpoints /jugadores y /usuarios y sus respectivas variaciones.
 
+ Endpoint:

  - /jugadores/all ---> Este endopoint muestra los datos de los 20 jugadores en formato json.
  - /usuarios/all ---> Este endpoint muestra los datos en formato json de los 3 usuarios que tienen acceso a la aplicación.
  - /jugadores/nombre/:nombre ---> Este endpoint muestra los datos en formato json de un solo jugador al colocar en lugar de :nombre, el nombre del jugador.
  - /jugadores/seleccion/:seleccion ---> Este endopoint muestra los datos en formato json de todos los jugadores de una seleccion, cuando se coloca en lugar de :seleccion el nombre de la seleccion de los jugadores que se desea obtener los datos.
  - /jugadores/region/:region ---> Este endpoint muestra los datos en formato json de todos los jugadores de una determinada region, cuando se coloca en lugar de :region, el nombre de la región a la que pertencen los jugadores que se desean obtener los datos.
