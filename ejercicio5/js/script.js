var robot = (nombre ="RX8") => nombre+(parseInt(Math.random()*90)+10) ;

document.getElementById("generado").innerHTML = 'El robot se llama '+robot();
