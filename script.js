document.addEventListener('DOMContentLoaded', function() {
    console.log("jdup website loaded.");
    lucide.createIcons(); // Render Lucide icons
    Chart.register(ChartDataLabels);

    // --- Header Scroll Effect ---
    const mainHeader = document.querySelector('#page-top');
    const headerScrollThreshold = 50; // Pixels scrolled before effect activates

    window.addEventListener('scroll', () => {
        if (window.scrollY > headerScrollThreshold) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

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

    // --- 성과 그래프 관련 코드 - 모바일 반응형 개선 ---
    const performanceChartCtx = document.getElementById('performanceChart');
    if (performanceChartCtx) {
        // 화면 크기 확인 함수
        const isMobile = () => window.innerWidth <= 768;
        const isSmallMobile = () => window.innerWidth <= 480;
        
        // 반응형 설정 함수
        const getResponsiveSettings = () => {
            if (isSmallMobile()) {
                return {
                    legendPosition: 'top',
                    legendPadding: 15,
                    layoutPadding: 30,
                    fontSize: 10,
                    datalabelOffset: 8,
                    barThickness: 40
                };
            } else if (isMobile()) {
                return {
                    legendPosition: 'top',
                    legendPadding: 12,
                    layoutPadding: 25,
                    fontSize: 11,
                    datalabelOffset: 10,
                    barThickness: 50
                };
            } else {
                return {
                    legendPosition: 'top',
                    legendPadding: 10,
                    layoutPadding: 20,
                    fontSize: 12,
                    datalabelOffset: 12,
                    barThickness: 60
                };
            }
        };
        
        const settings = getResponsiveSettings();
        
        const chart = new Chart(performanceChartCtx, {
            type: 'bar',
            data: {
                labels: ['업무 효율성', '수작업 비용'],
                datasets: [{
                    label: '도입 전',
                    data: [40, 85],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    maxBarThickness: settings.barThickness
                }, {
                    label: 'jdup 도입 후',
                    data: [95, 15],
                    backgroundColor: 'rgba(54, 162, 235, 0.5)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    maxBarThickness: settings.barThickness
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: {
                    padding: {
                        top: settings.layoutPadding,
                        bottom: 10,
                        left: isMobile() ? 5 : 10,
                        right: isMobile() ? 5 : 10
                    }
                },
                plugins: {
                    legend: { 
                        position: settings.legendPosition,
                        labels: {
                            padding: settings.legendPadding,
                            font: {
                                size: settings.fontSize
                            },
                            usePointStyle: true,
                            pointStyle: 'rect'
                        }
                    },
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
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'top',
                        offset: settings.datalabelOffset,
                        formatter: (value, context) => {
                            const label = context.chart.data.labels[context.dataIndex];
                            if (label === '업무 효율성') {
                                return value + '%';
                            } else if (label === '수작업 비용') {
                                return value + '만원';
                            }
                            return value;
                        },
                        color: '#333',
                        font: { 
                            weight: 'bold',
                            size: settings.fontSize
                        },
                        // 모바일에서 레이블이 차트 영역을 벗어나지 않도록 조정
                        clip: false
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: settings.fontSize
                            },
                            maxRotation: isMobile() ? 0 : 0 // 모바일에서 레이블 회전 방지
                        }
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { 
                            font: {
                                size: settings.fontSize
                            },
                            callback: function(value) { 
                                return value; 
                            }
                        }
                    }
                },
                // 모바일에서 차트 영역 조정
                elements: {
                    bar: {
                        borderRadius: isMobile() ? 2 : 4
                    }
                }
            }
        });
        
        // 윈도우 리사이즈 시 차트 업데이트
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                const newSettings = getResponsiveSettings();
                
                // 차트 옵션 업데이트
                chart.options.layout.padding.top = newSettings.layoutPadding;
                chart.options.plugins.legend.labels.padding = newSettings.legendPadding;
                chart.options.plugins.legend.labels.font.size = newSettings.fontSize;
                chart.options.plugins.datalabels.offset = newSettings.datalabelOffset;
                chart.options.plugins.datalabels.font.size = newSettings.fontSize;
                chart.options.scales.x.ticks.font.size = newSettings.fontSize;
                chart.options.scales.y.ticks.font.size = newSettings.fontSize;
                
                // 바 두께 업데이트
                chart.data.datasets.forEach(dataset => {
                    dataset.maxBarThickness = newSettings.barThickness;
                });
                
                chart.update('resize');
            }, 250);
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
            const rotateX = (e.clientY - centerY) / 50; // Adjust divisor for tilt intensity
            const rotateY = (centerX - e.clientX) / 50; // Adjust divisor for tilt intensity

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

    // --- Vision Modal ---
    const visionModal = document.getElementById('vision-modal');
    const openVisionModalBtn = document.getElementById('open-vision-modal');
    const closeVisionModalBtn = visionModal.querySelector('.vision-close');

    if (visionModal && openVisionModalBtn && closeVisionModalBtn) {
        openVisionModalBtn.addEventListener('click', () => { visionModal.style.display = 'flex'; });
        closeVisionModalBtn.addEventListener('click', () => { visionModal.style.display = 'none'; });
        window.addEventListener('click', (e) => { if (e.target == visionModal) { visionModal.style.display = 'none'; } });
    }

    // --- Values Modal ---
    const valuesModal = document.getElementById('values-modal');
    const openValuesModalBtn = document.getElementById('open-values-modal');
    const closeValuesModalBtn = valuesModal.querySelector('.values-close');

    if (valuesModal && openValuesModalBtn && closeValuesModalBtn) {
        openValuesModalBtn.addEventListener('click', () => { valuesModal.style.display = 'flex'; });
        closeValuesModalBtn.addEventListener('click', () => { valuesModal.style.display = 'none'; });
        window.addEventListener('click', (e) => { if (e.target == valuesModal) { valuesModal.style.display = 'none'; } });
    }
});