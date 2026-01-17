// Sistem Informasi Manajemen Retail - Main JavaScript
// Kelompok 4 - 2025

// Global variables
let particles = [];
let particleSystem;
let isDarkMode = false;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeDarkMode();
    initializeAnimations();
    initializeScrollReveal();
    initializeParticles();
    initializeCounters();
    initializeNavigation();
});

// Initialize animations
function initializeAnimations() {
    // Animate role cards on hover
    const roleCards = document.querySelectorAll('.role-card');
    roleCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                rotateY: 5,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                rotateY: 0,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });

    // Animate benefit cards
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                translateY: -8,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                translateY: 0,
                duration: 300,
                easing: 'easeOutCubic'
            });
        });
    });
}

// Initialize scroll reveal animations
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Stagger animation for multiple elements
                const siblings = Array.from(entry.target.parentNode.children);
                const index = siblings.indexOf(entry.target);
                
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [30, 0],
                    duration: 600,
                    delay: index * 100,
                    easing: 'easeOutCubic'
                });
            }
        });
    }, observerOptions);

    // Observe all scroll reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// Initialize particle system
function initializeParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    // Create canvas for particles
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    container.appendChild(canvas);

    // Set canvas size
    function resizeCanvas() {
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 3 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }

        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        particles.forEach((particle, i) => {
            particles.slice(i + 1).forEach(otherParticle => {
                const dx = particle.x - otherParticle.x;
                const dy = particle.y - otherParticle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.save();
                    ctx.globalAlpha = (100 - distance) / 100 * 0.2;
                    ctx.strokeStyle = '#ffffff';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particle.x, particle.y);
                    ctx.lineTo(otherParticle.x, otherParticle.y);
                    ctx.stroke();
                    ctx.restore();
                }
            });
        });

        requestAnimationFrame(animate);
    }
    animate();
}

// Initialize counter animations
function initializeCounters() {
    const counters = document.querySelectorAll('.stats-number');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.dataset.count);
                
                anime({
                    targets: { value: 0 },
                    value: finalValue,
                    duration: 2000,
                    easing: 'easeOutCubic',
                    update: function(anim) {
                        target.textContent = Math.round(anim.animatables[0].target.value);
                    }
                });
                
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Initialize smooth navigation
function initializeNavigation() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
}

// Utility function for smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation to role dashboards
function navigateToRole(role) {
    // Add loading animation
    const button = event.target.closest('.role-card');
    
    anime({
        targets: button,
        scale: 0.95,
        duration: 200,
        easing: 'easeOutCubic',
        complete: function() {
            // Navigate to role page
            window.location.href = `${role}.html`;
        }
    });
}

// Mock data for dashboards
const mockData = {
    products: [
        { id: 1, name: 'Indomie Goreng', price: 3500, stock: 150, category: 'Makanan', barcode: '1234567890' },
        { id: 2, name: 'Teh Botol Sosro', price: 5000, stock: 200, category: 'Minuman', barcode: '2345678901' },
        { id: 3, name: 'Sabun Lifebuoy', price: 8000, stock: 80, category: 'Kebersihan', barcode: '3456789012' },
        { id: 4, name: 'Shampoo Sunsilk', price: 15000, stock: 60, category: 'Kebersihan', barcode: '4567890123' },
        { id: 5, name: 'Beras 5kg', price: 45000, stock: 40, category: 'Sembako', barcode: '5678901234' },
        { id: 6, name: 'Minyak Goreng 1L', price: 18000, stock: 90, category: 'Sembako', barcode: '6789012345' },
        { id: 7, name: 'Gula 1kg', price: 12000, stock: 120, category: 'Sembako', barcode: '7890123456' },
        { id: 8, name: 'Roti Tawar', price: 15000, stock: 30, category: 'Makanan', barcode: '8901234567' },
        { id: 9, name: 'Susu UHT', price: 8000, stock: 100, category: 'Minuman', barcode: '9012345678' },
        { id: 10, name: 'Detergen Rinso', price: 25000, stock: 50, category: 'Kebersihan', barcode: '0123456789' }
    ],
    
    transactions: [
        { id: 'TRX001', date: '2025-01-15', total: 85000, items: 5, status: 'completed', cashier: 'Ali' },
        { id: 'TRX002', date: '2025-01-15', total: 120000, items: 8, status: 'completed', cashier: 'Budi' },
        { id: 'TRX003', date: '2025-01-15', total: 45000, items: 3, status: 'pending', cashier: 'Citra' },
        { id: 'TRX004', date: '2025-01-14', total: 200000, items: 12, status: 'completed', cashier: 'Ali' },
        { id: 'TRX005', date: '2025-01-14', total: 75000, items: 4, status: 'completed', cashier: 'Budi' }
    ],
    
    users: [
        { id: 1, name: 'Ali', role: 'kasir', status: 'active', lastLogin: '2025-01-15 10:30' },
        { id: 2, name: 'Budi', role: 'kasir', status: 'active', lastLogin: '2025-01-15 11:15' },
        { id: 3, name: 'Citra', role: 'gudang', status: 'active', lastLogin: '2025-01-15 09:45' },
        { id: 4, name: 'Dedi', role: 'gudang', status: 'offline', lastLogin: '2025-01-14 16:20' },
        { id: 5, name: 'Eva', role: 'admin', status: 'active', lastLogin: '2025-01-15 08:00' }
    ],
    
    stockMovements: [
        { id: 1, product: 'Indomie Goreng', type: 'in', quantity: 100, date: '2025-01-15', staff: 'Citra' },
        { id: 2, product: 'Teh Botol Sosro', type: 'out', quantity: 50, date: '2025-01-15', staff: 'Ali' },
        { id: 3, product: 'Beras 5kg', type: 'in', quantity: 25, date: '2025-01-14', staff: 'Dedi' },
        { id: 4, product: 'Minyak Goreng', type: 'out', quantity: 30, date: '2025-01-14', staff: 'Budi' }
    ],
    
    salesData: [
        { date: '2025-01-01', sales: 2500000, transactions: 45 },
        { date: '2025-01-02', sales: 3200000, transactions: 58 },
        { date: '2025-01-03', sales: 2800000, transactions: 52 },
        { date: '2025-01-04', sales: 4100000, transactions: 73 },
        { date: '2025-01-05', sales: 3900000, transactions: 68 },
        { date: '2025-01-06', sales: 4500000, transactions: 82 },
        { date: '2025-01-07', sales: 3800000, transactions: 65 }
    ]
};

