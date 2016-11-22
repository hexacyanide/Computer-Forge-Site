/*
	Section: Forge

	This is the server for CU Computer Forge
*/

/* 
	Section: Modules

	These are the modules xample uses

	forgeback - imports the functions that handle url requests
	express - used to start a server and page routing
	session - used with express to add sessions for users
	busboy - used to parse media data (file uploads)
*/

var page = require('./forgeback.js');
var express = require('express');
var session = require('express-session');
var busboy = require('connect-busboy');
var favicon = require('serve-favicon');

/*
	Section: Server Exit
	These functions handle uncaught errors and program exit procedure
*/

/* prevents node from exiting on error */
process.on('uncaughtException', function (err) {
  console.log('666 Caught Exception: ' + err);
});

/* ensures stdin continues after uncaught exception */
process.stdin.resume();

/*
	Function: exitHandler
	Used to run code when the program exits. Called on SIGINT (ctrl^c)
	
	Parameters:
	
		none
	
	Returns:
	
		nothing - *
*/
function exitHandler() {
	console.log('\nClean up routine complete.');
    process.exit();
}

/* calls exitHandler() on SIGINT, ctrl^c */
process.on('SIGINT', exitHandler);

/*
	Section: Create Server
	These functions create a server, set it up, and route url addresses. An asterisks indicates that a get link may follow.
	
	index - start
*/

/* create express server */
app = express();

/* remove from http headers */
app.disable('x-powered-by');

/* set up static files */
app.use(express.static('public'));

/* set the favicon location */
app.use(favicon(__dirname + '/public/favicon.ico'));

/* set up sessions */
app.use(session({
	secret: 'd*XDjjJlHq6I9v',
	resave: false,
    saveUninitialized: false
}));

/* set up busboy */
app.use(busboy());

/* routes */
app.get('/',page.start);
app.post('/contact',page.contact);
app.post('/getnews',page.getnews);
app.post('/getprojects',page.getprojects);
app.post('/usersign',page.usersign);
app.post('/updateproject',page.updateproject);

app.get('/admin',page.admin);
app.post('/adminsign',page.adminsign);
app.post('/updateadmin',page.updateadmin);
app.post('/updatemembers',page.updatemembers);
app.post('/updateprojadmin',page.updateprojadmin);
app.post('/updatenews',page.updatenews);

app.get('/logout',page.logout);

app.all('*',page.notfound);

/* activate the server */
app.listen(8080);

