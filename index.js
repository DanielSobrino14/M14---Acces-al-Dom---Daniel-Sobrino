// Ex 1 //
const titol = document.querySelector('h1');
titol.textContent = 'Nou títol canviat';


const llista = document.querySelector('ul');
const novaLlista = document.createElement('li');
novaLlista.textContent = 'Element 4';
llista.appendChild(novaLlista);

const botoCanviText = document.getElementById('canviText');
const paragraf = document.querySelector('p');

botoCanviText.addEventListener('click', function() {
  paragraf.textContent = 'Text del paràgraf modificat després de fer clic al botó!';
});

// Ex 2 //
const divCanviEstil = document.createElement('div');
divCanviEstil.textContent = 'Fes clic aquí per canviar l\'estil';
document.body.appendChild(divCanviEstil);

divCanviEstil.addEventListener('click', function() {
  divCanviEstil.style.color = 'blue';
  divCanviEstil.style.fontSize = '24px';
});

// Ex 3 //
const formulari = document.createElement('form');
const inputText = document.createElement('input');
inputText.type = 'text';
inputText.placeholder = 'Escriu aquí...';
const botoEnviar = document.createElement('button');
botoEnviar.type = 'button';
botoEnviar.textContent = 'Enviar';
formulari.appendChild(inputText);
formulari.appendChild(botoEnviar);
document.body.appendChild(formulari);

const resultat = document.createElement('div');
document.body.appendChild(resultat);
botoEnviar.addEventListener('click', function() {
  const nouParagraf = document.createElement('p');
  nouParagraf.textContent = inputText.value;
  resultat.appendChild(nouParagraf);
});

// Ex 4 //
const creacio = document.createElement('input');
creacio.type = 'text';
creacio.placeholder = 'Suggeriment aquí...';
const botonAfegir = document.createElement('button');
botonAfegir.textContent = 'Afegir Suggeriment';
const listar = document.createElement('ul');
document.body.appendChild(creacio);
document.body.appendChild(botonAfegir);
document.body.appendChild(listar);

botonAfegir.addEventListener("click", function() {
    const escriure = document.createElement('li');
    escriure.textContent = creacio.value;

    const botonRealitzat = document.createElement('button');
    botonRealitzat.textContent = 'Realitzat';
    botonRealitzat.addEventListener('click', function() {
        escriure.classList.toggle('realitzat');
    });

    const botonBorrar = document.createElement('button');
    botonBorrar.textContent = 'Eliminar';
    botonBorrar.addEventListener('click', function() {
        listar.removeChild(escriure);
    });

    escriure.appendChild(botonRealitzat);
    escriure.appendChild(botonBorrar);
    listar.appendChild(escriure);
});

const style = document.createElement('style');
style.textContent = `
    .realitzat {
        text-decoration: line-through;
        color: red; 
    }
`;
document.head.appendChild(style);