// Utility functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(amount);
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function generateBarcode() {
    return Math.random().toString(36).substring(2, 15).toUpperCase();
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg max-w-sm ${
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-500' :
        type === 'warning' ? 'bg-yellow-500' :
        'bg-blue-500'
    } text-white`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
    
    // Remove after 3 seconds
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: 300,
            opacity: 0,
            duration: 300,
            easing: 'easeInCubic',
            complete: () => {
                document.body.removeChild(notification);
            }
        });
    }, 3000);
}

// Export mock data for use in other pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { mockData, formatCurrency, formatDate, generateBarcode, showNotification };
}

// Mobile menu toggle
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

// Loading animation
function showLoading() {
    const loader = document.createElement('div');
    loader.id = 'loading-overlay';
    loader.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    loader.innerHTML = `
        <div class="bg-white rounded-lg p-8 flex flex-col items-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
            <p class="text-gray-700">Loading...</p>
        </div>
    `;
    document.body.appendChild(loader);
}

function hideLoading() {
    const loader = document.getElementById('loading-overlay');
    if (loader) {
        document.body.removeChild(loader);
    }
}

// Initialize page-specific functionality
function initializePage() {
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'kasir.html':
            initializeKasirPage();
            break;
        case 'gudang.html':
            initializeGudangPage();
            break;
        case 'admin.html':
            initializeAdminPage();
            break;
        case 'owner.html':
            initializeOwnerPage();
            break;
    }
}

// Dark Mode Functions
function initializeDarkMode() {
    // Load dark mode preference
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
    }
    
    // Create dark mode toggle button
    createDarkModeToggle();
}

function createDarkModeToggle() {
    // Check if toggle already exists
    if (document.getElementById('dark-mode-toggle')) return;
    
    const toggle = document.createElement('button');
    toggle.id = 'dark-mode-toggle';
    toggle.className = 'dark-mode-toggle';
    toggle.onclick = toggleDarkMode;
    
    const icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    icon.setAttribute('class', 'w-6 h-6');
    icon.setAttribute('fill', 'none');
    icon.setAttribute('stroke', 'currentColor');
    icon.setAttribute('viewBox', '0 0 24 24');
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('stroke-width', '2');
    
    if (isDarkMode) {
        path.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
    } else {
        path.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
    }
    
    icon.appendChild(path);
    toggle.appendChild(icon);
    document.body.appendChild(toggle);
}

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // Update toggle icon
    const toggle = document.getElementById('dark-mode-toggle');
    const icon = toggle.querySelector('svg path');
    
    if (isDarkMode) {
        icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
    } else {
        icon.setAttribute('d', 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z');
    }
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
    
    // Animate toggle
    anime({
        targets: toggle,
        scale: [1, 1.1, 1],
        duration: 300,
        easing: 'easeOutCubic'
    });
}

// Page-specific initialization functions
function initializeKasirPage() {
    console.log('Kasir page initialized');
    // Will be implemented in kasir.html
}

function initializeGudangPage() {
    console.log('Gudang page initialized');
    // Will be implemented in gudang.html
}

function initializeAdminPage() {
    console.log('Admin page initialized');
    // Will be implemented in admin.html
}

function initializeOwnerPage() {
    console.log('Owner page initialized');
    // Will be implemented in owner.html
}

// Call page initialization
document.addEventListener('DOMContentLoaded', initializePage);