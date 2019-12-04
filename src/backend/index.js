const { app } = require('electron');
const { ipcMain: ipc } = require('electron-better-ipc');
const mode = process.env.NODE_ENV;

exports.comunicateWithRenderer = () => {
	let db;

	if(mode === 'development'){
		db = require('better-sqlite3')('database.db', {verbose: console.log});
	}else{
		db = require('better-sqlite3')(app.getPath('userData') + '/database.db');
	}

	/**
	 * Get User by id
	 */
	ipc.answerRenderer('get-user', async user_id => {
		const row = db.prepare('SELECT * FROM user WHERE id=?').get(user_id);

		return row;
	});
};
