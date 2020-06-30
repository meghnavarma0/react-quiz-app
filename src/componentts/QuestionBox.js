import React, { useState } from 'react';

const QuestionBox = ({ question, options, selected }) => {
	const [answer, setAnswer] = useState(options);
	const [clicked, setClicked] = useState(false);
	return (
		<div className='questionBox'>
			<div className='question'>{question}</div>
			{answer.map((text, index) => (
				<button
					key={index}
					className='answerBtn'
					onClick={() => {
						if (!clicked) {
							setAnswer([text]);
							selected(text);
							setClicked(true);
						}
					}}
				>
					{text}
				</button>
			))}
		</div>
	);
};

export default QuestionBox;
