window.addEventListener('scroll', () => {
    const plane = document.getElementById('plane');
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentScroll = window.scrollY;
    
    // Calculate scroll percentage
    const scrollProgress = currentScroll / scrollTotal;
    
    // Move the airplane down the screen based on scroll position
    const topPosition = scrollProgress * window.innerHeight;
    plane.style.top = `${topPosition}px`;
    
    // Bank the airplane slightly depending on scroll progress
    plane.style.transform = `translateX(-50%) rotate(${scrollProgress * 45}deg)`;
});