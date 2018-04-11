var express = require('express'),
    app = express();


function ensureLoggedIn(test){ return {};}

app.get('/', (req, res) => res.send('Ola Mundo') );

app.get('/account',
	//ensureLoggedIn('/login'),
	(req, res) => {
		res.send(`	<html>
					  	<body>
							Ola ${req.user.username}. <br/>
							<a href="/logout">Logout</a>
						</body>
					</html>`);
	});

app.get('/login',
	(req, res) => {
		res.send(`	<html>
					  	<body>
							<a href="/auth/twitter">Login with twitter</a>
						</body>
					</html>`);
	});

var server = app.listen(3000);
console.log('Servidor Express iniciado na porta %s',server.address().port);