"use strict";

const words = ["Λέων","Κουντουράς"];

let counter = 0;
let index = 0;
let currentText = "";
let typewriterText = "";
let count = 0;



var i = 0;

words.forEach(function (item, index) {

  
        //$('.typer').append("<span>"+words[index][i]+"</span>").addClass("fontgrow"); 
        //$('.typer > span').removeClass("fontgrow");
        //$(".type > span:nth-of-type(" + i + ")").addClass("fontgrow");
           // console.log(words[index].charAt(j));
       // $('.typer').append("<span>"+words[index]+"</span>").addClass("fontgrow");
        //console.log(words[i]);
});

  /*  
words.forEach(function (item, index) {
    var i=0;
    var timeOut = 500*(i+1);
    setTimeout(function(){
        for (let i in words[index]) {
            $('.typer').append("<span>"+words[index][i]+"</span>"); 
        }
    }, timeOut);
    $('.typer > span').removeClass("fontgrow");
    $(".type > span:nth-of-type(" + index + ")").addClass("fontgrow"); 
});
*/


// immediately invoked function expression I.I.F.E
// function that executes itself

( // I.I.F.E recursive function
    function type(){ // function
        let timeOut = 1000; // set timeout to 200
        let eachWord = words[counter]; //set text to array each field
        //let firstLetter = eachWord.slice(0,1); // take first letter of word
        let firstLetter = eachWord.slice(0,++index); // add one and until index
        typewriterText = firstLetter; // set text to array each field
       
        document.querySelector(".typewriter").innerText = typewriterText;  //select span with class typewriter and apply text
      
        if (index == eachWord.length) {// if index is equal to words length
            index = 0; // clear index
            counter++; // go to next word, next array field
            timeOut = 2000; //when go to next word then wait 2seconds
        }

        //let letter = eachWord.charAt(index);
       //let letter = [...eachWord].forEach(
        //    c => console.log(c)
        //);
    
        if (counter >= words.length) counter= 0; // if counter is bigger than the length of array then reset
       
        setTimeout(type,timeOut); // call function after 200ms
      
        var txt = $(".typewriter").text();
        var newTxt = txt.replace(/\p{L}/gu,function(c){
          let data = '<span>'+c+'</span>';
          setTimeout(()=>{   
            $('.typewriter > span').each(function(index){
                var $span = $(this);
                var spanTxt = $span.text();
                    $('span').removeClass("fontgrow");
                   $(".typewriter > span:nth-of-type(" + (++index) + ")").addClass("fontgrow");
                 
                    // $(".typewriter > span:nth-of-type(" + (++index) + ")").css({ color: '#4758fc'});
                });
            }, 100);
            return data;
        })
        
       

        $(".typewriter").html(newTxt);

      
         
    }
)
(); //executes function





