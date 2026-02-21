const facts = [
    "Astronauts can see 16 sunrises and sunsets in one day!",
    "In space, astronauts grow taller because their spines expand.",
    "Astronauts sleep in sleeping bags attached to the wall so they don't float away.",
    "The first astronaut on the Moon was Neil Armstrong in 1969.",
    "Astronauts' footprints on the Moon will stay there forever because there's no wind.",
    "Space is completely silent because there is no air.",
    "Astronauts exercise 2 hours a day to stay strong in space.",
    "The sunset on Mars looks blue.",
    "Astronauts can't burp in space!",
    "There is a water volcano on Saturn's moon Enceladus."
];

const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD",
    "#D4A5A5", "#9B59B6", "#3498DB", "#E67E22", "#2ECC71"
];

const button = document.getElementById('factButton');
const display = document.getElementById('factDisplay');
const wrapper = document.getElementById('buttonWrapper');
let factIndex = 0;

button.addEventListener('click', () => {
    
    display.textContent = facts[factIndex];
    factIndex = (factIndex + 1) % facts.length;

    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;

    
    for (let i = 0; i < 30; i++) {
        createRocket();
    }
});

function createRocket() {
    const rocket = document.createElement('div');
    rocket.className = 'rocket';
    rocket.textContent = '🚀';

    
    const wrapperRect = wrapper.getBoundingClientRect();
    const containerRect = document.querySelector('.container').getBoundingClientRect();

    
    const baseLeft = wrapperRect.left - containerRect.left + wrapperRect.width / 2;
    const baseTop = wrapperRect.top - containerRect.top + wrapperRect.height / 2;

    
      const offsetY = (Math.random() - 0.5) * 80;

    rocket.style.left = `${baseLeft + offsetX}px`;
    rocket.style.bottom = `${window.innerHeight - (baseTop + offsetY)}px`;
    
    const dx = (Math.random() - 0.5) * 300; 
    const dy = (Math.random() * 200 + 100); 
    rocket.style.setProperty('--dx', dx + 'px');
    rocket.style.setProperty('--dy', dy + 'px');

   
    const duration = Math.random() * 0.6 + 0.7; 
    rocket.style.animationDuration = duration + 's';

  
    rocket.style.animationDelay = Math.random() * 0.2 + 's';

    wrapper.appendChild(rocket);

    
    setTimeout(() => {
        if (rocket.parentNode) rocket.remove();
    }, duration * 1000 + 300);
}