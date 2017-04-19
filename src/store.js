export function toLocalSorage(coords, baloon) {
	let c = coords.join(',');

	localStorage.setItem(c, JSON.stringify(baloon));
}

export function fromLocalStorage(coords) {
	let c = coords.join(',');
	let baloon = localStorage.getItem(c);

	if (!baloon) {

		return undefined;
	}

	return JSON.parse(baloon);
}