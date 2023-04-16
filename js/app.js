let cronometro;
let segundos = 0;
let minutos = 0;
let horas = 0;
let pause = false;

document.getElementById("iniciar").addEventListener("click", iniciarCronometro);
document.getElementById("pausar").addEventListener("click", pausarCronometro);
document.getElementById("resetear").addEventListener("click", resetearCronometro);

function actualizarCronometro() {
  segundos++;
  
  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  
  if (minutos == 60) {
    minutos = 0;
    horas++;
  }
  

  let tiempo = (horas < 10 ? "0" + horas : horas) + ":" + 
    (minutos < 10 ? "0" + minutos : minutos) + ":" + 
    (segundos < 10 ? "0" + segundos : segundos);
  
  document.getElementById("cronometro").innerHTML = tiempo;
}


function iniciarCronometro() {
  if (!pause) {
    cronometro = setInterval(actualizarCronometro, 1000);
  }
  pause = false;
}


function pausarCronometro() {
  clearInterval(cronometro);
  pause = true;
}


function resetearCronometro() {
  clearInterval(cronometro);
  segundos = 0;
  minutos = 0;
  horas = 0;
  document.getElementById("cronometro").innerHTML = "00:00:00";
  pause = false;
}



