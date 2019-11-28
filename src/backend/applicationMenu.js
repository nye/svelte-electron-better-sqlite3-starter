const { app, Menu } = require('electron');
const mode = process.env.NODE_ENV;

exports.setupApplicationMenu = (mainWindow) => {
	const menu = [{
		label: app.name,
		role: 'appMenu'
	}, {
		label: 'File',
		role: 'fileMenu'
	}, {
		label: 'Edit',
		role: 'editMenu'
	}, {
		label: 'View',
		submenu: [{
			label: 'Toggle Developer Tools',
			role: 'toggleDevTools',
			visible: mode === 'development'
		}, {
			type: 'separator',
			visible: mode === 'development'
		}, {
			label: 'Actual Size',
			role: 'resetZoom'
		}, {
			label: 'Zoom In',
			role: 'zoomIn'
		}, {
			label: 'Zoom Out',
			role: 'zoomOut'
		}, {
			type: 'separator'
		}, {
			label: 'Toggle Full Screen',
			role: 'togglefullscreen'
		}]
	}, {
		label: 'Window',
		role: 'windowMenu'
	}];

	if (process.platform === 'darwin') {
		Menu.setApplicationMenu(Menu.buildFromTemplate(menu));
	}
};
