const { ipcMain: ipc } = require('electron-better-ipc');
const mode = process.env.NODE_ENV;

exports.comunicateWithRenderer = () => {
	const db = require('better-sqlite3')('database.db', {verbose: mode === 'development' ? console.log : false});

	/**
	 * Get User by id
	 */
	ipc.answerRenderer('get-user', async user_id => {
		const row = db.prepare('SELECT * FROM user WHERE id=?').get(user_id);

		return row;
	});
};
