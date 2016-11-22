/*
	Title: Page
	This is the back-end for CU Computer Forge
*/

"use strict";

String.prototype.escapeForJSON = function() {
    return	this.replace(/"/g, "'");
};

/*
	Section: Globals
	These are the global variables.
	
	none
*/



/*
	Section: Helper Functions
	These are functions that are either used in several routes or are just separated for clarity
*/	

/*
	Function: loadPage
	
	This is used to load a page. It writes the <head> to the response which includes all library links. Then it writes the parameter "script" which is a javascript function on the front-end that should create the page. It finally writes some ending tags using response.end() to send the response.
	
	Parameters:
	
		response - the http response
		script - the front-end javascript function, it needs to have <script> tags
	
	Returns:
	
		nothing - *
*/
function loadPage(request,response,script) {
	
	/* define the library & style links here */
	var headstart = "<!DOCTYPE html><html><head><meta charset='utf-8'>";
	var viewport = "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
	var forgejs = "<script src='http://" + request.headers.host + "/forge/forgefront.js'></script>";
	var forgecss = "<link rel='stylesheet' href='http://" + request.headers.host + "/forge/forgestyle.css'>";
	var headend = "<title>CU Computer Forge | CU Boulder</title></head>";
	var body = "<body><div id='content'></div>";
	
	/* write the <head> */
	response.write(headstart + viewport + forgejs + forgecss + headend + body);

	/* write the <script> */
	response.write(script);
	
	var footer = `
				<footer>
					<div id='footer'> 
						<div class='col-60' style="background:black;padding-bottom:20px;">
							<a href='http://128.138.202.115/forge/'><strong>Computer Forge @ CU</strong></a><br><br>
							University of Colorado Boulder<br>
							1111 Engineering Drive<br>
							422 UCB<br>
							Boulder, CO 80309-0422<br>
						</div>
						<div class='col-40' style="background:black;padding-bottom:20px;">
							<a href='http://www.colorado.edu'><img height='46px' src='http://128.138.202.115/forge/be-boulder-white.png'></a><br><br>
							<a href='http://www.colorado.edu'><strong>University of Colorado Boulder</strong></a><br><div class="sp"></div>
							© Regents of the University of Colorado<br><div class="sp"></div>
							<a href='http://www.colorado.edu/about/privacy-statement'>Privacy</a> • <a href='http://www.colorado.edu/about/legal-trademarks'>Legal & Trademarks</a>
						</div>
					</div>
				</footer>
			</body>
		</html>`;

	/* close tags & send the http response */
	response.end(footer);
}

/*
	Function: loadAdmin
	
	Loads the admin page into the response. Works like loadPage except loading script is predefined & front-end js loaded is different.
	
	Parameters:
	
		response - the http response
	
	Returns:
	
		nothing - *
*/
function loadAdmin(request,response) {
	
	/* define the library & style links here */
	var headstart = "<!DOCTYPE html><html><head><meta charset='utf-8'>";
	var viewport = "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
	var adminjs = "<script src='http://" + request.headers.host + "/forge/forgeadmin.js'></script>";
	var forgecss = "<link rel='stylesheet' href='http://" + request.headers.host + "/forge/forgestyle.css'>";
	var headend = "<title>CU Computer Forge</title></head>";
	var body = "<body><div id='content'></div>";
	
	/* write the <head> */
	response.write(headstart + viewport + adminjs + forgecss + adminjs + headend + body);

	var adminpage = "<script>loadAdmin();</script>";

	/* write the <script> */
	response.write(adminpage);
	
	var footer = `
				<footer>
					<div id='footer'> 
						<div class='col-60' style="background:black;padding-bottom:20px;">
							<a href='http://128.138.202.115/forge/'><strong>Computer Forge @ CU</strong></a><br><br>
							University of Colorado Boulder<br>
							1111 Engineering Drive<br>
							422 UCB<br>
							Boulder, CO 80309-0422<br>
						</div>
						<div class='col-40' style="background:black;padding-bottom:20px;">
							<a href='http://www.colorado.edu'><img height='46px' src='http://128.138.202.115/forge/be-boulder-white.png'></a><br><br>
							<a href='http://www.colorado.edu'><strong>University of Colorado Boulder</strong></a><br><div class="sp"></div>
							© Regents of the University of Colorado<br><div class="sp"></div>
							<a href='http://www.colorado.edu/about/privacy-statement'>Privacy</a> • <a href='http://www.colorado.edu/about/legal-trademarks'>Legal & Trademarks</a>
						</div>
					</div>
				</footer>
			</body>
		</html>`;

	/* close tags & send the http response */
	response.end(footer);
}

function loadAdminLogIn(request,response) {
	
	/* define the library & style links here */
	var headstart = "<!DOCTYPE html><html><head><meta charset='utf-8'>";
	var viewport = "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
	var forgejs = "<script src='http://" + request.headers.host + "/forge/forgefront.js'></script>";
	var forgecss = "<link rel='stylesheet' href='http://" + request.headers.host + "/forge/forgestyle.css'>";
	var headend = "<title>CU Computer Forge</title></head>";
	var body = "<body><div id='content'></div>";
	
	/* write the <head> */
	response.write(headstart + viewport + forgejs + forgecss + headend + body);

	/* write the <script> */
	response.write("<script>displayAdminLogIn();</script>");

	var footer = `
				<footer>
					<div id='footer'> 
						<div class='col-60' style="background:black;padding-bottom:20px;">
							<a href='http://128.138.202.115/forge/'><strong>Computer Forge @ CU</strong></a><br><br>
							University of Colorado Boulder<br>
							1111 Engineering Drive<br>
							422 UCB<br>
							Boulder, CO 80309-0422<br>
						</div>
						<div class='col-40' style="background:black;padding-bottom:20px;">
							<a href='http://www.colorado.edu'><img height='46px' src='http://128.138.202.115/forge/be-boulder-white.png'></a><br><br>
							<a href='http://www.colorado.edu'><strong>University of Colorado Boulder</strong></a><br><div class="sp"></div>
							© Regents of the University of Colorado<br><div class="sp"></div>
							<a href='http://www.colorado.edu/about/privacy-statement'>Privacy</a> • <a href='http://www.colorado.edu/about/legal-trademarks'>Legal & Trademarks</a>
						</div>
					</div>
				</footer>
			</body>
		</html>`;

	/* close tags & send the http response */
	response.end(footer);
}

/*
	Section: Page Functions
	These functions are exported to the server (xample.js), page requests route to these functions.
*/
module.exports = {
	
/*
	Function: notfound
	
	Page 404, page not found response.
	
	Parameters:
	
		request - http request
		response - http response
	
	Returns:
	
		nothing - *
*/		
notfound: function(request,response) {
	// replace this with loadpage() that loads a 404 page not found template */
	loadPage(request,response,"<script>display404();</script>");
},

/*
	Function: start
	
	Page Index, detects if session exists and either loads landing or user's home page.
	
	Parameters:
	
		request - http request
		response - http response
	
	Returns:
	
		nothing - *
*/		
start: function(request,response) {
	if(typeof request.session.username !== 'undefined') {
		loadPage(request,response,"<script>displayLanding('in');</script>");
	} else {
		loadPage(request,response,"<script>displayLanding('out');</script>");
	}
},

contact: function(request,response) {
	var qs = require('querystring');
	var fs = require('fs');
	var nodemailer = require('nodemailer');
	
	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {
        var POST =  qs.parse(body);

        /* change info as needed */
        var message = POST.message;
        
        fs.readFile('admin.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}
			
			/* get the file data as json object */
			var adminFile = JSON.parse(data);
			var email = adminFile["email"];
        
	        /* set up email */
			var mailOptions = {
			    from: '"CUCF Site" <cucomputerforge@gmail.com>',
			    to: email,
			    subject: 'CU Computer Forge Website-Contact',
			    text: message
			};
			
			var transporter = nodemailer.createTransport('smtps://cucomputerforge%40gmail.com:forgebuffs@422@smtp.gmail.com');
			
			transporter.verify(function(error, success) {
				if(error) {
					console.log(error);
			    	response.end("error");
				} else {
					/* send email */
					transporter.sendMail(mailOptions, function(error, info) {
						if(error) {
							console.log(error);
							response.end("error");
						} else {
							response.end("success");
						}
					});
				}
			});
		});
	});
},

