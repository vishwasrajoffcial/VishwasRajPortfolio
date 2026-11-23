/* =========================================
   VIDEO EDITOR PORTFOLIO
   script.js
========================================= */

const projects = [
    // LONG FORM PROJECTS
    {
        title: "Subhash Chandra Bose: A Freedom Fighter Who Never Dies",
        description: "Long-form documentary video edited with storytelling-focused pacing, visual transitions and supporting elements.",
        format: "LONG FORM",
        category: "DOCUMENTARY",
        video: "https://www.youtube.com/embed/zQ9IqMjmQIs",
        watch: "https://www.youtube.com/watch?v=zQ9IqMjmQIs"
    },
    {
        title: "Major Iqbal: The Real Terror Behind Dhurandhar",
        description: "Documentary-style video edit focused on storytelling, pacing and engaging visual presentation.",
        format: "LONG FORM",
        category: "DOCUMENTARY",
        video: "https://www.youtube.com/embed/U5wJ2SUCbuA",
        watch: "https://www.youtube.com/watch?v=U5wJ2SUCbuA"
    },
    {
        title: "Babur - From Local King to Mughal Emperor",
        description: "Story-driven documentary edit with structured pacing, visuals and cinematic presentation.",
        format: "LONG FORM",
        category: "DOCUMENTARY",
        video: "https://www.youtube.com/embed/5UEAGTxqO4E",
        watch: "https://www.youtube.com/watch?v=5UEAGTxqO4E"
    },
    {
        title: "Motion Graphics StoryBoard Video",
        description: "Story-driven documentary edit with structured pacing, visuals and cinematic presentation.",
        format: "LONG FORM",
        category: "MOTION GRAPHICS",
        video: "https://www.youtube.com/embed/OTW2BjZ4r4U",
        watch: "https://www.youtube.com/watch?v=OTW2BjZ4r4U"
    },
    //https://youtu.be/OTW2BjZ4r4U-- jUST CHANGE THE CODE ON PROJECT 'video'and 'watch' and will add

    // SHORT FORM PROJECTS
    {
        title: "Motion Graphics Reel",
        description: "Engaging short-form video edit with dynamic pacing, smooth transitions and professional editing.",
        format: "SHORT FORM",
        category: "MOTION GRAPHICS",
        video: "https://www.youtube.com/embed/Bb_NpFgQayE",
        watch: "https://www.youtube.com/shorts/Bb_NpFgQayE"
    },
    {
        title: "Motion Graphics Reel",
        description: "Engaging short-form video edit with dynamic pacing, smooth transitions and professional editing.",
        format: "SHORT FORM",
        category: "MOTION GRAPHICS",
        video: "https://www.youtube.com/embed/u-8csu4-l3E",
        watch: "https://www.youtube.com/shorts/u-8csu4-l3E"
    },//https://youtube.com/shorts/u-8csu4-l3E
    {
        title: "India's Richest State",
        description: "Short-form informational video combining motion graphics, text animation, visual storytelling and engaging pacing.",
        format: "SHORT FORM",
        category: "DOCUMENTARY",
        video: "https://www.youtube.com/embed/XLq98KyYgfk",
        watch: "https://www.youtube.com/watch?v=XLq98KyYgfk"
    },
    {
        title: "Hiter fooled?",
        description: "Short-form informational video combining map animation, motion graphics, text animation, visual storytelling and engaging pacing.",
        format: "SHORT FORM",
        category: "DOCUMENTARY",
        video: "https://www.youtube.com/embed/17KRKr00sKM",
        watch: "https://www.youtube.com/watch?v=17KRKr00sKM"
    },
    {
        title: "Dark Reality - Drugs in India",
        description: "Podcast-style short video edited with engaging pacing, captions, visual elements and social-media focused presentation.",
        format: "SHORT FORM",
        category: "PODCAST CLIP",
        video: "https://www.youtube.com/embed/3GD_wHUYo-w",
        watch: "https://www.youtube.com/watch?v=3GD_wHUYo-w"
    }
];

/* =========================================
   SERVICES
========================================= */

const services = [

    {
        number: "01",
        title: "YouTube Video Editing",
        description:
            "Long-form YouTube videos with strong pacing, storytelling, B-roll, sound design and clean visuals."
    },

    {
        number: "02",
        title: "Shorts & Reels",
        description:
            "Engaging short-form content optimized for Instagram Reels and YouTube Shorts."
    },

    {
        number: "03",
        title: "Explainer Videos",
        description:
            "Clear and engaging explainer videos using motion graphics, visual storytelling and structured editing."
    },

    {
        number: "04",
        title: "Documentary Editing",
        description:
            "Story-focused documentary editing with cinematic pacing, sound design and visual continuity."
    },

    {
        number: "05",
        title: "Motion Graphics",
        description:
            "Clean motion graphics, text animations and visual elements that make information easier to understand."
    }

];

