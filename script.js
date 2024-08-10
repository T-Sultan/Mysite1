// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
});

// Dynamic Content Loading
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    
    const options = {
        root: null,
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Form Validation
document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const errors = [];
    
    if (name.value.trim() === '') {
        errors.push('Name is required.');
    }
    
    if (!validateEmail(email.value)) {
        errors.push('Invalid email format.');
    }
    
    if (message.value.trim() === '') {
        errors.push('Message cannot be empty.');
    }
    
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }
    
    this.submit();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Interactive Elements: Hover Effect
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('hover');
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('hover');
    });
});
