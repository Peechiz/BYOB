const remote = require( 'electron' ).remote;
const main = remote.require( './main.js' );
// const { app, BrowserWindow } = electron;
const { ipcRenderer } = require( 'electron' )


let button = document.createElement( 'button' )

button.addEventListener( 'click', () => {
    main.openWindow();
}, false )

button.textContent = 'open window';
document.body.appendChild( button )
