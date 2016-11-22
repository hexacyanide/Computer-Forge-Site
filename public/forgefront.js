/*
	Title: Forgefront
	This is the front-end for CU Computer Forge
		
	Topic: Important Divs
	
		content - This class is a div that holds all of the content of the page, nothing - * other than scripts goes outside of it.

*/

var g_domain = "http://cucomputerforge.com/";

/*
	Section: Display Functions
	These are functions to remove or show page elements (except for blocks).
*/

/*
	Function: emptyDiv
	
	Find a div by id and remove its contents.
	
	Parameters:
	
		divId - The id of the div whose contents will be removed
		
	Returns:
	
		nothing - *
*/
function emptyDiv(divId) {
	
	var node = document.getElementById(divId);
	
	while (node.hasChildNodes()) {
    	node.removeChild(node.lastChild);
	}
}

function logOut() {
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/logout';
	
	window.location = url;
}

function searchEdu(searchform) {
	searchform.action += searchform["searchvalue"].value;
}

function getProjects() {
	var newsandproj = document.createElement("div");
	
	var news = document.createElement("div");
	
	var h2top = document.createElement("h2");
	h2top.innerHTML = "News";
	
	var info = document.createElement("div");
	info.setAttribute("id", "news");
	
	var infodata = getNews();
	infodata.then(function(success) {
		/* news data, replace newlines with <b> cause you're in html, not textarea */
		var newsinfo = document.createElement("p");
		newsinfo.innerHTML = success.replace(/\n/g, "<br>");
		
		info.appendChild(newsinfo);
	}, function(error) {
		/* none */
	});
	
	news.appendChild(h2top);
	news.appendChild(info);
	
	var projects = document.createElement("div");
	
	var h2bottom = document.createElement("h2");
	h2bottom.innerHTML = "Member Projects";
	
	var projectsection = document.createElement("div");
	projectsection.setAttribute("id", "projectsection");
	
	var projectdata = getAllProjects();
	
	projectdata.then(function(success) {
		var section = document.getElementById("projectsection");
		
		if(success.length > 0) {
			var projectsFile = JSON.parse(success);
		
		    var keys = Object.keys(projectsFile);
		    keys.sort();
			var count = keys.length;
			
			var projectname;
			var address;
			var description;
			
			var current;
			
			var k;
			for(var i = 0; i < count; i++) {
		    	k = projectsFile[keys[i]].length;
		    	for(var j = 0; j < k; j++) {
			    	current = keys[i];
			    	
		        	projectname = document.createElement("input");
					projectname.setAttribute("type", "text");
					projectname.setAttribute("value", projectsFile[current][j]["name"]);
					projectname.readOnly = true;
					
					address = document.createElement("input");
					address.setAttribute("type", "text");
					address.setAttribute("value", projectsFile[current][j]["address"]);
					address.readOnly = true;
					
					description = document.createElement("textarea");
					description.value = projectsFile[current][j]["description"];
					description.readOnly = true;
					
					section.appendChild(projectname);
					section.appendChild(address);
					section.appendChild(description);
		    	}
			}
		}
	}, function(error) {
		/* none */
	});
	
	projects.appendChild(h2bottom);
	projects.appendChild(projectsection);
	
	newsandproj.appendChild(news);
	newsandproj.appendChild(projects);
	
	return newsandproj;
}

