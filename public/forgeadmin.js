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
		case "updateadmin":
			var admin = getAdmin();
			emptyDiv("pagedisplay");
			pagedisplay.appendChild(admin);
			getAdminValues().then(function(success) {
				document.getElementsByName("adminemail")[0].placeholder = success;
			}, function(error) { /* none */ });
			break;
		case "updatemembers":
			var members = getMembers();
			emptyDiv("pagedisplay");
			pagedisplay.appendChild(members);
			break;
		case "updateprojects":
			var projects = getProjects();
			emptyDiv("pagedisplay");
			pagedisplay.appendChild(projects);
			break;
		default:
			break;
	}
}

/*
	Function: loadAdmin
	
	Display the admin page
	
	Parameters:
	
		none
		
	Returns:
	
		nothing - *
*/
function loadAdmin() {
	
	var main = document.getElementById('content');
	
	/* top section */
	var top = document.createElement("div");
	top.setAttribute("class","top");
	
	var h1 = document.createElement("h1");
	h1.innerHTML = "Computer Forge @ CU";
	
	var logolink = document.createElement("a");
	logolink.setAttribute("href", "http://128.138.202.115/");
	
	var logo = document.createElement("img");
	logo.src = "cuboulder.png";
	
	logolink.appendChild(logo);
	
	top.appendChild(logolink);
	top.appendChild(h1);
	
	/* menu section */
	var menu = document.createElement("div");
	menu.setAttribute("class", "menu");
	
	var projbtn = document.createElement("a");
	projbtn.setAttribute("class", "menubtn");
	projbtn.setAttribute("onclick", "displayContent('updateadmin');");
	projbtn.innerHTML = "Admin & News";
	
	var li0 = document.createElement("li");
	li0.appendChild(projbtn);
	
	var aboutbtn = document.createElement("a");
	aboutbtn.setAttribute("class", "menubtn");
	aboutbtn.setAttribute("onclick", "displayContent('updatemembers');");
	aboutbtn.innerHTML = "Members";
	
	var li1 = document.createElement("li");
	li1.appendChild(aboutbtn);
	
	var memberbtn = document.createElement("a");
	memberbtn.setAttribute("class", "menubtn");
	memberbtn.setAttribute("onclick", "displayContent('updateprojects');");
	memberbtn.innerHTML = "Projects";
	
	var li2 = document.createElement("li");
	li2.appendChild(memberbtn);
	
	var logoutbtn = document.createElement("a");
	logoutbtn.setAttribute("class", "menubtn logoutbtn");
	logoutbtn.setAttribute("onclick", "logOut();");
	logoutbtn.innerHTML = "Log Out";
	
	var li3 = document.createElement("li");
	li3.appendChild(logoutbtn);
	
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
	
	/* default landing is members page */
	pagedisplay.appendChild(getMembers());
	
	/* append everything to main */
	main.appendChild(top);
	main.appendChild(menu);
	main.appendChild(pagedisplay);
}

function getAdmin() {
	var admin = document.createElement("div");
	
	var h2top = document.createElement("h2");
	h2top.innerHTML = "Change Admin";
	
	var form = document.createElement("form");
	form.setAttribute("action", "updateadmin");
	form.setAttribute("method", "post");
	form.setAttribute("onsubmit", "updateAdmin(event);");
	
	var email = document.createElement("input");
	email.setAttribute("type", "text");
	email.setAttribute("name", "adminemail");
	email.setAttribute("placeholder", "New Admin Email");
	
	var pass = document.createElement("input");
	pass.setAttribute("type", "password");
	pass.setAttribute("name", "adminpassword");
	pass.setAttribute("placeholder", "New Admin Password");
	
	var submit = document.createElement("input");
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "Update Admin Properties");
	
	form.appendChild(email);
	form.appendChild(pass);
	form.appendChild(submit);
	
	var h2bottom = document.createElement("h2");
	h2bottom.innerHTML = "Change News";
	
	var newsform = document.createElement("form");
	newsform.setAttribute("action", "updateadmin");
	newsform.setAttribute("method", "post");
	newsform.setAttribute("onsubmit", "updateNews(event);");
	
	var input = document.createElement("textarea");
	input.setAttribute("name", "news");
	
	var submitnews = document.createElement("input");
	submitnews.setAttribute("type", "submit");
	submitnews.setAttribute("value", "Update News");
	
	newsform.appendChild(input);
	newsform.appendChild(submitnews);
	
	admin.appendChild(h2top);
	admin.appendChild(form);
	admin.appendChild(h2bottom);
	admin.appendChild(newsform);
	
	return admin;
}

