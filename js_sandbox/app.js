let val;
val=document;

val=document.all; // this is now deprecated, use the following instead.
val=document.getElementsByTagName('*');
// To find element by Id
val= document.getElementById('main')

// Get element
val = document.head
val = document.body
val = document.URL

// access to all forms
val = document.forms
val = document.forms[0] // or 1 form
val = document.forms[0].id // get id from form 0
// access to links
val = document.links
val = document.links[0]
val = document.links[0].id

// access to images
val = document.images

// access to scripts
val = document.scripts
val = document.scripts[2].getAttribute('src')

// Return a list of scripts.
let scripts = document.scripts;
let scriptsArr= Array.from(scripts)// turn scripts in to an array, since if we want to loop over it using forEach, we need to convert it.
scriptsArr.forEach(function(script){
  console.log(script);
})


console.log(val)
