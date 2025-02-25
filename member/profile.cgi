
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>

<head>
<title>My Profile - Oxford Flying Club</title>
<meta http-equiv="Content-Language" content="en-us">
<meta http-equiv="Content-Type" content="text/html; charset=us-ascii">
<link rel="stylesheet" type="text/css" href="../css/ofc.css">
<link rel="icon" type="image/png" sizes="32x32" href="../favicon.png">
<style type="text/css">
/* Page-Local Style Here */
.text .split_left {
  text-align: center;
}
.text .split_right {
  text-align: center;
}
.mug {
  /* some pics may be narrower */
  width: 118px; /* 112 + 2x3 */
  float: left;
  text-align: center;
  border: 1px solid black;
  margin: 1em;
}
.mug img {
  border: 3px solid #ffffff;
/* f8f8f8 */  margin: 0;
}
* html .mug img {
  /* Tan Hack: *html - only seen by IE Win */
  mar\gin-bottom: -3px; /* \ hides fix from IE5 Win */
}


/* Fix the IE 3px extra gap on some img floats */
.profilehead h3 {
  margin-top: 2em;
}
/* IE bug adds the bottom margin of the last item to the bottom of the float */
.profilehead form {
  margin: 1em 1em 0 2em;
}
table {
  margin: .7em 2em .7em 0;
}
/* same top as p */
th {
  width: 18em;
  text-align: right;
  font-weight: bold;
  vertical-align: middle;
}
td {
  text-align: left;
  vertical-align: middle;
}

table.inst table {
  XXXbackground-color: yellow;
  margin-top: .1em;
}
table.inst th {
  vertical-align: top;
  padding-top: .5em;
  XXXborder: thin solid red;
}
table.inst td {
  XXXvertical-align: top;
  XXXborder: thin solid green;
}



/* table messages - allow to expand */
input {
  margin-right: .5em;
}
input.field {width: 12em;} /* makes pw and text same for IE */
.notice {margin-left: 7em;}
button {
  /* fixes  IE "long button stretch" issue */
 padding: 0 .3em;
  overflow: visible;
  width: 14em;
  margin-left: 19.5em; # match <th> width +1.5em for alignment
}
.profilehead button {
  width: 11em;
  margin: 1em 0 0 0;}
  
/*** format for Legend - should match that on Members page ***/
.legend div {
  position: relative;
  display: inline-block;
  top: .7em;
  left: .7em;
  float: left;
  background-color: #f8f8f8;
  border: 1px solid black;
  margin: .7em .7em 0 0;
/* float margins do not collapse */  padding: 0;
}
.legend div {
  width: 30em;
  padding: 0 .2em 1em .2em;
}
.legend th {
  vertical-align: middle;
  width: 8em;
}
.legend td {
  vertical-align: middle;
  width: 21em;
}
.legend h4 {
  text-align: center;
}

/**** THESE ARE USED BY JQUERY SCRIPT ****/
.new_incident_cur, .new_incident, .new_physical, .new_felony, .new_arrest {
  float: right;
  width: 9em;
  margin-left: .5em;
  }
.affirm_cur, .affirm_ins {
  float: right;
  width: 6em;
  margin-left: .5em;
  }
/**** THESE ARE APPLIED BY JQUERY SCRIPT ****/
.err_field {
  border: solid thin red;
  }
.err_msg {
  color: red;
  }
 
</style>
</head>
<body>
<!-- Begin c_banner.cgi -->
  <div class="who">
    <p>Welcome Mike  Tedesco</p>
  </div>
<!-- End c_banner.cgi -->
<div class="title">	
  <div class="banner">

    <div class="banner_logo">
      <img alt="OFC Logo" src="../images/ofc_logo_175.png" />
    </div><!-- /banner_logo -->
    
    <div class="banner_days">


      <h3><em>1513 Days </em><br />
      without a <br />
      Club Safety Issue</h3>
    </div><!-- /banner_days -->
    
    <h1>Oxford Flying Club </h1>
    <h2>My Profile </h2>
    
    <div class="end_wedge"></div>

  </div><!-- /banner -->
