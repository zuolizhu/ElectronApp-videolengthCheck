const electron = require('electron');

//To create a new browser window and show content to user
const { app, BrowserWindow } = electron;

app.on('ready', () => {
  new BrowserWindow({});
});
