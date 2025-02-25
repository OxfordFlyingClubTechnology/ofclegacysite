// adapted from http://accessify.com/features/tutorials/the-perfect-popup/

// on page load this statement is executed.
// calls next function below
addEvent(window, 'load', findPlayer, false);



// Called on page load above.
// We want to run the next findPlayer() script to attach the
// popup but of course Mozilla, IE, and others must
// be treated differently to make this happen.
// We test for certain variable exisitance to determine
// which browser, then call as required.
function addEvent(elm, evType, fn, useCapture)
{
// alert ("addEvent starting");
if(elm.addEventListener) {
 // For Mozilla
 // alert("Test 1 Passed");
 elm.addEventListener(evType, fn, useCapture);
 return true;}
else if (elm.attachEvent) {
 // For IE
 // alert("Test 2 Passed");
 var r = elm.attachEvent('on' + evType, fn);
 return r;}
else {
 // alert("Test 3 Passed");
 elm['on' + evType] = fn;}
}


// Finally, the meat:
// Run on page load, triggered from above.
// Explore the html looking for tag "a"
// then for each "a" see if "rel" is set to Aplayer or Vplayer.
// If so, attach the desired function, when clicked
// (this eliminates all the in-line jscript coding otherwise needed)
function findPlayer()
{
// alert ("Looking for Player links.");
var links = document.getElementsByTagName("a");
for (i=0;i<links.length;i++)
 {
 if (links[i].rel.indexOf("Aplayer")!=-1)
  {
  // attach popup behaviour
  // alert ("Hey I found an Aplayer!");
  // links[i].style.backgroundColor = "yellow";
  links[i].onclick = launchAplayer;
  // alert ("and Linked it!");
  }
	else if (links[i].rel.indexOf("Vplayer")!=-1)
	{
  // attach popup behaviour
  // alert ("Hey I found a Vplayer!");
  // links[i].style.backgroundColor = "pink";
  links[i].onclick = launchVplayer;
  // alert ("and Linked it!");
  }
 }
}

// script attached by above to any <a rel="Aplayer" href="xxx"> links
function launchAplayer(e)
{
// Launch the player window
newWindow = window.open(this.href, 'PlayClip', 
'scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,width=400,height=200');
newWindow.focus();

// Cancel the default link behavior because we are doing the popup!
// Again IE and Mozilla must be treated differently
// e is "event" apparently passed by Mozilla only?
if (window.event) 
 {
 // for IE
 window.event.returnValue = false;
 window.event.cancelBubble = true;
 } 
else if (e) 
 {
 // for Mozilla
 e.stopPropagation();
 e.preventDefault();
 }
}

// script attached by above to any <a rel="Vplayer" href="xxx"> links
function launchVplayer(e)
{
// Launch the player window
newWindow = window.open(this.href, 'PlayClip', 
'scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,resizable=yes,width=520,height=420, AUTOPLAY="TRUE"');
newWindow.focus();

// Cancel the default link behavior because we are doing the popup!
// Again IE and Mozilla must be treated differently
// e is "event" apparently passed by Mozilla only?
if (window.event) 
 {
 // for IE
 window.event.returnValue = false;
 window.event.cancelBubble = true;
 } 
else if (e) 
 {
 // for Mozilla
 e.stopPropagation();
 e.preventDefault();
 }
}