</div><!-- /title -->
				
<!-- Begin menu.cgi -->

<ul class="menu">
  <li><a href="../home.htm">Home</a></li>
  <li><a href="../about.htm">About OFC</a></li>
  <li><a href="../aircraft.htm">Club Aircraft</a></li>
  <li><a href="../avlinks.htm">Av Links</a></li>
  <li><a href="docs.htm">Club Docs</a></li>
  <li><a href="minutes_safety/20_09_10_OFC_%20Safety_Minutes.pdf">Current Events</a></li>
  <li><a href="instructors.htm">Instructors</a></li>
  <li><a href="https://www.oxfordflyingclub.com/member/logout.cgi">Logout</a></li>
  <li><a href="members.htm">Members</a></li>
  <li><a>My Profile</a></li>
  <li><a href="safety.htm">Safety</a></li>
  <li><a href="https://app.flightschedulepro.com">Scheduler</a></li>
</ul>
  
  <!-- End menu.cgi -->
<ul class="item">
  <li class="sub_item">
  <div class="title">
    <div class="headline">
<!-- begin profile.cgi -->
<div class="mug">
  <img src="images/mug/tedesco.jpg" alt="Mike Tedesco">
</div>
<div class="profilehead">
  <h3>Profile for Mike Tedesco</h3>
</div><!-- /profilehead --><!-- end profile.cgi -->
      <div class="end_wedge">
      </div>
    </div><!-- /headline -->
  </div><!-- /title -->
  <ul>
    <li><a name="contact"></a>
    <div class="headline">
      <h3>Contact Data </h3>
    </div><!-- /headline -->
    <div class="text">
<!-- begin profile.cgi -->
<form id="CON" action="profile.cgi" method="POST">
<input type="hidden" name="type" value="CON">
<input type="hidden" name="client" value="tedesco">
<input type="hidden" name="member" value="tedesco">
  <table>
    <tr><th>Member Name:</th><td>Mike Tedesco</td></tr>    
    <tr><th>First Name:</th><td><input class="field" type="text" name="fname" value="Mike"></td><td></td></tr>
    <tr><th>Address 1:</th><td><input class="field" type="text" name="addr1" value="6 Sage Lane"></td><td></td></tr>
    <tr><th>Address 2:</th><td><input class="field" type="text" name="addr2" value=""></td><td></td></tr>
    <tr><th>City:</th><td><input class="field" type="text" name="city" value="Monroe"></td><td></td></tr>
    <tr><th>State:</th><td><input class="field" type="text" name="state" value="CT"></td><td></td></tr>
    <tr><th>Zip:</th><td><input class="field" type="text" name="zip" value="06468"></td><td></td></tr>
    
    <tr><th> </th><td>&nbsp;</td></tr>
    <tr><th>Home Phone:</th><td><input class="field" type="text" name="home" value=""></td><td></td></tr>
    <tr><th>Office Phone:</th><td><input class="field" type="text" name="office" value=""></td><td></td></tr>
    <tr><th>Cell Phone </th><td><input class="field" type="text" name="cell" value="(203) 400-5615"></td><td></td></tr>
    <tr><th>Email:</th><td><input class="field" type="text" name="email" value="mike.tedesco@venturesoft.com"></td><td></td></tr>
    <tr><th> </th><td>&nbsp;</td></tr>
    <tr><th>Spouse Name:</th><td><input class="field" type="text" name="spouse" value="Robyn"></td><td></td></tr>
    <tr><th>Date of Birth:</th><td><input class="field" type="text" name="dob" value="05/10/1971"></td><td></td></tr>
    <tr><th>New Password:</th><td><input class="field" type="password" name="pw1"></td><td></td></tr>
    <tr><th>Confirm New Password:</th><td><input class="field" type="password" name="pw2"></td></tr>
  </table>
