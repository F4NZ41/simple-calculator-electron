const { app, BrowserWindow, Menu } = require('electron')

const menu1 = new Menu

function createWindow () {
    const win = new BrowserWindow({
        width: 400,
        height: 575,
        autoHideMenuBar: true,
        useContentSize: true,
        resizable: false,
        alwaysOnTop: true,
        hasShadow: false,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
