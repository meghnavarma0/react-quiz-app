import React from 'react';

const Result = ({ result, playAgain }) => {
	return (
		<div className='score-board'>
			<div className='score'>
				You scored {result} / 5 correct answers!
			</div>
			<button className='playBtn' onClick={playAgain}>
				Play Again
			</button>
		</div>
	);
};

export default Result;
