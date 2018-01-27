//INICIO
var Inicio = {

    Jugamos: function () {
        document.getElementById('inicio').style.display='none';
        document.getElementById('empezar').style.display='none';
        Juego.iniciarRecursos();
    },
};

/*Reloj LOCO para mostar el tiempo y Generar presionar al Jugador*/
var seg;
var min;
var reloj;


Inicio.ReiniciarReloj = function(){
  clearInterval(reloj);
};

Inicio.IniciarReloj = function(){
  seg =0;
  min =0;
  s = document.getElementById("segundos");
  m = document.getElementById("minutos");

  reloj = setInterval(
      function(){
          if(seg==60){
              seg=0;
              min++;
              if (min<10) m.innerHTML ="0"+min;
              else m.innerHTML = min;
              if(min==60) min=0;
          }
          if (seg<10) s.innerHTML ="0"+seg;
          else s.innerHTML = seg;
          seg++;
      }
      ,1000);
};
/*Termina RELOJ LOCO*/

