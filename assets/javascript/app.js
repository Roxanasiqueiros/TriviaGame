$("#start").on("click", function(){
    game.start()

})

$(document).on("click", "#stop",function(){
    game.done()
})





let QuestionsArray =[{

    questions:"What is the average weight of a tiger",
    answers:["950lb", "600lb", "450lb","340lb"],
    correctOne: "450lb"
},
{
    questions:"What is the largest species of tiger?",
    answers:["Bengal", "Siberian", "Caspian","Malayan"],
    correctOne: "Siberian"
},
{
    questions:"What color is a white tiger's eyes?",
    answers:["Black", "Brown", "Blue", "Green"],
    correctOne: "Blue"
},
{   questions:"Which of these is not a subspecies of a tiger?",
    answers:["Royal Bengal", "Siberian", "South China", "Asiatic"],
        correctOne: "Asiatic"},
     
{    questions:"Where did the white tigers originate?",
     answers:["India", "America", "Australia", "North Pole"],
     correctOne: "India"},

{   questions:"All tigers have ____ noses?",
    answers:["Pink", "Red", "Brown", "Black"],
    correctOne: "Pink"},

{   questions:"They are the biggest of the big cats",
    answers:["Tigers", "Lynx", "Puma", "Jaguar"],
    correctOne: "Tigers"},

{   questions:"What enzyme is lacking in albino tigers?",
    answers:["Tyrosynase", "Peptides", "Nucleotides", "Melanin"],
    correctOne: "Tyrosynase"},


]



let timer;


let game = {
    correct: 0,
    incorrect: 0,
    time: 120,
    unanswered: 0,

    countdown: function(){
        game.time--;
        $("#time").html(game.time);
        if(game.time<=0){
            
            game.done();
        }
    },

    start: function (){

        
        timer = setInterval(game.countdown, 1000);
       
        $("#question").prepend('<h2 id="countdown">Time Remaining: <span id="time">120</span> Seconds</h2> <br>' )
        
    $("#start").remove();
    
    for(let i=0; i<QuestionsArray.length ; i++){
        
        $("#question").append("<h2>"+QuestionsArray[i].questions+"</h2>");

       
        for(let a=0; a<QuestionsArray[i].answers.length; a++){

         
          $("#question").append("<input type ='radio' name='question-" + i + "' value='" + QuestionsArray[i].answers[a] + "' /><span>" + QuestionsArray[i].answers[a] + "</span>");
        }

    }
       
   
    $("#question").append('<br> <br><br><button id="stop">Done</button>')
    },

    


    btn: function (){

       
        timer = setInterval(game.countdown, 1000);
        
        $("#question").prepend('<h2 id="countdown">Time Remaining: <span id="time">120</span> Seconds</h2> <br>' )
         
    $(btn).remove();
    
    for(let i=0; i<QuestionsArray.length ; i++){
       
        $("#question").append("<h2>"+QuestionsArray[i].questions+"</h2>");

       
        for(let a=0; a<QuestionsArray[i].answers.length; a++){

         
          $("#question").append("<input type ='radio' name='question-" + i + "' value='" + QuestionsArray[i].answers[a] + "' /><span>" + QuestionsArray[i].answers[a] + "</span>");
        }

    }
       
   
    $("#question").append('<br> <br><br><button id="stop">Done</button>')
    },
    

  
    done: function(){
        clearInterval(timer);

        console.log('Checked radio button value: ', $('input[name="question-0"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[0].correctOne)

        for (let i = 0; i < QuestionsArray.length; i++) {
            if (!$('input[name="question-' + i + '"]:checked').val()) {
                game.unanswered++;
            }
        }

        if ($('input[name="question-0"]:checked').val() === QuestionsArray[0].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        console.log('Checked radio button value: ', $('input[name="question-1"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[1].correctOne)
        if ($('input[name="question-1"]:checked').val() === QuestionsArray[1].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        console.log('Checked radio button value: ', $('input[name="question-2"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[2].correctOne)
        if ($('input[name="question-2"]:checked').val() === QuestionsArray[2].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        console.log('Checked radio button value: ', $('input[name="question-3"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[3].correctOne)
        if ($('input[name="question-3"]:checked').val() === QuestionsArray[3].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        console.log('Checked radio button value: ', $('input[name="question-4"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[4].correctOne)
        if ($('input[name="question-4"]:checked').val() === QuestionsArray[4].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        console.log('Checked radio button value: ', $('input[name="question-5"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[5].correctOne)
        if ($('input[name="question-5"]:checked').val() === QuestionsArray[5].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        console.log('Checked radio button value: ', $('input[name="question-6"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[6].correctOne)
        if ($('input[name="question-6"]:checked').val() === QuestionsArray[6].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }

        console.log('Checked radio button value: ', $('input[name="question-7"]:checked').val());
        console.log('Correct answer: ', QuestionsArray[7].correctOne)
        if ($('input[name="question-7"]:checked').val() === QuestionsArray[7].correctOne) {
            game.correct++;
        } else {
            game.incorrect++;
        }
        
        // result
        console.log('# Incorrect: ', game.incorrect)
        console.log('# Correct: ', game.correct)

        this.result();
    },


    // display result
    result: function() {
        console.log("result");
        clearInterval(timer);
        $('#question h2').remove();
        $("#question").html("<h2 id='ll'> All Done!<br></h2> <br>");

        $("#question").append("<h3 class='p' id='g'>Correct Answer: "+this.correct+"</h3>");
        $("#question").append("<h3 class='p' id='r'>Incorrect Answer: "+this.incorrect+"</h3>");
        $("#question").append("<h3 class='p' id='y'>Unanswered: "+game.unanswered+"</h3><br>");

        
    
          
    }
}