function getMembers() {
	var members = document.createElement("div");
	members.setAttribute("id", "memberslist");
	
	var h2top = document.createElement("h2");
	h2top.innerHTML = "Add New Members";
	
	var form = document.createElement("form");
	form.setAttribute("action", "updateadmin");
	form.setAttribute("method", "post");
	form.setAttribute("onsubmit", "createNewMember(event);");
	
	var email = document.createElement("input");
	email.setAttribute("type", "text");
	email.setAttribute("name", "email");
	email.setAttribute("placeholder", "New Member Email");
	
	var pass = document.createElement("input");
	pass.setAttribute("type", "password");
	pass.setAttribute("name", "password");
	pass.setAttribute("placeholder", "New Member Password");
	
	var submit = document.createElement("input");
	submit.setAttribute("type", "submit");
	submit.setAttribute("value", "Create New Member");
	
	form.appendChild(email);
	form.appendChild(pass);
	form.appendChild(submit);
	
	var linebreak = document.createElement("hr");
	
	var h2bottom = document.createElement("h2");
	h2bottom.innerHTML = "Edit Current Members";
	
	members.appendChild(h2top);
	members.appendChild(form);
	members.appendChild(linebreak);
	members.appendChild(h2bottom);
	
	var memberPromise = getMemberList();
	
	memberPromise.then(function(success) {
		
		var memberlist = document.createElement("div");
		
		var memberemails = success.split(",");
		
		var count = memberemails.length;
		
		if(count > 1) {
		
			var memberdiv;
			var input;
			var submit;
			var current;
			
			/* last array spot will be empty, so don't process last spot */
			count -= 1;
			for (let i = 0; i < count; i++) {
				current = memberemails[i];
				
				memberdiv = document.createElement("div");
				memberdiv.setAttribute("id", current);
				
				input = document.createElement("input");
				input.setAttribute("type", "text");
				input.setAttribute("class", current);
				input.setAttribute("placeholder",current);
				
				pass = document.createElement("input");
				pass.setAttribute("type", "password");
				pass.setAttribute("class", current);
				pass.setAttribute("placeholder", "password");
				
				submit = document.createElement("input");
				submit.setAttribute("type", "submit");
				submit.setAttribute("value", "Change Member");
				submit.setAttribute("onclick", "updateMember('" + current + "');");
				
				deleteBtn = document.createElement("input");
				deleteBtn.setAttribute("type", "submit");
				deleteBtn.setAttribute("value", "Delete Member");
				deleteBtn.setAttribute("onclick", "deleteMember('" + current + "');");
				
				memberdiv.appendChild(input);
				memberdiv.appendChild(pass);
				memberdiv.appendChild(submit);
				memberdiv.appendChild(deleteBtn);
				
				memberlist.appendChild(memberdiv);
			}
		}
		
		document.getElementById("memberslist").appendChild(memberlist);
		
	}, function(error) {
		// promise error
	});
	
	return members;
}

