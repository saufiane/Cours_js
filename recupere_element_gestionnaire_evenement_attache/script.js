document.body.addEventListener('click' , function(e){
    const elementHasCliked = e.target;
    const referenceEventElement = e.currentTarget;
    console.log('Element cible après propagation de l\'événement', elementHasCliked);
    console.log('Element auquel est rattaché le gestionnaire d\'écoute', referenceEventElement);
})