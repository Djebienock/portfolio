// On sélectionne les éléments par les classes ou ID que tu as définis dans ton HTML
const menuBtn = document.querySelector('.hamburger') || document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

// Vérification pour éviter les erreurs si l'élément n'existe pas
if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        // On bascule la classe 'active' sur le menu pour l'afficher/cacher
        navMenu.classList.toggle('active');
        
        // On change l'icône entre les barres (☰) et la croix (✕)
        const icon = menuBtn.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    });
}

// Fermer le menu automatiquement quand on clique sur un lien (pour la navigation interne)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) {
            navMenu.classList.remove('active');
            
            // On remet aussi l'icône en mode "barres"
            const icon = menuBtn.querySelector('i');
            if (icon) {
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        }
    });
});




const textElement = document.getElementById('typewriter');
// Commandes exactes de ton image
const commands = [
    "nmap -sV -sC 10.10.10.1",
    "wireshark -i eth0 -f 'tcp port 443'",
    "python3 exploit.py --target 192.168.1.1",
];

let commandIndex = 0;
let charIndex = 0;
let isLineStarted = false;

function type() {
    if (commandIndex < commands.length) {
        if (!isLineStarted) {
            // Utilisation d'une classe CSS pour colorer le prompt en cyan
            textElement.innerHTML += `<span class="command-prompt">$</span> `;
            isLineStarted = true;
        }

        const currentCommand = commands[commandIndex];
        
        if (charIndex < currentCommand.length) {
            textElement.innerHTML += currentCommand.charAt(charIndex);
            charIndex++;
            setTimeout(type, Math.random() * 50 + 40); // Vitesse aléatoire
        } else {
            textElement.innerHTML += "<br>";
            commandIndex++;
            charIndex = 0;
            isLineStarted = false;
            setTimeout(type, 1000); // Pause avant la ligne suivante
        }
    }
}

type();
