function getProjects() {
	var projects = document.createElement("div");
	projects.setAttribute("id", "memberprojects");
	
	var projectdata = getAllProjects();
	
	projectdata.then(function(success) {
		var projectsdisplay = document.getElementById("memberprojects");
		
		var projectdata = JSON.parse(success);
		
		var count = Object.keys(projectdata).length;
		var keys = Object.keys(projectdata);
		keys.sort();
		
		var section;
		var membername;
		var projname;
		var deleteBtn;
		
		var projcount;
		var currentproj;
		
		for(var i = 0; i < count; i++) {
			section = document.createElement("div");
			
			membername = document.createElement("h2");
			membername.innerHTML = keys[i];
			
			section.appendChild(membername);
			
			currentproj = projectdata[keys[i]];
			projcount = currentproj.length;
			
			for(var j = 0; j < projcount; j++) {
				
				projname = document.createElement("input");
				projname.setAttribute("type", "text");
				projname.setAttribute("value", currentproj[j]["name"]);
				projname.readOnly = true;
				
				deleteBtn = document.createElement("input");
				deleteBtn.setAttribute("type", "submit");
				deleteBtn.setAttribute("value", "Delete Project");
				deleteBtn.setAttribute("onclick", "deleteProject('" + keys[i] + "','" + currentproj[j]["name"] + "');");
				
				section.appendChild(projname);
				section.appendChild(deleteBtn);
				
				//projectdata[j]["address"]
				//projectdata[j]["description"]
			}
			projectsdisplay.appendChild(section);
		}
	}, function(error) {
		document.getElementById("memberprojects").innerHTML = "Promise Error";
	});
	
	return projects;
}

/*
	Section: AJAX Functions
	These functions send ajax requests
*/

