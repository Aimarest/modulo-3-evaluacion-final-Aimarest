# EJERCICIO DE EVALUACIÓN FINAL DEL MÓDULO 3 DE ADALAB.(REACT)

## Descripción del ejercicio:rocket::

Este es el ejercicio de evaluación final del módulo 3 (React)de Adalab, realizado por Ana Isabel Marcos Estévez.

### Estructura básica:

El ejercicio consistía en desarrollar una página web con el listado de 50 escenas de las películas donde el
actor Owen Wilson ha dicho 'wow', API Wow de Owen Wilson es la API que hemos usado en este ejercicio.
Teníamos que usar React para realizarlo.
Sobre cada una, teníamos que mostrar al menos:

- Poster (poster)
- Película (movie)
- Frase completa (full_line)
- Año (year)

### Filtrado por película:

La segunda parte consistía en realizar un filtro para buscar por película. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre quedasen en la
interfaz solo las escenas cuya película contuviera las letras escritas.

### Filtrado por año:

La siguiente parte consistía en filtrar el listado por año de la película. Para eso, añadimos un
select a la interfaz, de forma que al seleccionar un año quedasen en la interfaz solo las escenas que
coincidiesen con el año seleccionado.

### Componentes de la aplicación:

La aplicación debía tener los siguientes componentes como mínimo:

- Componente para los filtros.
- Componente para el listado ( MovieSceneList ).
- Componente para la tarjeta de cada escena del listado ( MovieSceneItem ).
- Componente para el detalle de cada escena del listado ( MovieSceneDetail ).

### Detalle de cada escena:

También había que implementar la siguiente funcionalidad: al hacer clic sobre la tarjeta de una escena, su información
debía aparecer a pantalla completa. Para hacer esto debíamos usar rutas y React Router DOM. En la pantalla de
detalle debía aparecer:

- nombre de la película,
- frase completa
- director
- el enlace del audio de la escena, al darle clic debe mostrarse en una pestaña aparte en el navegador.

### Detalles de calidad:

-Como nos gusta cuidar la semántica, el campo de texto debía estar recubierto por una etiqueta

<form />.
- Si estando en el campo de filtrado pulsabamos intro debíamos impedir que el navegador navegue o cambie
la ruta sin querer.
- Si se buscaba por un texto por ejemplo "ZZZ" y no hay ninguna escena de película que coincida con
dicho texto se debía mostrar un mensaje del tipo "No hay ninguna nombre de película que coincida
con la palabra ZZZ".
- El filtro debía filtrar independientemente de que la usuaria introdujera el texto en mayúsuclas o
minúsculas.
- Al entrar en el detalle de un escena y a continuación pulsar atrás, el campo de texto debe mostrar el
texto que tenía anteriormente.

### Bonus:

Además de todo eso, como bonus podíamos implementar varias mejoras visuales, ordenar el listado de películas por orden alfabético y hacer la url compatible.

## Construido con 🛠️:

### Lenguajes:

- HTML
- SCSS
- JAVASCRIPT
- REACT
- Estructura BEM

### Herramientas:

- VSC
- GITHUB
- GULP
- ADALAB REACT STARTER KIT
- NPM
- API abierto Wow Owen Wilson: https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50

# Autores:

- Ana Isabel Marcos Estévez
- Adalab
