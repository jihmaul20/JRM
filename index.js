particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": { "value": "#ffffff" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#000000" }
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": { "enable": false }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": { "enable": false }
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#ffffff",
            "opacity": 0.5,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        }
    },
    "retina_detect": true
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("translate-btn").addEventListener("click", function() {
        let aboutText = document.getElementById("about-text");
        if (aboutText.innerText === "Passionate website designer focused on creating user-friendly and visually appealing interfaces. Experienced in front-end development and modern UI/UX principles.") {
            aboutText.innerText = "Desainer website yang bersemangat dengan fokus pada pembuatan antarmuka yang ramah pengguna dan menarik secara visual. Berpengalaman dalam pengembangan front-end dan prinsip UI/UX modern.";
        } else {
            aboutText.innerText = "Passionate website designer focused on creating user-friendly and visually appealing interfaces. Experienced in front-end development and modern UI/UX principles.";
        }
    });

    document.querySelector(".checkout-button").addEventListener("click", function(event) {
        event.preventDefault();
        window.open("https://lynk.id/jrm", "_parent");
    });

    // Smooth scroll to content when arrow is clicked
    document.querySelector(".scroll-down-arrow").addEventListener("click", function() {
        document.querySelector(".profile-container").scrollIntoView({ behavior: "smooth" });
    });

    // Image preview modal functionality
    let modal = document.getElementById("imageModal");
    let img = document.querySelector(".profile-pic");
    let modalImg = document.getElementById("modalImg");
    let closeBtn = document.querySelector(".close");
    
    img.addEventListener("click", function() {
        modal.style.display = "flex";
        modalImg.src = this.src;
    });
    
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
