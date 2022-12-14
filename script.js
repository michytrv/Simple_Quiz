let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');
let myQuestions = [
	{
		question: "What is Bart's full name?",
		answers: {
			a: 'Bartrum',
			b: 'Barty',
			c: 'Barticus',
            d: 'Bartholomew'
		},
		correctAnswer: 'd'
	},
	{
		question: "What are the names of Marge's sisters",
		answers: {
			a: 'Patsy and Selma',
			b: 'Patty and Selma',			
			c: 'Patty and Selina',
            d: 'Patsy and Selina',
		},
		correctAnswer: 'b'
	}, {
		question: "What is the name of the shop owned by Apu?",
		answers: {
			a: 'Kwik-E-Mart',
			b: 'Fast-E-Mart',
			c: 'Speed-E-Mart',
            d: 'Dash-E-Mart'
		},
		correctAnswer: 'a'
	}, {
		question: "What are the names of Homer's two colleagues from Sector 7G?",
		answers: {
			a: 'Moe and Barney',
			b: 'Carl and Lenny',
			c: 'Skinner and Krabappel',
            d: 'Wiggum and Abe'

		},
		correctAnswer: 'b'
	}
];

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
       
        let output = [];
        let answers;
    
        
        for(let i=0; i<questions.length; i++){
            
            
            answers = [];
    
            
            for(letter in questions[i].answers){
    
                
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        
        quizContainer.innerHTML = output.join('');
    }

	function showResults(questions, quizContainer, resultsContainer){
	
        
        let answerContainers = quizContainer.querySelectorAll('.answers');
        
        
        let userAnswer = '';
        let numCorrect = 0;
        
        
        for(let i=0; i<questions.length; i++){
    
            
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            
            if(userAnswer===questions[i].correctAnswer){
                
                numCorrect++;
                
                
                answerContainers[i].style.color = 'lightgreen';
            }
           
            else{
                
                answerContainers[i].style.color = 'red';
            }
        }
    
        
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);