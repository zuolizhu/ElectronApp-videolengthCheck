const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

//To create a new browser window and show content to user
const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

//listen to the event videoSubmited
//then callback function to excute whenever
//the videoSubmited received from main window

//then send processed information back to main window
ipcMain.on('videoSubmited', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    mainWindow.webContents.send('videoMetadata',
     metadata.format.duration);
  });
});
