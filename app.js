var game = {
	activePlayer: null,
	table: [
		[null,null,null],
		[null,null,null],
		[null,null,null]
	],
	players: [],
	addPlayer: function(name) {
		// Dodajemy gracza do tablicy.
		this.players.push(name);
	}
};
