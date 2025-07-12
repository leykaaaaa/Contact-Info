// Typewriter Effect
document.addEventListener('DOMContentLoaded', () => {
  const bioElement = document.getElementById('animated-bio');
  const phrases = [
    "BSIT student passionate about cybersecurity",
    "Exploring programming and networking",
    "Tech enthusiast & continuous learner"
  ];
  
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let isEnd = false;

  function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      bioElement.innerHTML = currentPhrase.substring(0, charIndex - 1) + '<span class="typewriter-cursor">|</span>';
      charIndex--;
    } else {
      bioElement.innerHTML = currentPhrase.substring(0, charIndex + 1) + '<span class="typewriter-cursor">|</span>';
      charIndex++;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isEnd = true;
      setTimeout(() => { isDeleting = true; }, 1500);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    const speed = isDeleting ? 50 : isEnd ? 100 : 150;
    setTimeout(typeWriter, speed);
    isEnd = false;
  }

  // Start the effect
  typeWriter();
});