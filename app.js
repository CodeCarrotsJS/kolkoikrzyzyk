var game = {
	activePlayerIndex: null,
	table: [
		[null,null,null],
		[null,null,null],
		[null,null,null]
	],
	players: [],
	addPlayer: function(name) {
		// Dodajemy gracza do tablicy.
		this.players.push(name);
		console.log( '[' + this.players.length + '] Added player to game', name );

		if (this.players.length == 2) {
			console.log('Game started');
			this.activePlayerIndex = 0;
		}
	}
};
