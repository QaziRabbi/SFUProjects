const { BrowserWindow } = require('electron')
const electron = require('electron')
const app = electron.app
var path = require('path')

//
const BrowerWindow = electron.BrowserWindow

//when the app is ready it will create the window
app.on('ready', function () {
    //lets create our first window
    let loginWindow = new BrowserWindow({
        //our window size
        width: 300,
        height: 600,
        maxHeight: 600,
        maxWidth: 600,

        //web preference
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),




        }

    })
    //lets create html and html file
    //lets load the html
    loginWindow.loadURL('file://' + __dirname + '/html/login.html')

    //when the html loaded and the window  is ready to show 
    loginWindow.once('ready-to-show', function () {
        loginWindow.show()
    })
})

//quit when all window are closed
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()

})