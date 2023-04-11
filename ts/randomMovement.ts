interface TRandomMovement{
	(currentPos: Array<number>) : Array<number>;
}

/**  랜덤 움직임 저장 */
const randomMovement:TRandomMovement = (currentPos) => {
	const possibleMoves = [-1, 0, 1];
	const x =
		currentPos[0] +
		possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
	const y =
		currentPos[1] +
		possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
	return [x, y];
};