/* =========================================
   CLIENTS & CLIENT REVIEWS
   Add your own image paths and details here.
   Put images inside assets/images/clients/ and assets/images/reviews/.
========================================= */
const clients = [
    { name: "Dr Vamshi Bharadwaj", role: "Doctor", description: "Video editing collaboration", image: "assets/images/clients/client-01.png" },
    { name: "HealthAlly", role: "Brand", description: "Short-form video editing", image: "assets/images/clients/client-02.png" },
    { name: "Ray Ai", role: "Brand", description: "Editing and visual storytelling", image: "assets/images/clients/client-03.png" },
    { name: "Veerkaal", role: "YouTube Creator", description: "Long-form video editing", image: "assets/images/clients/client-04.jpg" }
];

const clientReviews = [
    { title: "Client Feedback 01", detail: "WhatsApp screenshot", image: "assets/images/reviews/review-01.jpg" },
    { title: "Client Feedback 02", detail: "WhatsApp screenshot", image: "assets/images/reviews/review-02.jpg" },
    { title: "Client Feedback 03", detail: "WhatsApp screenshot", image: "assets/images/reviews/review-03.jpg" },
    { title: "Client Feedback 04", detail: "WhatsApp screenshot", image: "assets/images/reviews/review-04.jpg" },
    { title: "Client Feedback 05", detail: "WhatsApp screenshot", image: "assets/images/reviews/review-05.jpg" },
    { title: "Client Feedback 06", detail: "LinkedIn screenshot", image: "assets/images/reviews/review-06.png" }
];

/* =========================================
   DOM ELEMENTS
========================================= */

const portfolioGrid =
    document.getElementById("portfolioGrid");

const portfolioSearch = document.getElementById("portfolioSearch");
const formatFilters = document.getElementById("formatFilters");
const categoryFilter = document.getElementById("categoryFilter");

let activeFormat = "ALL";
let activeCategory = "ALL";
let searchTerm = "";

const servicesList =
    document.getElementById("servicesList");

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");

const siteHeader =
    document.getElementById("siteHeader");

const pageLoader =
    document.getElementById("pageLoader");

const projectModal =
    document.getElementById("projectModal");

const modalClose =
    document.getElementById("modalClose");

const modalContent =
    document.getElementById("modalContent");

/* =========================================
   GET YOUTUBE VIDEO ID
========================================= */

function getYouTubeID(url) {

    if (!url) return null;

    const patterns = [
        /youtube\.com\/embed\/([^?&/]+)/i,
        /youtube\.com\/watch\?v=([^?&/]+)/i,
        /youtu\.be\/([^?&/]+)/i,
        /youtube\.com\/shorts\/([^?&/]+)/i
    ];

    for (const pattern of patterns) {

        const match = url.match(pattern);

        if (match) {
            return match[1];
        }
    }

    return null;
}

/* =========================================
   AUTOMATIC YOUTUBE THUMBNAIL
========================================= */
function getYouTubeThumbnail(videoURL) {

    const videoID =
        getYouTubeID(videoURL);

    if (!videoID) {
        return "";
    }

    return `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
}

/* =========================================
   THUMBNAIL FALLBACK
========================================= */

function thumbnailFallback(image) {

    const videoID =
        getYouTubeID(image.dataset.video);

    if (
        videoID &&
        image.dataset.fallback !== "true"
    ) {

        image.dataset.fallback = "true";

        image.src =
            `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;

        return;
    }

    const placeholder =
        document.createElement("div");

    placeholder.className =
        "thumbnail-placeholder";

    placeholder.innerHTML =
        "<span>▶</span>";

    const parent =
        image.parentElement;

    if (parent) {

        image.remove();

        parent.prepend(placeholder);
    }
}

/* =========================================
   RENDER PROJECTS
========================================= */

