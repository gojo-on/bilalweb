window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');

    // 2.5 sekunddan keyin spinnerni o'chirish
    setTimeout(() => {
        loader.style.opacity = '0';
        
        // Animatsiya tugagandan keyin blokni butunlay o'chirish
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500); 
    }, 500); // 2500ms = 2.5 sekund
});
// Sahifa yuklanganda elementlarning sekin chiqib kelishi
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
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

// Burger tugmani bosganda menyuni chiqarish
menu.addEventListener('click', () => {
    menuLinks.classList.toggle('active');
    
    // Burger animatsiyasi (tugmani X shakliga keltirish)
    menu.classList.toggle('is-active');
});

// Menyu ichidagi link bosilganda menyuni yopish
document.querySelectorAll('.nav-links a').forEach(n => n.addEventListener('click', () => {
    menuLinks.classList.remove('active');
}));
    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    console.log("Gojo, saytingiz muvaffaqiyatli yuklandi!");
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
        console.log("Gojo, kimsan rasmga tegayotgan? 😎");
    });
}


window.addEventListener('load', () => {
    const mainTitle = document.querySelector('.hero-text h1');
    mainTitle.style.borderRight = "3px solid #a855f7";
    

    let i = 0;
    let txt = 'JavaScript olamiga xush kelibsan, Gojo!';
    function typeWriter() {
        if (i < txt.length) {
            process.stdout.write(txt.charAt(i)); 
            i++;
        }
    }
    console.log("%c " + txt, "color: #a855f7; font-size: 20px; font-weight: bold;");
});
// 1. Dark Mode tugmasini Navbarga qo'shish
const navMenu = document.getElementById('nav-menu');
const themeBtn = document.createElement('button');
themeBtn.id = "theme-toggle";
themeBtn.innerText = "🌙";
const li = document.createElement('li');
li.appendChild(themeBtn);
navMenu.appendChild(li);

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeBtn.innerText = document.body.classList.contains('light-theme') ? "☀️" : "🌙";
});

// 2. Mobil Menyu Funktsiyasi
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 3. Link bosilganda menyuni yopish
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


function updateStatus() {
    const statusText = document.getElementById('status');
    const hour = new Date().getHours();
    
    if (hour >= 9 && hour < 18) {
        statusText.innerText = "Hozir: Yangi loyihalar ustida ishlayapman 🚀";
    } else if (hour >= 18 && hour < 23) {
        statusText.innerText = "Hozir: JavaScript o'rganyapman 📚";
    } else {
        statusText.innerText = "Hozir: Dam olyapman (Zzz...) 😴";
    }
}
setInterval(updateStatus, 1000);

const quotes = [
    "Dasturlash - bu sehrgarlik, faqat tayoqcha o'rniga klaviatura!",
    "Xato (Bug) - bu shunchaki kutilmagan imkoniyat.",
    "JavaScript o'rganish - bu kelajakka eng yaxshi investitsiya.",
    "To'xtama, Gojo! Eng zo'r kod hali yozilmadi."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log("%c" + randomQuote, "color: #a855f7; font-style: italic;");


// Discord nikini nusxalash
const discordBtn = document.getElementById('discord-btn');
if(discordBtn) {
    discordBtn.addEventListener('click', () => {
        const nick = "bilol1bey";
        navigator.clipboard.writeText(nick);
        
        // Foydalanuvchiga xabar berish
        const originalText = document.getElementById('discord-nick').innerText;
        document.getElementById('discord-nick').innerText = "Nusxalandi! ✅";
        
        setTimeout(() => {
            document.getElementById('discord-nick').innerText = originalText;
        }, 2000);
        
        console.log("Discord nik nusxalandi: " + nick);
    });
}

// Steam va GitHub ga bosilganda maxsus xabar
document.querySelectorAll('.social-item').forEach(item => {
    item.addEventListener('click', (e) => {
        if(e.currentTarget.tagName === 'A') {
            console.log("Gojo'ning profiliga yo'naltirilmoqda...");
        }
    });
});



// Sayt to'liq yuklangandan keyin ishlasin
document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. TEPAGA QAYTISH TUGMASI ---
    const backToTopBtn = document.getElementById("backToTop");

    if (backToTopBtn) { // Agar tugma HTMLda bo'lsa
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

    // --- 2. ANIMATSIYA (Sen yoqtirgan bomba qism) ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    const hiddenElements = document.querySelectorAll('.banner, .adv-item, .good-card, .consult-item');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden-animation');
        observer.observe(el);
    });
});

