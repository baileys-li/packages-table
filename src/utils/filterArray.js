export default function filterArray(array, searchQuery, key) {
	const normalizedQuery = searchQuery.toLowerCase();

	return array
		.filter((item) => {
			return item[key].toLowerCase().includes(normalizedQuery);
		})
		.sort((first, second) => {
			const normalizedFirst = first[key].toLowerCase();
			const normalizedSecond = second[key].toLowerCase();

			if (
				normalizedFirst.indexOf(normalizedQuery) >
				normalizedSecond.indexOf(normalizedQuery)
			) {
				return 1;
			}
			if (normalizedFirst < normalizedSecond) {
				return -1;
			}

			return 0;
		});
}