getnews: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {
	    
	    var adminFile;
		fs.readFile('admin.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}
			
			/* get the file data as json object */
			adminFile = JSON.parse(data);

			/* get the post data */
			var POST =  qs.parse(body);

	        /* change info as needed */
	        var quest = POST.quest;
	        
	        switch(quest) {
		        case "getnews":
					response.end(adminFile["news"]);
		        	break;
		        default:
		        	reponse.end("error");
		        	break;
	        }
	    });
	});
},

getprojects: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}
	
	/* if user is logged out, return nothing, no project */
	///if(typeof request.session.username === 'undefined') { response.end(""); return; }

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {
	    
	    var projectsFile;
		fs.readFile('projects.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}
			
			/* get the file data as json object */
			projectsFile = JSON.parse(data);

			/* get the post data */
			var POST =  qs.parse(body);

	        /* change info as needed */
	        var quest = POST.quest;
	        
	        switch(quest) {
		        case "getallprojects":
					response.end(JSON.stringify(projectsFile));
		        	break;
		        default:
		        	break;
	        }
	    });
	});
},

usersign: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {

		/* get the post data */
		var POST =  qs.parse(body);

	    var userFile;
		fs.readFile('members.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}

			/* get the file data as json object */
			userFile = JSON.parse(data);
			
			if(userFile.hasOwnProperty(POST.username)) {
				if(ps.verify(POST.password,userFile[POST.username])) {
					request.session.username = POST.username;
					response.end("success");
				} else {
					response.end("incorrect");
				}
			} else {
				response.end("nouser");
			}
		});
	});
},

