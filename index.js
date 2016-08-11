const remote = require( 'electron' ).remote;
// const remote = require( 'ipc' );
const main = remote.require( './main.js' );


var ipc = require( 'ipc' );


let button = document.createElement( 'button' )

button.addEventListener( 'click', () => {
    main.openWindow();
}, false )

button.textContent = 'open window';
document.body.appendChild( button );
