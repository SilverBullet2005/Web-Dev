var typed = new Typed(".text", {
  strings: ["Kushagra Goel"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

var typed = new Typed(".text-2", {
strings: ["3D Designing" , "CAD Simulations" , "Web Development"],
typeSpeed: 100,
backSpeed: 100,
backDelay: 1000,
loop: true
});

// Function to animate the progress rings
function animateProgressRings() {
const circles = document.querySelectorAll('.progress-ring__circle.progress');
circles.forEach(circle => {
  const percent = circle.closest('.skill').querySelector('.percent').textContent;
  const radius = circle.r.baseVal.value;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (parseFloat(percent) / 100 * circumference);
  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;
  
  // Trigger reflow to ensure animation works
  circle.getBoundingClientRect();

  setTimeout(() => {
    circle.style.transition = 'stroke-dashoffset 2s ease-in-out';
    circle.style.strokeDashoffset = offset;
  }, 100);
});
}

// Function to check if an element is in viewport
function isInViewport(element) {
const rect = element.getBoundingClientRect();
return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}

// Variable to track if animation has been triggered
let animationTriggered = false;

// Function to handle scroll event
function handleScroll() {
const professionalSkills = document.getElementById('professional-skills');
if (!animationTriggered && isInViewport(professionalSkills)) {
  animateProgressRings();
  animationTriggered = true;
  // Remove the scroll event listener after animation is triggered
  window.removeEventListener('scroll', handleScroll);
}
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Initialize everything when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
// Trigger the animation if the section is already in view on page load
handleScroll();
});