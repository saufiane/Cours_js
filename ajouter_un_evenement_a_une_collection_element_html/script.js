// Selection des li
const elements = document.getElementsByTagName('li');
console.log(elements);

for(let element of elements){
    element.addEventListener('click' , function(){
        // console.log('coucou');
        // console.log(this);

        // mauvaise pratique
        if( this.innerText == 'Mot 1'){
            console.log('1');
        }else if(this.innerText == 'Mot 2'){
            console.log('2');
        }
        else if(this.innerText == 'Mot 3'){
            console.log('3');
        }else{
            console.log('4');
        }
    })
}


// elements[0].addEventListener('click' , function(){
//     console.log('mot 1');
// });

// elements[1].addEventListener('click' , function(){
//     console.log('mot 2');
// });

// elements[2].addEventListener('click' , function(){
//     console.log('mot 3');
// });

// elements[3].addEventListener('click' , function(){
//     console.log('mot 4');
// });