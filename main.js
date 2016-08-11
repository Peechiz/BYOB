'use strict'

const electron = require( 'electron' );
const { app, BrowserWindow, Tray } = electron;
const ipcMain = require( 'electron' ).ipcMain;

console.log( "main here yo!" );

app.on( 'ready', () => {
    let win = new BrowserWindow( { width: 900, height: 800 } );
    win.loadURL( `file://${__dirname}/index.html` );
    win.openDevTools();
    //  console.log( require.resolve( 'electron' ) )

    let contents = win.webContents
        //  console.log( contents )



    win.on( 'closed', () => {
        console.log( "closing" );
        win = null;
    } );
} );

app.on( 'login', ( event, webContents, request, authInfo, callback ) => {
    event.preventDefault()
    callback( 'username', 'secret' )
    console.log( "login" );
} );


exports.openWindow = () => {
    let win = new BrowserWindow( { width: 900, height: 800 } )
    win.loadURL( `file://${__dirname}/public/profile.html` );
    win.openDevTools();

};
