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


