/*
	Function: getAboutUs
	
	Create a div that stores about us info.
	
	Parameters:
	
		none
		
	Returns:
	
		html node - about us info
*/
function getAboutUs() {
	var aboutus = document.createElement("div");
	
	var h2 = document.createElement("h2");
	h2.innerHTML = "About Us";
	
	var info1 = document.createElement("p");
	info1.innerHTML = "Computer Forge at CU is a student organization that promotes software project collaboration. Any full-time student at the University of Colorado Boulder can become a member. Some of the benefits of being a member include:";
	
	var ol = document.createElement("ol");
	
	var li0 = document.createElement("li");
	li0.innerHTML = "Members can post projects & contact each other on this site.";
	
	var li1 = document.createElement("li");
	li1.innerHTML = "Members will get hosting privileges on the CU Boulder Computer Science Department's OpenStack cloud.";
	
	var li2 = document.createElement("li");
	li2.innerHTML = "Members can also attend Computer Forge seminars where they can learn and implement knowledge on software development, including server implementation, scaling, security, databases, and more.";
	
	var info2 = document.createElement("p");
	info2.innerHTML = "If you are interested in becoming a member, you can find information about that by clicking the 'Become A Member' button above.";
	
	ol.appendChild(li0);
	ol.appendChild(li1);
	ol.appendChild(li2);
	
	aboutus.appendChild(h2);
	aboutus.appendChild(info1);
	aboutus.appendChild(ol);
	aboutus.appendChild(info2);
	
	/* current executive council */
	var exech2 = document.createElement("h2");
	exech2.innerHTML = "Executive Council";
	
	var president = document.createElement("h4");
	president.innerHTML = "Eric Fossas (President) - eric.fossas@colorado.edu";
	
	var presidentInfo = document.createElement("p");
	presidentInfo.innerHTML = "Eric is a senior computer science major. The responsibilities of the President include the coordination of organization's principle tasks, such as managing the OpenStack, supervising this website, and hosting seminars. In addition, the President applies for funding and communicates directly with the computer science department and the organization's faculty advisor.";
	
	var vptechnology = document.createElement("h4");
	vptechnology.innerHTML = "Callie Jones (VP of Technology) - callie.jones@colorado.edu";
	
	var vptechnologyInfo = document.createElement("p");
	vptechnologyInfo.innerHTML = "Callie is a junior computer science major. The responsibilities of the Vice President of Technology include managing the organization's allocated OpenStack resources, such as creating and destroying VMs for members to use.";
	
	var vpnetworks = document.createElement("h4");
	vpnetworks.innerHTML = "Ryan Craig (VP of Networking) - ryan.craig@colorado.edu";
	
	var vpnetworksInfo = document.createElement("p");
	vpnetworksInfo.innerHTML = "Ryan is a senior-ish computer science major. The responsibilities of the Vice President of Networking include the management of this website and granting accounts to new members.";
	
	var vpseminars = document.createElement("h4");
	vpseminars.innerHTML = "Cameron Tierney (VP of Seminars) - cameron.tierney@colorado.edu";
	
	var vpseminarsInfo = document.createElement("p");
	vpseminarsInfo.innerHTML = "Cameron is a senior computer science major. The responsibilities of the Vice President of Seminars include hosting the organization's seminars where we teach and discuss important topics in server development and cloud computing.";
	
	var vpfinances = document.createElement("h4");
	vpfinances.innerHTML = "Ryan Riley (VP of Finances) - ryan.b.riley@colorado.edu";
	
	var vpfinancesInfo = document.createElement("p");
	vpfinancesInfo.innerHTML = "Ryan is a senior computer science major. The responsibilities of the Vice President of Finances include managing spending of the organization's allocated funding.";
	
	var vpelections = document.createElement("h4");
	vpelections.innerHTML = "Jacob Brauchler (VP of Elections) - jacob.brauchler@colorado.edu";
	
	var vpelectionsInfo = document.createElement("p");
	vpelectionsInfo.innerHTML = " is a senior computer science major. The responsibilities of the Vice President of Elections include organizing the yearly election for President.";
	
	aboutus.appendChild(exech2);
	aboutus.appendChild(president);
	aboutus.appendChild(presidentInfo);
	aboutus.appendChild(vptechnology);
	aboutus.appendChild(vptechnologyInfo);
	aboutus.appendChild(vpnetworks);
	aboutus.appendChild(vpnetworksInfo);
	aboutus.appendChild(vpseminars);
	aboutus.appendChild(vpseminarsInfo);
	aboutus.appendChild(vpfinances);
	aboutus.appendChild(vpfinancesInfo);
	aboutus.appendChild(vpelections);
	aboutus.appendChild(vpelectionsInfo);
	
	/* link to bylaws */
	var bylaws = document.createElement("h2");
	bylaws.innerHTML = "ByLaws";
	
	var bylawsLink = document.createElement("a");
	bylawsLink.setAttribute("href", "CUCF_ByLaws.pdf");
	bylawsLink.innerHTML = "<strong>Computer Forge @ CU Bylaws</strong>";

	aboutus.appendChild(bylaws);
	aboutus.appendChild(bylawsLink);
	
	return aboutus;
}

