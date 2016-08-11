'use strict'

const electron = require( 'electron' );
const { app, BrowserWindow } = electron;
const ipcMain = require( 'electron' ).ipcMain;

console.log( "main here yo!" );

app.on( 'ready', () => {
    let win = new BrowserWindow( { width: 900, height: 800 } );
    win.loadURL( `file://${__dirname}/index.html` );
    win.openDevTools();
    webPreferences: {
        nodeIntegration: false
    }


    win.on( 'closed', function () {
        console.log( "closing" );
        win = null;
    } );
} );



exports.openWindow = () => {
    let win = new BrowserWindow( { width: 900, height: 800 } )
    win.loadURL( `file://${__dirname}/public/profile.html` );
    win.openDevTools();

};
