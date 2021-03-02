document.body.addEventListener('click' , function(e){
    // console.log(e);
    const elementHasCliked = e.target;
    // console.log(elementHasCliked);
    elementHasCliked.classList.add('hidden');
})