function getBecomeMember() {
	var becomemember = document.createElement("div");
	
	var h2 = document.createElement("h2");
	h2.innerHTML = "Become A Member";
	
	var info1 = document.createElement("p");
	info1.innerHTML = "To become a member, you must be a full-time University of Colorado Boulder student and complete the following requirements:";
	
	var ol = document.createElement("ol");
	
	var li0 = document.createElement("li");
	li0.innerHTML = "Complete a basic training course that will teach you how to use the cloud hosting service that we will grant you access to.";
	
	var li1 = document.createElement("li");
	li1.innerHTML = "Pay a one-time membership fee of $20";
	
	ol.appendChild(li0);
	ol.appendChild(li1);
	
	var info2 = document.createElement("p");
	info2.innerHTML = "If you're interested in becoming a member. Please use the contact form below (<b>include your email</b>):";
	
	var form = document.createElement("form");
	form.setAttribute("action", "contact");
	form.setAttribute("method", "post");
	form.setAttribute("onsubmit", "contact(event);");
	
	var email = document.createElement("input");
	email.setAttribute("type", "text");
	email.setAttribute("name", "emailaddress");
	email.setAttribute("placeholder", "You Email Address");
	
	var input = document.createElement("textarea");
	input.setAttribute("name", "message");
	input.setAttribute("placeholder", "Your Message");
	
	var submit = document.createElement("input");
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "Send Message");
	
	form.appendChild(email);
	form.appendChild(input);
	form.appendChild(submit);
	
	becomemember.appendChild(h2);
	becomemember.appendChild(info1);
	becomemember.appendChild(ol);
	becomemember.appendChild(info2);
	becomemember.appendChild(form);
	
	return becomemember;
}

