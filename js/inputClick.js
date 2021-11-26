const inputClick = () =>{
    const container = document.querySelectorAll('#form form .input-container');
    container.forEach(container => {
        const input = container.firstElementChild.nextElementSibling;
        const text = container.firstElementChild;
        input.addEventListener('focus', () =>{
            text.classList.add('move-text');
        })
    })
}

inputClick();