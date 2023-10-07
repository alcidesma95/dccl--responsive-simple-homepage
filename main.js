// Obtén el contenedor y el slider
const toggleButton = document.getElementById('toggleButton');
const slider = document.getElementById('slider');
const body = document.getElementsByTagName('body')[0]

// Agrega un evento click al contenedor
toggleButton.addEventListener('click', () => {
    // Cambia la posición del slider
    slider.style.left = slider.style.left === '0%' ? '50%' : '0%';
    body.classList.toggle('light')
    body.classList.toggle('dark')
    // Cambia la visibilidad de las imágenes
    document.getElementById('imageDark').style.display = slider.style.left === '0%' ? 'block' : 'none';
    document.getElementById('imageLigth').style.display = slider.style.left === '0%' ? 'none' : 'block';

    toggleButton.style.backgroundColor= slider.style.left === '0%' ?  '#fff':'#111729' ;
    slider.style.backgroundColor= slider.style.left === '0%' ? '#111729'  :'#fff' ;
});