function getMemberArea() {
	
	var memberarea = document.createElement("div");
	
	var logoutbtn = document.createElement("a");
	logoutbtn.setAttribute("class", "menubtn logoutbtn");
	logoutbtn.setAttribute("onclick", "logOut();");
	logoutbtn.style = "float:right";
	logoutbtn.innerHTML = "Log Out";
	
	var h2top = document.createElement("h2");
	h2top.innerHTML = "New Project";
	
	var form = document.createElement("form");
	form.setAttribute("action", "updatememberprojects");
	form.setAttribute("method", "post");
	form.setAttribute("onsubmit", "createProject(event);");
	
	var projname = document.createElement("input");
	projname.setAttribute("type", "text");
	projname.setAttribute("name", "project");
	projname.setAttribute("placeholder", "Project Name");
	
	var address = document.createElement("input");
	address.setAttribute("type", "text");
	address.setAttribute("name", "address");
	address.setAttribute("placeholder", "Project URL or GitHub, if available");
	
	var description = document.createElement("textarea");
	description.setAttribute("name", "description");
	description.setAttribute("placeholder", "Project Description, include your contact info");
	
	var submit = document.createElement("input");
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "Create New Project");
	
	form.appendChild(projname);
	form.appendChild(address);
	form.appendChild(description);
	form.appendChild(submit);
	
	var linebreak = document.createElement("hr");
	
	var h2bottom = document.createElement("h2");
	h2bottom.innerHTML = "Your Current Projects";
	
	var memberprojects = document.createElement("div");
	memberprojects.setAttribute("id", "memberprojects");
	
	memberarea.appendChild(logoutbtn);
	memberarea.appendChild(h2top);
	memberarea.appendChild(form);
	memberarea.appendChild(linebreak);
	memberarea.appendChild(h2bottom);
	memberarea.appendChild(memberprojects);
	
	var projectdata = getUserProjects();
	
	projectdata.then(function(success) {
		var displayprojects = document.getElementById("memberprojects");
		
		
		if(success.length > 0) {
			var projectData = JSON.parse(success);
			var count = projectData.length;
			
			var projectsdiv;
			var projname;
			var address;
			var description;
			var submit;
			var deleteBtn;
			
			var current;
			
			var i = 0;
			while(i < count) {
				current = projectData[i]["name"];
				
				projectsdiv = document.createElement("div");
				projectsdiv.setAttribute("id", current);
				
				projname = document.createElement("input");
				projname.setAttribute("type", "text");
				projname.setAttribute("class", current);
				projname.value = current;
				
				address = document.createElement("input");
				address.setAttribute("type", "text");
				address.setAttribute("class", current);
				address.value = projectData[i]["address"];
				
				description = document.createElement("textarea");
				description.setAttribute("class", current);
				description.value = projectData[i]["description"];
				
				submit = document.createElement("input");
				submit.setAttribute("type", "submit");
				submit.setAttribute("value", "Change Project");
				submit.setAttribute("onclick", "updateProject('" +  current + "');");
				
				deleteBtn = document.createElement("input");
				deleteBtn.setAttribute("type", "submit");
				deleteBtn.setAttribute("value", "Delete Project");
				deleteBtn.setAttribute("onclick", "deleteProject('" + current + "');");
	
				projectsdiv.appendChild(projname);
				projectsdiv.appendChild(address);
				projectsdiv.appendChild(description);
				projectsdiv.appendChild(submit);
				projectsdiv.appendChild(deleteBtn);
				
				displayprojects.appendChild(projectsdiv);

				i++;
			}
		} else {
			displayprojects.innerHTML = "none";
		}
	}, function(error) {
		document.getElementById("memberprojects").innerHTML = "Promise Error";
	});
	
	return memberarea;
}

function getMembers() {
	
	var members = document.createElement("div");
	
	if(document.getElementById("logstatus").getAttribute("data-status") === 'out') {

		var h2 = document.createElement("h2");
		h2.innerHTML = "Member Log In";

		var form = document.createElement("form");
		form.setAttribute("action", "/");
		form.setAttribute("method", "post");
		form.setAttribute("onsubmit", "userSign(event);");
		
		var input = document.createElement("input");
		input.setAttribute("type", "text");
		input.setAttribute("name", "username");
		input.setAttribute("placeholder", "Enter User Email");
		
		var pass = document.createElement("input");
		pass.setAttribute("type", "password");
		pass.setAttribute("name", "usersign");
		pass.setAttribute("placeholder", "Enter Password");
		
		var submit = document.createElement("input");
		submit.setAttribute("type", "submit");
		submit.setAttribute("value", "Sign In");
	
		form.appendChild(input);
		form.appendChild(pass);
		form.appendChild(submit);
		
		members.appendChild(h2);
		members.appendChild(form);
	} else {
		members = getMemberArea();
	}
	
	return members;
}

function displayAdminLogIn() {
	
	var main = document.getElementById('content');
	
	/* top section */
	var top = document.createElement("div");
	top.setAttribute("class","top");
	
	var h1 = document.createElement("h1");
	h1.innerHTML = "Computer Forge @ CU";
	
	var logo = document.createElement("img");
	logo.src = "cuboulder.png";
	
	top.appendChild(logo);
	top.appendChild(h1);

	var form = document.createElement("form");
	form.setAttribute("action", "admin");
	form.setAttribute("method", "post");
	form.setAttribute("onsubmit", "adminSign(event);");
	
	var pass = document.createElement("input");
	pass.setAttribute("type", "password");
	pass.setAttribute("name", "adminsign");
	pass.setAttribute("placeholder", "Enter Admin Password");
	
	var submit = document.createElement("input");
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "Sign In To Admin Area");

	form.appendChild(pass);
	form.appendChild(submit);
	
	main.appendChild(top);
	main.appendChild(document.createElement("br"));
	main.appendChild(form);
}

