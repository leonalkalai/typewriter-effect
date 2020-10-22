function letterShow(){ // main function
  // set array index to 0
 let index = 0;
 //set a new interval function
 const interval = setInterval(() => {
  let words = ["Oνομάζομαι","Λέων","Κουντουράς","και","μου","αρέσει","να","κατασκευάζω","Web","animations."];
  // convert array values to string and seperate them with space  and split result to array of substrings 
  const letters = words.join(" ").split("");
 // if index of array reaches to array length clear interval
  if (index === letters.length) {
    //clearInterval(interval); // optional clear if you want to run animation one time
    index=0; // reset index 
    $('.typer').html(""); //empty content before execute function again
  }
  if (typeof letters[index] === "undefined"){ // if letter is undefined
    letters[index]=''; // letter = nothing
      $('.typer').append("<span class='fontgrow'>"+letters[index]+"</span>"); // prints nothing
  }
 // this check is to remove accent before dot above letter appears or else accent appears behind dot
  if ((letters[index]==='ά')||(letters[index]==='έ')) // if value is ά or έ
  {
    if (letters[index]==='ά'){ //if value is ά change to α
      letters[index]='α';
    }
    if (letters[index]==='έ'){ //if value is έ change to ε
      letters[index]='ε';
    }
    $('.typer').append("<div class='letter-container'><p class='margin-fix dot'>.</p><p class='margin-fix'><span class='fontgrow underline'>"+letters[index]+"</span></p></div>");// append into container a span with effects class with letter inside
  }
 // end of check for accent
 //else display the value of array
   else{
     if (letters[index]===" "){ // if index is empty
       $('.typer').append("<span class='fontgrow'>"+'&nbsp;'+"</span>"); // add a space value in span
     }
     $('span').removeClass("fontgrow underline");// remove classes with effects 
     $('.typer').append("<span class='fontgrow underline'>"+letters[index]+"</span>");// append into container a span with effects class with letter inside
    }
   index++; //add +1 to the array index so next time it will display array[+1 value]
 }, 500);// timeinterval 1500
  
}//end of main function
 
letterShow(); //execute main function





