/* El objeto dibujante se encarga de manipular el canvas y hacer todo lo necesario
para poder pintar en la pantalla. Es un objeto que abstrae las complejidades del
canvas, brindandonos una interfaz para controlarlo facilmente en el juego.
No tenes que preocuparte por este archivo, solo saber como usar sus funciones. */

var Dibujante = {
  canvas: document.createElement('canvas'),
 

  borrarAreaDeJuego: function () {
    this.canvas.getContext('2d').clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  inicializarCanvas: function (anchoCanvas, altoCanvas) {
    this.canvas.width = anchoCanvas;
    this.canvas.height = altoCanvas;
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
  },


  /* Dibuja una imagen a partir de su ruta, en la posicion x, y
  con un ancho y alto dado. Es usada, por ejemplo, para pintar el mapa y los
  carteles de game over.*/
  dibujarImagen: function (ruta, x, y, ancho, alto) {
    var imagen = Resources.get(ruta);
    this.canvas.getContext('2d').drawImage(imagen, x, y, ancho, alto);
  },

  /* Dibuja una entidad en el juego, esto puede ser el jugador, un enemigo, etc
   es decir, cualquiera objeto que separ responder a los mensajes: sprite, x, y, ancho y alto*/
  dibujarEntidad: function (entidad) {
    this.dibujarImagen(entidad.sprite, entidad.x, entidad.y, entidad.ancho, entidad.alto);
  },

  /* Dibuja un rectangulo del color pasado por paramentro en la posicion x, y
   con ancho y alto*/
  dibujarRectangulo: function (color, x, y, ancho, alto) {
    var ctx = this.canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.fillRect(x, y, ancho, alto);
  },

  /*Dibujo el Texto*/
  dibujarTexto: function (texto, x, y) {
    var ctx = this.canvas.getContext('2d');
    ctx.fillStyle = 'white';
    ctx.font = 'bold 22px Arial';
    ctx.fillText(texto, x, y);
  },

/*Diibujo mi RELOJ LOCO EN LA ESQUINA DERECHA DEL CANVAS*/
dibujarTiempo: function() {
  var ctx = this.canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.font = '18px Arial';
  var min = document.getElementById('minutos').innerHTML;
  var seg = document.getElementById('segundos').innerHTML;
  //minutos
  ctx.fillText(min+':',860 ,50);
  //segundos
  ctx.fillText(seg, 890 ,50);
},

/*Dibujo mi RELOJ LOCO Cuando LLEGA AL REFUGIO*/
dibujarTiempoBueno: function() {
  var ctx = this.canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.font = '22px Arial';
  var min = document.getElementById('minutos').innerHTML;
  var seg = document.getElementById('segundos').innerHTML;
  //minutos
  ctx.fillText(min+':',435, 340);
  //segundos
  ctx.fillText(seg, 465, 340);
},

dibujarTextoChico: function (texto, x, y) {
  var ctx = this.canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.font = '14px Arial';
  ctx.fillText(texto, x, y);
},


 
}//Cierra el Objeto

