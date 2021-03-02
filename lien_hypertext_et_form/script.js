const link = document.querySelector('a');
const form = document.querySelector('form');

link.addEventListener('click', function(e){
    // console.log('coucou');
    e.preventDefault();
    // console.log('coucou');
    const text = document.querySelector('#text');
    text.classList.remove('hidden');
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('coucou');
})