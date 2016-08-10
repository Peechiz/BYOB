const remote = require( 'electron' ).remote;
const main = remote.require( './main.js' );

let button = document.createElement( 'button' )

button.addEventListener( 'click', () => {
    main.openWindow();
}, false )

button.textContent = 'open window';
document.body.appendChild( button )