updateproject: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	/* do nothing if user is logged out */
	if(typeof request.session.username === 'undefined') { response.end("notlogged"); return; }

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {
	    
	    var projectsFile;
		fs.readFile('projects.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}
			
			/* get the file data as json object */
			projectsFile = JSON.parse(data);

			/* get the post data */
			var POST =  qs.parse(body);

	        /* change info as needed */
	        var quest = POST.quest;
	
			switch(quest) {
				case "newproject":
					// this needs to search for an existing project name and reject if existing		
					var projectdata = {};
					projectdata["name"] = POST.projectname.escapeForJSON();
					projectdata["address"] = POST.address.escapeForJSON();
					projectdata["description"] = POST.description.escapeForJSON();
					
					/* add project to json array or create new array for project */
					if(projectsFile.hasOwnProperty(request.session.username)) {
						/* check for existing project name */
						var keys = Object.keys(projectsFile[request.session.username]);
						var count = keys.length;
						var valid = true;
						for (var i = 0; i < count; i++) {
							if(projectsFile[request.session.username][i]["name"] == projectdata["name"]) {
								response.end("exists");
								return;
							}
						}
						/* name doesn't exist yet, it's okay to create it */
						projectsFile[request.session.username].push(projectdata);
					} else {
						var projectarray = [];
						projectarray.push(projectdata);
						projectsFile[request.session.username] = projectarray;
					}
					
					fs.writeFile("projects.json", JSON.stringify(projectsFile), function(err) {
					    if(err) {
						    response.end("error");
					        return;
					    }
					    response.end("success");
					});
					break;
				case "getprojects":
				
					/* check if user has projects */
					if(projectsFile.hasOwnProperty(request.session.username)) {
						var memberProjects = projectsFile[request.session.username];
						response.end(JSON.stringify(memberProjects));
					} else {
						response.end("");
					}
					break;
				case "updateproject":
					var projname = POST.project;
					var newname = POST.newname;
					var address = POST.address;
					var description = POST.description;
					
					var memberProjects = projectsFile[request.session.username];
					var count = memberProjects.length;
					var k = 0;
					if(count >= 0) {
						for(let i = 0; i < count; i++) {
							if(memberProjects[i]["name"] == projname) {
								k = i;
								break;
							}
						}
					}
					
					if (newname != "noupdate") {
						memberProjects[k]["name"] = newname;
					}
					if (address != "noupdate") {
						memberProjects[k]["address"] = address;
					}
					if (description != "noupdate") {
						memberProjects[k]["description"] = description;
					}
					
					projectsFile[request.session.username] = memberProjects;
					fs.writeFile("projects.json", JSON.stringify(projectsFile), function(err) {
					    if(err) {
						    response.end("error");
					        return;
					    }
					    response.end("success");
					});
					break;
				case "deleteproject":
					var projname = POST.projectname;
					var memberProjects = projectsFile[request.session.username];
					var count = memberProjects.length;
					if(count >= 2) {
						for(let i = 0; i < count; i++) {
							if(memberProjects[i]["name"] == projname) {
								memberProjects.splice(i, 1);
								break;
							}
						}
						projectsFile[request.session.username] = memberProjects;
					} else if (count == 1) {
						/* in this situation, this must be the only project, so remove it by removing the member from this file */
						delete projectsFile[request.session.username];
					}
					fs.writeFile("projects.json", JSON.stringify(projectsFile), function(err) {
					    if(err) {
						    response.end("error");
					        return;
					    }
					    response.end("success");
					});
					break;
				default:
					break;
			}
		});

    });
},

