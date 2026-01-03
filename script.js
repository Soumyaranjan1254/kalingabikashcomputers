document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    
    // Add hamburger button
    const menuBtn = document.createElement('div');
    menuBtn.innerHTML = '☰';
    menuBtn.className = 'menu-btn';
    navbar.appendChild(menuBtn);
    
    menuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('mobile-menu');
        menuBtn.innerHTML = navLinks.classList.contains('mobile-menu') ? '✕' : '☰';
    });
    
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after click
                navLinks.classList.remove('mobile-menu');
                menuBtn.innerHTML = '☰';
            }
        });
    });
    
    // Close mobile menu on outside click
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('mobile-menu');
            menuBtn.innerHTML = '☰';
        }
    });
});
// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 1500);
});
// Back-to-Top Button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