function display404() {
	var main = document.getElementById('content');
	
	/* top section */
	var top = document.createElement("div");
	top.setAttribute("class","top");
	
	var h1 = document.createElement("h1");
	h1.innerHTML = "Computer Forge @ CU";
	
	var logo = document.createElement("img");
	logo.src = "cuboulder.png";
	
	top.appendChild(logo);
	top.appendChild(h1);
	
	var pagedisplay = document.createElement("div");
	pagedisplay.setAttribute("class", "pagedisplay");
	pagedisplay.setAttribute("id", "pagedisplay");
	
	var h2 = document.createElement("h2");
	h2.innerHTML = "404 Page Not Found";
	
	pagedisplay.appendChild(h2);
	
	/* view error div */
	var viewerror = document.createElement("div");
	viewerror.setAttribute("id", "viewerror");
	viewerror.innerHTML = "Your Screen Is Too Narrow To View The Site";
	
	document.getElementsByTagName("body")[0].appendChild(viewerror);
	
	main.appendChild(top);
	main.appendChild(pagedisplay);
}

/*
	Function: displayLanding
	
	Displays the Landing Page (index page for logged out users).
	
	Parameters:
	
		none
		
	Returns:
	
		nothing - *
*/
function displayLanding(status) {
	
	var main = document.getElementById('content');
	
	/* top section */
	var top = document.createElement("div");
	top.setAttribute("class","top");
	
	var logstat = document.createElement("div");
	logstat.style.display = 'none';
	logstat.setAttribute("id", "logstatus");
	if(status === 'in') { logstat.setAttribute("data-status", "in"); }
	if(status === 'out') { logstat.setAttribute("data-status", "out"); }
	
	var h1 = document.createElement("h1");
	h1.innerHTML = "Computer Forge @ CU";
	
	var logolink = document.createElement("a");
	logolink.setAttribute("href",g_domain);
	
	var logo = document.createElement("img");
	logo.src = "cuboulder.png";
	
	logolink.appendChild(logo);
	
	top.appendChild(logstat);
	top.appendChild(logolink);
	top.appendChild(h1);
	
	var searchform = document.createElement("form");
	searchform.setAttribute("class", "searchform");
	searchform.setAttribute("id", "searchdiv");
	searchform.setAttribute("action", "http://colorado.edu/gsearch/all/");
	searchform.setAttribute("onsubmit", "searchEdu(this);");
	
	var searchfield = document.createElement("input");
	searchfield.setAttribute("type", "text");
	searchfield.setAttribute("class", "searchfield");
	searchfield.setAttribute("name", "searchvalue");
	searchfield.setAttribute("placeholder", "Search this site");
	
	var minitext = document.createElement("p");
	minitext.setAttribute("class", "searchmini");
	minitext.innerHTML = "<strong>CU</strong>: <a href='http://colorado.edu' style='color:white'>Home</a> • <a href='http://colorado.edu/atoz' style='color:white'>A to Z</a> • <a href='http://colorado.edu/campusmap' style='color:white'>Campus Map</a>";
	
	searchform.appendChild(searchfield);
	searchform.appendChild(minitext);

	top.appendChild(searchform);
	
	/* menu section */
	var menu = document.createElement("div");
	menu.setAttribute("class", "menu");
	
	var projbtn = document.createElement("a");
	projbtn.setAttribute("class", "menubtn");
	projbtn.setAttribute("onclick", "displayContent('projects');");
	projbtn.innerHTML = "News & Projects";
	
	var li0 = document.createElement("li");
	li0.appendChild(projbtn);
	
	var aboutbtn = document.createElement("a");
	aboutbtn.setAttribute("class", "menubtn");
	aboutbtn.setAttribute("onclick", "displayContent('aboutus');");
	aboutbtn.innerHTML = "About Us";
	
	var li1 = document.createElement("li");
	li1.appendChild(aboutbtn);
	
	var memberbtn = document.createElement("a");
	memberbtn.setAttribute("class", "menubtn");
	memberbtn.setAttribute("onclick", "displayContent('becomemember');");
	memberbtn.innerHTML = "Become A Member";
	
	var li2 = document.createElement("li");
	li2.appendChild(memberbtn);
	
	var signinbtn = document.createElement("a");
	signinbtn.setAttribute("class", "menubtn");
	signinbtn.setAttribute("onclick", "displayContent('members');");
	signinbtn.innerHTML = "Members Area";
	
	var li3 = document.createElement("li");
	li3.appendChild(signinbtn);
	
	var ulmenu = document.createElement("ul");
	ulmenu.setAttribute("class", "menulist");
	
	ulmenu.appendChild(li0);
	ulmenu.appendChild(li1);
	ulmenu.appendChild(li2);
	ulmenu.appendChild(li3);
	
	menu.appendChild(ulmenu);
	
	/* view error div */
	var viewerror = document.createElement("div");
	viewerror.setAttribute("id", "viewerror");
	viewerror.innerHTML = "Your Screen Is Too Narrow To View The Site";
	
	document.getElementsByTagName("body")[0].appendChild(viewerror);
	
	/* div for different pages */
	
	var pagedisplay = document.createElement("div");
	pagedisplay.setAttribute("class", "pagedisplay");
	pagedisplay.setAttribute("id", "pagedisplay");
	
	/* default landing page is news & projects */
	var projects = getProjects();
	pagedisplay.appendChild(projects);
	
	/* append everything to main */
	main.appendChild(top);
	main.appendChild(menu);
	main.appendChild(pagedisplay);
}

