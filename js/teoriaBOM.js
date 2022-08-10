//metodo setTimeout ejecuta una funcion pasado un tiempo
let contador = 1;

function saludar(nombre){
    document.write(`<p>Hola mundo, ${nombre}</p>`);
    if(contador === 5){
        window.clearInterval(indentificador)
    }
    contador++;
}

// window.setTimeout(saludar, 3000);
//setTimeout(saludar, 3000);
// setTimeout(('franco')=>{
//     document.write('<p>Hola mundo</p>');
// } , 3000);

// setTimeout(()=>{saludar('franco')}, 3000);

//metodo setInterval ejecutar una funcion cada cierto tiempo

let indentificador = setInterval(()=>{saludar('franco')},2000);