<div><button type="submit">Update Contact Data</button></div>
</form>
<!-- end profile.cgi -->
      <div class="end_wedge">
      </div>
    </div><!-- /text -->
    </li>
    <li><a name="currency"></a>
    <div class="headline">
      <h3>Currency Data </h3>
    </div><!-- /headline -->
    <div class="text">
<!-- begin profile.cgi -->

<form id="CUR" action="profile.cgi" method="POST">
<input type="hidden" name="type" value="CUR">
<input type="hidden" name="client" value="tedesco">
<input type="hidden" name="member" value="tedesco">
  <table>
    <tr><th>Member Name:</th><td>Mike Tedesco</td></tr>
    <tr><th>Status:</th><td>Regular Member  </td></tr>
    <tr><th>Flight Currency:</th><td><span class="expired">No CARDINAL<br />No CIRRUS</span></td></tr>
    <tr><th> </th><td>&nbsp;</td></tr>
    <tr><th> Certifications:</th><td><input class="field" type="text" name="cert" value="PRIV"> </td></tr>
    <tr><th> Ratings:</th><td><input class="field" type="text" name="rate" value="ASEL"> </td></tr>
    <tr><th> </th><td>&nbsp;</td></tr>
    <tr><th> Safety Meeting 1:</th><td><input class="field" type="text" name="safe_mtg1" value="09/17/2024"> 
    <tr><th> Safety Meeting 2:</th><td><input class="field" type="text" name="safe_mtg2" value="02/04/2025"> 
    <tr><th> </th><td>&nbsp;</td></tr>
    <tr><th><span class="expired">No Entry - </span> Basic Medical:</th><td><input class="field" type="text" name="bmed" value=""> </td></tr>
    <tr><th><span class="expired">No Entry - </span> Basic Medical Course:</th><td><input class="field" type="text" name="bmed_course" value=""> </td></tr>
    <tr><th>--- or ---</th><td></td></tr>
    <tr><th> Medical Class:</th><td><input class="field" type="text" name="med_class" value="2"> </td></tr>
    <tr><th> Medical:</th><td><input class="field" type="text" name="med" value="07/14/2024"> </td></tr>
    <tr><th> </th><td>&nbsp;</td></tr>
    <tr><th> BFR:</th><td><input class="field" type="text" name="bfr" value="09/05/2023"> </td></tr>
    <tr><th> APC or Equiv:</th><td><input class="field" type="text" name="apc" value="11/05/2024"> </td></tr>
    <tr><th> Last Flight:</th><td><input class="field" type="text" name="last_flight" value="02/10/2025"> </td></tr>
    <tr><th><span class="warning">Not Applicable - </span> ICE:</th><td><input class="field" type="text" name="ipc" value=""> </td></tr>
    <tr><th> </th><td>&nbsp;</td></tr>
	  <tr><th> Skyhawk ICC:</th><td><input class="field" type="text" name="c172" value="10/12/2023"> </td></tr>
    <tr><th><span class="expired">No Entry - </span> Cardinal ICC:</th><td><input class="field" type="text" name="c177" value=""> </td></tr>
    <tr><th> Skylane ICC:</th><td><input class="field" type="text" name="c182rg" value="03/08/2024"> </td></tr>
    <tr><th> Archer ICC:</th><td><input class="field" type="text" name="p28a" value="10/25/2023"> </td></tr>
    <tr><th><span class="expired">No Entry - </span> Cirrus ACC:</th><td><input class="field" type="text" name="sr20" value=""> </td></tr>
    <tr><th> </th><td>&nbsp;</td></tr>
  </table>
  

    <h5 class="notice"><em>Updates will not register unless the following responses are provided:</em></h5>
    <table>
    <tr><th><div class="new_incident_cur">Yes: <input type = "radio" name="new_incident_cur" value="Y" > No: <input type = "radio" name="new_incident_cur" value="N" ></div></th>
    <td>Have you been involved in any aircraft accident or incident or had any FAA violation which is previously unreported to the OFC Board of Directors?
    <b>If you answer "Yes", you must submit a detailed report to the Board of Directors within 7 days.</b>
    </td></tr>

	<tr><th><div class="affirm_cur">Affirm: <input type = "checkbox" name="affirm_cur" ></div></th>
    <td>I, Mike Tedesco, affirm this information is correct to the best of my knowledge.</td></tr>
    <tr><th></th><td>Prior response: No on 02/12/2025 </td></tr>
  </table>
  
