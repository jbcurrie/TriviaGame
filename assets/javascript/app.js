// {
// "response_code": 0,
// "response_message": "Token Generated Successfully!",
// "token": "b982599637014018956a38115fbc55a02b4d01d1e8ffe309881b5a2f1b15ad60"
// }


// science and nature questions
	//change response_code to gifObj
	//consider running functions in object if it makes more sense, otherwise you can refer to the object, and store the results in the window
		//game array
		//gif to display
var gameArr = [];
var correctAnsCnt = 0;
var incorrectAnsCnt = 0;
// var correct = true;
// var incorrect = true;

// Variable showQuestion will hold the setInterval when we start each round of the game
var showQuestion;
// counter for correct answer page
var answerPgCount = 0;
// counter for next questions
var questionCount = 0;

var number = 20;

var gameObj = {
shuffleQuestions : function (array) {
	var i = gameObj.questionObj.length;
	var j = 0;
	var temp = [];

	while (i--) {
		j = Math.floor(Math.random() * (i+1));
		temp = array[i];
		array[i] = array [j];
		array[j] = temp;
	}
	return array; },
"questionObj": [
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "The Neanderthals were a direct ancestor of modern humans.",
				"correct_answer": "False",
				"incorrect_answers": [
				"True" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
				"correct_answer": "Nitrogen",
				"incorrect_answers": [
				"Helium",
				"Carbon",
				"Hydrogen" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What is the colour of unoxidized blood?",
				"correct_answer": "Red",
				"incorrect_answers": [
				"Blue",
				"Purple",
				"Green" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "Chickens can live without a head.",
				"correct_answer": "True",
				"incorrect_answers": [
				"False" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "The moons, Miranda, Ariel, Umbriel, Titania and Oberon orbit which planet?",
				"correct_answer": "Uranus",
				"incorrect_answers": [
				"Jupiter",
				"Venus",
				"Neptune" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "The humerus, paired radius, and ulna come together to form what joint?",
				"correct_answer": "Elbow",
				"incorrect_answers": [
				"Knee",
				"Sholder",
				"Ankle" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "Hippopotomonstrosesquippedaliophobia is the irrational fear of long words.",
				"correct_answer": "True",
				"incorrect_answers": [
				"False" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "In aeronautics, flaps and slats are used to control what on an aircraft?",
				"correct_answer": "Lift",
				"incorrect_answers": [
				"Thrust",
				"Drag",
				"Weight " ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which of these stars is the largest?",
				"correct_answer": "UY Scuti",
				"incorrect_answers": [
				"VY Canis Majoris",
				"Betelgeuse",
				"RW Cephei" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "The &quot;Gympie Stinger&quot; is the deadliest plant in the world.",
				"correct_answer": "False",
				"incorrect_answers": [
				"True" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "The planet Mars has two moons orbiting it.",
				"correct_answer": "True",
				"incorrect_answers": [
				"False" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What was the first living creature in space?",
				"correct_answer": "Fruit Flies ",
				"incorrect_answers": [
				"Monkey",
				"Dog",
				"Mouse" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What mineral has the lowest number on the Mohs scale?",
				"correct_answer": "Talc",
				"incorrect_answers": [
				"Quartz",
				"Diamond",
				"Gypsum" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Gannymede is the largest moon of which planet?",
				"correct_answer": "Jupiter",
				"incorrect_answers": [
				"Uranus",
				"Neptune",
				"Mars" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "How many degrees Fahrenheit is 100 degrees Celsius? ",
				"correct_answer": "212",
				"incorrect_answers": [
				"326",
				"100",
				"451" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which chemical element has the lowest boiling point?",
				"correct_answer": "Helium",
				"incorrect_answers": [
				"Hydrogen",
				"Neon",
				"Nitrogen" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which element has the atomic number of 7?",
				"correct_answer": "Nitrogen",
				"incorrect_answers": [
				"Oxygen",
				"Hydrogen",
				"Neon" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Au on the Periodic Table refers to which element?",
				"correct_answer": "Gold",
				"incorrect_answers": [
				"Silver",
				"Oxygen",
				"Nickel" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "All the following metal elements are liquids at or near room temperature EXCEPT:",
				"correct_answer": "Beryllium",
				"incorrect_answers": [
				"Gallium",
				"Caesium",
				"Mercury" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "Like with the Neanderthals, Homo sapiens sapiens also interbred with the Denisovans.",
				"correct_answer": "True",
				"incorrect_answers": [
				"False" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "A defibrillator is used to start up a heartbeat once a heart has stopped beating.",
				"correct_answer": "False",
				"incorrect_answers": [
				"True" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "How many officially recognized dwarf planets in the solar system are named after Polynesian deities?",
				"correct_answer": "2",
				"incorrect_answers": [
				"0",
				"1",
				"5" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "Shrimp can swim backwards.",
				"correct_answer": "True",
				"incorrect_answers": [
				"False" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which psychological term refers to the stress of holding contrasting beliefs?",
				"correct_answer": "Cognitive Dissonance",
				"incorrect_answers": [
				"Flip-Flop Syndrome",
				"Split-Brain",
				"Blind Sight" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "The &quot;Tibia&quot; is found in which part of the body?",
				"correct_answer": "Leg",
				"incorrect_answers": [
				"Arm",
				"Hand",
				"Head" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "Type 1 diabetes is a result of the liver working improperly.",
				"correct_answer": "False",
				"incorrect_answers": [
				"True" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Who developed the first successful polio vaccine in the 1950s?",
				"correct_answer": "Jonas Salk",
				"incorrect_answers": [
				"John F. Enders",
				"Thomas Weller",
				"Frederick Robbins" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What is the chemical formula for ammonia?",
				"correct_answer": "NH3",
				"incorrect_answers": [
				"CO2",
				"NO3",
				"CH4" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "The medical condition osteoporosis affects which part of the body?",
				"correct_answer": "Bones",
				"incorrect_answers": [
				"Skin",
				"Brain",
				"Heart" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What is the atomic number of the element Strontium?",
				"correct_answer": "38",
				"incorrect_answers": [
				"73",
				"47",
				"11" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which of these is NOT a part of the structure of a typical neuron?",
				"correct_answer": "Islets of Langerhans",
				"incorrect_answers": [
				"Node of Ranvier",
				"Schwann cell",
				"Myelin sheath" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which part of the body does glaucoma affect?",
				"correct_answer": "Eyes",
				"incorrect_answers": [
				"Throat",
				"Stomach",
				"Blood" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "Anatomy considers the forms of macroscopic structures such as organs and organ systems.",
				"correct_answer": "True",
				"incorrect_answers": [
				"False" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "Scientists accidentally killed the world&#039;s oldest living creature, a mollusc, known to be 507 years old.",
				"correct_answer": "True",
				"incorrect_answers": [
				"False" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What term is best associated with Sigmund Freud?",
				"correct_answer": "Psychoanalysis",
				"incorrect_answers": [
				"Cognitive-Behavioral Therapy",
				"Theory of Gravity",
				"Dialectical Behavior Therapy" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which one of these scientists conducted the Gold Foil Experiment which concluded that atoms are mostly made of empty space?",
				"correct_answer": "Ernest Rutherford",
				"incorrect_answers": [
				"Joseph John Thomson",
				"Archimedes",
				"Niels Henrik David Bohr" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "After which Danish city is the 72th element on the periodic table named?",
				"correct_answer": "Copenhagen",
				"incorrect_answers": [
				"Odense",
				"Herning",
				"Skagen" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which of these is a type of stretch/deep tendon reflex?",
				"correct_answer": "Ankle jerk reflex",
				"incorrect_answers": [
				"Gag reflex",
				"Pupillary light reflex",
				"Scratch reflex" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "The human right lung has how many lobes?",
				"correct_answer": "3",
				"incorrect_answers": [
				"4",
				"2",
				"1" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Myopia is the scientific term for which condition?",
				"correct_answer": "Shortsightedness",
				"incorrect_answers": [
				"Farsightedness",
				"Double Vision",
				"Clouded Vision" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "In Chemistry, how many isomers does Butanol (C4H9OH) have?",
				"correct_answer": "4",
				"incorrect_answers": [
				"3",
				"5",
				"6" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What stage of development do the majority of eukaryotic cells remain in for most of their life?",
				"correct_answer": "Interphase",
				"incorrect_answers": [
				"Prophase",
				"Stasis",
				"Telophase" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Which of these elements on the Periodic Table is a Noble Gas?",
				"correct_answer": "Neon",
				"incorrect_answers": [
				"Potassium",
				"Iodine",
				"Colbalt" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "Deuterium is an isotope of which element?",
				"correct_answer": "Hydrogen",
				"incorrect_answers": [
				"Nitrogen",
				"Helium",
				"Neon" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "A positron is an antiparticle of a what?",
				"correct_answer": "Electron",
				"incorrect_answers": [
				"Neutron",
				"Proton",
				"Photon" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "In the periodic table, Potassium&#039;s symbol is the letter K.",
				"correct_answer": "True",
				"incorrect_answers": [
				"False" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "About how old is Earth?",
				"correct_answer": "4.5 Billion Years",
				"incorrect_answers": [
				"3.5 Billion Years",
				"2.5 Billion Years",
				"5.5 Billion Years" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What is radiation measured in?",
				"correct_answer": "Gray ",
				"incorrect_answers": [
				"Watt",
				"Decibel",
				"Kelvin" ] },
				{ "category": "Science & Nature",
				"type": "boolean",
				"difficulty": "medium",
				"question": "Sugar contains fat.",
				"correct_answer": "False",
				"incorrect_answers": [
				"True" ] },
				{ "category": "Science & Nature",
				"type": "multiple",
				"difficulty": "medium",
				"question": "What is the unit of electrical capacitance?",
				"correct_answer": "Farad",
				"incorrect_answers": [
				"Gauss",
				"Henry",
				"Watt" ]} 
				]};


var gifObj = {goodAnswer : ['https://media.giphy.com/media/FJkjFPkjn81vG/giphy.gif', 'https://media.giphy.com/media/qrlOmXoTgHAd2/giphy.gif', 'https://media.giphy.com/media/w5FTwwiweGqDm/giphy.gif', 'https://media.giphy.com/media/BLTS8Dz5exZiU/giphy.gif'], 
				badAnswer : ['https://media.giphy.com/media/z1GQ9t8FxipnG/giphy.gif', 'https://media.giphy.com/media/3o6Mb43PiNTQS5WgLu/giphy.gif', 'https://media.giphy.com/media/3oKIP8quIMUnLdfTAQ/giphy.gif', 'https://media.giphy.com/media/iCyNFaz5QoIb6/giphy.gif']}

// shows gif image
// $("h1").after(gifObj.spaceTaco);

console.log(gameObj.questionObj);

function start() {
	// on game start, shuffle object, grab the first 20 to a game array
		// shuffle function
		//store to window, or object? 
	// game objects loaded on this screen (start function that will reset, also triggered when you choose 'play again' ), and "play game" button click starts the question function 

	gameObj.shuffleQuestions(gameObj.questionObj);
	console.log(gameObj.questionObj)
	//pick20
	pickTwenty(gameArr);
	console.log(gameArr);
	questionRounds ();
	if ($("button").hasClass("answerBtn")) {
		$(".gameDiv").on("click","button",stopQuestion);
	};
	// displayQuestion();
};

//twenty questions per game (on window load/ start function invoked)
function pickTwenty (arr) {
	for (var i = 0; i < 20; i++) {
		arr.push(gameObj.questionObj[i])
	}
	return arr; 
};

//should start the game intervals (20 seconds) once start is clicked. after 20 seconds, or a button click, nextQuestion interval begins
//next question shows after nextQuestion interval ends 
function questionRounds () {
	$(".gameDiv").on("click",".startGame", function (event) {
		$(".startGame").remove();

		// showQuestion = setImmediate(displayQuestion, 1000 * 20);
		displayQuestion();
		number = 20;
		gameRun();
		//logic from stopwatch. use to turn clock on and off
		questionsRunning = true;

		//question function
		//start timer, trigger is button click, counts down from 30 (lasts per question)
		//show question, and answer choices 
	});

};

function gameRun () {
	timeRemaining = setInterval(decrement, 1000);
	$(".question").before($("<h3 class='timer'>Time Left : " + number + "s</h3>"));
	//decrement

};

function decrement () {
	debugger;

	number--;

    //  Show the number in the #show-number tag.
    $(".timer").html($("<h3>Time Left : " + number + "s</h3>"));


	//  Once number hits zero...
    if (number === 0) {

        //  ...run the stop function.
        stop();
	}
};


function stop () {
   	if (number === 0) {
    clearInterval(timeRemaining);
	}
};

//displays question for each round
function displayQuestion () {
	// console.log(gameArr);
	debugger;
	 // $("#image-holder").html("<img src=" + images[questionCount] + " width='400px'>");
	 var answerDiv = "<div class='row'>" + 
	 					"<div class='col-lg-12 col-md-12 col-sm-12 col-xs-12'>" + 
	 					"<button type='button' class='btn btn-default btn-block answerBtn'>" +  
	 					"</button>" + 
						"</div>" + 
	 					"</div>";

	 
	 
	//image to display
	if (gameArr[questionCount].type === 'boolean') {
		var tempArr = [];
		$(".question").html(gameArr[questionCount].question);
		//put T/F in alphabetical order and put F in the first button div, T in the second
		tempArr.push(gameArr[questionCount].correct_answer);
		for (var i = 0; i < gameArr[questionCount].incorrect_answers.length; i++) {
			tempArr.push(gameArr[questionCount].incorrect_answers[i]);
		};
			for (var j = 0; j < tempArr.length; j++) {
				if (tempArr[0] < tempArr[1]) {
					temp=tempArr[1];
					tempArr[1]=tempArr[0];
					tempArr[0]=temp;
				}
				$(".question").after($(answerDiv))
				$(".answerBtn:first").text(tempArr[j]);

			};
	} else if (gameArr[questionCount].type === 'multiple') {
	
		var tempArrE = [];
		// push 
		tempArrE.push(gameArr[questionCount].correct_answer);
		for (var i = 0; i < gameArr[questionCount].incorrect_answers.length; i++) {
			tempArrE.push(gameArr[questionCount].incorrect_answers[i]);
		};

			var j = tempArrE.length;
			var k = 0;
			var temp = [];

			while (j--) {

				k = Math.floor(Math.random() * (j+1));
				temp = tempArrE[j];
				tempArrE[j] = tempArrE[k];
				tempArrE[k] = temp;

			}
			$(".question").html(gameArr[questionCount].question);

		for (var i = 0; i < tempArrE.length; i++) {

			$(".question").after($(answerDiv));
			$(".answerBtn:first").text(tempArrE[i]);

			
		}

	};
	// {"category": "Science & Nature",
	// "type": "multiple",
	// "difficulty": "medium",
	// "question": "What is the unit of electrical capacitance?",
	// "correct_answer": "Farad",
	// "incorrect_answers": [
	// "Gauss",
	// "Henry",
	// "Watt"]}



	//
	//if category boolean, do this 
// true false
// $(".question").html(objtype.results[0].question);
// $(".question").after($("<button type='button' class='btn btn-default btn-block'>" + objtype.results[0].correct_answer + "</button>"));
// $(".question").after($("<button type='button' class='btn btn-default btn-block'>" + objtype.results[0].incorrect_answers[0] + "</button>"));

//if category multichoice, do this
// multichoice

	//need randon answer order 
	//Math.floor(Math.random()*(objtype.results[1].incorrect_answers.length +1)) gives a number between 0 and 3
	//use the result of this calculation to decide the index position of the correct answer
	//use the result of this calculation to decide the index position of the incorrect ansers 

		//push them all to the same array in random order

	//answerArray.push.objtype.results[1].incorrect_answers[i]

	//or use shuffle function after you push them all to the same array
// });
};

//interval page where correct answer displayed. 
function nextQuestion() {
	//not sure how to use this interval
	answerPgCount++;


	//replace this code with the correct answer and gif
	$("#image-holder").html("<img src='images/loading.gif' width='200px'/>");
  // delay showing next question for this long
  setTimeout(displayQuestion, 1000 * 10);


  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (answerPgCount === 10) {
    answerPgcount = 0;
   };

 	//clear divs? 


}


function stopQuestion() {

  // TODO: Put our clearInterval here:
  clearInterval(showQuestion);
  questionsRunning = false;

};




// on click function
	//on click, log correct answer/ incorrect answer result and store it to a counter
	//replace DOM with answer and gif
		//math random which gif to display
	//timer 7 seconds, next question function 

//on game end and reset
	//replace dom with score 
		//maybe a unique gif
	//display play again button (restart function)

$(document).ready(function() {
	document.querySelector("body").style.backgroundImage="url(assets/images/dna2.jpg)";
	start();
	var questionsRunning = false;
}); 


//------------------------ADDITIONAL NOTES---------------------------

//rename objtype (use to generate random questions. 20 per game)

//you can refer to the object values in the following format
	// objtype.results[0].category = "Science and Nature"

	//you can use $(var name for question element).html(objtype.results[0].category)
		//this would .inner HTML whatever is there, and i believe replace the data

//variables needed
	//object of questions
	//function in object to select 20 object questions
	//gifObj to display per category (randomly)

	//you can run the random selector function per game, and just store it in the start function

	//div variables to display questions
		//all multichoice questions have 1 div for questions, and 4 for answers
		//all true false have one div for question, and 2 for answers
		//add a button per answer appended to the h3 

	//timer for each round (question count down)
		//when timer reaches zero, do this function
			//lap timer gives an example of how to do this 

	//timer for correct answer
		//when timer reaches zero, do this function
			//slideshow gives an example of how to do this

	//variable correct answers
		//counts clicks matching correct answers

	//variable incorrect answers (one per page)
		//counts clicks matching incorrect answers array

	//unanswered questions counter