function renderProjects() {
    if (!portfolioGrid) return;

    const filteredProjects = projects
        .map((project, originalIndex) => ({ ...project, originalIndex }))
        .filter((project) => {
            const matchesFormat = activeFormat === "ALL" || project.format === activeFormat;
            const matchesCategory = activeCategory === "ALL" || project.category === activeCategory;
            const searchableText = `${project.title} ${project.description} ${project.category} ${project.format}`.toLowerCase();
            return matchesFormat && matchesCategory && searchableText.includes(searchTerm);
        });

    portfolioGrid.innerHTML = "";
    if (!filteredProjects.length) {
        portfolioGrid.innerHTML = '<p class="no-projects">No projects found. Try another search or filter.</p>';
        return;
    }

    filteredProjects.forEach((project) => {
        const index = project.originalIndex;
        const thumbnail = getYouTubeThumbnail(project.video);
        const thumbnailHTML = thumbnail
            ? `<img src="${thumbnail}" alt="${escapeHTML(project.title)}" loading="lazy" data-video="${project.video}">`
            : `<div class="thumbnail-placeholder"><span>▶</span></div>`;

        const card = document.createElement("article");
        card.className = "project-card reveal";
        card.dataset.index = index;
        card.innerHTML = `
            <div class="project-thumbnail">
                ${thumbnailHTML}
                <iframe class="project-hover-preview"
                    title="${escapeHTML(project.title)} preview"
                    data-video-id="${getYouTubeID(project.video) || ""}"
                    src="" allow="autoplay; encrypted-media; picture-in-picture"
                    frameborder="0" tabindex="-1" aria-hidden="true"></iframe>
                <div class="project-overlay">
                    <div class="project-play">▶</div>
                    <span class="project-category">${escapeHTML(project.format)} / ${escapeHTML(project.category)}</span>
                </div>
            </div>
            <div class="project-info">
                <div>
                    <span class="project-category">${escapeHTML(project.format)} · ${escapeHTML(project.category)}</span>
                    <h3>${escapeHTML(project.title)}</h3>
                    <p>${escapeHTML(project.description)}</p>
                </div>
                <span class="project-watch">VIEW PROJECT ↗</span>
            </div>`;

        const image = card.querySelector("img");
        if (image) image.addEventListener("error", () => thumbnailFallback(image));

        const previewFrame = card.querySelector(".project-hover-preview");
        const previewId = previewFrame?.dataset.videoId;
        const thumbnailImage = card.querySelector(".project-thumbnail img");

        if (previewFrame && previewId) {
            card.addEventListener("mouseenter", () => {
                if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
                previewFrame.src = `https://www.youtube.com/embed/${previewId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${previewId}&playsinline=1&rel=0`;
                previewFrame.style.opacity = "1";
                if (thumbnailImage) thumbnailImage.style.opacity = "0";
            });
            card.addEventListener("mouseleave", () => {
                previewFrame.src = "";
                previewFrame.style.opacity = "0";
                if (thumbnailImage) thumbnailImage.style.opacity = "";
            });
        }

        card.addEventListener("click", () => openProject(index));
        portfolioGrid.appendChild(card);
    });
    observeRevealElements();
}

function updateCategoryOptions() {
    if (!categoryFilter) return;
    const available = activeFormat === "ALL" ? projects : projects.filter(p => p.format === activeFormat);
    const categories = [...new Set(available.map(p => p.category))].sort();

    if (activeCategory !== "ALL" && !categories.includes(activeCategory)) activeCategory = "ALL";
    categoryFilter.innerHTML = '<option value="ALL">All Categories</option>' +
        categories.map(c => `<option value="${escapeHTML(c)}">${escapeHTML(c)}</option>`).join("");
    categoryFilter.value = activeCategory;
}

function setupPortfolioFilters() {
    if (formatFilters) {
        formatFilters.addEventListener("click", (event) => {
            const button = event.target.closest("[data-format]");
            if (!button) return;
            activeFormat = button.dataset.format;
            formatFilters.querySelectorAll("[data-format]").forEach(item => {
                const active = item === button;
                item.classList.toggle("active", active);
                item.setAttribute("aria-pressed", String(active));
            });
            updateCategoryOptions();
            renderProjects();
        });
    }
    if (categoryFilter) {
        categoryFilter.addEventListener("change", () => {
            activeCategory = categoryFilter.value;
            renderProjects();
        });
    }
    if (portfolioSearch) {
        portfolioSearch.addEventListener("input", () => {
            searchTerm = portfolioSearch.value.trim().toLowerCase();
            renderProjects();
        });
    }
    updateCategoryOptions();
}

/* =========================================
   RENDER SERVICES
========================================= */

function renderServices() {

    if (!servicesList) return;

    servicesList.innerHTML = "";

    services.forEach((service) => {

        const item =
            document.createElement("div");

        item.className =
            "service-item reveal";

        item.innerHTML = `

            <span class="service-number">
                ${escapeHTML(service.number)}
            </span>

            <div class="service-main">

                <h3>
                    ${escapeHTML(service.title)}
                </h3>

                <p>
                    ${escapeHTML(service.description)}
                </p>

            </div>

            <span class="service-arrow">
                ↗
            </span>
        `;

        servicesList.appendChild(item);

    });

    observeRevealElements();
}

