
export const generateBoard = (size) => {
	var board = [];
	for(var i = 0; i < size; i++) {
		var row = [];
		for(var j = 0; j < size; j++) {
			row.push(null);
		}
		board.push(row);
	}
	return board;
};