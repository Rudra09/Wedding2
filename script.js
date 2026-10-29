// Toggle Hamburger Menu Script
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('rotated');
        });

        // Also ensure rotation resets or closes properly when clicking outside or nav link
        function closeMenu() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('rotated');
        }

        

        document.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });

        navLinks.addEventListener('click', (e) => {
            e.stopPropagation();
        });

        // Populate fairy light bulbs across top header
        const fairyContainer = document.getElementById('fairyLightsContainer');
        for (let i = 0; i < 35; i++) {
            const bulb = document.createElement('div');
            bulb.classList.add('fairy-light-dot');
            fairyContainer.appendChild(bulb);
        }

        // Distinct Golden and Silver Gradients for Petals
        const goldenPetalGradients = [
            'radial-gradient(circle at 35% 35%, #fff9e6 0%, #ffd700 55%, #b8860b 100%)',
            'radial-gradient(circle at 30% 30%, #ffea79 0%, #d4af37 60%, #996515 100%)'
        ];

        const silverPetalGradients = [
            'radial-gradient(circle at 35% 35%, #ffffff 0%, #e0e0e0 55%, #9e9e9e 100%)',
            'radial-gradient(circle at 30% 30%, #f5f5f5 0%, #silver 45%, #b0b0b0 100%)',
            'radial-gradient(circle at 35% 35%, #fcfcfc 0%, #cfcfcf 60%, #7f7f7f 100%)'
        ];

        function createFallingPetals(containerElement, count, isSection = false) {
            if (!containerElement) return;
            for (let i = 0; i < count; i++) {
                const petal = document.createElement('div');
                petal.classList.add(isSection ? 'petal-section-fall' : 'petal');
                
                const size = Math.random() * 16 + 10;
                petal.style.width = `${size}px`;
                petal.style.height = `${size * 1.4}px`;
                petal.style.left = `${Math.random() * 98}%`;
                
                // Distribute evenly between Golden and Silver
                const isGolden = i % 2 === 0;
                if (isGolden) {
                    petal.style.background = goldenPetalGradients[Math.floor(Math.random() * goldenPetalGradients.length)];
                    petal.style.boxShadow = '0 0 10px rgba(255, 215, 0, 0.5)';
                } else {
                    petal.style.background = silverPetalGradients[Math.floor(Math.random() * silverPetalGradients.length)];
                    petal.style.boxShadow = '0 0 10px rgba(220, 220, 220, 0.6)';
                }
                
                if (isSection) {
                    petal.style.animationDuration = `${Math.random() * 12 + 18}s`; 
                    // Stagger start delays seamlessly so top is instantly rich & dense with cascading transition
                    petal.style.animationDelay = `${Math.random() * 18}s`;
                    // Pre-load initial top spread for smooth heavy density right where they start falling
                    petal.style.top = `${Math.random() * -15}px`;
                } else {
                    petal.style.animationDuration = `${Math.random() * 14 + 20}s`; 
                    petal.style.animationDelay = `${Math.random() * 15}s`;
                }
                containerElement.appendChild(petal);
            }
        }

        // Petals restricted exclusively to Gallery Section
        const petalCount = window.innerWidth > 992 ? 75 : 35;

        // Populate Global Floating Bubbles (Gold & Silver) Across Entire Website
        const globalBubblesContainer = document.getElementById('globalBubblesContainer');
        const globalBubbleCount = window.innerWidth > 992 ? 70 : 30;
        for (let i = 0; i < globalBubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            const size = Math.random() * 28 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}vw`;
            bubble.style.animationDuration = `${Math.random() * 12 + 14}s`;
            bubble.style.animationDelay = `${Math.random() * 10}s`;
            
            // Alternate between gold and silver appearance
            if (i % 2 === 0) {
                bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(212, 175, 55, 0.35) 60%, rgba(180, 140, 30, 0.15) 100%)';
                bubble.style.borderColor = 'rgba(255, 240, 150, 0.7)';
                bubble.style.boxShadow = 'inset 0 0 10px rgba(255, 255, 255, 0.9), 0 0 14px rgba(255, 215, 0, 0.35)';
            } else {
                bubble.style.background = 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.95), rgba(200, 200, 200, 0.4) 60%, rgba(150, 150, 150, 0.15) 100%)';
                bubble.style.borderColor = 'rgba(230, 230, 230, 0.8)';
                bubble.style.boxShadow = 'inset 0 0 10px rgba(255, 255, 255, 0.9), 0 0 14px rgba(200, 200, 200, 0.4)';
            }
            
            globalBubblesContainer.appendChild(bubble);
        }


        


        // Populate Gallery Section Gold & Silver Petals - Dense Full Section Flow (Top to Bottom)
        const galleryPetalsContainer = document.getElementById('galleryPetalsContainer');
        if (galleryPetalsContainer) {
            galleryPetalsContainer.innerHTML = '';
            createFallingPetals(galleryPetalsContainer, 130, true);
        }

        // Populate Countdown Section Petals
        const countdownPetalsContainer = document.getElementById('countdownPetalsContainer');
        createFallingPetals(countdownPetalsContainer, petalCount);

        // Helper to populate floating items in specific sections
        function populateSectionDecor(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;
            const items = ['🌸', '💛', '🤍', '✨', '🫧', '💖'];
            const colors = ['#ffd700', '#e0e0e0', '#ffffff', '#f3e5ab', '#ffea79'];
            
            const count = window.innerWidth > 992 ? 28 : 14;

            for (let i = 0; i < count; i++) {
                const el = document.createElement('div');
                el.classList.add('decor-item');
                el.innerText = items[Math.floor(Math.random() * items.length)];
                el.style.left = `${Math.random() * 95}vw`;
                el.style.color = colors[Math.floor(Math.random() * colors.length)];
                el.style.fontSize = `${Math.random() * 1.0 + 1.0}rem`;
                el.style.animationDuration = `${Math.random() * 6 + 8}s`;
                el.style.animationDelay = `${Math.random() * 6}s`;
                container.appendChild(el);
            }
        }

        // familyDecorContainer deprecated, using familyPetalsContainer

// Falling petals limited strictly to Gallery Section


        // Very Slower Floating Golden Bubbles
        const bubblesContainer = document.getElementById('bubblesContainer');
        const bubbleCount = window.innerWidth > 992 ? 30 : 15;
        for (let i = 0; i < bubbleCount; i++) {
            const bubble = document.createElement('div');
            bubble.classList.add('bubble');
            const size = Math.random() * 22 + 10;
            bubble.style.width = `${size}px`;
            bubble.style.height = `${size}px`;
            bubble.style.left = `${Math.random() * 100}vw`;
            bubble.style.animationDuration = `${Math.random() * 8 + 14}s`;
            bubble.style.animationDelay = `${Math.random() * 6}s`;
            bubblesContainer.appendChild(bubble);
        }

        // Floating Magic Golden Sparks
        const floatingContainer = document.getElementById('floatingElements');
        for (let i = 0; i < bubbleCount; i++) {
            const spark = document.createElement('div');
            spark.classList.add('floating-spark');
            const size = Math.random() * 6 + 3;
            spark.style.width = `${size}px`;
            spark.style.height = `${size}px`;
            spark.style.left = `${Math.random() * 100}vw`;
            spark.style.animationDuration = `${Math.random() * 6 + 6}s`;
            spark.style.animationDelay = `${Math.random() * 5}s`;
            floatingContainer.appendChild(spark);
        }

        // Smooth Cross-Fading Background Slideshow
        const bgSlides = document.querySelectorAll('.hero-bg');
        let currentSlide = 0;

        function nextSlide() {
            bgSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % bgSlides.length;
            bgSlides[currentSlide].classList.add('active');
        }

        setInterval(nextSlide, 6000);

        // TWINKLING STAR CRACKERS CANVAS ANIMATION
        const canvas = document.getElementById('crackerCanvas');
        const ctx = canvas.getContext('2d');

        function resizeCanvas() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        class TwinklingStarParticle {
            constructor(x, y, color) {
                this.x = x;
                this.y = y;
                this.color = color;
                const angle = Math.random() * Math.PI * 2;
                const speed = Math.random() * 3.0 + 0.8;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.alpha = 1;
                this.decay = Math.random() * 0.006 + 0.002;
                this.size = Math.random() * 2.8 + 1.2;
                this.twinkleSpeed = Math.random() * 0.15 + 0.05;
                this.twinkleVal = Math.random() * Math.PI;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.004;
                this.alpha -= this.decay;
                this.twinkleVal += this.twinkleSpeed;
            }
            draw() {
                ctx.save();
                const currentAlpha = Math.max(0, this.alpha * (0.6 + 0.4 * Math.sin(this.twinkleVal)));
                ctx.globalAlpha = currentAlpha;
                ctx.fillStyle = this.color;
                ctx.shadowBlur = 18;
                ctx.shadowColor = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        let sparkParticles = [];
        const MAX_PARTICLES = 350; // Cap particle count to eliminate lag over time

        function createTwinklingBurst(customX, customY) {
            if (canvas.width === 0 || canvas.height === 0) return;
            const x = customX !== undefined ? customX : (Math.random() * canvas.width * 0.8 + canvas.width * 0.1);
            const y = customY !== undefined ? customY : (Math.random() * (canvas.height * 0.5));
            const chosenColor = Math.random() > 0.3 ? '#ffffff' : '#ffd700';
            const crackerBurstCount = window.innerWidth > 992 ? 80 : 40;
            
            for (let i = 0; i < crackerBurstCount; i++) {
                if (sparkParticles.length < MAX_PARTICLES) {
                    sparkParticles.push(new TwinklingStarParticle(x, y, chosenColor));
                }
            }
        }

        function animateTwinklingStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Efficient particle rendering and array cleaning
            let len = sparkParticles.length;
            for (let i = len - 1; i >= 0; i--) {
                const p = sparkParticles[i];
                p.update();
                p.draw();
                if (p.alpha <= 0) {
                    sparkParticles[i] = sparkParticles[sparkParticles.length - 1];
                    sparkParticles.pop();
                }
            }
            requestAnimationFrame(animateTwinklingStars);
        }

        animateTwinklingStars();
        
        // Trigger multiple heavy cracker bursts right at the start on desktop view
        if (window.innerWidth > 992) {
            setTimeout(() => {
                createTwinklingBurst(canvas.width * 0.25, canvas.height * 0.3);
                createTwinklingBurst(canvas.width * 0.75, canvas.height * 0.3);
                createTwinklingBurst(canvas.width * 0.5, canvas.height * 0.2);
            }, 200);
            setTimeout(() => {
                createTwinklingBurst(canvas.width * 0.35, canvas.height * 0.4);
                createTwinklingBurst(canvas.width * 0.65, canvas.height * 0.4);
            }, 800);
        } else {
            setTimeout(() => {
                createTwinklingBurst();
            }, 200);
        }

        setInterval(createTwinklingBurst, window.innerWidth > 992 ? 1600 : 2500);

        // Countdown Timer
        const weddingDate = new Date(2026, 10, 25, 0, 0, 0).getTime();

        function updateCountdown() {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            if (distance < 0) {
                document.getElementById("days").innerText = "00";
                document.getElementById("hours").innerText = "00";
                document.getElementById("minutes").innerText = "00";
                document.getElementById("seconds").innerText = "00";
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = String(days).padStart(2, '0');
            document.getElementById("hours").innerText = String(hours).padStart(2, '0');
            document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
            document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
        }

        setInterval(updateCountdown, 1000);
        updateCountdown();
    
        // Family & Friends Tab Switcher
        function switchFamilyTab(tabName) {
            const tabs = document.querySelectorAll('.family-tab-btn');
            const contents = document.querySelectorAll('.family-tab-content');

            tabs.forEach(tab => tab.classList.remove('active'));
            contents.forEach(content => content.classList.remove('active'));

            if (tabName === 'family') {
                tabs[0].classList.add('active');
                document.getElementById('tab-family').classList.add('active');
            } else {
                tabs[1].classList.add('active');
                document.getElementById('tab-squad').classList.add('active');
            }
        }


        // 3D Interactive Rotating Squad Slider Script
        let currentSquadIndex = 0;
        const squadSlides = document.querySelectorAll('.squad-slide-card');
        const squadDots = document.querySelectorAll('.squad-dot');

        function showSquadSlide(index) {
            if (!squadSlides.length) return;
            if (index >= squadSlides.length) currentSquadIndex = 0;
            else if (index < 0) currentSquadIndex = squadSlides.length - 1;
            else currentSquadIndex = index;

            squadSlides.forEach((slide, idx) => {
                slide.classList.remove('active');
                if (squadDots[idx]) squadDots[idx].classList.remove('active');
            });

            squadSlides[currentSquadIndex].classList.add('active');
            if (squadDots[currentSquadIndex]) squadDots[currentSquadIndex].classList.add('active');
        }

        function moveSquadSlide(direction) {
            showSquadSlide(currentSquadIndex + direction);
        }

        function currentSquadSlide(index) {
            showSquadSlide(index);
        }

        // Auto slide squad every 5 seconds if tab is active
        setInterval(() => {
            const squadTab = document.getElementById('tab-squad');
            if (squadTab && squadTab.classList.contains('active')) {
                showSquadSlide(currentSquadIndex + 1);
            }
        }, 5000);

        //AUDIO
        // Background Music Player Control
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('weddingAudio');
    
    // Create floating music toggle button
    const musicBtn = document.createElement('button');
    musicBtn.id = 'bgMusicToggle';
    musicBtn.innerHTML = '🎵 Play Music';
    musicBtn.style.cssText = `
        position: fixed;
        bottom: 25px;
        right: 25px;
        z-index: 9999;
        background: linear-gradient(135deg, #d4af37, #ffd700);
        color: #58181f;
        border: 2px solid #fff;
        padding: 10px 18px;
        border-radius: 30px;
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-size: 0.85rem;
        cursor: pointer;
        box-shadow: 0 6px 20px rgba(88, 24, 31, 0.4);
        transition: transform 0.3s ease, background 0.3s ease;
    `;
    
    musicBtn.onmouseover = () => musicBtn.style.transform = 'scale(1.08)';
    musicBtn.onmouseout = () => musicBtn.style.transform = 'scale(1)';
    document.body.appendChild(musicBtn);

    let isPlaying = false;

    musicBtn.addEventListener('click', () => {
        if (!isPlaying) {
            audio.play().then(() => {
                isPlaying = true;
                musicBtn.innerHTML = '🎶 Pause Tune';
                musicBtn.style.background = 'linear-gradient(135deg, #58181f, #3a0d12)';
                musicBtn.style.color = '#ffd700';
            }).catch(e => {
                console.log("Audio play blocked or file not found.");
            });
        } else {
            audio.pause();
            isPlaying = false;
            musicBtn.innerHTML = '🎵 Play Wedding Tune';
            musicBtn.style.background = 'linear-gradient(135deg, #d4af37, #ffd700)';
            musicBtn.style.color = '#58181f';
        }
    });
});