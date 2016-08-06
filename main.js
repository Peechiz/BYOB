'use strict'

const electron = require( 'electron' );
const { app, BrowserWindow } = electron;

app.on( 'ready', () => {
    let win = new BrowserWindow( { width: 900, height: 800 } );
    win.loadURL( `file://${__dirname}/index.html` );
    win.openDevTools();

} )

exports.openWindow = () => {
    let win = new BrowserWindow( { width: 400, height: 200, backgroundColor: '#2e2c29' } )
    win.loadURL( `file://${__dirname}/public/partials/profile.html` );
    win.openDevTools();
}
