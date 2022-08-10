function obtenerFecha(){
    let fechaActual = new Date();
    // console.log(fechaActual)
    // console.log(fechaActual.getDate());
    // console.log(fechaActual.getDay()); //0 a 6, 0 dia domingo
    console.log(fechaActual.getMonth()); 
    // console.log(fechaActual.getFullYear()); 
    
    // <p>Miercoles 10 de agosto de 2021</p>
    
    let parrafoFecha = document.getElementById('fecha');
    
    let diaSemanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    
    parrafoFecha.innerHTML = `${diaSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`
    
    let parrafoHora = document.getElementById('hora');
    
    let segundos = fechaActual.getSeconds();
    if(segundos<10){
        segundos = '0'+ segundos;
    }
    
    parrafoHora.innerHTML = `${fechaActual.getHours()}:${fechaActual.getMinutes()}:${segundos}`
}

setInterval(obtenerFecha,1000);