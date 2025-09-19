document.addEventListener('DOMContentLoaded', function() {
    console.log("jdup website loaded.");

    // --- 네비게이션 메뉴 관련 코드 ---
    const navToggle = document.querySelector('.nav-toggle');
    const header = document.querySelector('#page-top');

    if (navToggle && header) {
        navToggle.addEventListener('click', () => {
            header.classList.toggle('nav-open');
        });

        header.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default anchor jump

                // Close mobile nav if open
                if (header.classList.contains('nav-open')) {
                    header.classList.remove('nav-open');
                }

                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20; // 20px buffer

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // --- 문의하기 팝업(모달) 관련 코드 ---
    const contactModal = document.getElementById('contact-modal');
    const openContactModalBtn = document.getElementById('open-contact-modal');
    const closeContactModalBtn = contactModal.querySelector('.close-button');
    const contactForm = document.getElementById('contact-form');
    const formContainer = document.getElementById('form-container');
    const thankYouMessage = document.getElementById('thank-you-message');

    if (contactModal && openContactModalBtn && closeContactModalBtn && contactForm) {
        openContactModalBtn.addEventListener('click', () => { contactModal.style.display = 'flex'; });
        closeContactModalBtn.addEventListener('click', () => { contactModal.style.display = 'none'; });
        window.addEventListener('click', (e) => { if (e.target == contactModal) { contactModal.style.display = 'none'; } });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if(formContainer && thankYouMessage){
                formContainer.style.display = 'none';
                thankYouMessage.style.display = 'block';
            }
            setTimeout(() => {
                contactModal.style.display = 'none';
                if(formContainer && thankYouMessage){
                    formContainer.style.display = 'block';
                    thankYouMessage.style.display = 'none';
                    contactForm.reset();
                }
            }, 3000);
        });
    }

    // --- 개인정보처리방침 팝업(모달) 관련 코드 ---
    const privacyModal = document.getElementById('privacy-policy-modal');
    const openPrivacyModalBtn = document.getElementById('open-privacy-policy');
    const closePrivacyModalBtn = privacyModal.querySelector('.privacy-close');

    if (privacyModal && openPrivacyModalBtn && closePrivacyModalBtn) {
        openPrivacyModalBtn.addEventListener('click', () => { privacyModal.style.display = 'flex'; });
        closePrivacyModalBtn.addEventListener('click', () => { privacyModal.style.display = 'none'; });
        window.addEventListener('click', (e) => { if (e.target == privacyModal) { privacyModal.style.display = 'none'; } });
    }

    // --- 서비스 섹션 아코디언 관련 코드 ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const currentlyActive = document.querySelector('.accordion-header.active');
            if (currentlyActive && currentlyActive !== this) {
                currentlyActive.classList.remove('active');
                currentlyActive.nextElementSibling.style.maxHeight = null;
            }
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // --- 성과 그래프 관련 코드 ---
    const performanceChartCtx = document.getElementById('performanceChart');
    if (performanceChartCtx) {
        new Chart(performanceChartCtx, {
            type: 'bar',
            data: {
                labels: ['업무 효율성', '수작업 비용'],
                datasets: [{
                    label: '도입 전',
                    data: [40, 85],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1
                }, {
                    label: 'jdup 도입 후',
                    data: [95, 15],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top' },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y + (context.label === '업무 효율성' ? '%' : '만원');
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { callback: function(value) { return value + ' (단위: %, 만원)'; } }
                    }
                }
            }
        });
    }

    // --- 3D Tilt Effect for Glass Cards ---
    const glassCards = document.querySelectorAll('.glass-card');

    glassCards.forEach(card => {
        let bounds;

        function rotateToMouse(e) {
            if (!bounds) bounds = card.getBoundingClientRect();
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            const rotateX = (e.clientY - centerY) / 15; // Adjust divisor for tilt intensity
            const rotateY = (centerX - e.clientX) / 15; // Adjust divisor for tilt intensity

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }

        card.addEventListener('mouseenter', () => {
            bounds = card.getBoundingClientRect();
            card.addEventListener('mousemove', rotateToMouse);
        });

        card.addEventListener('mouseleave', () => {
            card.removeEventListener('mousemove', rotateToMouse);
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of element visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });
});