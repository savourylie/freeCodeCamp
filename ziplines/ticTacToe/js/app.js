// User Color 1 ---> "O", 2 ---> "X"
// AI always plays first.
// When turn === true, it's "O"

$(function(){
	// Model
	var model = {
		turn: true;

		user_color: 0;

		zero_state: [
			[0, 0, 0],
			[0, 0, 0],
			[0, 0, 0]
		],

		status: [],

		init: function() {
			model.status = model.zero_state;
		},

		setStatusM = function(r, c, color) {
			model.status[r][c] = color;
		},

		getStatusM = function() {
			return model.status;
		}

		setColorM: function(color) {
			model.user_color = color;
			localStorage.color = JSON.stringify(model.user_color);
		},

		getColorM: function() {
			return model.user_color;
		},

		setTurnM: function(bool) {
			model.turn = bool;
		},

		getTurnM: function() {
			return model.turn;
		}
	};

	// Octopus

	var octopus = {
		
		init: function() {

		},

		getStatusO: function() {
			return model.getStatusM();
		},

		setStatusO: function(r, c, color) {
			setStatusM(r, c, color);
		},

		getColorO: function() {
			return model.user_color;
		},

		setUserColor: function(color) {
			model.setColorM(color);
		},

		setTurnO: function(bool) {
			model.setTurnO(bool);
		},

		getTurnO: function() {
			return model.getTurnM();
		},

		AI: function(colorU, colorC) {
		
			function danger() = {
				var danger_hor = false;
				var danger_diag = false;

				// Check hor danger
				for (var i in octopus.getStatusO()) {
					if (octopus.getStatusO()[i]	=== [colorU, colorU, 0] && [colorU, 0, colorU] && [0, colorU, colorU]) {
						danger_hor = true;
					}
				}

				// Check diag danger
				if (octopus.getStatusO()[0][0] === colorU && octopus.getStatusO()[1][1] === colorU && octopus.getStatusO()[2][2] === 0) {
					danger_diag = true;
				}

				else if (octopus.getStatusO()[2][2] === colorU && octopus.getStatusO()[1][1] === colorU && octopus.getStatusO()[0][0] === 0) {
					danger_diag = true;
				}

				else if (octopus.getStatusO()[2][2] === colorU && octopus.getStatusO()[0][0] === colorU && octopus.getStatusO()[1][1] === 0) {
					danger_diag = true;
				}

				else if (octopus.getStatusO()[0][2] === colorU && octopus.getStatusO()[1][1] === colorU && octopus.getStatusO()[2][0] === 0) {
					danger_diag = true;
				}

				else if (octopus.getStatusO()[2][0] === colorU && octopus.getStatusO()[1][1] === colorU && octopus.getStatusO()[0][2] === 0) {
					danger_diag = true;
				}

				else if (octopus.getStatusO()[2][0] === colorU && octopus.getStatusO()[0][2] === colorU && octopus.getStatusO()[1][1] === 0) {
					danger_diag = true;
				}

				// Return if danger
				if (danger_hor || danger_diag) {
					return true;
				}

				else {
					return false;
				}
			};

			if (!checkEndGame()) {
				var moveList = [];

				for (var i in octopus.getStatusO()) {
					for (var j in octopus.getStatusO()[i]) {
						if (octopus.getStatusO()[i][j] === 0) {
							moveList.push([i, j]);
						}
					}
				}

				if (moveList.length === 9) {
					octopus.setStatusO(1, 1, colorC);
				}

				else if 
			}
		},

		playFunc: function() {
			for (var i in octopus.getStatusO()) {
				for (var j in octopus.getStatusO()[i]) {
					$("#cell-" + i + j).click(function() {
						if (octopus.getStatusO[i][j]) === 0) {
							if (octopus.getTurnO() === true) {
								octopus.setStatusO(i, j, 1);
							}

							else if (octopus.getTurnO() === false) {
								octopus.setStatusO(i, j, 2);	
							}

							view.render();
							octopus.AI();
						}
					})
				}
			}
		},

		takeTurn: function() {
			$(".game-space").click(function() {
				octopus.setTurnO(!octopus.getTurnO());
			}
		},

		endGame: true,

		checkEndGame: function() {

			octopus.endGame = true;

			for (var i in octopus.getStatusO()) {
				for (var j in octopus.getStatusO()[i]) {
					if (octopus.getStatusO()[i][j] === 0) {
						octopus.endGame = false;
					}	
				}
			}

			return octopus.endGame;
		} 
	};

	// View

	var view = {

		init: function() {
			view.selectionScreen();
		},

		render: function() {
			for (var i in octopus.getStatus()) {
				for (var j in octopus.getStatus()[i]) {
					$("#cell-" + i + j).empty();

					if (octopus.getStatus()[i][j] === 0) {
						$("#cell-" + i + j).append("");
					}

					else if (octopus.getStatus()[i] === 1) {
						$("#cell-" + i + j).append("O");
					}

					else if (octopus.getStatus()[i] === 2) {
						$("#cell-" + i + j).append("X");
					}

					else {
						console.log("Errors while rendering move.");
					}
				}
			}
		}

		selectionScreen: function() {
			// To be implemented.
			view.render();
		}
	};
});