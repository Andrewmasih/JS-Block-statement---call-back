
/* a call back function passed into another function as an arument, which is then invoked inside the outer function to complete somekind of routine or action */

function ask (question, good, bad) {

  /*we declare a function called 'ask', it takes 3 parameters, within the body of the 'ask' function, we have an 'if', 'else' code block */


 /* the 'confirm' function takes one argument, the text shown in the dialogue box */
  if (confirm (question)) {
    good ();
  }

  else {
    bad ();
  }
}



function yes () {

  console.log ("glad to hear that");
}

function no () {
        
  console.log ("sorry to hear that");

}