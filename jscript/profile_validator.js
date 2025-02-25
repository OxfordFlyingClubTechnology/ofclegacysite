/*

New approach to validator using OOP principles.

We establish a class for general validation and try all patterns,
adding properties to the instance as we detect valid formats.

*/


// THESE CONSTANTS ARE DECLARED OUTSIDE THE CLASS 
// ELSE THEY WILL BE DUPLICATED PER INSTANCE.

//Declare Pattern Matching Regex
// NOTE: grouping using () produces an array (list) of the groups
// with [0] as the entire string, [1] as the first group etc.
// THESE PATTERNS MUST MATCH THE ALLOWED FORMATS IN THE SERVER_SIDE CODE !!!!!
// We are very tolerant of whitespace leading, trailing and between sections of entries
var rxBlankPattern = /^\s*$/; // all whitespace
var rxStatePattern = /^\s*([A-Za-z]{2})\s*$/;
var rxZipPattern = /^\s*(\d{5})[ -]?(\d{4})?\s*$/;
var rxPwPattern = /^\s*(\S{1,})\s*$/ // Anything at least 1 char long
var rxNumberPattern = /^\s*(\d*[.]?\d*)\s*$/; // Matches blank so be careful!
var rxEmailPattern = /^\s*[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\s*$/;
var rxPhonePattern = /^\s*\(?(\d{3})\)?[ .-]?\s*(\d{3})\s*[.-]?\s*(\d{4})\s*(.*)/; // Array of 5 groups incl ext
var rxMedClassPattern = /^\s*([1,2,3])\s*$/;
var rxDatePattern = /^\s*(\d{1,2})\s*[\/.-]?\s*(\d{1,2})\s*[\/.-]?\s*(\d{4})\s*$/;


// An array (dict) of all data entry validation tests.
// We test every entry against every validation as there may be overlap, esp for pw.
// A short list, so why not test all entries for all possibilities?
// key:value = property:regexPattern
var entryPatterns = {
	isBlank:    rxBlankPattern, // isBlank must be the first test!
	isState:    rxStatePattern,
	isZip:      rxZipPattern,
	isPw:       rxPwPattern,
	isNumber:   rxNumberPattern,
	isEmail:    rxEmailPattern,
	isPhone:    rxPhonePattern,
	isMedClass: rxMedClassPattern,
	isDate:     rxDatePattern,
	};
	

/* Entry Class - for all data entry fields
 NOTE: functions are Objects too!
 We accept a form input and create an Entry instance.
 Each instance value is compared to all validation patterns and
 is given the following properties in addition to those in the
 entryPatterns object.
	name
	value
	month
	date
	year
*/
var Entry = function(entry) {
	this.name = entry.name || ""; // accommodate buttons, checkboxes, etc.
	this.value = entry.value || "";
	/*console.log(this.name, this.value);/**/
	this.isBlank = false; // This must be corrected by testing for blank on first pass!
    for (var test in entryPatterns) {
	    this[test] = false;
		if (!this.isBlank && this.value.match(entryPatterns[test]))
	        this[test] = true;
		//console.log(test, this[test])
		}
	// Dates require special attention:
	if (this.isDate) {
		// re-match to collect the mo/day/yr sections
		var datetArray = this.value.match(rxDatePattern);
        // might as well make them properties of the instance
		this.month = datetArray[1];
		this.date = datetArray[2];
		this.year = datetArray[3];
        // check for a truly valid date
		if (this.month < 1 || this.month > 12)
		  this.isDate = false;
		else if (this.date < 1 || this.date> 31)
		  this.isDate = false;
		else if ((this.month==4 || this.month==6 || this.month==9 || this.month==11) && this.date==31)
		  this.isDate = false;
		else if (this.month == 2)
		{
		 var isleap = (this.year % 4 == 0 && (this.year % 100 != 0 || this.year % 400 == 0));
		 if (this.date> 29 || (this.date ==29 && !isleap))
			  this.isDate = false;
		}
		if (this.year < 1900) // must be a reasonable year, (match perl check)
		  this.isDate = false;
		// if we make it here, must still be a valid date!
	    }
	// Now compare entered date to today
	if (this.isDate) {
	    this.isFutureDate = false;
		today = new Date(); // NOTE: month is 0-11 (who knows why?)
		/*console.log("this: " + this.month+'/'+this.date+'/'+this.year+ "  today: " +(today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear() )/**/
		if (this.year > today.getFullYear() )
			this.isFutureDate = true;
		else if (this.year == today.getFullYear() && this.month > today.getMonth()+1 )
		    this.isFutureDate = true;
		else if (this.year == today.getFullYear() && this.month == today.getMonth()+1 && this.date > today.getDate())
		    this.isFutureDate = true;
	    // If we make it here, must not be a future date
		}
}

var errorPopUp = function() {
    alert('Please correct the highlighted entries.')
	}

/****
>>>>>>>>>>>>>>  HERE IS THE MAIN CODE FOR THE PROFILE PAGE <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
****/

$(document).ready(function(){
	$('form#INS').submit(function(event){
		//event.preventDefault();
		validateFormINS(event);
    });
    $('form#CON').submit(function(event){
		//event.preventDefault();
		validateFormCON(event);
    });
	$('form#CUR').submit(function(event){
		//event.preventDefault();
		validateFormCUR(event);		
	});
});
	
function validateFormCON(event){

    // First clear all prior error highlights
	$(".err_field").removeClass("err_field")
	$(".err_msg").remove()
	
	// Create an array of all inputs
	// each item is an ENTRY object with all validation properties
	var inputs = {};
	$('#CON .field').each(function() {
		inputs[this.name] = new Entry(this);
    });
	
	var errorDetect = false;
	
	// It seems DRYing the sequence below would add too much complexity
	if (inputs.fname.isBlank) {
	    $( ".field[name='fname']" ).addClass("err_field")
	    $( ".field[name='fname']" ).after('<span class="err_msg">Please enter your first name</span>')
	    errorDetect = true;}
	if (inputs.addr1.isBlank) {
	    $( ".field[name='addr1']" ).addClass("err_field")
	    $( ".field[name='addr1']" ).after('<span class="err_msg">Please enter your street address</span>')
	    errorDetect = true;}
	if (inputs.city.isBlank) {
	    $( ".field[name='city']" ).addClass("err_field")
	    $( ".field[name='city']" ).after('<span class="err_msg">Please enter your city</span>')
	    errorDetect = true;}
	if (!inputs.state.isState) {
	    $( ".field[name='state']" ).addClass("err_field")
	    $( ".field[name='state']" ).after('<span class="err_msg">Please enter your valid 2-letter state, ie CT</span>')
	    errorDetect = true;}
	if (!inputs.zip.isZip) {
	    $( ".field[name='zip']" ).addClass("err_field")
	    $( ".field[name='zip']" ).after('<span class="err_msg">Please enter your valid zip code</span>')
	    errorDetect = true;}
	if (!inputs.home.isBlank && !inputs.home.isPhone) {
	    $( ".field[name='home']" ).addClass("err_field")
	    $( ".field[name='home']" ).after('<span class="err_msg">Please enter a valid phone number, ie 203-123-4569</span>')
	    errorDetect = true;}
	if (!inputs.office.isBlank && !inputs.office.isPhone) {
	    $( ".field[name='office']" ).addClass("err_field")
	    $( ".field[name='office']" ).after('<span class="err_msg">Please enter a valid phone number, ie 203-123-4569</span>')
	    errorDetect = true;}
	if (!inputs.cell.isBlank && !inputs.cell.isPhone) {
	    $( ".field[name='cell']" ).addClass("err_field")
	    $( ".field[name='cell']" ).after('<span class="err_msg">Please enter a valid phone number, ie 203-123-4569</span>')
	    errorDetect = true;}
	if (!inputs.email.isBlank && !inputs.email.isEmail) {
	    $( ".field[name='email']" ).addClass("err_field")
	    $( ".field[name='email']" ).after('<span class="err_msg">Please enter a valid email address, ie john@faa.gov</span>')
	    errorDetect = true;}
	if (!inputs.dob.isBlank && !inputs.dob.isDate) {
	    $( ".field[name='dob']" ).addClass("err_field")
	    $( ".field[name='dob']" ).after('<span class="err_msg">Please enter a valid date, ie 1/1/2000</span>')
	    errorDetect = true;}
	if (!inputs.pw1.isBlank | !inputs.pw2.isBlank) {
	    if (!inputs.pw1.isPw) {
			$( ".field[name='pw1']" ).addClass("err_field")
			$( ".field[name='pw1']" ).after('<span class="err_msg">Password is not valid, may not contain spaces</span>')
			errorDetect = true;}
		if (inputs.pw2.value != inputs.pw1.value) {
	        $( ".field[name='pw2']" ).addClass("err_field")
			$( ".field[name='pw2']" ).after('<span class="err_msg">Passwords do not match</span>')
			errorDetect = true;}
		}
	
	if (errorDetect) {
	    errorPopUp();
		event.preventDefault();
		}

} // end of validateFormCON()


function validateFormCUR(event){
    
	// First clear all prior error highlights
	$(".err_field").removeClass("err_field")
	$(".err_msg").remove()
	
	// Create an array of all inputs
	// each item is an ENTRY object with all validation properties
	var inputs = {};
	$('#CUR :input').each(function() {
	    inputs[this.name] = new Entry(this);
    });
	
	var errorDetect = false;
	
	if (!inputs.med_class.isBlank && !inputs.med_class.isMedClass) {
	    $( ".field[name='med_class']" ).addClass("err_field")
	    $( ".field[name='med_class']" ).after('<span class="err_msg">Please enter 1, 2, or 3, or leave blank</span>')
	    errorDetect = true;}

	var curDates = ['bmed', 'bmed_course', 'med', 'bfr', 'ipc', 'p28a', 'c170', 'c172', 'c182rg', 'last_flight',];
	for (d in curDates) { // d is an integer index to the array
		//console.log(inputs[curDates[d]]);
		if (!inputs[curDates[d]].isBlank && !inputs[curDates[d]].isDate) {
			$( ".field[name="+inputs[curDates[d]].name+"]" ).addClass("err_field")
			$( ".field[name="+inputs[curDates[d]].name+"]" ).after('<span class="err_msg">Please enter a valid date, ie 1/1/2000 or leave blank</span>')
			errorDetect = true;}
	}
	
	var curIns = ['time_total', 'time_12',];
	if (inputs[curIns[0]]){ // maybe insurance fields are not there!
		for (t in curIns) { // t is an integer index to the array
			//console.log(inputs[curIns[t]]);
			if (!inputs[curIns[t]].isNumber) {
				$( ".field[name="+inputs[curIns[t]].name+"]" ).addClass("err_field")
				$( ".field[name="+inputs[curIns[t]].name+"]" ).after('<span class="err_msg">Please enter your flight time</span>')
				errorDetect = true;}
		}
	}
	
	if (inputs.client.value == inputs.member.value) {
		if (!$('#CUR :radio[name=new_incident_cur]:checked').val()) {
			$('.new_incident_cur').addClass("err_field");
			$('.new_incident_cur').before('<span class="err_msg">Please select</span>');
			errorDetect = true;}
		if ($('#CUR :checkbox[name=affirm_cur]:checked').val() != 'on') {
			$('.affirm_cur').addClass("err_field");
			$('.affirm_cur').before('<span class="err_msg">Required for Update</span>');
			errorDetect = true;}
	}
	
	if (errorDetect) {
	    errorPopUp();
		event.preventDefault();
		}
	
} // end of validateFormCUR()

function validateFormINS(event){
    
    // First clear all prior error highlights
	$(".err_field").removeClass("err_field")
	$(".err_msg").remove()
	
	// Create an array of all inputs
	// each item is an ENTRY object with all validation properties
	var inputs = {};
	$('#INS :input').each(function() {
	    inputs[this.name] = new Entry(this);
    });
	
	var errorDetect = false;

    if (inputs.client.value == inputs.member.value) {
		if (!$('#INS :radio[name=new_incident]:checked').val()) {
			$('.new_incident').addClass("err_field");
			$('.new_incident').before('<span class="err_msg">Please select</span>');
			errorDetect = true;}
        if (!$('#INS :radio[name=new_physical]:checked').val()) {
			$('.new_physical').addClass("err_field");
			$('.new_physical').before('<span class="err_msg">Please select</span>');
			errorDetect = true;}
		if (!$('#INS :radio[name=new_felony]:checked').val()) {
			$('.new_felony').addClass("err_field");
			$('.new_felony').before('<span class="err_msg">Please select</span>');
			errorDetect = true;}
        if (!$('#INS :radio[name=new_arrest]:checked').val()) {
			$('.new_arrest').addClass("err_field");
			$('.new_arrest').before('<span class="err_msg">Please select</span>');
			errorDetect = true;}
            
        if ($('#INS :checkbox[name=affirm_ins]:checked').val() != 'on') {
			$('.affirm_ins').addClass("err_field");
			$('.affirm_ins').before('<span class="err_msg">Required for Update</span>');
			errorDetect = true;}
	}
	
	if (errorDetect) {
	    errorPopUp();
		event.preventDefault();
		}

} // end of validateFormINS()
	
/*	A few tests for the Entry validator below */
/*
var testEntry = new Entry(' ');
console.log("We have an object with value: " + testEntry.value + "; Is it blank? " + testEntry.isBlank
 + "; Is it a number? " + testEntry.isNumber);
 
testEntry = new Entry('    2037752602abc');
console.log("We have an object with value: " + testEntry.value + "; Is it blank? " + testEntry.isBlank
 + "; Is it a phone? " + testEntry.isPhone);
 
testEntry = new Entry('09302014');
console.log("We have an object with value: " + testEntry.value + "; Is it blank? " + testEntry.isBlank
 + "; Is it a date? " + testEntry.isDate + "; Is it a future date? " + testEntry.isFutureDate);
/**/
 