/*
	Function: displayContent
	
	Displays content based on menu button that was clicked.
	
	Parameters:
	
		none
		
	Returns:
	
		nothing - *
*/
function displayContent(tag) {
	
	var pagedisplay = document.getElementsByClassName("pagedisplay")[0];
	
	switch(tag) {
		case "projects":
			var projects = getProjects();
			emptyDiv("pagedisplay");
			pagedisplay.appendChild(projects);
			break;
		case "aboutus":
			var aboutus = getAboutUs();
			emptyDiv("pagedisplay");
			pagedisplay.appendChild(aboutus);
			break;
		case "becomemember":
			var becomemember = getBecomeMember();
			emptyDiv("pagedisplay");
			pagedisplay.appendChild(becomemember);
			break;
		case "members":
			var membersarea = getMembers();
			emptyDiv("pagedisplay");
			pagedisplay.appendChild(membersarea);
			break;
		default:
			break;
	}
}

/*
	Section: AJAX Functions
	These functions send ajax requests
*/

function contact(event) {
	event.preventDefault();
	
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split("/");
	
	url = splitUrl[0] + "//" + splitUrl[2] + "/forge/contact";
	
	/* get the entered username and password */
	var email = document.getElementsByName('emailaddress')[0].value;
	var message = document.getElementsByName('message')[0].value.replace(/&/g, "and");
	
	var textToSend = "From: " + email + " Message: " + message;
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = "message=" + textToSend;
	
	xmlhttp.open("POST", url, true);
	
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == "success") {
		        	alert("You Message Has Been Received! Thank you!");
	        	}
	        	else {
		        	alert("An Unknown Error Occurred. Please Try Again Later.");
	        	}
			}
			else {
				alert("Error:" + xmlhttp.status + ": Please Try Again Later");
			}
        }
    }
	    
	xmlhttp.send(params);
}

