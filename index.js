const electron = require('electron');
const ffmpeg = require('fluent-ffmpeg');

//To create a new browser window and show content to user
const { app, BrowserWindow, ipcMain } = electron;

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

//listen to the event videoSubmited
//then callback function to excute whenever
//the videoSubmited received from main window
ipcMain.on('videoSubmited', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    console.log('video length is : ', metadata.format.duration);
  });
});
