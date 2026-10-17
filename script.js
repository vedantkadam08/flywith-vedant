window.addEventListener('scroll', () => {
    const plane = document.getElementById('plane');
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentScroll = window.scrollY;
    
    // Calculate scroll percentage
    const scrollProgress = currentScroll / scrollTotal;
    
    // Move the airplane indicator down the right side of the screen smoothly
    const topPosition = scrollProgress * (window.innerHeight - 150) + 50;
    plane.style.top = `${topPosition}px`;
    
    // Rotate airplane slightly based on scroll depth
    plane.style.transform = `rotate(${scrollProgress * 30}deg)`;
});
