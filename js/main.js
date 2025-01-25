// Sayfa yüklendiğinde çalışacak animasyonlar
document.addEventListener('DOMContentLoaded', () => {
    // Yazı animasyonu
    const typing = document.querySelector('.typing-text');
    if (typing) {
        const text = typing.innerHTML;
        typing.innerHTML = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typing.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }

    // Scroll animasyonları
    const scrollElements = document.querySelectorAll('.scroll-animate');
    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });

    // Renk değiştiren elementler
    const colorElements = document.querySelectorAll('.color-change');
    colorElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.backgroundColor = getRandomColor();
        });
    });
});

// Rastgele renk üreteci
function getRandomColor() {
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', 
        '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Paralaks efekti
window.addEventListener('scroll', () => {
    const parallax = document.querySelector('.hero-section');
    if (parallax) {
        let scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
    }
});

// Beceri çubukları animasyonu
const animateSkills = () => {
    const skills = document.querySelectorAll('.skill-progress');
    skills.forEach(skill => {
        const progress = skill.getAttribute('data-progress');
        skill.style.width = progress + '%';
    });
};

// GSAP Animasyonları
gsap.registerPlugin(ScrollTrigger);

// Hero section animasyonu
gsap.from('.hero-content', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out'
});

// Scroll animasyonları
gsap.utils.toArray('.section').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1
        },
        y: 50,
        opacity: 0,
        duration: 1
    });
});

// Yetenekler animasyonu
gsap.from('.skills ul li', {
    scrollTrigger: {
        trigger: '.skills',
        start: 'top 80%'
    },
    x: -100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2
});

// ScrollReveal konfigürasyonu
ScrollReveal().reveal('.about-image', {
    duration: 1000,
    distance: '50px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'left'
});

// Dark/Light mode switch
const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeSwitch.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Mobil menü
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
        // Mobil menüyü kapat
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Aktif menü öğesini güncelle
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Typing efekti
const typingText = document.querySelector('.typing-text');
const text = typingText.textContent;
typingText.textContent = '';

let i = 0;
function type() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

type();
