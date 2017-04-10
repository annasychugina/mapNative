export function addPlacemark(coords, content) {
	let place = new ymaps.Placemark(coords, {
		author: content.author,
		coords: coords,
		place: content.place,
		comment: content.comment,
		date: content.date,
		address: content.address
	});

	return place;
}