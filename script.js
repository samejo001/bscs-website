/* ============================================
   BSCS — Bachelor of Science in Computer Science
   Premium Website JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Loading Screen
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1500);

    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);

    themeToggle.addEventListener('click', () => {
        const current = html.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        updateChartColors();
    });

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile Menu
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll Progress Bar
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = progress + '%';
    });

    // Active Nav Link on Scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // Typing Effect
    const typingElement = document.getElementById('typingText');
    const phrases = [
        'Build the Future.',
        'Master Computer Science.',
        'Shape Technology.',
        'Code Your Dreams.'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    setTimeout(typeEffect, 1000);

    // Counter Animation
    const counters = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                const duration = 2000;
                const start = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(easeOut * countTo);
                    target.textContent = current.toLocaleString();

                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    }
                }

                requestAnimationFrame(updateCounter);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // Scroll Reveal
    const revealElements = document.querySelectorAll('.section-header, .about-card, .subject-card, .career-card, .project-card, .resource-card, .stack-category, .stat-card, .faq-item, .book-item, .contact-card');

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Roadmap Tabs
    const roadmapBtns = document.querySelectorAll('.roadmap-btn');
    const semesterPanels = document.querySelectorAll('.semester-panel');

    roadmapBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const sem = btn.getAttribute('data-sem');

            roadmapBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            semesterPanels.forEach(panel => {
                panel.classList.remove('active');
                if (panel.getAttribute('data-panel') === sem) {
                    panel.classList.add('active');
                }
            });
        });
    });

    // Subject Search
    const subjectSearch = document.getElementById('subjectSearch');
    const subjectCards = document.querySelectorAll('.subject-card');

    subjectSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        subjectCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const desc = card.querySelector('p').textContent.toLowerCase();

            if (title.includes(query) || desc.includes(query)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });

    // Project Filter
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Testimonial Slider
    const testimonialsTrack = document.querySelector('.testimonials-track');
    const testPrev = document.getElementById('testPrev');
    const testNext = document.getElementById('testNext');
    let testIndex = 0;

    function updateTestimonialSlider() {
        const cardWidth = document.querySelector('.testimonial-card')?.offsetWidth + 24 || 0;
        testimonialsTrack.style.transform = `translateX(-${testIndex * cardWidth}px)`;
    }

    testNext.addEventListener('click', () => {
        const cards = document.querySelectorAll('.testimonial-card');
        const maxIndex = window.innerWidth > 768 ? cards.length - 2 : cards.length - 1;
        testIndex = Math.min(testIndex + 1, maxIndex);
        updateTestimonialSlider();
    });

    testPrev.addEventListener('click', () => {
        testIndex = Math.max(testIndex - 1, 0);
        updateTestimonialSlider();
    });

    window.addEventListener('resize', updateTestimonialSlider);

    // Circular Progress Animation
    const circularProgressBars = document.querySelectorAll('.circular-bar');
    const circularValues = document.querySelectorAll('.circular-value');

    const circularObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progress = entry.target.parentElement;
                const percent = parseInt(progress.getAttribute('data-percent'));
                const circumference = 2 * Math.PI * 52;
                const offset = circumference - (percent / 100) * circumference;

                entry.target.style.strokeDashoffset = offset;

                const valueEl = progress.querySelector('.circular-value');
                let current = 0;
                const interval = setInterval(() => {
                    current++;
                    valueEl.textContent = current;
                    if (current >= percent) clearInterval(interval);
                }, 20);

                circularObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    circularProgressBars.forEach(bar => circularObserver.observe(bar));

    // Skill Bar Animation
    const skillFills = document.querySelectorAll('.skill-fill');

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fill = entry.target;
                const width = fill.style.width;
                fill.style.width = '0';
                setTimeout(() => {
                    fill.style.width = width;
                }, 100);
                skillObserver.unobserve(fill);
            }
        });
    }, { threshold: 0.5 });

    skillFills.forEach(fill => skillObserver.observe(fill));

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>Message Sent!</span>';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            contactForm.reset();
            lucide.createIcons();
        }, 3000);
    });

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = newsletterForm.querySelector('button');
        btn.innerHTML = '<i data-lucide="check"></i>';
        setTimeout(() => {
            btn.innerHTML = '<i data-lucide="arrow-right"></i>';
            newsletterForm.reset();
            lucide.createIcons();
        }, 2000);
    });

    // Charts
    initCharts();
});

// Chart Configuration
let charts = {};

function getChartColors() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    return {
        text: isDark ? '#94a3b8' : '#475569',
        grid: isDark ? '#1e293b' : '#e2e8f0',
        tooltipBg: isDark ? '#1e293b' : '#ffffff',
        tooltipText: isDark ? '#f1f5f9' : '#0f172a'
    };
}

function updateChartColors() {
    const colors = getChartColors();
    Object.values(charts).forEach(chart => {
        if (chart) {
            if (chart.options.scales?.x) {
                chart.options.scales.x.ticks.color = colors.text;
                chart.options.scales.x.grid.color = colors.grid;
            }
            if (chart.options.scales?.y) {
                chart.options.scales.y.ticks.color = colors.text;
                chart.options.scales.y.grid.color = colors.grid;
            }
            if (chart.options.plugins?.tooltip) {
                chart.options.plugins.tooltip.backgroundColor = colors.tooltipBg;
                chart.options.plugins.tooltip.titleColor = colors.tooltipText;
                chart.options.plugins.tooltip.bodyColor = colors.tooltipText;
            }
            if (chart.options.plugins?.legend?.labels) {
                chart.options.plugins.legend.labels.color = colors.text;
            }
            chart.update();
        }
    });
}

function initCharts() {
    const colors = getChartColors();
    const accentColor = '#3b82f6';
    const accentSecondary = '#6366f1';
    const accentTertiary = '#0ea5e9';

    // Enrollment Chart (Line)
    const enrollmentCtx = document.getElementById('enrollmentChart');
    if (enrollmentCtx) {
        charts.enrollment = new Chart(enrollmentCtx, {
            type: 'line',
            data: {
                labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: [{
                    label: 'Student Enrollment',
                    data: [5200, 6100, 7800, 9200, 10500, 11200, 12000],
                    borderColor: accentColor,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: accentColor,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        titleColor: colors.tooltipText,
                        bodyColor: colors.tooltipText,
                        borderColor: colors.grid,
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8
                    }
                },
                scales: {
                    x: {
                        ticks: { color: colors.text, font: { family: 'Inter' } },
                        grid: { color: colors.grid, drawBorder: false }
                    },
                    y: {
                        ticks: { color: colors.text, font: { family: 'Inter' } },
                        grid: { color: colors.grid, drawBorder: false },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Skills Distribution (Pie)
    const skillsCtx = document.getElementById('skillsChart');
    if (skillsCtx) {
        charts.skills = new Chart(skillsCtx, {
            type: 'doughnut',
            data: {
                labels: ['Programming', 'AI/ML', 'Web Dev', 'Data Science', 'Cybersecurity', 'Cloud'],
                datasets: [{
                    data: [30, 20, 20, 12, 10, 8],
                    backgroundColor: [
                        '#3b82f6',
                        '#6366f1',
                        '#0ea5e9',
                        '#8b5cf6',
                        '#22c55e',
                        '#f59e0b'
                    ],
                    borderWidth: 0,
                    hoverOffset: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '65%',
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: colors.text,
                            font: { family: 'Inter', size: 12 },
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        titleColor: colors.tooltipText,
                        bodyColor: colors.tooltipText,
                        borderColor: colors.grid,
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8
                    }
                }
            }
        });
    }

    // Career Outcomes (Bar)
    const careerCtx = document.getElementById('careerChart');
    if (careerCtx) {
        charts.career = new Chart(careerCtx, {
            type: 'bar',
            data: {
                labels: ['Software Engineer', 'Web Developer', 'AI Engineer', 'Data Scientist', 'Cybersecurity', 'Cloud Engineer', 'UI/UX Designer', 'Freelancer'],
                datasets: [{
                    label: 'Graduates (%)',
                    data: [28, 20, 18, 12, 8, 7, 4, 3],
                    backgroundColor: [
                        '#3b82f6', '#6366f1', '#0ea5e9', '#8b5cf6',
                        '#22c55e', '#f59e0b', '#ec4899', '#64748b'
                    ],
                    borderRadius: 6,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: colors.tooltipBg,
                        titleColor: colors.tooltipText,
                        bodyColor: colors.tooltipText,
                        borderColor: colors.grid,
                        borderWidth: 1,
                        padding: 12,
                        cornerRadius: 8
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: colors.text,
                            font: { family: 'Inter', size: 11 },
                            autoSkip: false,
                            maxRotation: 45,
                            minRotation: 0
                        },
                        grid: { display: false, drawBorder: false }
                    },
                    y: {
                        ticks: { color: colors.text, font: { family: 'Inter' } },
                        grid: { color: colors.grid, drawBorder: false },
                        beginAtZero: true
                    }
                }
            }
        });
    }

    // Language Charts (Mini doughnuts)
    const langData = [
        { id: 'chartCpp', value: 25, color: '#00599C' },
        { id: 'chartJava', value: 20, color: '#E76F00' },
        { id: 'chartPython', value: 30, color: '#3776AB' },
        { id: 'chartJS', value: 28, color: '#F7DF1E' },
        { id: 'chartSQL', value: 22, color: '#F29111' },
        { id: 'chartCsharp', value: 15, color: '#9B4F96' },
        { id: 'chartPHP', value: 12, color: '#777BB4' }
    ];

    langData.forEach(lang => {
        const ctx = document.getElementById(lang.id);
        if (ctx) {
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Usage', 'Other'],
                    datasets: [{
                        data: [lang.value, 100 - lang.value],
                        backgroundColor: [lang.color, 'rgba(0,0,0,0.05)'],
                        borderWidth: 0,
                        cutout: '75%'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: false } },
                    animation: { animateScale: true, animateRotate: true }
                }
            });
        }
    });
}