/* =========================================
   RENDER CLIENTS & REVIEWS
========================================= */
function renderClients() {
    const track = document.getElementById("clientTrack");
    if (!track) return;

    const createCards = () => clients.map(client => `
        <article class="client-card">
            <div class="client-photo-wrap">
                <img src="${escapeHTML(client.image)}" alt="${escapeHTML(client.name)}" loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
                <span class="client-photo-fallback" aria-hidden="true">${escapeHTML(client.name.slice(0, 1).toUpperCase())}</span>
            </div>
            <div class="client-card-copy">
                <span class="client-role">${escapeHTML(client.role)}</span>
                <h3>${escapeHTML(client.name)}</h3>
                <p>${escapeHTML(client.description)}</p>
            </div>
            <span class="client-card-arrow">↗</span>
        </article>
    `).join("");

    // Duplicate the row to create a seamless continuous marquee.
    track.innerHTML = createCards() + createCards();
    track.setAttribute("aria-label", clients.map(c => c.name).join(", "));
}

function renderClientReviews() {
    const grid = document.getElementById("reviewGrid");
    if (!grid) return;

    grid.innerHTML = clientReviews.map((review, index) => `
        <a class="review-card" href="${escapeHTML(review.image)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${escapeHTML(review.title)} screenshot">
            <div class="review-image-wrap">
                <img src="${escapeHTML(review.image)}" alt="${escapeHTML(review.title)}" loading="lazy"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';">
                <span class="review-image-fallback" aria-hidden="true">ADD REVIEW SCREENSHOT</span>
                <span class="review-zoom">↗</span>
            </div>
            <div class="review-card-caption">
                <span>0${index + 1} / TESTIMONIAL</span>
                <h3>${escapeHTML(review.title)}</h3>
                <p>${escapeHTML(review.detail)}</p>
            </div>
        </a>
    `).join("");
}

/* =========================================
   OPEN PROJECT MODAL
========================================= */

function openProject(index) {

    const project =
        projects[index];

    if (
        !project ||
        !projectModal ||
        !modalContent
    ) {
        return;
    }

    let mediaHTML = "";

    if (project.video) {

        mediaHTML = `

            <div class="modal-video-wrapper">

                <iframe
                    class="modal-video"
                    src="${project.video}"
                    title="${escapeHTML(project.title)}"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen>
                </iframe>

            </div>
        `;
    }

    modalContent.innerHTML = `

        <span class="modal-category">
            ${escapeHTML(project.category)}
        </span>

        <h3>
            ${escapeHTML(project.title)}
        </h3>

        <p>
            ${escapeHTML(project.description)}
        </p>

        ${mediaHTML}

        ${
            project.watch
                ? `
                    <a
                        class="button button-primary"
                        href="${project.watch}"
                        target="_blank"
                        rel="noopener noreferrer"
                        style="margin-top:25px;">

                        Watch on YouTube

                        <span>↗</span>

                    </a>
                `
                : ""
        }

    `;

    projectModal.showModal();

    document.body.classList.add(
        "modal-open"
    );
}

/* =========================================
   CLOSE MODAL
========================================= */

function closeProjectModal() {

    if (!projectModal) return;

    projectModal.close();

    document.body.classList.remove(
        "modal-open"
    );

    setTimeout(() => {

        if (modalContent) {
            modalContent.innerHTML = "";
        }

    }, 200);
}

if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProjectModal
    );
}

/* =========================================
   CLOSE MODAL OUTSIDE
========================================= */

if (projectModal) {

    projectModal.addEventListener(
        "click",
        (event) => {

            const rect =
                projectModal.getBoundingClientRect();

            const clickedInside =
                event.clientX >= rect.left &&
                event.clientX <= rect.right &&
                event.clientY >= rect.top &&
                event.clientY <= rect.bottom;

            if (!clickedInside) {
                closeProjectModal();
            }
        }
    );
}

/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal &&
            projectModal.open
        ) {
            closeProjectModal();
        }

    }
);

/* =========================================
   MOBILE MENU
========================================= */

if (
    mobileMenuButton &&
    mobileNav
) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNav.classList.toggle(
                    "active"
                );

            mobileMenuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            mobileMenuButton.classList.toggle(
                "active",
                isOpen
            );

        }
    );
}

/* =========================================
   MOBILE NAV LINKS
========================================= */

