// ===================================
// Typing Animation
// ===================================
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = [
    'Web Developer',
    'UI/UX Designer',
    'Full Stack Developer',
    'Creative Problem Solver'
];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, newTextDelay + 250);
    
    // Start coding animation
    startCodingAnimation();
    
    // Start mini navbar typing animation
    startMiniNavbarTyping();
});

// ===================================
// Mini Navbar Typing Animation
// ===================================
function startMiniNavbarTyping() {
    const miniTypingText = document.querySelector('.mini-typing-text');
    if (!miniTypingText) return;
    
    const codeTexts = [
        'Hello World!',
        'Susenthrakumar',
    ];
    
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = codeTexts[currentIndex];
        
        if (!isDeleting && charIndex < currentText.length) {
            miniTypingText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, 100);
        } else if (isDeleting && charIndex > 0) {
            miniTypingText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeText, 50);
        } else if (!isDeleting && charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeText, 2000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % codeTexts.length;
            setTimeout(typeText, 500);
        }
    }
    
    typeText();
}

// ===================================
// Terminal Typing Animation
// ===================================
function startTerminalTyping() {
    const typingText = document.querySelector('.typing-text');
    const techList = document.querySelector('.tech-list');
    
    if (!typingText || !techList) return;
    
    const pythonCode = [
        '# Python Code Example',
        'def greet_developer():',
        '    name = input("Enter your name: ")',
        '    skills = ["Python", "JavaScript", "React", "Node.js"]',
        '    ',
        '    print(f"Hello {name}! 👋")',
        '    print("My Tech Stack:")',
        '    for skill in skills:',
        '        print(f"  ✓ {skill}")',
        '    ',
        '    return "Ready to build amazing projects!"',
        '',
        'greet_developer()'
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    
    // Type Python code line by line
    function typeCode() {
        if (lineIndex < pythonCode.length) {
            if (charIndex < pythonCode[lineIndex].length) {
                typingText.innerHTML += pythonCode[lineIndex][charIndex];
                charIndex++;
                setTimeout(typeCode, 30);
            } else {
                typingText.innerHTML += '<br>';
                lineIndex++;
                charIndex = 0;
                setTimeout(typeCode, 100);
            }
        } else {
            // Code typed, now show output
            setTimeout(showOutput, 800);
        }
    }
    
    // Show Python output
    function showOutput() {
        const outputs = [
            { text: 'Enter your name: Susenthrakumar', color: '#60a5fa', delay: 0 },
            { text: 'Hello Susenthrakumar! 👋', color: '#22c55e', delay: 300 },
            { text: 'My Tech Stack:', color: '#e2e8f0', delay: 600 },
            { text: '  ✓ Python', color: '#3b82f6', delay: 900 },
            { text: '  ✓ JavaScript', color: '#f59e0b', delay: 1100 },
            { text: '  ✓ React', color: '#61dafb', delay: 1300 },
            { text: '  ✓ Node.js', color: '#68a063', delay: 1500 },
            { text: '', color: '#e2e8f0', delay: 1700 },
            { text: '"Ready to build amazing projects!"', color: '#a78bfa', delay: 1900 }
        ];
        
        techList.innerHTML = '<div style="margin-top: 20px; border-top: 1px solid #334155; padding-top: 15px;"></div>';
        
        outputs.forEach((output, index) => {
            setTimeout(() => {
                const outputLine = document.createElement('div');
                outputLine.className = 'tech-item';
                outputLine.style.color = output.color;
                outputLine.textContent = output.text;
                techList.appendChild(outputLine);
            }, output.delay);
        });
    }
    
    // Start typing
    typeCode();
}

// ===================================
// Animated Coding Screen
// ===================================
function startCodingAnimation() {
    const codeElement = document.getElementById('typing-code');
    if (!codeElement) return;
    
    const codeLines = [
        '<span class="keyword">const</span> <span class="function">createWebsite</span> = () => {',
        '  <span class="keyword">const</span> <span class="variable">design</span> = <span class="string">"responsive"</span>;',
        '  <span class="keyword">const</span> <span class="variable">performance</span> = <span class="string">"optimized"</span>;',
        '  ',
        '  <span class="comment">// Build amazing experiences</span>',
        '  <span class="keyword">return</span> {',
        '    <span class="variable">quality</span>: <span class="string">"premium"</span>,',
        '    <span class="variable">speed</span>: <span class="string">"blazing-fast"</span>,',
        '    <span class="variable">users</span>: <span class="number">1000000</span>',
        '  };',
        '};',
        ''
    ];
    
    let lineIndex = 0;
    let charIndex = 0;
    let currentCode = '';
    
    function typeCode() {
        if (lineIndex < codeLines.length) {
            if (charIndex < codeLines[lineIndex].length) {
                currentCode += codeLines[lineIndex][charIndex];
                codeElement.innerHTML = currentCode;
                charIndex++;
                setTimeout(typeCode, 30);
            } else {
                currentCode += '\n';
                codeElement.innerHTML = currentCode;
                lineIndex++;
                charIndex = 0;
                setTimeout(typeCode, 100);
            }
        } else {
            // Reset and loop
            setTimeout(() => {
                lineIndex = 0;
                charIndex = 0;
                currentCode = '';
                codeElement.innerHTML = '';
                typeCode();
            }, 3000);
        }
    }
    
    typeCode();
}

// ===================================
// Navbar Scroll Effect
// ===================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Active Nav Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// ===================================
// Particles Animation
// ===================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 20 + 10;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        particlesContainer.appendChild(particle);
    }
}

