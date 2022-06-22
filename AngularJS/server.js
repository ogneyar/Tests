var express = require('express');
var	port = process.env.PORT || 8000;
	
express().use(express.static('dist'))
    .get('*', (req, res) => res.sendFile(__dirname + '/dist/index.html'))
    .listen(port, () => console.log(`Starting server. Listening on ${ port }`));