admin: function(request,response) {

	if(typeof request.session.admin !== 'undefined' && request.session.admin == "true") {
		loadAdmin(request,response);
	} else {
		loadAdminLogIn(request,response);
	}

},

adminsign: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {

		/* get the post data */
		var POST =  qs.parse(body);

	    var adminFile;
		fs.readFile('admin.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}

			/* get the file data as json object */
			adminFile = JSON.parse(data);

			if(ps.verify(POST.password,adminFile["password"])) {
				request.session.admin = "true";
				response.end("success");
			} else {
				response.end("incorrect");
			}
		});
	});
},

logout: function(request,response) {
	request.session.destroy();
	
	response.end("<script>window.location = 'http://" + request.headers.host + "/forge/';</script>");
},

updatemembers: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}
	
	/* do nothing if user is logged out */
	if(typeof request.session.admin === 'undefined') { response.end("notlogged"); return; }

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {
	    
	    var membersFile;
		fs.readFile('members.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}
			
			/* get the file data as json object */
			membersFile = JSON.parse(data);

			/* get the post data */
			var POST =  qs.parse(body);

	        /* change info as needed */
	        var quest = POST.quest;
	
			switch(quest) {
				case "newmember":
					var email = POST.email;
					var password = POST.password;
					if(!membersFile.hasOwnProperty(email)) {
						membersFile[email] = ps.generate(POST.password);
						fs.writeFile("members.json", JSON.stringify(membersFile), function(err) {
						    if(err) {
							    response.end("error");
						        return;
						    }
						    response.end("success");
						});
					} else {
						response.end("exists");
					}
					break;
				case "getmembers":
					/* i didn't know you could pass JSON using parse() & stringify() at the time, but this works, so I'm keeping it */
					var memberEmails = "";
					var count = Object.keys(membersFile).length;
					var keys = Object.keys(membersFile);
					keys.sort();
					if(count >= 0) {
						for(let i = 0; i < count; i++) {
							memberEmails += keys[i] + ",";
						}
					}
					response.end(memberEmails);
					break;
				case "updatemember":
					var member = POST.member;
					var email = POST.email;
					var password = POST.password;
					
					if (password != "noupdate") {
						membersFile[member] = ps.generate(password);
					}
					if (email != "noupdate") {
						membersFile[email] = membersFile[member];
						delete membersFile[member];
					}
					fs.writeFile("members.json", JSON.stringify(membersFile), function(err) {
					    if(err) {
						    response.end("error");
					        return;
					    }
					    response.end("success");
					});
					break;
				case "deletemember":
					/* delete member from member json */
					delete membersFile[POST.member];
					fs.writeFile("members.json", JSON.stringify(membersFile), function(err) {
					    if(err) {
						    response.end("error");
					        return;
					    }
					});
					
					/* now delete member from projects json */
					var projectsFile;
					fs.readFile('projects.json', 'utf8', function (err, data) {
						if (err) {
							console.log(err);
							response.end("error");
							return;
						}
			
						/* get the file data as json object */
						projectsFile = JSON.parse(data);
						delete projectsFile[POST.member];
						fs.writeFile("projects.json", JSON.stringify(projectsFile), function(err) {
						    if(err) {
							    response.end("error");
						        return;
						    }
						    response.end("success");
						});
					});
					break;
				default:
					break;
			}
		});

    });
},