createParticles();

// ===================================
// Counter Animation for Stats
// ===================================
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const increment = target / 100;
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.ceil(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number, .stat-count').forEach(counter => {
    counterObserver.observe(counter);
});

// ===================================
// Fade-in Animation on Scroll
// ===================================
const fadeElements = document.querySelectorAll('[data-aos]');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

fadeElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(element);
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission
    // In a real application, you would send this data to a server
    console.log('Form Data:', data);
    
    // Show success message
    formMessage.className = 'form-message success';
    formMessage.innerHTML = '<i class="fas fa-check-circle me-2"></i>Thank you! Your message has been sent successfully.';
    formMessage.style.display = 'block';
    
    // Reset form
    contactForm.reset();
    
    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
    
    // For actual implementation, use fetch or axios:
    /*
    fetch('your-api-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Thank you! Your message has been sent successfully.';
        formMessage.style.display = 'block';
        contactForm.reset();
    })
    .catch(error => {
        formMessage.className = 'form-message error';
        formMessage.textContent = 'Oops! Something went wrong. Please try again.';
        formMessage.style.display = 'block';
    });
    */
});

// ===================================
// Newsletter Form Handling
// ===================================
const newsletterForm = document.querySelector('.newsletter-form');

newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    console.log('Newsletter subscription:', email);
    
    // Show success feedback
    const submitBtn = this.querySelector('button');
    const originalHTML = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-check"></i>';
    submitBtn.style.backgroundColor = '#22c55e';
    
    // Reset after 2 seconds
    setTimeout(() => {
        submitBtn.innerHTML = originalHTML;
        submitBtn.style.backgroundColor = '';
        this.reset();
    }, 2000);
});

// ===================================
// Back to Top Button
// ===================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Current Year in Footer
// ===================================
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===================================
// Timeline Animation Enhancement
// ===================================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }, index * 100);
            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px'
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    timelineObserver.observe(item);
});

// ===================================
// Service Card Hover Effect Enhancement
// ===================================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===================================
// Form Input Focus Effect
// ===================================
const formInputs = document.querySelectorAll('.form-control');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ===================================
// Preloader (Optional)
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animation
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease';
            heroContent.style.opacity = '1';
        }, 100);
    }
});

// ===================================
// Parallax Effect on Scroll
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===================================
// Skills Animation on View
// ===================================
const skillItems = document.querySelectorAll('.skill-item');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 50);
            skillObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

skillItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    skillObserver.observe(item);
});

// ===================================
// Dynamic Gradient Background
// ===================================
const hero = document.querySelector('.hero-section');
let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX / window.innerWidth;
    mouseY = e.clientY / window.innerHeight;
    
    if (hero) {
        hero.style.background = `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%, #e0f2fe 0%, #ddd6fe 50%, #f8fafc 100%)`;
    }
});

// ===================================
// Easter Egg: Konami Code
// ===================================
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

// ===================================
// Mobile Menu Close on Outside Click
// ===================================
document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');
    
    if (navbar && navbar.classList.contains('show') && !navbar.contains(e.target) && !toggler.contains(e.target)) {
        const bsCollapse = new bootstrap.Collapse(navbar);
        bsCollapse.hide();
    }
});

// ===================================
// Initialize Tooltips (if using Bootstrap tooltips)
// ===================================
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// ===================================
// Project Filtering
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 10);
                } else {
                    item.classList.add('hide');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// ===================================
// Auto Slider Function (Brand & Social)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    // Function to initialize any slider
    function initSlider(sliderClass, slideClass) {
        const slider = document.querySelector(sliderClass);
        if (slider) {
            const slides = slider.querySelectorAll(slideClass);
            const dots = slider.querySelectorAll('.dot');
            let currentSlide = 0;

            function showSlide(index) {
                // Remove active class from all slides and dots
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));

                // Add active class to current slide and dot
                slides[index].classList.add('active');
                dots[index].classList.add('active');
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            // Auto-slide every 3 seconds
            let autoSlide = setInterval(nextSlide, 3000);

            // Manual control with dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    currentSlide = index;
                    showSlide(currentSlide);
                    // Reset auto-slide timer
                    clearInterval(autoSlide);
                    autoSlide = setInterval(nextSlide, 3000);
                });
            });

            // Pause on hover
            slider.addEventListener('mouseenter', () => {
                clearInterval(autoSlide);
            });

            slider.addEventListener('mouseleave', () => {
                autoSlide = setInterval(nextSlide, 3000);
            });
        }
    }

    // Initialize Brand Identity Slider
    initSlider('.brand-slider', '.brand-slide');
    
    // Initialize Social Media Slider
    initSlider('.social-slider', '.social-slide');
});