<div><button type="submit">Update Currency Data</button></div>
</form>

<!-- end profile.cgi -->
<div class="end_wedge">
      </div>
    </div><!-- /text -->
    </li>
<!-- begin profile.cgi -->
<!-- end profile.cgi -->
  </ul>
  </li><!-- /sub_item -->
  <li>
  <div class="headline">
    <h3>Legend</h3>
  </div><!-- /headline -->
<div class="legend">

<div class="cert_legend">
<h4>Certificates</h4>
<table>
<tr><th>STUD</th><td>- Student</td></tr>
<tr><th>PRIV</th><td>- Private</td></tr>
<tr><th>COMM</th><td>- Commercial</td></tr>
<tr><th>ATP</th><td>- Airline Transport Pilot</td></tr>
<tr><th>F/E</th><td>- Flight Engineer</td></tr>    
<tr><th>BGI</th><td>- Basic Ground Instructor</td></tr>  
<tr><th>IGI</th><td>- Instrument Ground Instructor</td></tr>  
<tr><th>AGI</th><td>- Advanced Ground Instructor</td></tr>
<tr><th>CFI</th><td>- Certified Flight Instructor</td></tr>      
<tr><th>CFII</th><td>- Certified Flight Instructor - Instrument</td></tr>
<tr><th>MEI</th><td>- Multi Engine Instructor</td></tr>
</table>
</div>

<div class="rate_legend">
<h4>Ratings</h4>
<table>
<tr><th>ASEL</th><td>- Airplane Single Engine Land</td></tr>
<tr><th>ASES</th><td>- Airplane Single Engine Sea</td></tr>
<tr><th>AMEL</th><td>- Airplane Multi Engine Land</td></tr>
<tr><th>ASMEL</th><td>- Airplane Single / Multi Engine Land</td></tr>
<tr><th>BAL</th><td>- Lighter-Than-Air Free Balloon</td></tr>
<tr><th>GL</th><td>- Glider</td></tr>
<tr><th>INSTA</th><td>- Instrument - Airplane</td></tr>
<tr><th>ROTH</th><td>- Rotocraft - Helicopter</td></tr>
</table>
</div>



<div class="rate_legend">
<h4>Currency</h4>
<table>
<tr><th>ICC</th><td>- Initial Club Checkout (Club)</td></tr>
<tr><th>APC</th><td>- Annual Proficiency Check (Club)</td></tr>
<tr><th>ICE</th><td>- Instrument Competency Evaluation (Club)</td></tr>
<tr><th>IPC</th><td>- Instrument Proficiency Check (FAA)</td></tr>
<tr><th>BFR</th><td>- Biennial Flight Review (FAA)</td></tr>
<tr><th>FICE</th><td>- Flight Instructor Club Evaluation</td></tr>
<tr><th>&nbsp;</th></tr>
<tr><th>Black</th><td>- Certificate or Document is Current</td></tr>
<tr><th><span class="warning">Purple</span></th><td>- Certificate is Downgraded (i.e. Medical)</td></tr>
<tr><th><span class="expired">Red</span></th><td>- Certificate or Document has Expired</td></tr>
</table>
</div>

</div><!-- /legend -->
  <div class="end_wedge">
    <!-- --></div>
  </li>
</ul>
<!-- /item -->

<script type="text/javascript" 
src="https://ajax.microsoft.com/ajax/jQuery/jquery-1.11.1.min.js">
</script>
<script type="text/javascript" 
src="../jscript/profile_validator.js">
</script>

</body>

</html>
