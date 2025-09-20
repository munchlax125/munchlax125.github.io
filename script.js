document.addEventListener('DOMContentLoaded', function() {
    console.log("jdup website loaded.");
    // --- Theme Switcher Logic ---
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

    // Function to apply the saved theme on page load
    const applyTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add('dark-mode');
        }
        // Re-render icons after potential DOM changes from theme application
        lucide.createIcons();
    };

    // Function to toggle the theme
    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        // Save the user's preference to localStorage
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    };

    // Add event listener to the theme switcher button
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleTheme);
    }

    // Apply the theme when the DOM is loaded
    applyTheme();
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

    // --- Modal Handling ---
    function initializeModal(modalId, openBtnId, closeBtnSelector) {
        const modal = document.getElementById(modalId);
        const openBtn = document.getElementById(openBtnId);
        const closeBtn = modal ? modal.querySelector(closeBtnSelector) : null;

        if (!modal || !openBtn || !closeBtn) {
            // console.warn(`Modal components not found for: ${modalId}`);
            return;
        }

        const openModal = () => modal.style.display = 'flex';
        const closeModal = () => modal.style.display = 'none';

        openBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);

        // Function to handle clicks/taps outside the modal content
        const handleOutsideClick = (event) => {
            // Check if the click is on the modal background itself (not on its children)
            if (event.target === modal) {
                closeModal();
            }
        };

        // Use 'mousedown' for desktop and 'touchend' for mobile to avoid conflicts
        window.addEventListener('click', handleOutsideClick);
        window.addEventListener('touchend', handleOutsideClick);

        return { modal, openBtn, closeBtn, closeModal };
    }

    // Initialize all modals
    const contactModalData = initializeModal('contact-modal', 'open-contact-modal', '.close-button');
    initializeModal('privacy-policy-modal', 'open-privacy-policy', '.privacy-close');
    initializeModal('vision-modal', 'open-vision-modal', '.vision-close');
    initializeModal('values-modal', 'open-values-modal', '.values-close');

    // --- Specific logic for Contact Form ---
    if (contactModalData) {
        const contactForm = document.getElementById('contact-form');
        const formContainer = document.getElementById('form-container');
        const thankYouMessage = document.getElementById('thank-you-message');

        if (contactForm && formContainer && thankYouMessage) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                formContainer.style.display = 'none';
                thankYouMessage.style.display = 'block';

                setTimeout(() => {
                    contactModalData.closeModal(); // Use the returned closeModal function
                    // Reset form state after modal is closed
                    setTimeout(() => {
                        formContainer.style.display = 'block';
                        thankYouMessage.style.display = 'none';
                        contactForm.reset();
                    }, 500); // Delay to ensure modal is hidden before reset
                }, 3000);
            });
        }
    }

    // --- 서비스 섹션 아코디언 관련 코드 ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const currentlyActive = document.querySelector('.accordion-header.active');
            const content = this.nextElementSibling;
            const isCurrentlyActive = this.classList.contains('active');
            
            // Close all other accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove('active');
                    const otherContent = otherHeader.nextElementSibling;
                    if (otherContent) {
                        otherContent.style.maxHeight = null;
                    }
                }
            });
            
            // Toggle current accordion
            if (isCurrentlyActive) {
                this.classList.remove('active');
                if (content) {
                    content.style.maxHeight = null;
                }
            } else {
                this.classList.add('active');
                if (content) {
                    // Force reflow to get accurate scrollHeight
                    content.style.maxHeight = '0px';
                    const scrollHeight = content.scrollHeight;
                    content.style.maxHeight = scrollHeight + "px";
                }
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
                labels: ['협업 생산성', '고객 유입', '의사결정 속도'],
                datasets: [{
                    label: '도입 전',
                    data: [40, 35, 30],
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    maxBarThickness: settings.barThickness
                }, {
                    label: 'JDUP 도입 후',
                    data: [95, 85, 90],
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
                                    label += context.parsed.y + '%';
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
                            return value + '%';
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

    
});