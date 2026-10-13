/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀" : "☾";

    localStorage.setItem("theme", isDark ? "dark" : "light");
});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   PORTFOLIO FILTER
========================================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


/* =========================================
   TESTIMONIAL SLIDER
========================================= */

const testimonials = [
    {
        name: "Aigbevboile Victor",
        text: "Love your contents fr, It's inspiring"
    },
    {
        name: "Cov E Nant",
        text: "I do admire you, I love that and it's a privilege to be friends with you"
    },
    {
        name: "Chukwu Sunday Chikodi",
        text: "Your content was very touching 🙏 thank you so much"
    },
    {
        name: "Abadunmi Caleb",
        text: "Thank you so much. I love this piece. Not every man is driven by their stomach, but with purpose.. we move."
    },
    {
        name: "Melanie Yerima",
        text: "Knowing the purpose of your spouse is very very important. When you support his dreams and aspirations, you win his heart."
    },
    {
        name: "Harriet Christopher",
        text: "It really touched me"
    },
    {
        name: "Seth Benjamin",
        text: "Am so encourage by this words, thanks alot."
    },
    {
        name: "Rirzhaku Maebela",
        text: "Wow, thank you for this."
    },
    {
        name: "Victor Philipson",
        text: "This is encouraging"
    },
    {
        name: "Lydia Lyd",
        text: "Thank you very much for the words of encouragement this morning. May God bless you."
    },
    {
        name: "Glorious Destiny",
        text: "Thanks so much. This brings so much peace to my soul 🥰"
    },
    {
        name: "Chidera Ejeh",
        text: "Thank you so much I really need this"
    },
    {
        name: "Jose Ph Jr.",
        text: "Powerful 🙏🙏"
    },
    {
        name: "Na Omi",
        text: "Thank you so much ma for this. I really wish I can have access to her, I have alot to pour out."
    },
    {
        name: "Anastacia Kilwaye",
        text: "I love the glow... keep moving woman of God."
    },
    {
        name: "Mhizta Jay",
        text: "I normally don't read long text but this one is way different compared to others. This is God's word we need in this generation."
    },
    {
        name: "Rukky Vincent",
        text: "What you constantly feed your eyes on will affect your soul. Thank you for this ma'am."
    },
    {
        name: "Bah Ismaila",
        text: "Thank you very much for this message. It was just directly for me 💯🙏"
    },
    {
        name: "Ruth Banda",
        text: "Thanks for bringing this message to my attention, am really blessed"
    },
    {
        name: "Mike JM Mwanza",
        text: "Powerful"
    },
    {
        name: "Joseph B Angel",
        text: "Thank you so much for this word"
    }
];

let currentTestimonial = 0;

const testimonialText = document.getElementById("testimonialText");
const testimonialName = document.getElementById("testimonialName");
const testimonialAvatar = document.getElementById("testimonialAvatar");
const testimonialDots = document.getElementById("testimonialDots");

function getInitials(name) {
    return name
        .split(" ")
        .map(word => word[0])
        .slice(0, 2)
        .join("")
        .toUpperCase();
}

function showTestimonial(index) {

    const testimonial = testimonials[index];

    testimonialText.textContent = `"${testimonial.text}"`;
    testimonialName.textContent = testimonial.name;
    testimonialAvatar.textContent = getInitials(testimonial.name);

    document.querySelectorAll(".testimonial-dot").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}


/* Create dots */

testimonials.forEach((_, index) => {

    const dot = document.createElement("button");

    dot.classList.add("testimonial-dot");

    dot.setAttribute("aria-label", `Show testimonial ${index + 1}`);

    dot.addEventListener("click", () => {
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });

    testimonialDots.appendChild(dot);
});

showTestimonial(currentTestimonial);


/* Previous */

document.getElementById("prevTestimonial").addEventListener("click", () => {

    currentTestimonial--;

    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    }

    showTestimonial(currentTestimonial);
});


/* Next */

document.getElementById("nextTestimonial").addEventListener("click", () => {

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }

    showTestimonial(currentTestimonial);
});


/* Auto change */

setInterval(() => {

    currentTestimonial++;

    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }

    showTestimonial(currentTestimonial);

}, 6000);


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", async event => {

    event.preventDefault();

    const submitButton = contactForm.querySelector(".submit-btn");

    const originalButtonText = submitButton.textContent;

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    formMessage.textContent = "";

    const formData = new FormData(contactForm);

    try {

        const response = await fetch(
            "https://formspree.io/f/mppzbonv",
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );

        if (response.ok) {

            formMessage.textContent =
                "Message sent successfully! Thank you for reaching out.";

            contactForm.reset();

        } else {

            formMessage.textContent =
                "Something went wrong. Please try again.";

        }

    } catch (error) {

        formMessage.textContent =
            "Unable to send the message. Please check your internet connection and try again.";

    }

    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   DYNAMIC COPYRIGHT YEAR
========================================= */

document.getElementById("year").textContent = new Date().getFullYear();


/* =========================================
   SIMPLE SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .timeline-item, .skills-list span"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    revealObserver.observe(element);

});

/* =========================================
   COMING SOON - UNFINISHED WORK
========================================= */

document.addEventListener("click", event => {

    const link = event.target.closest('a[href="#"]');

    if (!link) return;

    // Don't interfere with the Back To Top button
    if (link.id === "backToTop") return;

    // Only handle links inside service cards or project cards
    const card = link.closest(".service-card, .project-card");

    if (!card) return;

    // Stop the page from jumping to the top
    event.preventDefault();

    // Find an existing message
    let message = card.querySelector(".coming-soon-message");

    // Create the message if it doesn't exist
    if (!message) {

        message = document.createElement("p");

        message.className = "coming-soon-message";

        message.textContent =
            "Coming soon — this work is currently being prepared.";

        card.appendChild(message);
    }

    // Show / hide message
    message.classList.toggle("show");

});