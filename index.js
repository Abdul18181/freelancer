let navbar = document.querySelector('#header')
window.onscroll = ()=>{
   
}


let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav ul li  a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    if(window.scrollY>30){
        navbar.classList.add('active')
    }else if(window.scrollY<30){
        navbar.classList.remove('active')
    }
};
