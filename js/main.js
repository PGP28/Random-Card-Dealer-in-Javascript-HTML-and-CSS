let carta = document.querySelector('.card');
function crearCarta (){
    carta.innerHTML=''
    let rotatorIcon = () => {

        let icon = ["diamons", "spades", "hearts", "cubs"];
        let randomIcon = Math.floor(Math.random() * icon.length);
    
        return icon[randomIcon];
    
    };
    
    let rotatorNumber = () => {
    
        let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let randomNum = Math.floor(Math.random() * numbers.length);
    
        return numbers[randomNum];
    
    };
    
    
    let interiorCarta = document.createElement('div');
    interiorCarta.classList.add('number')
    interiorCarta.classList.add(rotatorIcon());
    interiorCarta.innerHTML = rotatorNumber();
    
    carta.appendChild(interiorCarta)

}



// let rotatorIcon = () => {

//     let icon = ["diamons", "spades", "hearts", "cubs"];
//     let randomIcon = Math.floor(Math.random() * icon.length);

//     return icon[randomIcon];

// };

// let rotatorNumber = () => {

//     let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
//     let randomNum = Math.floor(Math.random() * numbers.length);

//     return numbers[randomNum];

// };

// let carta = document.querySelector('.card');
// let interiorCarta = document.createElement('div');
// interiorCarta.classList.add('number')
// interiorCarta.classList.add(rotatorIcon());
// interiorCarta.innerHTML = rotatorNumber();

// carta.appendChild(interiorCarta)

let prueba1 = document.querySelector('.prueba')
let parrafo = document.createElement('p')
// parrafo.innerHTML = 'Hola';
prueba1.appendChild(parrafo)

let boton = document.createElement('button')
boton.innerHTML = 'Enviar';
prueba1.appendChild(boton);
boton.addEventListener('click', crearCarta)

