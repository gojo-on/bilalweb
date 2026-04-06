window.addEventListener('load', () => {
    const mainTitle = document.querySelector('.hero-text h1');
    if (mainTitle) {
        mainTitle.style.borderRight = "3px solid #a855f7";
    }

    const txt = "IF YOU NEVER TRY , YOU ' LL NEVER KNOW";
    console.log("%c " + txt, "color: #a855f7; font-size: 20px; font-weight: bold;");
});
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');   

   
    setTimeout(() => {
        loader.style.opacity = '0';
        
       
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); 
    }, 2500);
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');
    const mobileLang = document.querySelector('.mobile-lang-switcher');
    const langSelectDesktop = document.getElementById('lang-select');
    const langSelectMobile = document.getElementById('lang-select-mobile');

    menu.addEventListener('click', () => {
        menuLinks.classList.toggle('active');
        menu.classList.toggle('is-active');
       
        if (menu.classList.contains('is-active')) {
            mobileLang.style.display = 'block';
        } else {
            mobileLang.style.display = 'none';
        }
    });


    document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
        menuLinks.classList.remove('active');
        menu.classList.remove('is-active');
        mobileLang.style.display = 'none';
    }));

   
    langSelectDesktop.addEventListener('change', function() {
        langSelectMobile.value = this.value;
        switchLanguage(this.value);
    });
    langSelectMobile.addEventListener('change', function() {
        langSelectDesktop.value = this.value;
        switchLanguage(this.value);
    });


    const translations = {
        uz: {
            about: 'Men haqimda',
            skills: 'Mahoratlar',
            projects: 'Loyihalar',
            commission: 'Buyurtma',
            team: 'Jamoa',
            contact: 'Aloqa',
            links: 'Tarmoqlar',
            heroTitle: '五条',
            heroSubtitle: 'Web Developer | HTML, CSS & JavaScript',
            heroDesc: "Men zamonaviy veb-ilovalarni yarataman. Hozirda JavaScript-ni chuqur o'rganmoqdaman.",
            telegram: 'Telegram',
            instagram: 'Instagram',
            aboutTitle: 'Men haqimda',
            expTitle: 'Tajriba',
            expDesc: 'HTML va CSS tillarini mukammal bilaman.',
            currTitle: 'Hozirda',
            currDesc: 'JavaScript ustida ishlayapman va yangi loyihalar qilyapman.',
            teamTitle: 'Jamoa',
            teamDesc: 'Mening o\'z jamoam bor. Biz bilan birga ishlashni istasangiz bog\'laning!',
            skillsTitle: 'Mening mahoratlarim',
            projectsTitle: 'Mening loyihalarim',
            cyberfoodDesc: 'Oziq-ovqat yetkazib berish ilovasi.',
            gojoCssDesc: 'CSS imtihon loyihasi.',
            gojoWebDesc: 'Web development loyihasi.',
            gojoClockDesc: 'Soat ilovasi.',
            gojoCalculatorDesc: 'Kalkulyator ilovasi.',
            projectSoon: 'Yangi loyiha tez orada.',
            viewBtn: 'Ko\'rish',
            teamJoinTitle: 'Jamoamga qo\'shiling',
            teamJoinDesc: 'Agar siz ham biz bilan birga rivojlanmoqchi bo\'lsangiz, quyidagi tugmani bosing:',
            joinTeamBtn: 'Jamoaga qo\'shilish',
            commissionTitle: 'Buyurtma berish',
            commissionDesc: 'Menga veb-sayt yoki ilova yaratish uchun buyurtma bering. Tez va sifatli bajaraman!',
            namePlaceholder: 'Ismingiz',
            emailPlaceholder: 'Email manzilingiz',
            projectType: 'Loyiha turi',
            website: 'Veb-sayt',
            app: 'Mobil ilova',
            design: 'UI/UX Dizayn',
            other: 'Boshqa',
            descPlaceholder: 'Loyiha tavsifi (nima kerak, qanday ko\'rinishda, etc.)',
            budgetPlaceholder: 'Byudjet (ixtiyoriy)',
            deadlinePlaceholder: 'Muddat (ixtiyoriy)',
            orderBtn: 'Buyurtma berish',
            contactTitle: 'Aloqa',
            contactDesc: 'Men bilan bog\'lanish uchun quyidagi forma orqali yozing yoki ijtimoiy tarmoqlardan toping.',
            messagePlaceholder: 'Xabaringiz',
            attachmentLabel: 'Rasm qo\'shish (ixtiyoriy)',
            sendBtn: 'Yuborish',
            linksTitle: 'Mening tarmoqlarim',
            footer: '© 2026 GOJO-ON. Barcha huquqlar himoyalangan.',
            statusWorking: 'Hozir: Yangi loyihalar ustida ishlayapman 🚀',
            statusLearning: 'Hozir: JavaScript o\'rganmoqdaman 📚',
            statusSleeping: 'Hozir: Dam olayotganman 😴'
        },
        en: {
            about: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            commission: 'Order',
            team: 'Team',
            contact: 'Contact',
            links: 'Links',
            heroTitle: '五条',
            heroSubtitle: 'Web Developer | HTML, CSS & JavaScript',
            heroDesc: 'I create modern web applications. Currently learning JavaScript deeply.',
            telegram: 'Telegram',
            instagram: 'Instagram',
            aboutTitle: 'About Me',
            expTitle: 'Experience',
            expDesc: 'I know HTML and CSS perfectly.',
            currTitle: 'Currently',
            currDesc: 'I\'m working on JavaScript and creating new projects.',
            teamTitle: 'Team',
            teamDesc: 'I have my own team. Contact us if you want to work together!',
            skillsTitle: 'My Skills',
            projectsTitle: 'My Projects',
            cyberfoodDesc: 'Food delivery application.',
            gojoCssDesc: 'CSS exam project.',
            gojoWebDesc: 'Web development project.',
            gojoClockDesc: 'Clock application.',
            gojoCalculatorDesc: 'Calculator application.',
            projectSoon: 'New project soon.',
            viewBtn: 'View',
            teamJoinTitle: 'Join Our Team',
            teamJoinDesc: 'If you also want to develop with us, click the button below:',
            joinTeamBtn: 'Join the Team',
            commissionTitle: 'Place an Order',
            commissionDesc: 'Order me to create a website or app. I do it quickly and efficiently!',
            namePlaceholder: 'Your Name',
            emailPlaceholder: 'Your Email',
            projectType: 'Project Type',
            website: 'Website',
            app: 'Mobile App',
            design: 'UI/UX Design',
            other: 'Other',
            descPlaceholder: 'Project description (what you need, how it should look, etc.)',
            budgetPlaceholder: 'Budget (optional)',
            deadlinePlaceholder: 'Deadline (optional)',
            orderBtn: 'Place Order',
            contactTitle: 'Contact',
            contactDesc: 'Write to me through the form below or find me on social networks.',
            messagePlaceholder: 'Your Message',
            attachmentLabel: 'Add image (optional)',
            sendBtn: 'Send',
            linksTitle: 'My Networks',
            footer: '© 2026 GOJO-ON. All rights reserved.',
            statusWorking: 'Now: Working on new projects 🚀',
            statusLearning: 'Now: Learning JavaScript 📚',
            statusSleeping: 'Now: Resting 😴'
        },
        ru: {
            about: 'Обо мне',
            skills: 'Навыки',
            projects: 'Проекты',
            commission: 'Заказ',
            team: 'Команда',
            contact: 'Контакт',
            links: 'Сети',
            heroTitle: '五条',
            heroSubtitle: 'Web Developer | HTML, CSS & JavaScript',
            heroDesc: 'Я создаю современные веб-приложения. Сейчас углубленно изучаю JavaScript.',
            telegram: 'Телеграм',
            instagram: 'Инстаграм',
            aboutTitle: 'Обо мне',
            expTitle: 'Опыт',
            expDesc: 'Я отлично знаю HTML и CSS.',
            currTitle: 'Сейчас',
            currDesc: 'Работаю над JavaScript и создаю новые проекты.',
            teamTitle: 'Команда',
            teamDesc: 'У меня есть своя команда. Свяжитесь с нами, если хотите работать вместе!',
            skillsTitle: 'Мои навыки',
            projectsTitle: 'Мои проекты',
            cyberfoodDesc: 'Приложение для доставки еды.',
            gojoCssDesc: 'Проект экзамена по CSS.',
            gojoWebDesc: 'Проект веб-разработки.',
            gojoClockDesc: 'Приложение часов.',
            gojoCalculatorDesc: 'Приложение калькулятора.',
            projectSoon: 'Новый проект скоро.',
            viewBtn: 'Посмотреть',
            teamJoinTitle: 'Присоединяйтесь к нашей команде',
            teamJoinDesc: 'Если вы тоже хотите развиваться с нами, нажмите кнопку ниже:',
            joinTeamBtn: 'Присоединиться к команде',
            commissionTitle: 'Сделать заказ',
            commissionDesc: 'Закажите у меня создание сайта или приложения. Делаю быстро и качественно!',
            namePlaceholder: 'Ваше имя',
            emailPlaceholder: 'Ваш email',
            projectType: 'Тип проекта',
            website: 'Веб-сайт',
            app: 'Мобильное приложение',
            design: 'UI/UX Дизайн',
            other: 'Другое',
            descPlaceholder: 'Описание проекта (что нужно, как должно выглядеть и т.д.)',
            budgetPlaceholder: 'Бюджет (опционально)',
            deadlinePlaceholder: 'Срок (опционально)',
            orderBtn: 'Сделать заказ',
            contactTitle: 'Контакт',
            contactDesc: 'Напишите мне через форму ниже или найдите меня в социальных сетях.',
            messagePlaceholder: 'Ваше сообщение',
            attachmentLabel: 'Добавить изображение (опционально)',
            sendBtn: 'Отправить',
            linksTitle: 'Мои сети',
            footer: '© 2026 GOJO-ON. Все права защищены.',
            statusWorking: 'Сейчас: Работаю над новыми проектами 🚀',
            statusLearning: 'Сейчас: Изучаю JavaScript 📚',
            statusSleeping: 'Сейчас: Отдыхаю 😴'
        }
    };

    function switchLanguage(lang) {
      
        const navLinks = document.querySelectorAll('.nav-links li a');
        navLinks[0].innerText = translations[lang].about;
        navLinks[1].innerText = translations[lang].skills;
        navLinks[2].innerText = translations[lang].projects;
        navLinks[3].innerText = translations[lang].commission;
        navLinks[4].innerText = translations[lang].team;
        navLinks[5].innerText = translations[lang].contact;
        navLinks[6].innerText = translations[lang].links;

      
        document.querySelector('.hero-text h1').innerText = translations[lang].heroTitle;
        document.querySelector('.hero-text .subtitle').innerText = translations[lang].heroSubtitle;
        document.querySelector('.hero-text .description').innerText = translations[lang].heroDesc;

        // Buttons
        document.getElementById('hero-telegram').innerText = translations[lang].telegram;
        document.getElementById('hero-instagram').innerText = translations[lang].instagram;

        document.querySelector('#about h2').innerText = translations[lang].aboutTitle;
        const cards = document.querySelectorAll('#about .card');
        cards[0].querySelector('h3').innerText = translations[lang].expTitle;
        cards[0].querySelector('p').innerText = translations[lang].expDesc;
        cards[1].querySelector('h3').innerText = translations[lang].currTitle;
        cards[1].querySelector('p').innerText = translations[lang].currDesc;
        cards[2].querySelector('h3').innerText = translations[lang].teamTitle;
        cards[2].querySelector('p').innerText = translations[lang].teamDesc;

        document.querySelector('#skills h2').innerText = translations[lang].skillsTitle;

        document.querySelector('#projects h2').innerText = translations[lang].projectsTitle;
        const projectCards = document.querySelectorAll('#projects .project-card');
        projectCards[0].querySelector('p').innerText = translations[lang].cyberfoodDesc;
        projectCards[1].querySelector('p').innerText = translations[lang].gojoCssDesc;
        projectCards[2].querySelector('p').innerText = translations[lang].gojoWebDesc;
        projectCards[3].querySelector('p').innerText = translations[lang].gojoClockDesc;
        projectCards[4].querySelector('p').innerText = translations[lang].gojoCalculatorDesc;
        projectCards[5].querySelector('p').innerText = translations[lang].projectSoon;
        const viewBtns = document.querySelectorAll('#projects .project-view-btn');
        viewBtns.forEach(btn => btn.innerText = translations[lang].viewBtn);

        document.querySelector('#team h2').innerText = translations[lang].teamJoinTitle;
        document.querySelector('#team p').innerText = translations[lang].teamJoinDesc;
        document.querySelector('#team .btn-team').innerText = translations[lang].joinTeamBtn;

        document.querySelector('#commission h2').innerText = translations[lang].commissionTitle;
        document.querySelector('#commission p').innerText = translations[lang].commissionDesc;
        const commForm = document.querySelector('#commission form');
        commForm.querySelector('input[name="name"]').placeholder = translations[lang].namePlaceholder;
        commForm.querySelector('input[name="email"]').placeholder = translations[lang].emailPlaceholder;
        commForm.querySelector('select[name="project-type"]').options[0].text = translations[lang].projectType;
        commForm.querySelector('select[name="project-type"]').options[1].text = translations[lang].website;
        commForm.querySelector('select[name="project-type"]').options[2].text = translations[lang].app;
        commForm.querySelector('select[name="project-type"]').options[3].text = translations[lang].design;
        commForm.querySelector('select[name="project-type"]').options[4].text = translations[lang].other;
        commForm.querySelector('textarea[name="description"]').placeholder = translations[lang].descPlaceholder;
        commForm.querySelector('input[name="budget"]').placeholder = translations[lang].budgetPlaceholder;
        commForm.querySelector('input[name="deadline"]').placeholder = translations[lang].deadlinePlaceholder;
        commForm.querySelector('button[type="submit"]').innerText = translations[lang].orderBtn;

        document.querySelector('#contact h2').innerText = translations[lang].contactTitle;
        document.querySelector('#contact p').innerText = translations[lang].contactDesc;
        const contForm = document.querySelector('#contact form');
        contForm.querySelector('input[name="name"]').placeholder = translations[lang].namePlaceholder;
        contForm.querySelector('input[name="email"]').placeholder = translations[lang].emailPlaceholder;
        contForm.querySelector('textarea[name="message"]').placeholder = translations[lang].messagePlaceholder;
        contForm.querySelector('label[for="attachment"]').innerText = translations[lang].attachmentLabel;
        contForm.querySelector('button[type="submit"]').innerText = translations[lang].sendBtn;

        document.querySelector('#links h2').innerText = translations[lang].linksTitle;
        const telegramLink = document.querySelector('#links a[href*="t.me"] span');
        const githubLink = document.querySelector('#links a[href*="github.com"] span');
        const steamLink = document.querySelector('#links a[href*="steamcommunity.com"] span');
        const discordNick = document.getElementById('discord-nick');

        if (telegramLink) telegramLink.innerHTML = '<i class="fa-brands fa-telegram"></i> @gojo_onn';
        if (githubLink) githubLink.innerText = 'GitHub';
        if (steamLink) steamLink.innerHTML = '<i class="fa-brands fa-steam"></i> Steam';
        if (discordNick) discordNick.innerHTML = '<i class="fa-brands fa-discord"></i> bilol1bey';

        document.querySelector('footer p').innerText = translations[lang].footer;

        const statusEl = document.getElementById('status');
        if (statusEl) {
            const hour = new Date().getHours();
            if (hour >= 9 && hour < 18) {
                statusEl.innerText = translations[lang].statusWorking;
            } else if (hour >= 18 && hour < 23) {
                statusEl.innerText = translations[lang].statusLearning;
            } else {
                statusEl.innerText = translations[lang].statusSleeping;
            }
        }

        document.documentElement.lang = lang;
    }

    const themeBtn = document.createElement('button');
    themeBtn.id = "theme-toggle";
    themeBtn.innerText = "🌙";
    const li = document.createElement('li');
    li.appendChild(themeBtn);
    document.querySelector('.nav-links').appendChild(li);

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeBtn.innerText = document.body.classList.contains('light-theme') ? "☀️" : "🌙";
    });


    function updateStatus() {
        const statusText = document.getElementById('status');
        if (statusText) {
            const hour = new Date().getHours();
            
            if (hour >= 9 && hour < 18) {
                statusText.innerText = "Hozir: Yangi loyihalar ustida ishlayapman 🚀";
            } else if (hour >= 18 && hour < 23) {
                statusText.innerText = "Hozir: JavaScript o'rganmoqdaman 📚";
            } else {
                statusText.innerText = "Hozir: Dam olayotganman 😴";
            }
        }
    }
    setInterval(updateStatus, 1000);


    const discordBtn = document.getElementById('discord-btn');
    if(discordBtn) {
        discordBtn.addEventListener('click', () => {
            const nick = "bilol1bey";
            navigator.clipboard.writeText(nick);
            
            const originalText = document.getElementById('discord-nick').innerText;
            document.getElementById('discord-nick').innerText = "Nusxalandi! ✅";
            
            setTimeout(() => {
                document.getElementById('discord-nick').innerText = originalText;
            }, 2000);
        });
    }


    const backToTopBtn = document.getElementById("backToTop");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    const observerAnim = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.banner, .adv-item, .good-card, .consult-item');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden-animation');
        observerAnim.observe(el);
    });


    const carousel = document.querySelector('.carousel-container');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            carousel.style.animationPlayState = 'paused';
        });
        carousel.addEventListener('mouseleave', () => {
            carousel.style.animationPlayState = 'running';
        });
    }

    const projectImages = document.querySelectorAll('.project-img');
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.style.position = 'fixed';
            modal.style.top = '0';
            modal.style.left = '0';
            modal.style.width = '100%';
            modal.style.height = '100%';
            modal.style.background = 'rgba(0,0,0,0.8)';
            modal.style.display = 'flex';
            modal.style.alignItems = 'center';
            modal.style.justifyContent = 'center';
            modal.style.zIndex = '10000';
            modal.style.cursor = 'pointer';

            const modalImg = document.createElement('img');
            modalImg.src = img.src;
            modalImg.style.maxWidth = '90%';
            modalImg.style.maxHeight = '90%';
            modalImg.style.borderRadius = '10px';
            modalImg.style.boxShadow = '0 0 30px rgba(168, 85, 247, 0.5)';

            modal.appendChild(modalImg);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });
    });

    const EMAILJS_PUBLIC_KEY = 'Zj_yJMKm7FpZ0qafw';
    const EMAILJS_SERVICE_ID = 'service_1c21e9s';
    const EMAILJS_CONTACT_TEMPLATE_ID = 'template_woizcro';
    const EMAILJS_COMMISSION_TEMPLATE_ID = 'template_jwxi2yg';

    emailjs.init(EMAILJS_PUBLIC_KEY);

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameField = this.querySelector('input[name="name"]');
            const messageField = this.querySelector('textarea[name="message"]');
            const fromNameHidden = this.querySelector('input[name="from_name"]');
            const subjectHidden = this.querySelector('input[name="subject"]');
            const descriptionHidden = this.querySelector('input[name="description"]');

            if (fromNameHidden && nameField) {
                fromNameHidden.value = nameField.value;
            }
            if (subjectHidden && nameField) {
                subjectHidden.value = `Aloqa: ${nameField.value}`;
            }
            if (messageField && descriptionHidden) {
                descriptionHidden.value = messageField.value || 'Aloqa so\'rovi';
            }

            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, this)
                .then(() => {
                    alert('Xabar muvaffaqiyatli yuborildi!');
                    this.reset();
                }, (error) => {
                    console.error('EmailJS error:', error);
                    alert('Xato yuz berdi: Iltimos, EmailJS sozlamalarini tekshiring.');
                });
        });
    }

    const commissionForm = document.querySelector('.commission-form');
    if (commissionForm) {
        commissionForm.addEventListener('submit', function(e) {
            e.preventDefault();

            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_COMMISSION_TEMPLATE_ID, this)
                .then(() => {
                    alert('Buyurtma muvaffaqiyatli yuborildi! Tez orada siz bilan bog\'lanaman.');
                    this.reset();
                }, (error) => {
                    console.error('EmailJS error:', error);
                    alert('Xato yuz berdi: Iltimos, EmailJS sozlamalarini tekshiring.');
                });
        });
    }
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const profileImg = document.querySelector('.hero-image img');
if(profileImg) {
    profileImg.addEventListener('mouseover', () => {
        console.log("Gojo, photo");
    });
}





const quotes = [
    "Do what is Hard Until in becomes Easy.",
    "Never stop learing , because life never stop teaching."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log("%c" + randomQuote, "color: #a855f7; font-style: roboto;");


const discordBtn = document.getElementById('discord-btn');
if(discordBtn) {
    discordBtn.addEventListener('click', () => {
        const nick = "bilol1bey";
        navigator.clipboard.writeText(nick);
        
        const originalText = document.getElementById('discord-nick').innerText;
        document.getElementById('discord-nick').innerText = "Nusxalandi! ✅";
        
        setTimeout(() => {
            document.getElementById('discord-nick').innerText = originalText;
        }, 2000);
        
        console.log("Discord nik nusxalandi✅: " + nick);
    });
}


document.querySelectorAll('.social-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.currentTarget.tagName === 'A') {
            console.log(" profiliga yo'naltirilmoqda...");
        }
    });
});