if (mobileNav) {

    const mobileLinks =
        mobileNav.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "active"
                );

                if (mobileMenuButton) {

                    mobileMenuButton.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    mobileMenuButton.classList.remove(
                        "active"
                    );
                }

            }
        );

    });
}

/* =========================================
   HEADER SCROLL
========================================= */

function handleHeaderScroll() {

    if (!siteHeader) return;

    if (window.scrollY > 40) {

        siteHeader.classList.add(
            "scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "scrolled"
        );
    }
}

window.addEventListener(
    "scroll",
    handleHeaderScroll,
    {
        passive: true
    }
);

handleHeaderScroll();

/* =========================================
   SCROLL REVEAL
========================================= */

let revealObserver = null;

function observeRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.reveal-observed)"
        );

    if (!elements.length) return;

    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach((element) => {

            element.classList.add(
                "visible"
            );

        });

        return;
    }

    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach((entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            entry.target.classList.add(
                                "reveal-observed"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }

                    });

                },
                {
                    threshold: 0.12,
                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );
    }

    elements.forEach((element) => {

        element.classList.add(
            "reveal-observed"
        );

        revealObserver.observe(element);

    });
}

/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav a, .mobile-nav a"
    );

if (
    "IntersectionObserver" in window
) {

    const sectionObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }

                    const currentID =
                        entry.target.getAttribute(
                            "id"
                        );

                    navLinks.forEach((link) => {

                        const href =
                            link.getAttribute(
                                "href"
                            );

                        if (
                            href ===
                            `#${currentID}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        } else {

                            link.classList.remove(
                                "active"
                            );
                        }

                    });

                });

            },
            {
                threshold: 0.25
            }
        );

    sections.forEach((section) => {

        sectionObserver.observe(section);

    });
}

/* =========================================
   CONTACT FORM
========================================= */
/* =========================================
   EMAILJS CONTACT FORM
========================================= */

(function () {

    emailjs.init({
        publicKey: "GkHmmnh83qqdtsN_b"
    });

})();

const contactForm =
    document.getElementById("contactForm");

const submitButton =
    document.getElementById("submitButton");

const formStatus =
    document.getElementById("formStatus");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            /* Clear old status */

            formStatus.textContent = "";
            formStatus.className =
                "form-status";

            /* Disable button */

            submitButton.disabled = true;

            submitButton.innerHTML = `
                Sending...
                <span>→</span>
            `;

            formStatus.textContent =
                "Sending your message...";

            formStatus.classList.add(
                "sending"
            );

            /*
             * EmailJS
             *
             * Service ID:
             * service_xetp469
             *
             * Template ID:
             * Replace YOUR_TEMPLATE_ID
             */

            emailjs.sendForm(
                "service_xetp469",
                "template_sp75iy6",
                contactForm
            )

            .then(function () {

                formStatus.textContent =
                    "Message sent successfully! I'll get back to you soon.";

                formStatus.className =
                    "form-status success";

                submitButton.disabled = false;

                submitButton.innerHTML = `
                    Message Sent
                    <span>✓</span>
                `;

                contactForm.reset();

                /* Reset button after 4 seconds */

                setTimeout(function () {

                    submitButton.innerHTML = `
                        Send Message
                        <span>↗</span>
                    `;

                }, 4000);

            })

            .catch(function (error) {

                console.error(
                    "EmailJS Error:",
                    error
                );

                formStatus.textContent =
                    "Something went wrong. Please try again or email me directly.";

                formStatus.className =
                    "form-status error";

                submitButton.disabled = false;

                submitButton.innerHTML = `
                    Send Message
                    <span>↗</span>
                `;

            });

        }
    );

}

/* =========================================
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    if (
        value === null ||
        value === undefined
    ) {
        return "";
    }

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

/* =========================================
   PAGE LOADER
========================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (pageLoader) {

            pageLoader.classList.add(
                "loaded"
            );
        }

        observeRevealElements();

    }, 700);

});

/* =========================================
   INITIALIZE
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        setupPortfolioFilters();
        renderProjects();

        renderServices();
        renderClients();
        renderClientReviews();

        observeRevealElements();

    }
);

/* SINGLE GLOWING CURSOR */

(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = document.createElement("div");
    glow.id = "cursor-glow";
    document.body.appendChild(glow);

    let mouseX = -200;
    let mouseY = -200;

    let currentX = -200;
    let currentY = -200;

    window.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animateGlow() {
        // Smooth cursor following
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;

        glow.style.left = currentX + "px";
        glow.style.top = currentY + "px";

        requestAnimationFrame(animateGlow);
    }

    animateGlow();
})();
