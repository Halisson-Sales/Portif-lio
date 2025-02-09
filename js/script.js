const menuHamburguer = document.querySelector('.menu-hamburguer');
menuHamburguer.addEventListener('click', () => {
    toggleMenu();
});

function toggleMenu(){
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if(menuHamburguer.classList.contains('change')){
        nav.style.display = 'block';

    }else{
        nav.style.display = 'none';
    }

}

document.querySelectorAll('.btn-ql').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const serviceBox = this.closest('.services-box');
        const paragraph = serviceBox.querySelector('p');
        
        // Alternar classe active no parágrafo
        paragraph.classList.toggle('active');
        
        // Alternar texto do botão baseado no estado
        button.textContent = paragraph.classList.contains('active') 
            ? 'Ler menos' 
            : 'Ler mais';
    });
});