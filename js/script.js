ScrollReveal().reveal('.section', { 
    duration: 800, 
    origin: 'bottom', 
    distance: '50px',
    easing: 'ease-in-out',
    reset: false // Se quiser que o efeito aconteça sempre que a seção reaparecer
});
document.getElementById("year").textContent = new Date().getFullYear();
