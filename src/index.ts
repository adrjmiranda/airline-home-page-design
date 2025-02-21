/**
 * Toggle Menu
 */
const toggleMenuButton = document.getElementById(
	'toggle-menu'
) as HTMLButtonElement;
const navbarMenu = document.querySelector('.navbar-menu') as HTMLUListElement;

const navbarLinks = document.querySelectorAll(
	'.navbar-link'
) as NodeListOf<HTMLAnchorElement>;

if (toggleMenuButton && navbarMenu) {
	toggleMenuButton.addEventListener('click', () => {
		navbarMenu.classList.toggle('show');
	});
}

navbarLinks.length &&
	navbarLinks.forEach((link) => {
		link.addEventListener('click', () => {
			navbarMenu.classList.toggle('show');
		});
	});

/**
 * Scroll Reveal Animations
 */
import ScrollReveal from 'scrollreveal';

ScrollReveal().reveal('.banner-text', {
	opacity: 0,
	duration: 1500,
	origin: 'bottom',
	distance: '20%',
	delay: 250,
	reset: true,
});

ScrollReveal().reveal('.banner-image', {
	opacity: 0,
	duration: 1500,
	origin: 'right',
	distance: '20%',
	delay: 350,
	reset: true,
});
