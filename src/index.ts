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
