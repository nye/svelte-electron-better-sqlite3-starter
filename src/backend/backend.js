let backendHandlers = require('./backend-handlers');
let ipc = require('./backend-ipc');

let isDev, version;

if(process.argv[2] === '--subprocess'){
  	isDev = false;
  	version = process.argv[3];

	let socketName = process.argv[4];
	let dbPath = process.argv[5];

	let db = require('better-sqlite3')(dbPath + '/database.db');

  	ipc.init(socketName, backendHandlers, db);
}else{
	let { ipcRenderer, remote } = require('electron');
	let db = require('better-sqlite3')(__dirname + '/../../database.db', {verbose: console.log});

  	isDev = true;
  	version = remote.app.getVersion();

  	ipcRenderer.on('set-socket', (event, { name }) => {
    	ipc.init(name, backendHandlers, db);
  	});
}

console.log(version, isDev);
