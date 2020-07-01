import React, { Component } from 'react';
import quizService from './quizService';
import QuestionBox from './componentts/QuestionBox';
import Result from './componentts/Result';
import './assets/style.css';

class Quizbee extends Component {
	state = {
		questionBank: [],
		score: 0,
		response: 0
	};
	getQuestions = () => {
		quizService().then(question => {
			this.setState({ questionBank: question });
		});
	};
	checkAnswer = (answer, correct) => {
		if (answer === correct) {
			this.setState({ score: this.state.score + 1 });
		}
		this.setState({
			response: this.state.response < 5 ? this.state.response + 1 : 5
		});
	};
	resetGameHandler = () => {
		this.getQuestions();
		this.setState({
			score: 0,
			response: 0
		});
	};
	componentDidMount() {
		this.getQuestions();
	}
	render() {
		return (
			<div className='container'>
				<div className='title'>Tell Me This</div>
				{this.state.response < 5 ? (
					this.state.questionBank.length > 0 &&
					this.state.questionBank.map(
						({ question, answers, correct, questionId }) => (
							<QuestionBox
								question={question}
								options={answers}
								key={questionId}
								selected={answer =>
									this.checkAnswer(answer, correct)
								}
							/>
						)
					)
				) : (
					<Result
						result={this.state.score}
						playAgain={this.resetGameHandler}
					/>
				)}
			</div>
		);
	}
}

export default Quizbee;
