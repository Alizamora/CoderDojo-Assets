const globalIconsPath = '/Assets/global-icons'
const globalIcons = {
	SVG: {
		path: `${globalIconsPath}/svg/`,
		icons: [
			{ name: 'Vector.svg', altText: 'Icono de mira' },
			{ name: 'Vector-1.svg', altText: 'Icono de trofeo' },
			{ name: 'Vector-2.svg', altText: 'Icono de calabera' },
		],
	},
	PNG: {
		path: `${globalIconsPath}/png/`,
		icons: [
			{ name: 'ufo.png', altText: 'Icono de UFO' },
			{ name: 'trofeo-1.png', altText: 'Icono de trofeo' },
			{ name: 'trofeo-2.png', altText: 'Icono de trofeo con estrella' },
			{ name: 'skull-1.png', altText: 'Icono de calabera de hueso' },
			{ name: 'skull-2.png', altText: 'Icono de calabera de cobre' },
			{ name: 'estrella.png', altText: 'Icono de estrella' },
			{ name: 'mobile-game.png', altText: 'Icono de juego en celular' },
		],
	},
}

function getIconsHTML(icons, iconsPath) {
	return icons.reduce((prev, curr) => {
		return (
			prev +
			`<img class="img-icon" src="${iconsPath + curr.name}" alt="${
				curr.altText
			}" />`
		)
	}, '')
}

// Icons container
const globalIconsContainer = document.querySelector('#icons')

// Load SVGs
globalIconsContainer
	.querySelector('.svg-icons')
	.insertAdjacentHTML(
		'beforeend',
		getIconsHTML(globalIcons.SVG.icons, globalIcons.SVG.path)
	)

// Load PNGs
globalIconsContainer
	.querySelector('.png-icons')
	.insertAdjacentHTML(
		'beforeend',
		getIconsHTML(globalIcons.PNG.icons, globalIcons.PNG.path)
	)
