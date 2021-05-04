
/* 'call backs' a function that gets passed to a function as an arument, it passes a functon as an argument, instead of a value it passes a function as a argument. 

a call back functon passed ino another function as an argument, which then invoked inside the outer function to complete somekind of routine or action, here is an example  */

function ask (question, good, bad) {

  /*we declare a function called 'ask', it takes 3 parameters, within the body of the 'ask' function, we have an 'if', 'else' code block */


 /* the 'confirm' function takes one argument */
 
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