updateadmin: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}
	
	/* do nothing if user is logged out */
	if(typeof request.session.admin === 'undefined') { response.end("notlogged"); return; }

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {

	    var adminFile;
		fs.readFile('admin.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}

			/* get the file data as json object */
			adminFile = JSON.parse(data);

			/* get the post data */
			var POST =  qs.parse(body);

			var quest = POST.quest;
			
			switch(quest) {
				case "getadmin":
					response.end(adminFile["email"]);
					break;
				case "changeadmin":
					var email = POST.email;
					var password = POST.password;
		
					if (password != "noupdate") {
						adminFile["password"] = ps.generate(password);
					}
					if (email != "noupdate") {
						adminFile["email"] = email;
					}
		
					fs.writeFile("admin.json", JSON.stringify(adminFile), function(err) {
					    if(err) {
						    response.end("error");
					        return;
					    }
					    response.end("success");
					});
					break;
				default:
					break;
			}
		});
	});	
},

updateprojadmin: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	/* do nothing if user is logged out */
	if(typeof request.session.admin === 'undefined') { response.end("notlogged"); return; }

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {
	    
	    var projectsFile;
		fs.readFile('projects.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}
			
			/* get the file data as json object */
			projectsFile = JSON.parse(data);

			/* get the post data */
			var POST =  qs.parse(body);

	        /* change info as needed */
	        var quest = POST.quest;
	        
	        switch(quest) {
		        case "getallprojects":
					response.end(JSON.stringify(projectsFile));
		        	break;
		        case "deleteproject":
		        	var membername = POST.membername;
		        	var projname = POST.projectname;
		        	
					var memberProjects = projectsFile[membername];
					var count = memberProjects.length;
					if(count >= 2) {
						for(let i = 0; i < count; i++) {
							if(memberProjects[i]["name"] == projname) {
								memberProjects.splice(i, 1);
								break;
							}
						}
						projectsFile[request.session.username] = memberProjects;
					} else if (count == 1) {
						/* in this situation, this must be the only project, so remove it by removing the member from this file */
						delete projectsFile[request.session.username];
					}
					fs.writeFile("projects.json", JSON.stringify(projectsFile), function(err) {
					    if(err) {
						    response.end("error");
					        return;
					    }
					    response.end("success");
					});
		        	break;
		        default:
		        	break;
	        }
	    });
	});
},

updatenews: function(request,response) {
	var qs = require('querystring');
	var ps = require('password-hash');
	var fs = require('fs');

	/* do nothing if user is logged out */
	if(typeof request.session.admin === 'undefined') { response.end("notlogged"); return; }

	var body = '';

    /* when the request gets data, append it to the body string */
    request.on('data', function (data) {
        body += data;
    });

    /* prevent overload attacks */
    if (body.length > 1e5) {
		request.connection.destroy();
		console.log('Overload Attack!');
	}

    /* when the request ends, parse the POST data, & process the sql queries */
    request.on('end',function() {
	    
	    var adminFile;
		fs.readFile('admin.json', 'utf8', function (err, data) {
			if (err) {
				console.log(err);
				response.end("error");
				return;
			}
			
			/* get the file data as json object */
			adminFile = JSON.parse(data);

			/* get the post data */
			var POST =  qs.parse(body);

	        /* change info as needed */
	        var quest = POST.quest;
	        
	        if(quest == "changenews") {
		        adminFile["news"] = POST.news.escapeForJSON();
				fs.writeFile("admin.json", JSON.stringify(adminFile), function(err) {
				    if(err) {
					    response.end("error");
				        return;
				    }
				    response.end("success");
				});
	        } else {
		        response.end("error");
	        }
	    });
	});
}

}