function adminSign(event) {
	event.preventDefault();
	
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split("/");
	
	url = splitUrl[0] + "//" + splitUrl[2] + "/forge/adminsign";
	
	/* get the entered username and password */
	var adminsign = document.getElementsByName('adminsign')[0].value;
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = "password=" + adminsign;
	
	xmlhttp.open("POST", url, true);
	
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == "success") {
		        	location.reload();
	        	} else if (xmlhttp.responseText == "incorrect") {
		        	alert("Incorrect Password.");
	        	} else {
		        	alert("An Unknown Error Occurred. Please Try Again Later.");
	        	}
			}
			else {
				alert("Error:" + xmlhttp.status + ": Please Try Again Later");
			}
        }
    }
	    
	xmlhttp.send(params);
}

function userSign(event) {
	event.preventDefault();
	
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split("/");
	
	url = splitUrl[0] + "//" + splitUrl[2] + "/forge/usersign";
	
	/* get the entered username and password */
	var username = document.getElementsByName('username')[0].value;
	var usersign = document.getElementsByName('usersign')[0].value;
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = "username=" + username + "&password=" + usersign;
	
	xmlhttp.open("POST", url, true);
	
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == "success") {
		        	document.getElementById("logstatus").setAttribute('data-status', 'in');
		        	var memberarea = getMemberArea();
		        	emptyDiv("pagedisplay");
		        	document.getElementsByClassName("pagedisplay")[0].appendChild(memberarea);
	        	} else if (xmlhttp.responseText == "incorrect") {
		        	alert("Incorrect Password.");
		        } else if (xmlhttp.responseText == "nouser") {
			        alert("That Member Name Was Not Found.");
	        	} else {
		        	alert("An Unknown Error Occurred. Please Try Again Later.");
	        	}
			}
			else {
				alert("Error:" + xmlhttp.status + ": Please Try Again Later");
			}
        }
    }
	    
	xmlhttp.send(params);
}

function getUserProjects() {
	var promise = new Promise(function(resolve,reject) {
		
		/* create the url destination for the ajax request */
		var url = window.location.href;
		var splitUrl = url.split("/");
		
		url = splitUrl[0] + "//" + splitUrl[2] + "/forge/updateproject";
		
		/* tells the server whats being requested */
		var quest = "getprojects";
		
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		
		var params = "quest=" + quest;
		
		xmlhttp.open("POST", url, true);
		
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
				if(xmlhttp.status == 200) {
		        	if (xmlhttp.responseText == "notlogged") {
			        	alert("You Are Not Logged In.");
			        } else {
			        	resolve(xmlhttp.responseText);
		        	}
				}
				else {
					alert("Error:" + xmlhttp.status + ": Please Try Again Later");
				}
	        }
	    }
		    
		xmlhttp.send(params);

	});
	
	return promise;
}

function createProject() {
	event.preventDefault();
	
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split("/");
	
	url = splitUrl[0] + "//" + splitUrl[2] + "/forge/updateproject";
	
	/* get the entered username and password */
	var projname = document.getElementsByName("project")[0].value.replace(/&/g, "and");
	var address = document.getElementsByName("address")[0].value.replace(/&/g, "and");
	var description = document.getElementsByName("description")[0].value.replace(/&/g, "and");
	
	/* tells the server whats being requested */
	var quest = "newproject";
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = "projectname=" + projname + "&address=" + address + "&description=" + description + "&quest=" + quest;
	
	xmlhttp.open("POST", url, true);
	
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == "success") {
		        	emptyDiv("pagedisplay");
		        	document.getElementById("pagedisplay").appendChild(getMembers());
	        	} else if (xmlhttp.responseText == "notlogged") {
		        	alert("You Are Not Logged In.");
		        } else if (xmlhttp.responseText == "exists") {
			    	alert("That Project Name Already Exists. Please Choose Another.");
			    } else {
		        	alert("An Unknown Error Occurred. Please Try Again Later.");
	        	}
			}
			else {
				alert("Error:" + xmlhttp.status + ": Please Try Again Later");
			}
        }
    }
	    
	xmlhttp.send(params);
}

