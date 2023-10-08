// Obtén el contenedor y el slider
const toggleButton = document.getElementById('toggleButton');
const slider = document.getElementById('slider');
const logo = document.getElementsByClassName('logo')[0]
const body = document.getElementsByTagName('body')[0]
const menuButton = document.getElementById('open-menu')
const closeButton = document.getElementById('close-menu')
const menu = document.getElementById('menu')
// Agrega un evento click al contenedor
toggleButton.addEventListener('click', () => {
    // Cambia la posición del slider
    slider.style.left = slider.style.left === '0%' ? '50%' : '0%';
    body.classList.toggle('light')
    body.classList.toggle('dark')

    menu.style.backgroundColor= slider.style.left === '0%'? '#111729' : '#fff'

    logo.style.backgroundImage= slider.style.left === '0%' ? "url('assets/alarado-icon-homepage-w.svg')" : "url('assets/alarado-icon-homepage.svg')"
    // Cambia la visibilidad de las imágenes
    document.getElementById('imageDark').style.display = slider.style.left === '0%' ? 'block' : 'none';
    document.getElementById('imageLigth').style.display = slider.style.left === '0%' ? 'none' : 'block';
    
    toggleButton.style.backgroundColor= slider.style.left === '0%' ?  '#fff':'#111729' ;
    slider.style.backgroundColor= slider.style.left === '0%' ? '#111729'  :'#fff' ;
});



menuButton.addEventListener('click',()=> {
    menu.classList.remove('hidden')
 
   menuButton.classList.add('hidden')
})

closeButton.addEventListener('click', ()=>{
    menu.classList.add('hidden')
    menuButton.classList.remove('hidden')

})


