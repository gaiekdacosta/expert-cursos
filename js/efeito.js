window.efeitorevelar = ScrollReveal({ reset: true })

efeitorevelar.reveal('.efeito-reveal', {
    duration: 2000,
    distance: '90px'
})

efeitorevelar.reveal('.efeito-reveal-delay', {
    duration: 2000,
    distance: '90px',
    delay: 800
})

efeitorevelar.reveal('.efeito-reveal-card1', {
    duration: 2000,
    distance: '90px',
    delay: 500
})

efeitorevelar.reveal('.efeito-reveal-card2', {
    duration: 2000,
    distance: '90px',
    delay: 1000
})

efeitorevelar.reveal('.efeito-reveal-card3', {
    duration: 2000,
    distance: '90px',
    delay: 1200
})

efeitorevelar.reveal('.efeito-reveal-card4', {
    duration: 2000,
    distance: '90px',
    delay: 1500
})

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.cursos-container');
    
    let isDown = false;
    let startX;
    let scrollLeft;
    let isDragging = false;
    let velocity = 0;
    let rafId;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        cancelMomentumTracking();
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        if (isDragging) {
            startMomentumTracking();
        }
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        isDragging = true;
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 0.5; // Reduzir a quantidade de movimento por vez
        container.scrollLeft = scrollLeft - walk;
        velocity = walk;
    });

    function startMomentumTracking() {
        cancelMomentumTracking();
        rafId = requestAnimationFrame(momentumLoop);
    }

    function cancelMomentumTracking() {
        cancelAnimationFrame(rafId);
    }

    function momentumLoop() {
        container.scrollLeft -= velocity;
        velocity *= 0.95; 
        if (Math.abs(velocity) > 0.5) {
            rafId = requestAnimationFrame(momentumLoop);
        }
    }
});