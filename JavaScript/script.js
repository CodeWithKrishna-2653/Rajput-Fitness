// Type writeer code

const texts = ["teacher", "gym trainer", "web developer"];

const typewriter = document.getElementById("type");
let textIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < texts[textIndex].length) {
    typewriter.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); // Adjust typing speed here (in milliseconds)
  } else {
    setTimeout(erase, 1000); // Wait for a while before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    typewriter.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); // Adjust erasing speed here (in milliseconds)
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500); // Wait before typing the next line
  }
}

type(); // Start the typing loop

// Type Writer End
//Navbar color changing

const nav = document.querySelector("nav");
const home = document.querySelector(".firstsection");
const cursors = document.querySelector('.main-cursor')


const options = {
  rootMargin: "-1px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.add("changecolor");
      cursors.classList.add("changecolor");
    } else {
      nav.classList.remove("changecolor");
      cursors.classList.remove("changecolor");
    }
  });
}, options);

observer.observe(home); // Start observing the target element

// Navbar Color Changing End
//  Handler Animation

const $cursors = document.querySelectorAll('.cursor')

// Handlers

const handleWheel = e => {
  const wheelProgress = e.deltaY * speedWheel
  progress = progress + wheelProgress
  animate()
}

const handleMouseMove = (e) => {
  if (e.type === 'mousemove') {
    $cursors.forEach(($cursor) => {
      $cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    })
  }
  if (!isDown) return
  const x = e.clientX || (e.touches && e.touches[0].clientX) || 0
  const mouseProgress = (x - startX) * speedDrag
  progress = progress + mouseProgress
  startX = x
  animate()
}

const handleMouseDown = e => {
  isDown = true
  startX = e.clientX || (e.touches && e.touches[0].clientX) || 0
}

const handleMouseUp = () => {
  isDown = false
}

// Listeners

document.addEventListener('mousewheel', handleWheel)
document.addEventListener('mousedown', handleMouseDown)
document.addEventListener('mousemove', handleMouseMove)
document.addEventListener('mouseup', handleMouseUp)
document.addEventListener('touchstart', handleMouseDown)
document.addEventListener('touchmove', handleMouseMove)
document.addEventListener('touchend', handleMouseUp)

//  Handler Animation End
