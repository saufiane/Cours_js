// Selectionner mon bouton
const button = document.getElementById('btn');
console.log(button);

function displayHello(){
    console.log('coucou');
}

// button.addEventListener('click', function(){
//     console.log('Bouton cliqué');
// });


// button.addEventListener('dblclick', function(){
//     console.log('Bouton Double cliqué');
// });


// button.addEventListener('mouseover', function(){
//     console.log('Souris au dessus');
// });

button.addEventListener('click', function(){
    displayHello();
});


button.addEventListener('dblclick', function(){
    displayHello();
});


button.addEventListener('mouseover', function(){
    displayHello();
});

// mauvaise pratique pour les fonction à ne pas faire
// button.addEventListener('mouseleave', displayHello);

button.addEventListener('mouseleave', function(){
    displayHello;
});


