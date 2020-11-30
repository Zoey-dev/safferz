document.addEventListener("DOMContentLoaded", function(){
    const images = [];

    const imageElements = document.querySelectorAll('.gallery-images');
    
    const myModal = document.querySelector('.my-modal');

    myModal.addEventListener('click', function(e){
        e.stopPropagation(); 
        if(this == e.target){
            this.classList.remove('show-modal');
        }
    })


    imageElements.forEach(element => {
        element.addEventListener('click', openModal);
    });
    
    
    function openModal(){
        myModal.classList.add('show-modal');
        const modalImage = document.querySelector('#modal-image');
        modalImage.setAttribute('src', this.getAttribute('src'))

    }
});



