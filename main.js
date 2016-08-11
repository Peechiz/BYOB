'use strict'

const electron = require( 'electron' );
const { app, BrowserWindow } = electron;
const ipcMain = require( 'electron' ).ipcMain;

console.log( "main here yo!" );

app.on( 'ready', () => {
    let win = new BrowserWindow( { width: 1500, height: 800 } );
    win.loadURL( `file://${__dirname}/index.html` );
    //  win.loadURL( 'http://ec2-52-35-89-81.us-west-2.compute.amazonaws.com:9001/' )
    win.openDevTools();
    //  console.log( require.resolve( 'electron' ) )

    let contents = win.webContents
        //  console.log( contents )


    win.on( 'closed', () => {
        console.log( "closing" );
        win = null;
    } );
} );


let onlineStatusWindow

app.on( 'ready', () => {
    onlineStatusWindow = new BrowserWindow( { width: 0, height: 0, show: false } )
    onlineStatusWindow.loadURL( `file://${__dirname}/online-status.html` )
} )

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