function createNewMember(event) {
	event.preventDefault();

	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updatemembers';
	
	/* get the entered username and password */
	var email = document.getElementsByName('email')[0].value;
	var password = document.getElementsByName('password')[0].value;
	
	/* make sure the email is a colorado email */
	if(email.indexOf("@colorado.edu") == -1) {
		alert("Please Enter A colorado.edu Email.");
		return;
	}
	/* make sure a password was entered */
	if(password.length < 1) {
		alert("Please Enter A Password.");
		return;
	}
	
	/* tells the server what is being asked for */
	var quest = "newmember";

	if(email.indexOf("&") !== -1 || password.indexOf("&") !== -1) {
		return alert("You cannot use ampersands. Please remove them and try again.");
	}
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = 'email=' + email + '&password=' + password + '&quest=' + quest;
	
	xmlhttp.open('POST', url, true);
	
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == 'success') {
		        	emptyDiv("pagedisplay");
		        	document.getElementById("pagedisplay").appendChild(getMembers());
		        	alert('New Member Added! Congratulations!');
	        	} else if(xmlhttp.responseText == 'exists') {
		        	alert('That Email Already Exists.');
		        } else if (xmlhttp.responseText == 'notlogged') {
			        alert('You Are Not Logged In');
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

function updateMember(id) {	
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updatemembers';
	
	var newEmail = document.getElementsByClassName(id)[0].value;
	var newPassword = document.getElementsByClassName(id)[1].value;
	
	if (newEmail.length == 0) {
		newEmail = "noupdate";
	}
	if (newPassword.length == 0) {
		newPassword = "noupdate";
	}
	
	/* tells the server what is being asked for */
	var quest = "updatemember";
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = 'member=' + id + '&email=' + newEmail + '&password=' + newPassword + '&quest=' + quest;
	
	xmlhttp.open('POST', url, true);
	
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == 'success') {
		        	emptyDiv("pagedisplay");
		        	document.getElementById("pagedisplay").appendChild(getMembers());
		        	alert('Member Has Been Updated.');
	        	} else if (xmlhttp.responseText == 'notlogged') {
			        alert('You Are Not Logged In');
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

function deleteMember(id) {
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updatemembers';
	
	/* tells the server what is being asked for */
	var quest = "deletemember";
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = 'member=' + id + '&quest=' + quest;
	
	xmlhttp.open('POST', url, true);
	
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == 'success') {
		        	document.getElementById(id).parentNode.removeChild(document.getElementById(id));
		        	alert('Member Has Been Deleted.');
	        	} else if (xmlhttp.responseText == 'notlogged') {
			        alert('You Are Not Logged In');
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

function getMemberList() {
	
	var promise = new Promise(function(resolve,reject) {
	
		/* create the url destination for the ajax request */
		var url = window.location.href;
		var splitUrl = url.split('/');
		
		url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updatemembers';
		
		/* tells the server what is being asked for */
		var quest = "getmembers";
		
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		
		var params = 'quest=' + quest;
		
		xmlhttp.open('POST', url, true);
		
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
		xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
				if(xmlhttp.status == 200) {
		        	if(xmlhttp.responseText == 'error') {
			        	alert('An Unknown Error Occurred.');
			        	resolve("");
		        	} else if (xmlhttp.responseText == 'notlogged') {
			        	window.location = splitUrl[0] + '//' + splitUrl[2] + '/forge/';
			        	resolve("");
					} else {
			        	resolve(xmlhttp.responseText);
		        	}
				} else {
					alert('Error:' + xmlhttp.status);
				}
	        }
	    }
		    
		xmlhttp.send(params);
	
	});
	
	return promise;
}

function updateAdmin(event) {
	event.preventDefault();
	
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updateadmin';
	
	/* tells the server what is being asked for */
	var quest = "changeadmin";
	
	var newEmail = document.getElementsByName("adminemail")[0].value;
	var newPassword = document.getElementsByName("adminpassword")[0].value;
	
	if (newEmail.length == 0) {
		newEmail = "noupdate";
	}
	if (newPassword.length == 0) {
		newPassword = "noupdate";
	}
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = 'email=' + newEmail + '&password=' + newPassword + '&quest=' + quest;
	
	xmlhttp.open('POST', url, true);
	
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == 'success') {
		        	alert('Admin Has Been Updated.');
	        	} else if (xmlhttp.responseText == 'notlogged') {
			        alert('You Are Not Logged In');
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

function getAdminValues() {
	
	var promise = new Promise(function(resolve,reject) {
	
		/* create the url destination for the ajax request */
		var url = window.location.href;
		var splitUrl = url.split('/');
		
		url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updateadmin';
		
		/* tells the server what is being asked for */
		var quest = "getadmin";
		
		var xmlhttp;
		xmlhttp = new XMLHttpRequest();
		
		var params = 'quest=' + quest;
		
		xmlhttp.open('POST', url, true);
		
		xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		
		xmlhttp.onreadystatechange = function() {
	        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
				if(xmlhttp.status == 200) {
		        	if(xmlhttp.responseText == 'error') {
			        	alert('An Unknown Error Occurred.');
		        	} else if (xmlhttp.responseText == 'notlogged') {
			        	window.location = splitUrl[0] + '//' + splitUrl[2] + '/forge/';
			        	resolve("");
					} else {
			        	resolve(xmlhttp.responseText);
		        	}
				} else {
					alert('Error:' + xmlhttp.status);
				}
	        }
	    }
		    
		xmlhttp.send(params);
	
	});
	
	return promise;
}

function getAllProjects() {
	var promise = new Promise(function(resolve,reject) {
		
		/* create the url destination for the ajax request */
		var url = window.location.href;
		var splitUrl = url.split("/");
		
		url = splitUrl[0] + "//" + splitUrl[2] + "/forge/updateprojadmin";
		
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

function deleteProject(membername,projname) {
	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updateprojadmin';
	
	/* tells the server what is being asked for */
	var quest = "deleteproject";
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = 'membername=' + membername + '&projectname=' + projname + '&quest=' + quest;
	
	xmlhttp.open('POST', url, true);
	
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == 'success') {
		        	emptyDiv("pagedisplay");
		        	document.getElementById("pagedisplay").appendChild(getProjects());
		        	alert('Project Has Been Deleted.');
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

function updateNews(event) {
	event.preventDefault();

	/* create the url destination for the ajax request */
	var url = window.location.href;
	var splitUrl = url.split('/');
	
	url = splitUrl[0] + '//' + splitUrl[2] + '/forge/updatenews';
	
	/* get the entered username and password */
	var news = document.getElementsByName('news')[0].value.replace(/&/g, "and");
	
	/* tells the server what is being asked for */
	var quest = "changenews";
	
	var xmlhttp;
	xmlhttp = new XMLHttpRequest();
	
	var params = 'news=' + news + '&quest=' + quest;
	
	xmlhttp.open('POST', url, true);
	
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	
	xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if(xmlhttp.status == 200) {
	        	if(xmlhttp.responseText == 'success') {
		        	alert('News Updated!');
	        	} else if (xmlhttp.responseText == 'notlogged') {
		        	alert('You Are Not Logged In');
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


