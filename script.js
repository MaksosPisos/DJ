window.addEventListener('load', () => {
    // buttons
    const left = document.querySelector('.arrow-left');
    const right = document.querySelector('.arrow-right');
    // carusel
    const carusel = document.querySelector('.events-tickets_carusel');
    const caruselItem = document.querySelectorAll('.events-tickets_item');
   
    // counter
    let counter = 0;
    let stepSize = caruselItem[0].clientWidth + 30;
    
    
    right.addEventListener('click', () => {
        if (counter >= caruselItem.length - 3) {
            counter = -1;
        }
        counter++;
        carusel.style.transform = `translateX(-${stepSize * counter}px)`;
        
    })
    left.addEventListener('click', () => {
        if (counter <= 0) counter = caruselItem.length - 2;
        counter--;
        carusel.style.transform = `translateX(-${stepSize * counter}px)`;
        
    })

});

