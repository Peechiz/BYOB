'use strict'

const electron = require( 'electron' );

const { app, BrowserWindow } = electron;

app.on( 'ready', () => {
    let win = new BrowserWindow( { width: 900, height: 800 } );
    win.loadURL( `file://${__dirname}/public/index.html` );
    //  win.openDevTools();
} );


exports.openWindow = () => {
    let win = new BrowserWindow( { width: 900, height: 800 } )
    win.loadURL( `file://${__dirname}/public/profile.html` );
    //  win.openDevTools();
}
