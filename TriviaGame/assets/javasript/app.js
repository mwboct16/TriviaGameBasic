    
    /* var time = 60;
    var timer = setTimeout(decrement, 1000);
    console.log(time);

    function decrement(){
        time--;       
    }
    */

    
   var triviaQuestions = [{
    question: "What year was the PS4 Released?",
    answerList: ["2013", "2012", "2019", "2015"],
    answer: 0
},{
    question: "Name the character abused by Mario.",
    answerList: ["Luigi", "Bowser", "Donkey Kong", "Mushroom"],
    answer: 2
},{
    question: "Who developed Destiny 2?",
    answerList: ["Microsoft Studios", "Bungie", "Activision", "Infinity Ward"],
    answer: 1
},{
    question: "What field of study is the basis of Tomb Raider?",
    answerList: ["Social Studies", "Archaeology", "Geography", "English"],
    answer: 1
},{
    question: "The competitive gaming-group 'FaZe', was originally founded based of of what game?",
    answerList: ["Fortnite", "Grand-Theft Auto", "League of Legends", "Call of Duty"],
    answer: 3
},{
    question: "What does the word 'Atari' mean?",
    answerList: ["Tar", "Success", "Console", "First"],
    answer: 1
},{
    question: "What does Mario jump on/in after completing a level?",
    answerList: ["Pipes", "Platform", "Flag Pole", "Castle"],
    answer: 2
},{
    question: "What country was the PS3 first released?",
    answerList: ["China", "Japan", "North America", "Australia"],
    answer: 1
},{
    question: "What is the name of the all-time highest grossing game?",
    answerList: ["Fortnite", "Call of Duty", "League of Legends", "World of Warcraft"],
    answer: 3
},{
    question: "Which video-game app was taken of due to it being to addicting?",
    answerList: ["Angry Birds", "Bouncy Frog", "Flappy Birds", "Dots"],
    answer: 2
}];

    function newQuestion() {
        for (var i = 0; i < triviaQuestions.length; i++){
           $(".question").text(triviaQuestions.question[i]);
      
        }
    }
    $("#start-btn").on("click", function () {
        $("#start-btn").hide();
        newQuestion();
        
        });
    
    var correct = 0;
    var incorrect = 0;


