// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Smooth scrolling effect
gsap.from(".button-container", {
  duration: 1,
  opacity: 0,
  y: -50,
  scrollTrigger: {
    trigger: ".button-container",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none"
  }
});

$(document).ready(function() {
  $('form input').change(function() {
    $('form p').text(this.files.length + " file(s) selected");
  });
});