// ===================================
// Performance Optimization: Debounce Scroll Events
// ===================================
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    // Scroll functions here if needed
});

window.addEventListener('scroll', debouncedScroll);

// ===================================
// Custom Image Viewer Modal
// ===================================
const ImageModal = {
    modal: null,
    modalImage: null,
    modalTitle: null,
    modalDescription: null,
    modalCounter: null,
    modalClose: null,
    modalPrev: null,
    modalNext: null,
    currentImages: [],
    currentIndex: 0,

    init: function() {
        // Get all elements
        this.modal = document.getElementById('imageModal');
        this.modalImage = document.getElementById('modalImage');
        this.modalTitle = document.getElementById('modalTitle');
        this.modalDescription = document.getElementById('modalDescription');
        this.modalCounter = document.getElementById('modalCounter');
        this.modalClose = document.getElementById('modalClose');
        this.modalPrev = document.getElementById('modalPrev');
        this.modalNext = document.getElementById('modalNext');

        if (!this.modal) {
            console.error('Modal not found');
            return;
        }

        // Bind events
        this.bindEvents();
        console.log('Modal initialized successfully');
    },

    bindEvents: function() {
        const self = this;

        // Close button
        if (this.modalClose) {
            this.modalClose.onclick = function() {
                self.close();
            };
        }

        // Previous button
        if (this.modalPrev) {
            this.modalPrev.onclick = function() {
                self.prev();
            };
        }

        // Next button
        if (this.modalNext) {
            this.modalNext.onclick = function() {
                self.next();
            };
        }

        // Click outside to close
        this.modal.onclick = function(e) {
            if (e.target === self.modal) {
                self.close();
            }
        };

        // Keyboard navigation
        document.onkeydown = function(e) {
            if (!self.modal.classList.contains('active')) return;

            if (e.key === 'Escape') {
                self.close();
            } else if (e.key === 'ArrowLeft') {
                self.prev();
            } else if (e.key === 'ArrowRight') {
                self.next();
            }
        };

        // Attach to all image containers with modal-trigger class
        setTimeout(function() {
            const triggers = document.querySelectorAll('.modal-trigger');
            console.log('Found triggers:', triggers.length);
            
            triggers.forEach(function(trigger) {
                trigger.onclick = function(e) {
                    // Don't trigger if clicking on slider dots or external link
                    if (e.target.classList.contains('dot') || 
                        e.target.closest('.project-link') ||
                        e.target.classList.contains('project-link')) {
                        return;
                    }
                    
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isGallery = this.classList.contains('gallery-trigger');
                    const images = isGallery 
                        ? this.getAttribute('data-images').split(',')
                        : [this.getAttribute('data-image')];
                    const title = this.getAttribute('data-title') || 'Project Image';
                    const description = this.getAttribute('data-description') || '';
                    
                    console.log('Opening modal:', images);
                    self.open(images, title, description);
                    return false;
                };
            });
        }, 500);
    },

    open: function(images, title, description) {
        this.currentImages = images;
        this.currentIndex = 0;
        this.modalTitle.textContent = title;
        this.modalDescription.textContent = description;
        this.showImage();
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    },

    close: function() {
        this.modal.classList.remove('active');
        document.body.style.overflow = '';
        this.currentImages = [];
        this.currentIndex = 0;
    },

    showImage: function() {
        this.modalImage.src = this.currentImages[this.currentIndex];
        this.modalCounter.textContent = (this.currentIndex + 1) + ' / ' + this.currentImages.length;
        
        // Update buttons
        this.modalPrev.disabled = (this.currentIndex === 0);
        this.modalNext.disabled = (this.currentIndex === this.currentImages.length - 1);
    },

    prev: function() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.showImage();
        }
    },

    next: function() {
        if (this.currentIndex < this.currentImages.length - 1) {
            this.currentIndex++;
            this.showImage();
        }
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        ImageModal.init();
    });
} else {
    ImageModal.init();
}

console.log('%c🚀 Portfolio Website Loaded Successfully!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cDeveloped with ❤️', 'color: #7c3aed; font-size: 14px;');
