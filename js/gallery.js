/* const gallery = () => {
    let counter = 0;
    const klimaURLs = [
        "./assets/klima1.jpg",
        "./assets/klima2.jpg",
        "./assets/klima3.jpg",
        "./assets/klima4.jpg",
        "./assets/klima5.jpg",
        "./assets/klima6.jpg",
    ];

    const klimaImages = document.querySelectorAll('#galerija-klima img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    klimaImages.forEach((image,index) =>{
        image.addEventListener('click', () =>{
            counter = index-1;
            console.log(counter)
            modalImg.src = klimaURLs[`${index+1}`];
            modal.classList.add('show-modal');
        })
    })

    prevBtn.addEventListener('click', () =>{
        console.log(counter)
        if(counter==0){
            counter = klimaURLs.length-1;
            modalImg.src = klimaURLs[`${counter}`];
        } else{
            counter--;
            modalImg.src = klimaURLs[`${counter}`];
        }
    })
}

gallery(); */
