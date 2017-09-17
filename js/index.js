
/*

Crear el modulo IMDB

    El array de peliculas tendra que ser privado del modulo
    El modulo tendra que poder agregar una pelicula (ID y titulo)
    Validar que la pelicula ingresada no se encuentre y en caso de encontrarla 
    mostrar un mensaje advirtiendo el error
    El modulo tendra que eliminar una pelicula por ID
    El modulo tendra que ordernar su array de pelicuas en base a una propiedad enviada por 
    paramentro y mostrarlo en consola
    El modulo tendra que persistir el array de peliculas en session o local storage para que 
    luego se pueda recuperar y seguir agregando o eliminando


*/


var miModuloDePeliculas = (function() {
    var instancia;

    //funcion iniciadora
    function init() {

		var peliculas = function (){
			var pel1 = new Peliculas ("Lo que el viento se llevo", 1)
			var pel2 = new Peliculas ("When Harry met Sally", 2)

		
			return{
				arrPeliculas [pel1:pel1, pel2:pel2]
			}
		}
	}

	return {
		crearEjecucionModulo : function(){
			if (!instancia){
				instancia = init()
				return instancia
			}
		}
	}

var probarModulo = miModuloDePeliculas.crearEjecucionModulo()


var chequearID = function (peli){
	var posicionPelicula = arrPeliculas.indexOf(peli)
	return posicionPelicula
}

var incluirPelicula = function (peli){

	if (chequearID(peli) === -1){
		arrPeliculas.push(peli)
		return arrPeliculas
	}else{
		console.log ("Esa película ya está en el array")
		}
	}

var ordenarPorTitulo = function (lista)
	lista.sort(function(a, b) {
 	var tituloA = a.titulo.toUpperCase(); 
 	var tituloB = b.titulo.toUpperCase();
 	if (tituloA < tituloB) {
    	return -1;
   	}
  	if (tituloA > tituloB) {
	   	return 1;
 	}
 	return 0;
 	});


var ordenarPorId = function (lista)
	lista.sort(function (a, b) {
	 	return a.id - b.id;
	})



var eliminarPelicula = function (lista, parametro, valorid) {
	 
	for (var i = 0; i < lista.length; i++) {
 	if (lista[i][parametro] == valorid) {
	return lista.remove(i)
	}
	}
	return null;
	}
