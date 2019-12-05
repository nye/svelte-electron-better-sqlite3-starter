let handlers = {};

handlers['test'] = async () => {
	return 'success';
}

handlers['get-user'] = async ({ db, user_id }) => {
	const row = db.prepare('SELECT * FROM user WHERE id=?').get(user_id);

  	return row;
}

module.exports = handlers;
