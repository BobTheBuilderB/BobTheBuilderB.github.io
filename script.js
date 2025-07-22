document.addEventListener('DOMContentLoaded', function() {
    // Typing animation
    var options = {
        strings: ["amazing websites.", "cool web apps.", "elegant designs."],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 1500,
        loop: true
    };

    var typed = new Typed('#typed-text', options);
});