function updateProject(id) {
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updateproject';
	
	var newName = document.getElementsByClassName(id)[0].value.replace(/&/g, "and");
	var newAddress = document.getElementsByClassName(id)[1].value.replace(/&/g, "and");
	var newDescription = document.getElementsByClassName(id)[2].value.replace(/&/g, "and");
	
	if (newName.length == 0) {
		newName = "noupdate";
	}
	if (newAddress.length == 0) {
		newAddress = "noupdate";
	}
	if (newDescription.length == 0) {
		newDescription = "noupdate";
	}
	
	/* tells the server what is being asked for */
	var quest = "updateproject";
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = 'project=' + id + '&newname=' + newName + '&address=' + newAddress + '&description=' + newDescription + '&quest=' + quest;
	
	xmlhttp.open('POST', url, true);
	
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == 'success') {
		        	emptyDiv("pagedisplay");
		        	document.getElementById("pagedisplay").appendChild(getMembers());
		        	alert('Project Has Been Updated.');
	        	} else {
		        	alert('An Unknown Error Occurred.');
	        	}
			} else {
				alert('Error:' + xmlhttp.status);
			}
        }
    }
	    
	xmlhttp.send(params);
}

function deleteProject(id) {
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updateproject';
	
	/* tells the server what is being asked for */
	var quest = "deleteproject";
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = 'projectname=' + id + '&quest=' + quest;
	
	xmlhttp.open('POST', url, true);
	
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == 'success') {
		        	document.getElementById(id).parentNode.removeChild(document.getElementById(id));
	        	} else {
		        	alert('An Unknown Error Occurred.');
	        	}
			} else {
				alert('Error:' + xmlhttp.status);
			}
        }
    }
	    
	xmlhttp.send(params);
}

function getAllProjects() {
	var promise = new Promise(function(resolve,reject) {
		
		/* create the url destination for the ajax request */
		var url = window.location.href;
		var splitUrl = url.split("/");
		
		url = splitUrl[0] + "//" + splitUrl[2] + "/forge/getprojects";
		
		/* tells the server whats being requested */
		var quest = "getallprojects";
		
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		
		var params = "quest=" + quest;
		
		xmlhttp.open("POST", url, true);
		
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
				if(xmlhttp.status == 200) {
					if(xmlhttp.responseText == 'error') {
						/* on error, just return no projects, empty string */
						console.log("Error Retrieving Project Names");
						resolve("");
					} else {
						resolve(xmlhttp.responseText);
					}
				}
				else {
					alert("Error:" + xmlhttp.status + ": Please Try Again Later");
				}
	        }
	    }
		    
		xmlhttp.send(params);

	});
	
	return promise;
}

function getNews() {
	var promise = new Promise(function(resolve,reject) {
		
		/* create the url destination for the ajax request */
		var url = window.location.href;
		var splitUrl = url.split("/");
		
		url = splitUrl[0] + "//" + splitUrl[2] + "/forge/getnews";
		
		/* tells the server whats being requested */
		var quest = "getnews";
		
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		
		var params = "quest=" + quest;
		
		xmlhttp.open("POST", url, true);
		
		xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		
		xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
				if(xmlhttp.status == 200) {
					if(xmlhttp.responseText == 'error') {
						/* on error, just return no projects, empty string */
						console.log("Error Retrieving News");
						resolve("No current news.");
					} else {
						resolve(xmlhttp.responseText);
					}
				}
				else {
					alert("Error:" + xmlhttp.status + ": Please Try Again Later");
				}
	        }
	    }
		    
		xmlhttp.send(params);

	});
	
	return promise;
}



